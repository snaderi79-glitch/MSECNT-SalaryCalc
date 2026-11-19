import openpyxl,json,warnings
warnings.filterwarnings('ignore')
wb=openpyxl.load_workbook('تحلیل_نسبت_درآمد_هزینه_۱۴۰۵_Rev12.xlsx',data_only=True)
ws=wb['قراردادها']
con=[]
for r in range(5,120):
    n=ws.cell(r,2).value
    if n is None: continue
    e=ws.cell(r,5).value
    con.append([n,ws.cell(r,3).value or '-',ws.cell(r,4).value or '-',e if isinstance(e,(int,float)) else 0])
ft=wb['جدول حق‌الزحمه ۱۴۰۵ ']
fee={ft.cell(r,1).value:[v if isinstance(v,(int,float)) else 0 for v in [ft.cell(r,c).value for c in range(2,28)]] for r in range(5,9)}
x=wb['ورود اطلاعات ']
d=dict(method=x['B3'].value,manual=x['B4'].value,contract=x['B5'].value,role=x['B9'].value,exp=x['B10'].value,netexp=78083816,
 ins=x['B20'].value,days=x['B21'].value,married=x['B22'].value,kids=x['B23'].value,supp=x['B24'].value,bonus=x['B25'].value,cloth=x['B26'].value,
 food=x['B27'].value,lodge=x['B28'].value,transp=x['B29'].value,over=round(x['B30'].value*100,4),target=round(x['B31'].value*100,4),risk=round((x['B33'].value or 0)*100,4),delay=x['B34'].value)
html=open('app_tpl.html',encoding='utf-8').read()
html=html.replace('__CON__',json.dumps(con,ensure_ascii=False)).replace('__FEE__',json.dumps(fee,ensure_ascii=False)).replace('__DEF__',json.dumps(d,ensure_ascii=False))
open('index.html','w',encoding='utf-8').write(html)
print(len(con),list(fee),d)
