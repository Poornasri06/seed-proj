import cv2
import numpy as np
import sys

def remove_text(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print('ERROR: cannot read', input_path)
        return 1
    h, w = img.shape[:2]
    # Convert to grayscale and use adaptive threshold to find bright text
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # Enhance contrast
    gray = cv2.equalizeHist(gray)
    # Threshold for bright regions (text usually bright)
    _, th = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)

    # Also detect colored text by converting to HSV and thresholding low-saturation, high-value
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    v = hsv[:, :, 2]
    s = hsv[:, :, 1]
    # Candidate mask: bright and low-mid saturation (covers white/green-ish text sometimes)
    mask1 = (v > 200) & (s < 120)
    mask1 = mask1.astype('uint8') * 255

    # Combine masks
    mask = cv2.bitwise_or(th, mask1)

    # Morphological ops to clean
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (15,5))
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel, iterations=2)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)

    # Heuristic: restrict mask to lower-left quarter where caption appears
    # If this removes needed areas, comment out next lines
    # y1 = int(h*0.45); y2 = h
    # x1 = 0; x2 = int(w*0.6)
    # region = np.zeros_like(mask)
    # region[y1:y2, x1:x2] = 255
    # mask = cv2.bitwise_and(mask, region)

    # Further refine by keeping only reasonably sized contours
    contours, _ = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    final_mask = np.zeros_like(mask)
    for cnt in contours:
        x,y,ww,hh = cv2.boundingRect(cnt)
        area = ww*hh
        if area > 400 and hh > 12:
            cv2.drawContours(final_mask, [cnt], -1, 255, -1)

    # Inpaint
    inpainted = cv2.inpaint(img, final_mask, 7, cv2.INPAINT_TELEA)
    cv2.imwrite(output_path, inpainted)
    print('Saved', output_path)
    return 0

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: remove_text.py input.jpg output.png')
        sys.exit(1)
    sys.exit(remove_text(sys.argv[1], sys.argv[2]))
