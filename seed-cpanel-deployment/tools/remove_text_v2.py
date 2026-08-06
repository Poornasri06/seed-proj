import cv2
import numpy as np
import sys

def remove_text_region(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print('ERROR: cannot read', input_path)
        return 1
    h, w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.equalizeHist(gray)
    _, th = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    v = hsv[:, :, 2]
    s = hsv[:, :, 1]
    mask1 = (v > 200) & (s < 140)
    mask1 = mask1.astype('uint8') * 255
    mask = cv2.bitwise_or(th, mask1)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (9,3))
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel, iterations=2)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)

    # Restrict to top-left area where the heading text is
    x1 = 0
    x2 = int(w * 0.55)
    y1 = 0
    y2 = int(h * 0.42)
    region = np.zeros_like(mask)
    region[y1:y2, x1:x2] = 255
    mask = cv2.bitwise_and(mask, region)

    # refine by contours size
    contours, _ = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    final_mask = np.zeros_like(mask)
    for cnt in contours:
        x,y,ww,hh = cv2.boundingRect(cnt)
        area = ww*hh
        # accept small slices too but ignore huge full-area masks
        if area > 200 and hh > 8 and ww < w*0.6:
            cv2.drawContours(final_mask, [cnt], -1, 255, -1)

    # Dilate final mask slightly
    kernel2 = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7,7))
    final_mask = cv2.dilate(final_mask, kernel2, iterations=2)

    inpainted = cv2.inpaint(img, final_mask, 7, cv2.INPAINT_TELEA)
    cv2.imwrite(output_path, inpainted)
    print('Saved', output_path)
    return 0

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: remove_text_v2.py input.jpg output.png')
        sys.exit(1)
    sys.exit(remove_text_region(sys.argv[1], sys.argv[2]))
