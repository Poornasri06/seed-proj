import cv2
import numpy as np
import sys

in_path = 'public/services/MEP.png'
out_path = 'public/services/MEP_enhanced.png'

img = cv2.imread(in_path)
if img is None:
    print('ERROR: cannot read', in_path)
    sys.exit(2)

# Convert to LAB for contrast-limited adaptive histogram equalization on L
lab = cv2.cvtColor(img, cv2.COLOR_BGR2Lab)
l, a, b = cv2.split(lab)
clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
l2 = clahe.apply(l)
lab = cv2.merge((l2,a,b))
img_clahe = cv2.cvtColor(lab, cv2.COLOR_Lab2BGR)

# Denoise lightly
img_denoise = cv2.fastNlMeansDenoisingColored(img_clahe, None, h=10, hColor=10, templateWindowSize=7, searchWindowSize=21)

# Detail enhance (edge-preserving)
img_detail = cv2.detailEnhance(img_denoise, sigma_s=10, sigma_r=0.15)

# Unsharp mask for sharpening
blur = cv2.GaussianBlur(img_detail, (0,0), sigmaX=3, sigmaY=3)
sharpened = cv2.addWeighted(img_detail, 1.5, blur, -0.5, 0)

# Slight contrast and brightness tweak
alpha = 1.05  # contrast
beta = 5      # brightness
out = cv2.convertScaleAbs(sharpened, alpha=alpha, beta=beta)

cv2.imwrite(out_path, out, [int(cv2.IMWRITE_PNG_COMPRESSION), 3])
print('Wrote', out_path)
