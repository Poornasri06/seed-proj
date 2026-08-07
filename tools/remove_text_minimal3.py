import cv2
import numpy as np
import sys

def remove_text_minimal3(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print('ERROR: cannot read', input_path)
        return 1
    h, w = img.shape[:2]
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    H = hsv[:, :, 0]
    S = hsv[:, :, 1]
    V = hsv[:, :, 2]
    # color mask
    mask_green = (H >= 40) & (H <= 85) & (S > 80) & (V > 80)
    mask_white = (V > 200) & (S < 80)
    color_mask = (mask_green | mask_white).astype('uint8') * 255

    # restrict to top-left
    region = np.zeros_like(color_mask)
    region[0:int(h*0.5), 0:int(w*0.6)] = 255
    color_mask = cv2.bitwise_and(color_mask, region)

    # find contours on color_mask
    contours, _ = cv2.findContours(color_mask.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    final_mask = np.zeros_like(color_mask)
    for cnt in contours:
        x,y,ww,hh = cv2.boundingRect(cnt)
        area = cv2.contourArea(cnt)
        box_area = ww*hh if ww*hh>0 else 1
        fill_ratio = float(area)/box_area
        # accept small or stroke-like contours
        if area < 2000 or (fill_ratio < 0.6 and ww < w*0.6 and hh < h*0.5):
            cv2.drawContours(final_mask, [cnt], -1, 255, -1)

    # erode slightly to avoid over-covering
    final_mask = cv2.erode(final_mask, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3,3)), iterations=1)
    # small dilation to cover strokes
    final_mask = cv2.dilate(final_mask, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5,3)), iterations=1)

    # remove any large blobs just in case
    contours, _ = cv2.findContours(final_mask.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cleaned = np.zeros_like(final_mask)
    for cnt in contours:
        x,y,ww,hh = cv2.boundingRect(cnt)
        area = ww*hh
        if area < 3000:
            cv2.drawContours(cleaned, [cnt], -1, 255, -1)

    inpainted = cv2.inpaint(img, cleaned, 2, cv2.INPAINT_NS)
    cv2.imwrite(output_path, inpainted)
    print('Saved', output_path)
    return 0

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: remove_text_minimal3.py input.png output.png')
        sys.exit(1)
    sys.exit(remove_text_minimal3(sys.argv[1], sys.argv[2]))
