import openpyxl,subprocess,json,shutil,os,warnings
warnings.filterwarnings('ignore')
src='تحلیل_نسبت_درآمد_هزینه_۱۴۰۵_Rev12-(2).xlsx'
S=[{},{'contract':'48550820','role':'مهندس ناظر','exp':'7','netexp':'40000000','days':'30','married':'1','kids':'2','over':'12','risk':'2.5','delay':'2'},
{'method':'دستی','manual':'200000000','netexp':'150000000','ins':'1','days':'31','kids':'3','married':'1','food':'400000'},
{'ins':'0','netexp':'60000000','role':'کمک ناظر','exp':'3.7','contract':'151988'},
{'netexp':'250000000','days':'29','supp':'2000000','transp':'5000000'}]
for i,s in enumerate(S):
  r=json.loads(subprocess.check_output(['node','cmp.js',json.dumps(s)]))
  wb=openpyxl.load_workbook(src);w=wb['ورود اطلاعات ']
  mp={'method':'B3','manual':'B4','contract':'B5','role':'B9','exp':'B10','ins':'B20','days':'B21','married':'B22','kids':'B23','supp':'B24','bonus':'B25','cloth':'B26','food':'B27','lodge':'B28','transp':'B29','over':'B30','risk':'B33','delay':'B34'}
  for k,v in s.items():
    if k=='netexp':continue
    c=mp[k]
    if k=='contract':v=int(v)
    elif k in('over','risk'):v=float(v)/100
    elif k in('role','method'):pass
    else:v=float(v)
    w[c]=v
  w['B18']=r['base']
  wb.save('/tmp/x.xlsx')
  subprocess.run(['soffice','-env:UserInstallation=file:///tmp/lop','--headless','--convert-to','xlsx:Calc MS Excel 2007 XML','--outdir','/tmp/o','/tmp/x.xlsx'],capture_output=True)
  v=openpyxl.load_workbook('/tmp/o/x.xlsx',data_only=True)['محاسبات']
  e={'B':v['B3'].value,'hk':v['B36'].value,'t':v['B43'].value,'C':v['B51'].value,'ins':v['B42'].value,'short':v['B55'].value,'net':v['B58'].value,'A':v['B44'].value}
  print(i,{k:(round(r[k]),round(e[k])) for k in e if abs(r[k]-e[k])>0.5} or 'OK',round(e['A']),s.get('netexp','78083816'))
