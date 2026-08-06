import cv2
import numpy as np
import sys

def remove_text_minimal2(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print('ERROR: cannot read', input_path)
        return 1
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    H = hsv[:, :, 0]
    S = hsv[:, :, 1]
    V = hsv[:, :, 2]
    # narrow white and green masks
    mask_white = (V > 210) & (S < 60)
    mask_green = (H >= 45) & (H <= 75) & (S > 90) & (V > 90)
    color_mask = (mask_white | mask_green).astype('uint8') * 255

    # edge mask
    edges = cv2.Canny(gray, 60, 150)
    edges = cv2.dilate(edges, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3,3)), iterations=1)

    # intersect color + edges to keep strokes only
    mask = cv2.bitwise_and(color_mask, edges)

    # small closing to join strokes
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_RECT, (3,3)), iterations=1)

    # remove large components
    contours, _ = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    final_mask = np.zeros_like(mask)
    for cnt in contours:
        x,y,ww,hh = cv2.boundingRect(cnt)
        area = ww*hh
        if area < 2000 and hh>4 and ww>4:
            cv2.drawContours(final_mask, [cnt], -1, 255, -1)

    # small dilation to cover strokes fully
    final_mask = cv2.dilate(final_mask, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5,3)), iterations=1)

    inpainted = cv2.inpaint(img, final_mask, 2, cv2.INPAINT_NS)
    cv2.imwrite(output_path, inpainted)
    print('Saved', output_path)
    return 0

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: remove_text_minimal2.py input.jpg output.png')
        sys.exit(1)
    sys.exit(remove_text_minimal2(sys.argv[1], sys.argv[2]))
