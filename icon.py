from PIL import Image, ImageDraw, ImageFont
import math
def make(S, path):
    # maskable-safe: content within central 80%
    im=Image.new('RGBA',(S,S),(11,94,215,255))
    d=ImageDraw.Draw(im)
    u=S/512
    # banknote (green-gold) centered
    x0,y0,x1,y1=[v*u for v in (96,170,416,330)]
    d.rounded_rectangle((x0,y0,x1,y1),radius=18*u,fill=(46,125,50,255),outline=(255,255,255,255),width=max(2,int(6*u)))
    cx,cy=(x0+x1)/2,(y0+y1)/2
    r=52*u
    d.ellipse((cx-r,cy-r,cx+r,cy+r),fill=(255,213,79,255),outline=(255,255,255,255),width=max(2,int(5*u)))
    r2=30*u
    d.ellipse((cx-r2,cy-r2,cx+r2,cy+r2),outline=(255,240,180,255),width=max(2,int(4*u)))
    # coin stack at bottom-right
    for i in range(3):
        top=(350+0)*u-i*16*u; 
        bx0,bx1=300*u,400*u
        by=top+ (300-330)*0  # placeholder
    for i in range(4):
        yy=(330+i*0)*u
    base_y=372*u
    for i in range(3):
        yt=base_y-i*18*u
        d.ellipse((300*u,yt-18*u,400*u,yt+18*u),fill=(255,193,7,255),outline=(255,255,255,255),width=max(2,int(4*u)))
    # rising arrow top-left (growth)
    pts=[(120*u,360*u),(190*u,300*u),(240*u,320*u),(300*u,250*u)]
    d.line(pts,fill=(255,255,255,255),width=max(3,int(14*u)),joint='curve')
    ax,ay=300*u,250*u
    d.polygon([(ax,ay),(ax-34*u,ay+6*u),(ax-10*u,ay+30*u)],fill=(255,255,255,255))
    im.convert('RGB').save(path)
make(512,'icon-512.png'); make(192,'icon-192.png')
