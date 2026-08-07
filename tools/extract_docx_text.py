import sys
import zipfile
import re

if len(sys.argv) < 2:
    print('Usage: extract_docx_text.py path/to/file.docx')
    sys.exit(1)

path = sys.argv[1]
text = []
with zipfile.ZipFile(path) as z:
    name = 'word/document.xml'
    if name in z.namelist():
        xml = z.read(name).decode('utf-8', errors='ignore')
        # find text in <w:t> tags
        parts = re.findall(r'<w:t[^>]*>(.*?)</w:t>', xml, flags=re.DOTALL)
        text = ' '.join(parts)
    else:
        print('No document.xml found in', path)
        sys.exit(2)

out = 'tools/docx_extracted.txt'
with open(out, 'w', encoding='utf-8') as f:
    f.write(text)
print('Wrote', out)
