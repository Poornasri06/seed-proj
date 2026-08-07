import cv2
import sys

in_path = 'public/services/MEP_DESIGN_no_text_v3.png'
out_path = 'public/services/MEP DESIGN.jpeg'

img = cv2.imread(in_path, cv2.IMREAD_UNCHANGED)
if img is None:
    print('ERROR: could not read', in_path)
    sys.exit(2)
# If PNG has alpha, composite over white
if img.shape[2] == 4:
    alpha = img[:, :, 3] / 255.0
    bgr = img[:, :, :3].astype('float32')
    bg = 255 * (1 - alpha)[:, :, None]
    out = (bgr * alpha[:, :, None] + bg).astype('uint8')
else:
    out = img
cv2.imwrite(out_path, out, [int(cv2.IMWRITE_JPEG_QUALITY), 95])
print('Wrote', out_path)
