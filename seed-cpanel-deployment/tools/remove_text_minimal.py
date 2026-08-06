import cv2
import numpy as np
import sys

def remove_text_minimal(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print('ERROR: cannot read', input_path)
        return 1
    h, w = img.shape[:2]
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    H = hsv[:, :, 0]
    S = hsv[:, :, 1]
    V = hsv[:, :, 2]
    # white-ish mask
    mask_white = (V > 200) & (S < 80)
    # green-ish mask (narrower)
    mask_green = (H >= 40) & (H <= 85) & (S > 80) & (V > 80)
    mask = (mask_white | mask_green).astype('uint8') * 255

    # Restrict area to top-left where text is expected
    x2 = int(w * 0.6)
    y2 = int(h * 0.45)
    region = np.zeros_like(mask)
    region[0:y2, 0:x2] = 255
    mask = cv2.bitwise_and(mask, region)

    # Clean small blobs but keep thin shapes (text)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)
    # Slight dilation to fully cover text strokes
    mask = cv2.dilate(mask, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5,3)), iterations=1)

    # Remove very small components
    contours, _ = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    final_mask = np.zeros_like(mask)
    for cnt in contours:
        x,y,ww,hh = cv2.boundingRect(cnt)
        if ww*hh > 100:  # keep moderately-sized masks
            cv2.drawContours(final_mask, [cnt], -1, 255, -1)

    # Use Navier-Stokes inpainting for structure-preserving fill
    inpainted = cv2.inpaint(img, final_mask, 3, cv2.INPAINT_NS)
    cv2.imwrite(output_path, inpainted)
    print('Saved', output_path)
    return 0

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: remove_text_minimal.py input.jpg output.png')
        sys.exit(1)
    sys.exit(remove_text_minimal(sys.argv[1], sys.argv[2]))
