from flask import Flask
from flask import jsonify
from flask import render_template
import utils
app = Flask(__name__)

@app.route("/")
def homepage():

    return render_template("main.html")

@app.route('/map')
def hello_world():
    province = []
    city = []
    country=[]
    for tup in utils.get_province_data():
        province.append({"name": tup[0], "value": tup[1]})
    for tup1 in utils.get_city_data():
        city.append({"name": tup1[0], "value": tup1[1]})
    for tup2 in utils.get_country_data():
        country.append({"name": tup2[0], "value": tup2[1]})
    return jsonify({"prodata": province, "citydata": city, "condata": country})

@app.route('/pie')
def pie():
    data = utils.get_pie_data()
    city = []
    count = []
    for k,v in data:
        city.append(k)
        count.append(int(v))
    return jsonify({"city": city, "count": count})
@app.route('/tabl')
def tabl():
    alldata=utils.get_alldata()
    shandongdata = utils.get_shandong1_data()
    shanxidata = utils.get_shanxi1_data()
    shanxi1data = utils.get_shanxi11_data()
    xizangdata = utils.get_xizang1_data()
    hebeidata = utils.get_hebei1_data()
    hunandata = utils.get_hunan1_data()
    guangxidata = utils.get_guangxi1_data()
    sichuandata = utils.get_sichuan1_data()
    yunnandata = utils.get_yunnan1_data()
    henandata = utils.get_henan1_data()
    hubeidata = utils.get_hubei1_data()
    jiangsudata = utils.get_jiangsu1_data()
    zhejiangdata = utils.get_zhejiang1_data()

    alldata1 = []
    alldata2 = []
    alldata3 = []
    alldata4 = []
    alldata5 = []
    shandong1 = []
    shandong2 = []
    shandong3 = []
    shandong4 = []
    shandong5 = []
    shanxi1 = []
    shanxi2 = []
    shanxi3 = []
    shanxi4 = []
    shanxi5 = []
    shanxi11 = []
    shanxi12 = []
    shanxi13 = []
    shanxi14 = []
    shanxi15 = []
    xizang1 = []
    xizang2 = []
    xizang3 = []
    xizang4 = []
    xizang5 = []
    hebei1 = []
    hebei2 = []
    hebei3 = []
    hebei4 = []
    hebei5 = []
    hunan1 = []
    hunan2 = []
    hunan3 = []
    hunan4 = []
    hunan5 = []
    guangxi1 = []
    guangxi2 = []
    guangxi3 = []
    guangxi4 = []
    guangxi5 = []
    sichuan1 = []
    sichuan2 = []
    sichuan3 = []
    sichuan4 = []
    sichuan5 = []
    yunnan1 = []
    yunnan2 = []
    yunnan3 = []
    yunnan4 = []
    yunnan5 = []
    henan1 = []
    henan2 = []
    henan3 = []
    henan4 = []
    henan5 = []
    hubei1 = []
    hubei2 = []
    hubei3 = []
    hubei4 = []
    hubei5 = []
    jiangsu1 = []
    jiangsu2 = []
    jiangsu3 = []
    jiangsu4 = []
    jiangsu5 = []
    zhejiang1 = []
    zhejiang2 = []
    zhejiang3 = []
    zhejiang4 = []
    zhejiang5 = []

    for c, d,c1,d1,d11 in alldata:
        alldata1.append(c)
        alldata2.append(d)
        alldata3.append(c1)
        alldata4.append(d1)
        alldata5.append(d11)
    for c, d,c1,d1,d11 in shandongdata:
        shandong1.append(c)
        shandong2.append(d)
        shandong3.append(c1)
        shandong4.append(d1)
        shandong5.append(d11)
    for e, f,e1,f1,f11 in shanxidata:
        shanxi1.append(e)
        shanxi2.append(f)
        shanxi3.append(e1)
        shanxi4.append(f1)
        shanxi5.append(f11)
    for g, h,g1,h1,h11 in shanxi1data:
        shanxi11.append(g)
        shanxi12.append(h)
        shanxi13.append(g1)
        shanxi14.append(h1)
        shanxi15.append(h11)
    for i, j,i1,j1,j11 in xizangdata:
        xizang1.append(i)
        xizang2.append(j)
        xizang3.append(i1)
        xizang4.append(j1)
        xizang5.append(j11)
    for k, l,k1,l1,l11 in hebeidata:
        hebei1.append(k)
        hebei2.append(l)
        hebei3.append(k1)
        hebei4.append(l1)
        hebei5.append(l11)
    for m, n,n1,m1,m11 in hunandata:
        hunan1.append(m)
        hunan2.append(n)
        hunan3.append(n1)
        hunan4.append(m1)
        hunan5.append(m11)
    for o, p,p1,o1,o11 in guangxidata:
        guangxi1.append(o)
        guangxi2.append(p)
        guangxi3.append(p1)
        guangxi4.append(o1)
        guangxi5.append(o11)
    for q, r,r1,g1,g11 in sichuandata:
        sichuan1.append(q)
        sichuan2.append(r)
        sichuan3.append(r1)
        sichuan4.append(g1)
        sichuan5.append(g11)
    for s, t,t1,s1,s11 in yunnandata:
        yunnan1.append(s)
        yunnan2.append(t)
        yunnan3.append(t1)
        yunnan4.append(s1)
        yunnan5.append(s11)
    for u, v,v1,u1,u11 in henandata:
        henan1.append(u)
        henan2.append(v)
        henan3.append(v1)
        henan4.append(u1)
        henan5.append(u11)
    for w, x,x1,w1,w11 in hubeidata:
        hubei1.append(w)
        hubei2.append(x)
        hubei3.append(x1)
        hubei4.append(w1)
        hubei5.append(w11)
    for y, z,z1,y1,y11 in jiangsudata:
        jiangsu1.append(y)
        jiangsu2.append(z)
        jiangsu3.append(z1)
        jiangsu4.append(y1)
        jiangsu5.append(y11)
    for k1, v1,k11,v11,v111 in zhejiangdata:
        zhejiang1.append(k1)
        zhejiang2.append(v1)
        zhejiang3.append(k11)
        zhejiang4.append(v11)
        zhejiang5.append(v111)

    return jsonify({  "shandong1": shandong1, "shandong2": shandong2,"shandong3": shandong3,"shandong4": shandong4,"shandong5": shandong5,
                      "alldata1": alldata1, "alldata2": alldata2, "alldata3": alldata3, "alldata4": alldata4,"alldata5": alldata5,
                    "shanxi1": shanxi1, "shanxi2": shanxi2,"shanxi3": shanxi3,"shanxi4": shanxi4,"shanxi5": shanxi5,
                    "shanxi11": shanxi11, "shanxi12": shanxi12,"shanxi13": shanxi13,"shanxi14": shanxi14,"shanxi15": shanxi15,
                    "xizang1": xizang1, "xizang2": xizang2,"xizang3": xizang3,"xizang4": xizang4,"xizang5": xizang5,
                    "hebei1": hebei1, "hebei2": hebei2,"hebei3": hebei3,"hebei4": hebei4,"hebei5": hebei5,
                    "hunan1": hunan1, "hunan2": hunan2,"hunan3": hunan3,"hunan4": hunan4,"hunan5": hunan5,
                    "guangxi1": guangxi1, "guangxi2": guangxi2,"guangxi3": guangxi3,"guangxi4": guangxi4,"guangxi5": guangxi5,
                    "sichuan1": sichuan1, "sichuan2": sichuan2,"sichuan3": sichuan3,"sichuan4": sichuan4,"sichuan5": sichuan5,
                    "yunnan1": yunnan1, "yunnan2": yunnan2,"yunnan3": yunnan3,"yunnan4": yunnan4,"yunnan5": yunnan5,
                    "henan1": henan1, "henan2": henan2,"henan3": henan3,"henan4": henan4,"henan5": henan5,
                    "hubei1": hubei1, "hubei2": hubei2,"hubei3": hubei3,"hubei4": hubei4,"hubei5": hubei5,
                    "jiangsu1": jiangsu1, "jiangsu2": jiangsu2,"jiangsu3": jiangsu4,"jiangsu4": jiangsu4,"jiangsu5": jiangsu5,
                    "zhejiang1": zhejiang1, "zhejiang2": zhejiang2,"zhejiang3": zhejiang4,"zhejiang4": zhejiang4,"zhejiang5": zhejiang5,

                    })
