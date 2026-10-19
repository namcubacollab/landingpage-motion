from PIL import Image,ImageDraw
from pathlib import Path
root=Path(__file__).resolve().parents[1]
a=Image.open(root/'design/hero-reference.png').convert('RGB').resize((1440,1000))
b=Image.open(root/'docs/qa/hero-desktop-final.png').convert('RGB')
sheet=Image.new('RGB',(2880,1040),'#252a2b');sheet.paste(a,(0,40));sheet.paste(b,(1440,40));draw=ImageDraw.Draw(sheet);draw.text((25,14),'DESIGN REFERENCE - normalized to 1440 x 1000',fill='white');draw.text((1465,14),'IMPLEMENTATION - 1440 x 1000',fill='white');sheet.save(root/'docs/qa/hero-comparison.png')
for name,box in [('header',(0,0,1440,90)),('title',(35,95,1080,445)),('vehicle',(280,430,1160,925))]:
 aa=a.crop(box);bb=b.crop(box);out=Image.new('RGB',(aa.width*2,aa.height+30),'#252a2b');out.paste(aa,(0,30));out.paste(bb,(aa.width,30));d=ImageDraw.Draw(out);d.text((10,9),'REFERENCE',fill='white');d.text((aa.width+10,9),'IMPLEMENTATION',fill='white');out.save(root/('docs/qa/'+name+'-comparison.png'))
