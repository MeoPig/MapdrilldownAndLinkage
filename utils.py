import pymysql
def get_conn():
    conn=pymysql.connect(host="127.0.0.1",
                         user="root",
                         password="root",
                         db="student",
                         charset="utf8")
    cursor=conn.cursor()
    return conn,cursor
def close_conn(conn,cursor):
    cursor.close()
    conn.close()

def query(sql,*args):
    conn,cursor=get_conn()
    cursor.execute(sql,args)
    res=cursor.fetchall()
    close_conn(conn,cursor)
    return res

def get_province_data():
    sql = "SELECT 省,COUNT(*) AS 省内人数 FROM stuwhere " \
          "GROUP BY 省"
    res = query(sql)
    return res
def get_city_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere " \
          "GROUP BY 市"
    res = query(sql)
    return res
def get_country_data():
    sql = "SELECT 县,COUNT(*) AS 县内人数 FROM stuwhere " \
          "GROUP BY 县"
    res = query(sql)
    return res
def get_pie_data():
    sql = "SELECT 省,COUNT(*) AS 省内人数 FROM stuwhere " \
          "GROUP BY 省"
    res = query(sql)
    return res

def get_shandong_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='山东'  GROUP BY 市"
    res = query(sql)
    return res
def get_shanxi_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='陕西'  GROUP BY 市"
    res = query(sql)
    return res
def get_shanxii_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='山西'  GROUP BY 市"
    res = query(sql)
    return res
def get_xizang_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='西藏'  GROUP BY 市"
    res = query(sql)
    return res
def get_hebei_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='河北'  GROUP BY 市"
    res = query(sql)
    return res
def get_hunan_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='湖南'  GROUP BY 市"
    res = query(sql)
    return res
def get_guangxi_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='广西'  GROUP BY 市"
    res = query(sql)
    return res
def get_sichuan_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='四川'  GROUP BY 市"
    res = query(sql)
    return res
def get_yunnan_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='云南'  GROUP BY 市"
    res = query(sql)
    return res
def get_henan_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='河南'  GROUP BY 市"
    res = query(sql)
    return res
def get_hubei_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='湖北'  GROUP BY 市"
    res = query(sql)
    return res
def get_jiangsu_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='江苏'  GROUP BY 市"
    res = query(sql)
    return res
def get_zhejiang_data():
    sql = "SELECT 市,COUNT(*) AS 市内人数 FROM stuwhere WHERE 省='浙江'  GROUP BY 市"
    res = query(sql)
    return res


def get_alldata():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere "
    res = query(sql)
    return res
def get_shandong1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='山东'"
    res = query(sql)
    return res
def get_shanxi1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='陕西'"
    res = query(sql)
    return res
def get_shanxi11_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='山西'"
    res = query(sql)
    return res
def get_xizang1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='西藏'"
    res = query(sql)
    return res
def get_hebei1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='河北'"
    res = query(sql)
    return res
def get_hunan1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='湖南'"
    res = query(sql)
    return res
def get_guangxi1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='广西'"
    res = query(sql)
    return res
def get_sichuan1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='四川'"
    res = query(sql)
    return res
def get_yunnan1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='云南'"
    res = query(sql)
    return res
def get_henan1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='河南'"
    res = query(sql)
    return res
def get_hubei1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='湖北'"
    res = query(sql)
    return res
def get_jiangsu1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='江苏'"
    res = query(sql)
    return res
def get_zhejiang1_data():
    sql = "SELECT 学号,姓名,专业,市,县 FROM stuwhere WHERE 省='浙江'"
    res = query(sql)
    return res


if __name__ == '__main__':
    print()