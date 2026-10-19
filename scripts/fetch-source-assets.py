from pathlib import Path
import subprocess, concurrent.futures
from PIL import Image
root=Path(__file__).resolve().parents[1]/'public/assets'
items={'aero':'Roadster-03-Carousel-Slide-1-Desktop.jpg','white':'Roadster-03-Carousel-Slide-2-Desktop.jpg','glass':'Roadster-03-Carousel-Slide-3-Desktop.jpg','world':'Roadster-04-World-Desktop.jpg','gravity':'Roadster-06-Gravity-Desktop.jpg'}
def get(item):
 name,file=item
 url='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/'+file
 path=root/(name+'.jpg')
 subprocess.run(['curl','-sS','-L','--fail','--max-time','45',url,'-o',str(path)],check=True)
 data=path.read_bytes()
 im=Image.open(path)
 im.thumbnail((2400,2400))
 im.convert('RGB').save(path,format='JPEG',quality=92)
 return name,len(data)
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex:
 for result in ex.map(get,items.items()): print(result)