@app.route('/bar')
def bar():
    alldata=utils.get_province_data()
    shandongdata = utils.get_shandong_data()
    shanxidata = utils.get_shanxi_data()
    shanxiidata = utils.get_shanxii_data()
    xizangdata = utils.get_xizang_data()
    hebeidata = utils.get_hebei_data()
    hunandata = utils.get_hunan_data()
    guangxidata = utils.get_guangxi_data()
    sichuandata = utils.get_sichuan_data()
    yunnandata = utils.get_yunnan_data()
    henandata = utils.get_henan_data()
    hubeidata = utils.get_hubei_data()
    jiangsudata = utils.get_jiangsu_data()
    zhejiangdata = utils.get_zhejiang_data()

    continent=[]
    Count=[]
    shandongcontinent = []
    shandongCount = []
    shanxicontinent = []
    shanxiCount = []
    shanxiicontinent = []
    shanxiiCount = []
    xizangcontinent = []
    xizangCount = []
    hebeicontinent = []
    hebeiCount = []
    hunancontinent = []
    hunanCount = []
    guangxicontinent = []
    guangxiCount = []
    sichuancontinent = []
    sichuanCount = []
    yunnancontinent = []
    yunnanCount = []
    henancontinent = []
    henanCount = []
    hubeicontinent = []
    hubeiCount = []
    jiangsucontinent = []
    jiangsuCount = []
    zhejiangcontinent = []
    zhejiangCount = []

    for a, b in alldata:
        continent.append(a)
        Count.append(b)
    for c, d in shandongdata:
        shandongcontinent.append(c)
        shandongCount.append(d)
    for e, f in shanxidata:
        shanxicontinent.append(e)
        shanxiCount.append(f)
    for g, h in shanxiidata:
        shanxiicontinent.append(g)
        shanxiiCount.append(h)
    for i, j in xizangdata:
        xizangcontinent.append(i)
        xizangCount.append(j)
    for k, l in hebeidata:
        hebeicontinent.append(k)
        hebeiCount.append(l)
    for m, n in hunandata:
        hunancontinent.append(m)
        hunanCount.append(n)
    for o, p in guangxidata:
        guangxicontinent.append(o)
        guangxiCount.append(p)
    for q, r in sichuandata:
        sichuancontinent.append(q)
        sichuanCount.append(r)
    for s, t in yunnandata:
        yunnancontinent.append(s)
        yunnanCount.append(t)
    for u, v in henandata:
        henancontinent.append(u)
        henanCount.append(v)
    for w, x in hubeidata:
        hubeicontinent.append(w)
        hubeiCount.append(x)
    for y, z in jiangsudata:
        jiangsucontinent.append(y)
        jiangsuCount.append(z)
    for k1, v1 in zhejiangdata:
        zhejiangcontinent.append(k1)
        zhejiangCount.append(v1)

    return jsonify({"continent": continent, "Count": Count,
                    "shandongcontinent": shandongcontinent, "shandongCount": shandongCount,
                    "shanxicontinent": shanxicontinent, "shanxiCount": shanxiCount,
                    "shanxi1continent": shanxiicontinent, "shanxi1Count": shanxiiCount,
                    "xizangcontinent": xizangcontinent, "xizangCount": xizangCount,
                    "hebeicontinent": hebeicontinent, "hebeiCount": hebeiCount,
                    "hunancontinent": hunancontinent, "hunanCount": hunanCount,
                    "guangxicontinent": guangxicontinent, "guangxiCount": guangxiCount,
                    "sichuancontinent": sichuancontinent, "sichuanCount": sichuanCount,
                    "yunnancontinent": yunnancontinent, "yunnanCount": yunnanCount,
                    "henancontinent": henancontinent, "henanCount": henanCount,
                    "hubeicontinent": hubeicontinent, "hubeiCount": hubeiCount,
                    "jiangsucontinent": jiangsucontinent, "jiangsuCount": jiangsuCount,
                    "zhejiangcontinent": zhejiangcontinent, "zhejiangCount": zhejiangCount,
                    })


if __name__ == '__main__':
    app.run(debug=True)
