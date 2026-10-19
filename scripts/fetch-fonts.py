from pathlib import Path
import re,subprocess
css=Path('/tmp/roadster-fonts.css').read_text()
root=Path(__file__).resolve().parents[1]
out=[]
for block in css.split('@font-face')[1:]:
 family=re.search("font-family: '([^']+)'",block)[1]
 weight=re.search('font-weight: (\\d+)',block)[1]
 if (family=='Barlow Condensed' and weight not in ('500','600')) or (family=='Be Vietnam Pro' and weight not in ('400','500','600','700')):continue
 url=re.search('url\\(([^)]+)\\)',block)[1]
 name=family.lower().replace(' ','-')+'-'+weight+'.ttf'
 dest=root/'public/assets'/name
 subprocess.run(['curl','-sS','-L','--fail','--max-time','30',url,'-o',str(dest)],check=True)
 out.append('@font-face'+block.replace(url,'/assets/'+name))
(root/'src/fonts.css').write_text('\n'.join(out))
print('Saved',len(out),'font faces')
