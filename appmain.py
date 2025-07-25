import os
import pandas as pd
from flask import Flask, render_template
# 导入生产环境所需服务器
from gevent.pywsgi import WSGIServer

# 数据从excel表单提取函数
def extract_sheet_data(file_path: str, sheet_name: str = 'Sheet1') -> list:
    """
    自动获取列名并从Excel表格的指定工作表中提取数据,遇到空行或空列时停止
    参数:
        file_path: Excel文件路径
        sheet_name: 工作表名称，默认为'Sheet1'
    返回:
        包含员工信息的字典列表
    """
    df = pd.read_excel(file_path, sheet_name=sheet_name)                # 读取指定工作表中的数据，自动获取列名
    column_names = df.columns.tolist()                                  # 获取所有列名（表头）
    sheet_data_list = []

    for _, row in df.iterrows():                                        # 遍历每一行，遇到空行则停止
        # 检查整行是否有空值
        if row.isna().all():
            break
            
        # 检查关键列（第一列）是否为空
        if pd.isna(row[column_names[0]]):
            break
            
        # 提取当前行的所有数据（跳过空值列）
        sheet_data = {}
        for col in column_names:
            value = row[col]
            if pd.isna(value):
                continue  # 跳过空值列
            sheet_data[col] = value
            
        sheet_data_list.append(sheet_data)
    # 输出结果
    """
    print(f"\n——————————————————————————\n以下是名为 “{sheet_name}” 的表格中的数据")
    print(f"其中每一列的内容分别为: {', '.join(column_names)}")
    for i, emp in enumerate(sheet_data_list[:5], 1):
        print(f"\n记录 #{i}:")
        for key, value in emp.items():
            print(f"  {key}: {value}")
    """
    return sheet_data_list


# 主函数
app = Flask(__name__)
# print(f"模板文件夹路径: {app.template_folder}")
@app.route('/')
def index():
    sheet_data_list_1 = extract_sheet_data('excel/业务表单.xlsx', '表一')
    # 提取大屏各表单标题数据
    show_list_temp = [
        {"网页名": "瑞众保险苏州数据大屏", "大屏标题": "瑞众保险苏州分公司 2025年度大数据汇总(营销渠道)","天气": "多云转小雨"},
        {"标题": "数据总览","数值": [18368,3342,137],"内容": ["年保费(万元)","月保费(万元)","日保费(万元)"]},                 # 顺序表一
        {"标题": "实时保单数据","列": ["网点名称","部门","年限","年缴(万元)","标保(万元)","时间"],"保单": sheet_data_list_1},  # 顺序表二
        {"标题": "本月营收统计(万元)",},                                                                                    # 顺序表三
        {"标题": "年度各类险种营收对比",},                                                                                  # 顺序表四
        {"标题": "总体市场保费分析",},                                                                                      # 顺序表五
        {"标题": "人力资源部指标数据",                                                                                      # 顺序表六
            # echarts21
            "表一":["指标一","标准人力","绩优人力","新人有效人力"],
            # echarts22
            "表二":["指标二","参训新人晋星率","晋星班参训率","晋级班参训率"],
            # echarts23
            "表三":["指标三","有效活动率","上岗入营率","培训出勤率"],
        },        
        {"标题": "一年内新人有效人力季度占比图",}                                                                             # 顺序表七
    ]
    return render_template('show_index.html', show_list_temp=show_list_temp)

if __name__ == '__main__':
    # 配置生产环境
    if os.environ.get('FLASK_ENV') == 'development':
        app.run(debug=True)
    # 生产环境（使用 gevent 服务器）
    else:
        # 打印启动信息
        print('启动生产服务器...')
        
        # 创建 gevent WSGI 服务器
        http_server = WSGIServer(('localhost', 8000), app)
        
        # 获取服务器地址和端口
        host, port = http_server.server_host, http_server.server_port
        print(f'服务器运行在 http://{host}:{port}')
        
        # 启动服务器
        http_server.serve_forever()


"""
set FLASK_ENV=production
python app.py

"""

