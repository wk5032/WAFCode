/**
 * 地图炮
 */
var maxAlarmId = 0, dataInterval = 1,
	eventTypeMap = {
		1: '挂马攻击',
		2: '邮件攻击',
		3: '恶意文件攻击',
		4: '远程漏洞攻击',
		5: '网站攻击',
		6: '网站控制行为',
		7: '主机控制行为',
		8: '隐蔽信道'
	},
	alarmQueue = [],
	geoCoordMapAll = {
		'af':[69.11,34.28],
		'ao':[13.15,-8.5],
		'al':[19.49,41.18],
		'ae':[54.22,24.28],
		'ar':[-60,-36.3],
		'am':[44.31,40.1],
		'au':[149.08,-35.15],
		'at':[16.22,48.12],
		'az':[49.56,40.29],
		'bi':[29.18,-3.16],
		'be':[4.21,50.51],
		'bj':[2.42,6.23],
		'bf':[-1.3,12.15],
		'bd':[90.26,23.43],
		'bg':[23.2,42.45],
		'bs':[-77.2,25.05],
		'ba':[18.26,43.52],
		'by':[27.3,53.52],
		'bz':[-88.3,17.18],
		'bm':[-64.46,32.17],
		'bo':[-68.1,-16.2],
		'br':[-47.55,-15.47],
		'bn':[115,4.52],
		'bt':[89.45,27.31],
		'bw':[25.57,-24.45],
		'zf':[18.35,4.23],
		'ca':[-75.42,45.27],
		'ch':[7.28,46.57],
		'cl':[-70.4,-33.24],
		'cm':[11.35,3.5],
		'cd':[15.15,-4.20],
		'cn':[116.4551,40.7539],
		'ci':[-5.17,6.49],
		'cg':[15.12,-4.09],
		'co':[-74,4.34],
		'cr':[-84.02,9.55],
		'cu':[-82.22,23.08],
		'cy':[33.25,35.1],
		'jk':[14.22,50.05],
		'cz':[14.22,50.05],
		'de':[13.25,52.3],
		'dj':[42.2,11.08],
		'dk':[12.34,55.41],
		'do':[-69.91,18.49],
		'dz':[3.08,36.42],
		'ec':[-78.35,-0.15],
		'eg':[31.14,30.01],
		'er':[38.55,15.19],
		'es':[-3.45,40.25],
		'ee':[24.48,59.22],
		'et':[38.42,9.02],
		'fi':[25.03,60.15],
		'fj':[178.44,18.12],
		'fr':[2.2,48.5],
		'ga':[9.26,0.25],
		'gb':[-0.05,51.36],
		'ge':[44.5,41.43],
		'gh':[-0.06,5.35],
		'gn':[-13.49,9.29],
		'gm':[-16.4,13.28],
		'gw':[-15.45,11.45],
		'gq':[8.5,3.45],
		'gr':[23.46,37.58],
		'gl':[-51.35,64.1],
		'gt':[-90.22,14.4],
		'gf':[-52.18,5.05],
		'gy':[-58.12,6.5],
		'hk':[114.10,22.39],
		'hn':[-87.14,14.05],
		'hr':[15.58,45.5],
		'ht':[-72.2,18.4],
		'hu':[19.05,47.29],
		'id':[106.49,-6.09],
		'in':[77.13,28.37],
		'ie':[-6.15,53.21],
		'ir':[51.3,35.44],
		'iq':[44.3,33.2],
		'is':[-21.57,64.1],
		'il':[35.12,31.47],
		'it':[12.29,41.54],
		'jm':[-76.5,18],
		'jo':[35.52,31.57],
		'jp':[139.46,35.42],
		'kz':[71.3,51.1],
		'ke':[36.48,-1.17],
		'kg':[74.46,42.54],
		'kh':[104.55,11.33],
		'kr':[126.58,37.31],
		'yk':[21.10,42.39],
		'kw':[48,29.3],
		'la':[102.36,17.58],
		'lb':[35.31,33.53],
		'lr':[-10.47,6.18],
		'ly':[13.07,32.49],
		'lk':[79.52,6.55],
		'ls':[27.3,-29.18],
		'lt':[25.19,54.38],
		'lu':[6.09,49.37],
		'lv':[24.08,56.53],
		'ma':[-6.51,34.02],
		'md':[28.50,47.02],
		'mg':[47.31,-18.55],
		'mx':[-99.1,19.2],
		'mk':[21.26,42.01],
		'ml':[-7.55,12.34],
		'mm':[96.2,16.45],
		'me':[19.28,42.27],
		'mn':[106.53,47.55],
		'mo':[113.54,22.19],
		'mz':[32.32,-25.58],
		'mr':[57.3,-20.1],
		'mw':[33.48,-14],
		'my':[101.41,3.09],
		'na':[17.04,-22.35],
		'nc':[166.3,-22.17],
		'ne':[2.06,13.27],
		'ng':[7.32,9.05],
		'ni':[-86.2,12.06],
		'nl':[4.54,52.23],
		'no':[10.45,59.55],
		'np':[85.2,27.45],
		'nz':[174.46,-41.19],
		'om':[58.36,23.37],
		'pk':[73.1,33.4],
		'pa':[-79.25,9],
		'pe':[-77,-12],
		'ph':[121.03,14.4],
		'pg':[147.08,-9.24],
		'pl':[21,52.13],
		'pr':[-66.07,18.28],
		'kp':[127.30,39.00],
		'pt':[-9.1,38.42],
		'py':[-57.3,-25.1],
		'qa':[51.35,25.15],
		'ro':[26.1,44.27],
		'ru':[37.35,55.45],
		'rw':[30.04,-1.59],
		'eh':[-13.12,27.09],
		'sa':[46.42,24.41],
		'sd':[32.35,15.31],
		'sg':[103.51,1.17],
		'ss':[31.57,4.86],
		'sn':[-17.29,14.34],
		'sb':[159.57,-9.27],
		'sl':[-13.17,8.3],
		'sv':[-89.1,13.4],
		'so':[45.25,2.02],
		'sr':[20.28,44.49],
		'sur':[-55.1,5.5],
		'sk':[17.07,48.1],
		'si':[14.33,46.04],
		'se':[18.03,59.2],
		'sz':[31.06,-26.18],
		'sy':[36.18,33.30],
		'td':[14.59,12.1],
		'tg':[1.2,6.09],
		'th':[100.35,13.45],
		'tj':[68.48,38.33],
		'tm':[57.5,38],
		'tl':[125.34,-8.29],
		'tt':[-61.31,10.38],
		'tn':[10.11,36.5],
		'tr':[32.54,39.57],
		'tw':[120.96,23.69],
		'tz':[35.45,-6.08],
		'ug':[32.3,0.2],
		'ua':[30.28,50.3],
		'uy':[-56.11,-34.5],
		'us':[-77.02,39.91],
		'uz':[69.1,41.2],
		've':[-66.55,10.3],
		'vn':[105.55,21.05],
		'vu':[168.18,-17.45],
		'ye':[45.0,12.5],
		'za':[18.27,-33.55],
		'zm':[28.16,-15.28],
		'zw':[31.02,-17.43],
		'中国':[116.4551,40.7539],
		'福建': [119.4543,25.9222],
		'广东': [113.5107,23.2196],
		'北京': [116.4551,40.2539],
		'内蒙古': [111.4124,40.4901],
		'贵州': [106.6992,26.7682],
		'宁夏': [106.3586,38.1775],
		'江苏': [118.8062,31.9208],
		'安徽': [117.29,32.0581],
		'山东': [117.1582,36.8701],
		'黑龙江': [127.9688,45.368],
		'山西': [112.3352,37.9413],
		'陕西': [109.1162,34.2004],
		'重庆': [107.7539,30.1904],
		'上海': [121.4648,31.2891],
		'广西': [108.479,23.1152],
		'河南': [113.4668,34.6234],
		'天津': [117.4219,39.4189],
		'辽宁': [123.1238,42.1216],
		'云南': [102.9199,25.4663],
		'江西': [116.0046,28.6633],
		'河北': [114.4995,38.1006],
		'四川': [103.9526,30.7617],
		'浙江': [119.5313,29.8773],
		'湖北': [114.3896,30.6628],
		'海南': [110.3893,19.8516],
		'吉林': [125.8154,44.2584],
		'西藏': [91.1865,30.1465],
		'甘肃': [103.5901,36.3043],
		'湖南': [113.0823,28.2568],
		'青海': [101.4038,36.8207],
		'新疆': [87.9236,43.5883],
		'香港': [114.10,22.39],
		'澳门': [113.54,22.19],
		'台湾':[120.96,23.69],
		'China':[116.4551,40.7539],
		'Fujian': [119.4543,25.9222],
		'Guangdong': [113.5107,23.2196],
		'Beijing': [116.4551,40.2539],
		'Inner Mongolia Autonomous Region': [111.4124,40.4901],
		'Guizhou': [106.6992,26.7682],
		'Ningsia Hui Autonomous Region': [106.3586,38.1775],
		'Jiangsu': [118.8062,31.9208],
		'Anhui': [117.29,32.0581],
		'Shandong': [117.1582,36.8701],
		'Heilongjiang': [127.9688,45.368],
		'Shanxi': [112.3352,37.9413],
		'Shaanxi': [109.1162,34.2004],
		'Chongqing': [107.7539,30.1904],
		'Shanghai': [121.4648,31.2891],
		'Guangxi Zhuang Autonomous Region': [108.479,23.1152],
		'Henan': [113.4668,34.6234],
		'Tianjin': [117.4219,39.4189],
		'Liaoning': [123.1238,42.1216],
		'Yunnan': [102.9199,25.4663],
		'Jiangxi': [116.0046,28.6633],
		'Hebei': [114.4995,38.1006],
		'Sichuan': [103.9526,30.7617],
		'Zhejiang': [119.5313,29.8773],
		'Hubei': [114.3896,30.6628],
		'Hainan': [110.3893,19.8516],
		'Jilin': [125.8154,44.2584],
		'Tibet Autonomous Region': [91.1865,30.1465],
		'Gansu': [103.5901,36.3043],
		'Hunan': [113.0823,28.2568],
		'Qinghai': [101.4038,36.8207],
		'Xinjiang Uyghur Autonomous Region': [87.9236,43.5883],
		'Hong Kong': [114.10,22.39],
		'Macao': [113.54,22.19],
		'Taiwan':[120.96,23.69],
		'ai':[-63.04,-18.13],
		'aq':[135.0000,-82.86275],
		'as':[-170.4,-14.15],
		'ax':[19.56,60.05],
		'bm':[-64.75,32.3078],
		'bq':[-6826,12.20],
		'ck':[-159.776,-21.236],
		'cw':[-68.99,12.169],
		'do':[-69.931,18,48],
		'fk':[-59.523,-51.796],
		'fo':[-6.911,61.892],
		'gf':[-53.125,3.393],    
		'gg':[-2.5852,49.4656],   
		'gi':[-5.3535,36.1407],   
		'gp':[-61.5510,16.2650],  
		'gu':[144.7502,13.4762], 
		'im':[-1019.5453,31.3445],
		'io':[71.8765,-6.3431],
		'je':[-2.1032,49.1805],   
		'ky':[-58.1551,6.8012],   
		'md':[28.8638,47.0104],  
		'mf':[-63.0500,17.0708],  
		'mp':[145.6739,15.0979],  
		'mq':[-61.0587,14.6160],  
		'ms':[-62.1873,16.7424],  
		'nf':[167.9547,-29.0408], 
		'nu':[-169.9178,-17.0553],
		'pf':[-149.4068,-17.6797],
		'pm':[-61.1752,14.7792],  
		're':[55.5363,-21.1151],  
		'sj':[20.9751,77.8749],   
		'sx':[-63.0500,18.0708],  
		'tc':[-71.7979,21.6940],  
		'tk':[-171.2188,-9.3802], 
		'um':[166.6000,19.2833],  
		'va':[12.4533,41.9029],   
		'vg':[-64.6399,18.4206],  
		'vi':[-64.8963,18.33576], 
		'wf':[-178.1165,-14.2938],
		'yt':[45.1662,-12.8275], 
		'ad':[1.70,42.50],
		'ag':[-61.77,17.12],
		'aw':[-69.87,12.42],
		'bb':[-59.50,13.05],
		'bh':[50.48,26.24],
		'bl':[-62.86,17.88],
		'cf':[19.35,6.23],
		'cv':[-24.68,14.84],
		'dm':[-61.39,15.59],
		'fm':[154.81,0.92],
		'gd':[-61.63,12.04],
		'ki':[-151.78,-11.45],
		'km':[43.84,-12.37],
		'kn':[-62.54,17.10],
		'lc':[-60.95,13.71],
		'li':[9.58,47.05],
		'mc':[7.43,43.74],
		'mh':[168.71,4.57],
		'mt':[14.56,35.84],
		'mu':[57.71,-20.09],
		'mv':[73.16,-0.68],
		'nr':[166.95,-0.53],
		'ps':[35.40,32.05],
		'pw':[131.81,2.96],
		'rs':[20.68,43.89],
		'sc':[46.50,-9.74],
		'sm':[12.46,43.89],
		'st':[6.61,0.07],
		'to':[-176.20,-22.33],
		'tv':[179.90,-9.41],
		'vc':[-61.43,12.58],
		'ws':[-171.57,-13.93],
		'xk':[21.10,42.59]
	};
var worldCountryZH = {
		'ad':'安道尔',
		'ae':'阿拉伯联合酋长国',
		'af':'阿富汗',
		'ag':'安提瓜和巴布达',
		'ai':'安圭拉',
		'al':'阿尔巴尼亚',
		'am':'亚美尼亚',
		'ao':'安哥拉',
		'aq':'南极洲',
		'ar':'阿根廷',
		'as':'美属萨摩亚',
		'at':'奥地利',
		'au':'澳大利亚',
		'aw':'阿鲁巴',
		'ax':'奥兰群岛',
		'az':'阿塞拜疆',
		'ba':'波黑',
		'bb':'巴巴多斯',
		'bd':'孟加拉',
		'be':'比利时',
		'bf':'布基纳法索',
		'bg':'保加利亚',
		'bh':'巴林',
		'bi':'布隆迪',
		'bj':'贝宁',
		'bl':'圣巴泰勒米',
		'bm':'百慕大',
		'bn':'文莱',
		'bo':'玻利维亚',
		'bq':'博奈尔岛、圣尤斯达蒂斯和萨巴',
		'br':'巴西',
		'bs':'巴哈马',
		'bt':'不丹',
		'bw':'博茨瓦纳',
		'by':'白俄罗斯',
		'bz':'伯利兹',
		'ca':'加拿大',
		'cd':'扎伊尔',
		'cf':'中非共和国',
		'cg':'刚果',
		'ch':'瑞士',
		'ci':'象牙海岸',
		'ck':'库克群岛',
		'cl':'智利',
		'cm':'喀麦隆',
		'cn':'中国',
		'co':'哥伦比亚',
		'cr':'哥斯达黎加',
		'cu':'古巴',
		'cv':'佛得角',
		'cw':'库拉索',
		'cy':'塞浦路斯',
		'cz':'捷克共和国',
		'de':'德国',
		'dj':'吉布提',
		'dk':'丹麦',
		'dm':'多米尼克',
		'do':'多米尼加共和国',
		'dz':'阿尔及利亚',
		'ec':'厄瓜多尔',
		'ee':'爱沙尼亚',
		'eg':'埃及',
		'er':'厄立特里亚',
		'es':'西班牙',
		'et':'埃塞俄比亚',
		'fi':'芬兰',
		'fj':'斐济',
		'fk':'福克兰群岛',
		'fm':'密克罗尼西亚',
		'fo':'法罗群岛',
		'fr':'法国',
		'ga':'加蓬',
		'gb':'英国',
		'gd':'格林纳达',
		'ge':'格鲁吉亚',
		'gf':'法属圭亚那',
		'gg':'格恩西岛',
		'gh':'加纳',
		'gi':'直布罗陀',
		'gl':'格陵兰',
		'gm':'冈比亚',
		'gn':'几内亚',
		'gp':'瓜德罗普岛',
		'gq':'赤道几内亚',
		'gr':'希腊',
		'gt':'危地马拉',
		'gu':'关岛',
		'gw':'几内亚比绍',
		'gy':'圭亚那',
		'hn':'洪都拉斯',
		'hr':'克罗地亚',
		'ht':'海地',
		'hu':'匈牙利',
		'id':'印度尼西亚',
		'ie':'爱尔兰',
		'il':'以色列',
		'im':'曼岛',
		'in':'印度',
		'io':'英属印度洋领地',
		'iq':'伊拉克',
		'ir':'伊朗伊斯兰共和国',
		'is':'冰岛',
		'it':'意大利',
		'je':'泽西岛',
		'jm':'牙买加',
		'jo':'约旦',
		'jp':'日本',
		'ke':'肯尼亚',
		'kg':'吉尔吉克斯坦',
		'kh':'柬埔寨',
		'ki':'基里巴斯',
		'km':'科摩罗',
		'kn':'圣基茨和尼维斯',
		'kp':'朝鲜民主共和国',
		'kr':'韩国',
		'kw':'科威特',
		'ky':'开曼群岛',
		'kz':'哈萨克斯坦',
		'la':'老挝人民民主共和国',
		'lb':'黎巴嫩',
		'lc':'圣卢西亚',
		'li':'列支敦士登',
		'lk':'斯里兰卡',
		'lr':'利比里亚',
		'ls':'莱索托',
		'lt':'立陶宛',
		'lu':'卢森堡',
		'lv':'拉脱维亚',
		'ly':'阿拉伯利比亚民众国',
		'ma':'摩洛哥',
		'mc':'摩纳哥',
		'md':'摩尔多瓦共和国',
		'me':'黑山共和国',
		'mf':'圣马丁',
		'mg':'马达加斯加',
		'mh':'马绍尔群岛',
		'mk':'马其顿',
		'ml':'马里',
		'mm':'缅甸',
		'mn':'蒙古',
		'mo':'澳门',
		'mp':'北马里亚纳群岛',
		'mq':'马提尼克群岛',
		'mr':'毛里塔尼亚',
		'ms':'蒙塞拉特群岛',
		'mt':'马耳他',
		'mu':'毛里求斯',
		'mv':'马尔代夫',
		'mw':'马拉维',
		'mx':'墨西哥',
		'my':'马来西亚',
		'mz':'莫桑比克',
		'na':'纳米比亚',
		'nc':'新喀里多尼亚',
		'ne':'尼日尔',
		'nf':'诺福克岛',
		'ng':'尼日利亚',
		'ni':'尼加拉瓜',
		'nl':'荷兰',
		'no':'挪威',
		'np':'尼泊尔',
		'nr':'瑙鲁',
		'nu':'纽埃',
		'nz':'新西兰',
		'om':'阿曼',
		'pa':'巴拿马',
		'pe':'秘鲁',
		'pf':'法属波利尼西亚',
		'pg':'巴布亚新几内亚',
		'ph':'菲律宾',
		'pk':'巴基斯坦',
		'pl':'波兰',
		'pm':'圣皮埃尔和密克隆',
		'pr':'波多黎各',
		'ps':'巴勒斯坦领土',
		'pt':'葡萄牙',
		'pw':'帕劳',
		'py':'巴拉圭',
		'qa':'卡塔尔',
		're':'留尼汪',
		'ro':'罗马尼亚',
		'rs':'塞尔维亚',
		'ru':'俄罗斯',
		'rw':'卢旺达',
		'sa':'沙特阿拉伯',
		'sb':'所罗门群岛',
		'sc':'塞舌尔群岛',
		'sd':'苏丹',
		'se':'瑞典',
		'sg':'新加坡',
		'si':'斯洛文尼亚',
		'sj':'斯瓦尔巴特和扬马延',
		'sk':'斯洛伐克共和国',
		'sl':'塞拉利昂',
		'sm':'圣马力诺',
		'sn':'塞内加尔',
		'so':'索马里',
		'sr':'苏里南',
		'ss':'南苏丹',
		'st':'圣多美和普林西比',
		'sv':'萨尔瓦多',
		'sx':'圣马丁岛',
		'sy':'叙利亚',
		'sz':'斯威士兰',
		'tc':'特克斯和凯科斯群岛',
		'td':'乍得',
		'tg':'多哥',
		'th':'泰国',
		'tj':'塔吉克斯坦',
		'tk':'托克劳',
		'tl':'东帝汶',
		'tm':'土库曼斯坦',
		'tn':'突尼斯',
		'to':'汤加',
		'tr':'土耳其',
		'tt':'特立尼达和多巴哥',
		'tv':'图瓦卢',
		'tz':'坦桑尼亚',
		'ua':'乌克兰',
		'ug':'乌干达',
		'um':'美国边远小岛',
		'us':'美国',
		'uy':'乌拉圭',
		'uz':'乌兹别克斯坦',
		'va':'圣座（梵蒂冈）',
		'vc':'圣文森特和格林纳丁斯',
		've':'委内瑞拉',
		'vg':'英属维京群岛',
		'vi':'美属维京群岛',
		'vn':'越南',
		'vu':'瓦努阿图',
		'wf':'瓦利斯和富图纳',
		'ws':'萨摩亚',
		'xk':'科索沃',
		'ye':'也门',
		'yt':'马约特',
		'za':'南非',
		'zm':'赞比亚',
		'zw':'津巴布韦'
};
var worldCountryEN = {
		'ad':'Andorra',
		'ae':'United Arab Emirates',
		'af':'Afghanistan',
		'ag':'Antigua and Barbuda',
		'ai':'Anguilla',
		'al':'Albania',
		'am':'Armenia',
		'ao':'Angola',
		'aq':'Antarctica',
		'ar':'Argentina',
		'as':'American Samoa',
		'at':'Austria',
		'au':'Australia',
		'aw':'Aruba',
		'ax':'Åland',
		'az':'Azerbaijan',
		'ba':'Bosnia and Herzegovina',
		'bb':'Barbados',
		'bd':'Bangladesh',
		'be':'Belgium',
		'bf':'Burkina Faso',
		'bg':'Bulgaria',
		'bh':'Bahrain',
		'bi':'Burundi',
		'bj':'Benin',
		'bl':'Saint',
		'bm':'Bermuda',
		'bn':'Brunei',
		'bo':'Bolivia',
		'bq':'Bonaire',
		'br':'Brazil',
		'bs':'Bahamas',
		'bt':'Bhutan',
		'bw':'Botswana',
		'by':'Belarus',
		'bz':'Belize',
		'ca':'Canada',
		'cd':'Congo',
		'cf':'Central African Republic',
		'cg':'Republic of the Congo',
		'ch':'Switzerland',
		'ci':'Ivory Coast',
		'ck':'Cook Islands',
		'cl':'Chile',
		'cm':'Cameroon',
		'cn':'China',
		'co':'Colombia',
		'cr':'Costa Rica',
		'cu':'Cuba',
		'cv':'Cape Verde',
		'cw':'Curaçao',
		'cy':'Cyprus',
		'cz':'Czech Republic',
		'de':'Germany',
		'dj':'Djibouti',
		'dk':'Denmark',
		'dm':'Dominica',
		'do':'Dominican Republic',
		'dz':'Algeria',
		'ec':'Ecuador',
		'ee':'Estonia',
		'eg':'Egypt',
		'er':'Eritrea',
		'es':'Spain',
		'et':'Ethiopia',
		'fi':'Finland',
		'fj':'Fiji',
		'fk':'Falkland Islands',
		'fm':'Federated States of Micronesia',
		'fo':'Faroe Islands',
		'fr':'France',
		'ga':'Gabon',
		'gb':'United Kingdom',
		'gd':'Grenada',
		'ge':'Georgia',
		'gf':'French Guiana',
		'gg':'Guernsey',
		'gh':'Ghana',
		'gi':'Gibraltar',
		'gl':'Greenland',
		'gm':'Gambia',
		'gn':'Guinea',
		'gp':'Guadeloupe',
		'gq':'Equatorial Guinea',
		'gr':'Greece',
		'gt':'Guatemala',
		'gu':'Guam',
		'gw':'Guinea Bissau',
		'gy':'Guyana',
		'hn':'Honduras',
		'hr':'Croatia',
		'ht':'Haiti',
		'hu':'Hungary',
		'id':'Indonesia',
		'ie':'Ireland',
		'il':'Israel',
		'im':'Isle of Man',
		'in':'India',
		'io':'British Indian Ocean Territory',
		'iq':'Iraq',
		'ir':'Iran',
		'is':'Iceland',
		'it':'Italy',
		'je':'Jersey',
		'jm':'Jamaica',
		'jo':'Hashemite Kingdom of Jordan',
		'jp':'Japan',
		'ke':'Kenya',
		'kg':'Kyrgyzstan',
		'kh':'Cambodia',
		'ki':'Kiribati',
		'km':'Comoros',
		'kn':'Saint Kitts and Nevis',
		'kp':'North Korea',
		'kr':'Republic of Korea',
		'kw':'Kuwait',
		'ky':'Cayman Islands',
		'kz':'Kazakhstan',
		'la':'Laos',
		'lb':'Lebanon',
		'lc':'Saint Lucia',
		'li':'Liechtenstein',
		'lk':'Sri Lanka',
		'lr':'Liberia',
		'ls':'Lesotho',
		'lt':'Republic of Lithuania',
		'lu':'Luxembourg',
		'lv':'Latvia',
		'ly':'Libya',
		'ma':'Morocco',
		'mc':'Monaco',
		'md':'Republic of Moldova',
		'me':'Montenegro',
		'mf':'Saint Martin',
		'mg':'Madagascar',
		'mh':'Marshall Islands',
		'mk':'Macedonia',
		'ml':'Mali',
		'mm':'Myanmar (Burma)',
		'mn':'Mongolia',
		'mp':'Northern Mariana Islands',
		'mq':'Martinique',
		'mr':'Mauritania',
		'ms':'Montserrat',
		'mt':'Malta',
		'mu':'Mauritius',
		'mv':'Maldives',
		'mw':'Malawi',
		'mx':'Mexico',
		'my':'Malaysia',
		'mz':'Mozambique',
		'na':'Namibia',
		'nc':'New Caledonia',
		'ne':'Niger',
		'nf':'Norfolk Island',
		'ng':'Nigeria',
		'ni':'Nicaragua',
		'nl':'Netherlands',
		'no':'Norway',
		'np':'Nepal',
		'nr':'Nauru',
		'nu':'Niue',
		'nz':'New Zealand',
		'om':'Oman',
		'pa':'Panama',
		'pe':'Peru',
		'pf':'French Polynesia',
		'pg':'Papua New Guinea',
		'ph':'Philippines',
		'pk':'Pakistan',
		'pl':'Poland',
		'pm':'Saint Pierre and Miquelon',
		'pr':'Puerto Rico',
		'ps':'Palestine',
		'pt':'Portugal',
		'pw':'Palau',
		'py':'Paraguay',
		'qa':'Qatar',
		're':'Réunion',
		'ro':'Romania',
		'rs':'Serbia',
		'ru':'Russia',
		'rw':'Rwanda',
		'sa':'Saudi Arabia',
		'sb':'Solomon Islands',
		'sc':'Seychelles',
		'sd':'Sudan',
		'se':'Sweden',
		'sg':'Singapore',
		'si':'Slovenia',
		'sj':'Svalbard and Jan Mayen',
		'sk':'Slovak Republic',
		'sl':'Sierra Leone',
		'sm':'San Marino',
		'sn':'Senegal',
		'so':'Somalia',
		'sr':'Suriname',
		'ss':'South Sudan',
		'st':'São Tomé and Príncipe',
		'sv':'El Salvador',
		'sx':'Sint Maarten',
		'sy':'Syria',
		'sz':'Swaziland',
		'tc':'Turks and Caicos Islands',
		'td':'Chad',
		'tg':'Togo',
		'th':'Thailand',
		'tj':'Tajikistan',
		'tk':'Tokelau',
		'tl':'East Timor',
		'tm':'Turkmenistan',
		'tn':'Tunisia',
		'to':'Tonga',
		'tr':'Turkey',
		'tt':'Trinidad and Tobago',
		'tv':'Tuvalu',
		'tz':'Tanzania',
		'ua':'Ukraine',
		'ug':'Uganda',
		'um':'U.S. Minor Outlying Islands',
		'us':'United States',
		'uy':'Uruguay',
		'uz':'Uzbekistan',
		'va':'Vatican City',
		'vc':'Saint Vincent and the Grenadines',
		've':'Venezuela',
		'vg':'British Virgin Islands',
		'vi':'U.S. Virgin Islands',
		'vn':'Vietnam',
		'vu':'Vanuatu',
		'wf':'Wallis and Futuna',
		'ws':'Samoa',
		'xk':'Kosovo',
		'ye':'Yemen',
		'yt':'Mayotte',
		'za':'South Africa',
		'zm':'Zambia',
		'zw':'Zimbabwe'
	};
var provinces = {
    '福建': 'fujian',
    '广东': 'guangdong',
    '北京': 'beijing',
    '内蒙古': 'neimenggu',
    '贵州': 'guizhou',
    '宁夏': 'ningxia',
    '江苏': 'jiangsu',
    '安徽': 'anhui',
    '山东': 'shandong',
    '黑龙江': 'heilongjiang',
    '山西': 'shanxi',
    '陕西': 'shanxi1',
    '重庆': 'chongqing',
    '上海': 'shanghai',
    '广西': 'guangxi',
    '河南': 'henan',
    '天津': 'tianjin',
    '辽宁': 'liaoning',
    '云南': 'yunnan',
    '江西': 'jiangxi',
    '河北': 'hebei',
    '四川': 'sichuan',
    '浙江': 'zhejiang',
    '湖北': 'hubei',
    '海南': 'hainan',
    '吉林': 'jilin',
    '西藏': 'xizang',
    '甘肃': 'gansu',
    '湖南': 'hunan',
    '青海': 'qinghai',
    '新疆': 'xinjiang',
    '香港': 'xianggang',
    '澳门': 'aomen',
    '台湾': 'taiwan'
};
var provincesGeoData = {};
//defaultType 用于每小时刷新底部事件分布
var timer = null, refreshDateTimer = null, refreshAlarmTimer = null, myChart, option, currentDate,
	startDate, endDate, defaultType = 1;
var color = ['#03a2dc','#ae5d8d','#b75d3b'];
var machineAddress = [{name: '北京市', value: [116.4551,40.2539], hoverable: false, tooltip: {show:false}}];
var machineInChina = true;
var statisticDataFlag = true, realtimeAlarmFlag = true, topNFlag = true, worldConfig = "";

var convertMachine = function (addressData) {
	var res = [];
	for (var i = 0; i < addressData.length; i++) {
		var geoCoord = geoCoordMapAll[addressData[i].name];
		var name = addressData[i].name;
		if($.i18n.browserLang().indexOf("zh") > -1){
			name = worldCountryZH[name]==null?name:worldCountryZH[name];
		}else{
			name = worldCountryEN[name]==null?name:worldCountryEN[name];
		}
		if (geoCoord) {
			res.push({
				name: name,
				value: geoCoord
//                value: geoCoord.concat(addressData[i].value)
			});
		}
	}
	return res;
};
//转换数据，攻击坐标--》被攻击坐标 + 连接线样式
var convertData = function (data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var dataItem = data[i];
		var fromCoord;
		if (dataItem[2].name == 'Local') {
			fromCoord = geoCoordMapAll[dataItem[0].name];
		} else {
			fromCoord = geoCoordMapAll[dataItem[2].name];
		}
		var toCoord;
		if (dataItem[1].name == 'Local') {
			toCoord = geoCoordMapAll[dataItem[0].name];
		} else {
			toCoord = geoCoordMapAll[dataItem[1].name];
		}
        var pointValue = 8;
        if (dataItem[1].eventType > 7) {
            pointValue = 10;
        } else if (dataItem[1].eventType > 5) {
            pointValue = 9;
        }
		if (fromCoord && toCoord) {
			res.push({
				//fromName: dataItem[0].name,
				//toName: dataItem[1].name,
				coords: [toCoord,fromCoord],
				lineStyle: {
					normal: {
						color: color[pointValue-8] // 线颜色
					}
				}
			});
		}
	}
	return res;
};


//获得token
try{
	var stoken = localStorage.getItem("token") || (function(){
		var stok = "12345",
			href = top.location.href;
		var stokPos = href.indexOf("stok=");
		if (stokPos >= 0){
			stok = href.substring(stokPos+5);
		};
		return stok;
	})();
}catch(e){
	var h = function(){
		location.href = "/";
	};	
};

stoken = '?stok=' + stoken;

	

$(document).ready(function() {
	getDateConfig();
	getSystemDate();
	getWorldConfig("world");
	getTopN(defaultType);
	getStatisticData();
	realtimeAlarm();
	timer = setInterval(refreshAll, 1000*300);
	refreshAlarmTimer = setInterval(refreshAlarmList, 500);

    $('#event-bottom').on('mouseenter', function () {
        realtimeAlarmFlag = false;
    }).on('mouseleave', function () {
        realtimeAlarmFlag = true;
    });
});

/**
 * 按当天、按7天、按30天 按钮配置；0：当天、7天；1：7天、30天
 */
function getDateConfig() {
	$.ajax({
		url: '../../homepage/getDateConfig',
		type: 'GET'
	}).done(function(data){
		$.each($('#timechoose input'),function(i,d){
			if (data == 1) {
				if(i == 0){
					$(this).val('按7天');
				}else{
					$(this).val('按30天');
				}
			}
			$(this).click(function(){
				if (!$(this).hasClass("current")) {
                    $('#timechoose input').removeClass();
                    $(this).addClass("current");
                    if(i == 0){
                        dataInterval = data==1?7:1;
                    }else{
                        dataInterval = data==1?30:7;
                    }
                    refreshAll();
                    getTopN(defaultType);
                    getSystemDate();
				}
			});
		});
	});
}

function refreshAll(){
	getStatisticData();
	// getWorldMap();
	realtimeAlarm();
}

function getSystemDate(){
	$.ajax({
		url: '../../homepage/getSystemDate',
		type: 'GET'
	}).done(function(data){
		currentDate = new Date(data);
		$("#nowTime1").html(current1);
		// $("#nowTime2").html(current2);
        startDate = new Date();
        endDate = new Date(data);
        startDate.setDate(currentDate.getDate() - (dataInterval - 1));
        startDate = startDate.Format("yyyy-MM-dd");
        endDate = endDate.Format("yyyy-MM-dd");
		if (refreshDateTimer == null)
        	refreshDateTimer = setInterval(refreshDate, 1000);
	});
}
function current1(){
	var str = '';

	if (dataInterval > 1) {
		var startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() - (dataInterval - 1));
        startDate = startDate.Format("yyyy年M月d日");
        str += startDate + '-';
	}

	var endDate = new Date(currentDate);
    endDate = endDate.Format("yyyy年M月d日");
    str += endDate;
	return str;
}
function current2(){
	var hh = currentDate.getHours();
	var mm = currentDate.getMinutes();
	if(mm < 10) mm = '0' + mm;
	var ss = currentDate.getSeconds();
	if(ss < 10) ss = '0' + ss;
	return hh + ":" + mm + ":" + ss;
}
function refreshDate(){
	var oldHour = currentDate.getHours();
	currentDate = new Date(currentDate.getTime() + 1000);
	var currentHour = currentDate.getHours();
	//每小时刷新一次
	if(oldHour != currentHour) {
		getTopN(defaultType);
        $("#nowTime1").html(current1);
    }
	// $("#nowTime2").html(current2);
}

function getStatisticData(){
	if (statisticDataFlag) {
		statisticDataFlag = false;
		$.ajax({
			url: '../../homepage/getCurStatByType/'+ dataInterval + stoken,
			type: 'GET'
		}).done(function(data){
			statisticDataFlag = true;
			for(var i = 1; i <= 12; i++){
				eval("$('#s" + i + "Total').html(0)");
			}
			$.each(data, function(i,d){  //$('#s7Total').html('600M')
				if (d.type == 12 && d.count == 0)
				    eval("$('#s" + d.type + "Total').html(" + "'" + "<font color=\"red\">异常</font>" + "')");
				else if (d.type == 12 && d.count == 1)
				    eval("$('#s" + d.type + "Total').html(" + "'" + "<font color=\"read\">正常</font>" + "')");    
				else if (d.type > 6 && d.type < 10)
				    eval("$('#s" + d.type + "Total').html(" + "'" + d.count  + "%')");
				else if (d.type == 5 && d.count <= 1000)
				    eval("$('#s" + d.type + "Total').html(" + "'" + d.count  + "M')");  
				else if (d.type == 5 && d.count > 1000)
				    eval("$('#s" + d.type + "Total').html(" + "'" + Math.ceil(d.count/1000)  + "G')");       
				else 
				    eval("$('#s" + d.type + "Total').html(" + d.count + ")");
			});
		}).fail(function () {
			statisticDataFlag = true;
		});
	}
}
//根据中国或世界来配置地图
function getWorldConfig(worldMap){
	if (worldMap == worldConfig) {
		return;
	}
	$("#unfold-map").html("");
	worldConfig = worldMap;
	//获取设备部署地址
	$.ajax({
		url: '../../network/getCountryPosition',
		type: 'GET'
	}).done(function(data){
		if(data != null && data.length > 0){
            machineAddress[0].name = data.split('-')[1];
            if(data.split('-')[0] == 'cn'){
				machineInChina = true;

			}else{
				machineInChina = false;
			}
			var geoCoord = geoCoordMapAll[machineAddress[0].name];
			machineAddress[0].value = geoCoord;
            geoCoordMapAll['00'] = geoCoord;
            worldCountryZH['00'] = worldCountryZH[machineAddress[0].name];
            worldCountryEN['00'] = worldCountryEN[machineAddress[0].name];
		}

		var mZoom = 1;
		var mCenter = "";
		var showCountryName = true;
		if (worldMap == "world") {
		// 	mZoom = 2.5;
		// 	mCenter = machineAddress[0].value;
			showCountryName = false;
		}
		var dom = document.getElementById("unfold-map");
		myChart = echarts.init(dom);
		var planePath = 'image://../../images/page/point1.png';

        var attackData = [];
		var series = [];//攻击线路数据集
		//[[machineAddress[0].name, attackData]].forEach(function (item, i) {
		series.push(
			// 画出路径
			{
				//name: item[0] + ' Top10',
				type: 'lines',
				zlevel: 1,
				// animation: true,
				effect: {
					show: true,
                    // period: 2,
					trailLength: 0.7,
					// symbol: 'arrow',
					symbolSize: 5
					// loop: false
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				// geoCoord: geoCoordMapAll,
				data: convertData(attackData)
			},

			// 画出闪光点
			{
//		        name: item[0] + ' Top10',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				animation: true,
				rippleEffect: {
					brushType: 'stroke'
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						formatter: '{b}'
					}
				},
				symbol: 'none',
				symbolSize: 15,
//		        itemStyle: {
//		            normal: {
//		                color: color[0]
//		            }
//		        },
				data: attackData.map(function (dataItem) {
					return {
						symbol: 'image://../../images/page/point'+dataItem[1].eventType+'.png',
						name: dataItem[1].name,
						value: geoCoordMapAll[dataItem[1].name].concat([dataItem[1].value]),
						itemStyle: {
							normal: {
								color: color[dataItem[1].eventType-1]
							}
						}
					};
				})
			});
		//});
		//加入设备地址
		series.push(
			{
				name: '',
				type: 'scatter',
				coordinateSystem: 'geo',
				data: convertMachine(machineAddress),
				symbol:'pin',
				symbolSize: 30,
				label: {
					normal: {
						formatter: function(){
							if(machineInChina)
							{
								return machineAddress[0].name;
							}
							if($.i18n.browserLang().indexOf("zh") > -1){
								return worldCountryZH['00'];
							}else{
								return worldCountryEN['00'];
							}
						},
						position: 'right',
						show: true
					}
				},
				itemStyle: {
					normal: {
						color: 'rgba(255, 255, 255, 0.5)',
						shadowBlur: 10,
						shadowColor: '#333'
					}
				},
				zlevel: 1
			}
		);
		//攻击项
		option = {
			 backgroundColor: '#181f32',
			tooltip : {
				trigger: 'item',
				show: false,
				formatter: function (params) {
					var str = params.data.name;
					if(params.data.total){
						str += '<br/>' + eventTypeMap[params.data.eventType]
							+ '<br/>攻击次数：' + params.data.total;
					}
					return str;
				}
			},
			geo: {
				map: worldMap,
				label: {
					normal: {
					   show: showCountryName,
						areaColor:"#CECECE",
						borderColor:"#FCFCFC",
						borderWidth:"1",
						textStyle: {
						color: 'rgba(255, 255, 255, 0.5)'
						}
					},
					emphasis: {
						show: true,
						textStyle: {
						color: 'rgba(255, 255, 255, 0.5)'
						}
					}
				},
				roam: true,     /*是否开启鼠标缩放和平移漫游 true 为都开启*/
				center: mCenter,/*当前视角的中心点，用经纬度表示*/
				zoom: mZoom,/*当前视角的缩放比例*/
                scaleLimit:{
                    max:10,
                    min: mZoom
                },
                itemStyle: {
					normal: {
						areaColor: 'rgba(10, 93, 173, 0.3)',
						borderColor: 'rgba(76, 88, 121, 0.7)'
					},
					emphasis: {
						areaColor: 'rgba(111, 169, 217, 0.5)'
					}
				}

			},
			series: series,
			nameMap : {
				'Andorra':'安道尔',
				'United Arab Emirates':'阿拉伯联合酋长国',
				'Afghanistan':'阿富汗',
				'Antigua and Barbuda':'安提瓜和巴布达',
				'Anguilla':'安圭拉',
				'Albania':'阿尔巴尼亚',
				'Armenia':'亚美尼亚',
				'Angola':'安哥拉',
				'Antarctica':'南极洲',
				'Argentina':'阿根廷',
				'American Samoa':'美属萨摩亚',
				'Austria':'奥地利',
				'Australia':'澳大利亚',
				'Aruba':'阿鲁巴',
				'Åland':'奥兰群岛',
				'Azerbaijan':'阿塞拜疆',
				'Bosnia and Herzegovina':'波黑',
				'Barbados':'巴巴多斯',
				'Bangladesh':'孟加拉',
				'Belgium':'比利时',
				'Burkina Faso':'布基纳法索',
				'Bulgaria':'保加利亚',
				'Bahrain':'巴林',
				'Burundi':'布隆迪',
				'Benin':'贝宁',
				'Saint':'圣巴泰勒米',
				'Bermuda':'百慕大',
				'Brunei':'文莱',
				'Bolivia':'玻利维亚',
				'Bonaire':'博奈尔岛、圣尤斯达蒂斯和萨巴',
				'Brazil':'巴西',
				'Bahamas':'巴哈马',
				'Bhutan':'不丹',
				'Botswana':'博茨瓦纳',
				'Belarus':'白俄罗斯',
				'Belize':'伯利兹',
				'Canada':'加拿大',
				'Congo':'扎伊尔',
				'Central African Republic':'中非共和国',
				'Republic of the Congo':'刚果',
				'Switzerland':'瑞士',
				'Ivory Coast':'象牙海岸',
				'Cook Islands':'库克群岛',
				'Chile':'智利',
				'Cameroon':'喀麦隆',
				'China':'中国',
				'Colombia':'哥伦比亚',
				'Costa Rica':'哥斯达黎加',
				'Cuba':'古巴',
				'Cape Verde':'佛得角',
				'Curaçao':'库拉索',
				'Cyprus':'塞浦路斯',
				'Czech Republic':'捷克共和国',
				'Germany':'德国',
				'Djibouti':'吉布提',
				'Denmark':'丹麦',
				'Dominica':'多米尼克',
				'Dominican Republic':'多米尼加共和国',
				'Algeria':'阿尔及利亚',
				'Ecuador':'厄瓜多尔',
				'Estonia':'爱沙尼亚',
				'Egypt':'埃及',
				'Eritrea':'厄立特里亚',
				'Spain':'西班牙',
				'Ethiopia':'埃塞俄比亚',
				'Finland':'芬兰',
				'Fiji':'斐济',
				'Falkland Islands':'福克兰群岛',
				'Federated States of Micronesia':'密克罗尼西亚',
				'Faroe Islands':'法罗群岛',
				'France':'法国',
				'Gabon':'加蓬',
				'United Kingdom':'英国',
				'Grenada':'格林纳达',
				'Georgia':'格鲁吉亚',
				'French Guiana':'法属圭亚那',
				'Guernsey':'格恩西岛',
				'Ghana':'加纳',
				'Gibraltar':'直布罗陀',
				'Greenland':'格陵兰',
				'Gambia':'冈比亚',
				'Guinea':'几内亚',
				'Guadeloupe':'瓜德罗普岛',
				'Equatorial Guinea':'赤道几内亚',
				'Greece':'希腊',
				'Guatemala':'危地马拉',
				'Guam':'关岛',
				'Guinea Bissau':'几内亚比绍',
				'Guyana':'圭亚那',
				'Honduras':'洪都拉斯',
				'Croatia':'克罗地亚',
				'Haiti':'海地',
				'Hungary':'匈牙利',
				'Indonesia':'印度尼西亚',
				'Ireland':'爱尔兰',
				'Israel':'以色列',
				'Isle of Man':'曼岛',
				'India':'印度',
				'British Indian Ocean Territory':'英属印度洋领地',
				'Iraq':'伊拉克',
				'Iran':'伊朗伊斯兰共和国',
				'Iceland':'冰岛',
				'Italy':'意大利',
				'Jersey':'泽西岛',
				'Jamaica':'牙买加',
				'Hashemite Kingdom of Jordan':'约旦',
				'Japan':'日本',
				'Kenya':'肯尼亚',
				'Kyrgyzstan':'吉尔吉克斯坦',
				'Cambodia':'柬埔寨',
				'Kiribati':'基里巴斯',
				'Comoros':'科摩罗',
				'Saint Kitts and Nevis':'圣基茨和尼维斯',
				'North Korea':'朝鲜民主共和国',
				'Republic of Korea':'韩国',
				'Kuwait':'科威特',
				'Cayman Islands':'开曼群岛',
				'Kazakhstan':'哈萨克斯坦',
				'Laos':'老挝人民民主共和国',
				'Lebanon':'黎巴嫩',
				'Saint Lucia':'圣卢西亚',
				'Liechtenstein':'列支敦士登',
				'Sri Lanka':'斯里兰卡',
				'Liberia':'利比里亚',
				'Lesotho':'莱索托',
				'Republic of Lithuania':'立陶宛',
				'Luxembourg':'卢森堡',
				'Latvia':'拉脱维亚',
				'Libya':'阿拉伯利比亚民众国',
				'Morocco':'摩洛哥',
				'Monaco':'摩纳哥',
				'Republic of Moldova':'摩尔多瓦共和国',
				'Montenegro':'黑山共和国',
				'Saint Martin':'圣马丁',
				'Madagascar':'马达加斯加',
				'Marshall Islands':'马绍尔群岛',
				'Macedonia':'马其顿',
				'Mali':'马里',
				'Myanmar (Burma)':'缅甸',
				'Mongolia':'蒙古',
				'Northern Mariana Islands':'北马里亚纳群岛',
				'Martinique':'马提尼克群岛',
				'Mauritania':'毛里塔尼亚',
				'Montserrat':'蒙塞拉特群岛',
				'Malta':'马耳他',
				'Mauritius':'毛里求斯',
				'Maldives':'马尔代夫',
				'Malawi':'马拉维',
				'Mexico':'墨西哥',
				'Malaysia':'马来西亚',
				'Mozambique':'莫桑比克',
				'Namibia':'纳米比亚',
				'New Caledonia':'新喀里多尼亚',
				'Niger':'尼日尔',
				'Norfolk Island':'诺福克岛',
				'Nigeria':'尼日利亚',
				'Nicaragua':'尼加拉瓜',
				'Netherlands':'荷兰',
				'Norway':'挪威',
				'Nepal':'尼泊尔',
				'Nauru':'瑙鲁',
				'Niue':'纽埃',
				'New Zealand':'新西兰',
				'Oman':'阿曼',
				'Panama':'巴拿马',
				'Peru':'秘鲁',
				'French Polynesia':'法属波利尼西亚',
				'Papua New Guinea':'巴布亚新几内亚',
				'Philippines':'菲律宾',
				'Pakistan':'巴基斯坦',
				'Poland':'波兰',
				'Saint Pierre and Miquelon':'圣皮埃尔和密克隆',
				'Puerto Rico':'波多黎各',
				'Palestine':'巴勒斯坦领土',
				'Portugal':'葡萄牙',
				'Palau':'帕劳',
				'Paraguay':'巴拉圭',
				'Qatar':'卡塔尔',
				'Réunion':'留尼汪',
				'Romania':'罗马尼亚',
				'Serbia':'塞尔维亚',
				'Russia':'俄罗斯',
				'Rwanda':'卢旺达',
				'Saudi Arabia':'沙特阿拉伯',
				'Solomon Islands':'所罗门群岛',
				'Seychelles':'塞舌尔群岛',
				'Sudan':'苏丹',
				'Sweden':'瑞典',
				'Singapore':'新加坡',
				'Slovenia':'斯洛文尼亚',
				'Svalbard and Jan Mayen':'斯瓦尔巴特和扬马延',
				'Slovak Republic':'斯洛伐克共和国',
				'Sierra Leone':'塞拉利昂',
				'San Marino':'圣马力诺',
				'Senegal':'塞内加尔',
				'Somalia':'索马里',
				'Suriname':'苏里南',
				'South Sudan':'南苏丹',
				'São Tomé and Príncipe':'圣多美和普林西比',
				'El Salvador':'萨尔瓦多',
				'Sint Maarten':'圣马丁岛',
				'Syria':'叙利亚',
				'Swaziland':'斯威士兰',
				'Turks and Caicos Islands':'特克斯和凯科斯群岛',
				'Chad':'乍得',
				'Togo':'多哥',
				'Thailand':'泰国',
				'Tajikistan':'塔吉克斯坦',
				'Tokelau':'托克劳',
				'East Timor':'东帝汶',
				'Turkmenistan':'土库曼斯坦',
				'Tunisia':'突尼斯',
				'Tonga':'汤加',
				'Turkey':'土耳其',
				'Trinidad and Tobago':'特立尼达和多巴哥',
				'Tuvalu':'图瓦卢',
				'Tanzania':'坦桑尼亚',
				'Ukraine':'乌克兰',
				'Uganda':'乌干达',
				'U.S. Minor Outlying Islands':'美国边远小岛',
				'United States':'美国',
				'Uruguay':'乌拉圭',
				'Uzbekistan':'乌兹别克斯坦',
				'Vatican City':'圣座（梵蒂冈）',
				'Saint Vincent and the Grenadines':'圣文森特和格林纳丁斯',
				'Venezuela':'委内瑞拉',
				'British Virgin Islands':'英属维京群岛',
				'U.S. Virgin Islands':'美属维京群岛',
				'Vietnam':'越南',
				'Vanuatu':'瓦努阿图',
				'Wallis and Futuna':'瓦利斯和富图纳',
				'Samoa':'萨摩亚',
				'Kosovo':'科索沃',
				'Yemen':'也门',
				'Mayotte':'马约特',
				'South Africa':'南非',
				'Zambia':'赞比亚',
				'Zimbabwe':'津巴布韦',
				'Vatican':'梵蒂冈',
				'Kerguelen':'法国属地-凯尔盖朗群岛（克尔格伦群岛）',
				'New Caledonia':'法国属地-新喀里多尼亚',
				'Northern Cyprus':'北塞浦路斯',
				'Tristan da Cunha':'英国-特里斯坦-达库尼亚群岛',
				'Kashmir':'克什米尔',
				'Puerto Rico':'美国-波多黎各',
				'Western Sahara':'西撒哈拉',
				'Somaliland':'索马里兰'

			}
		};
		if (option && typeof option == "object") {
			myChart.setOption(option, true);
		}
        initWorldMap();
	});
}

var worldMapData = [];
//世界地图
//type 1植入事件 2失陷事件
function initWorldMap(){
	$.ajax({
		url: '../../homepage/getCurStatByCountry/' + machineInChina + '/' + 1 + stoken,
		type: 'GET'
	}).done(function(data){
		worldMapData = data;
		//setWorldMapData();
        setInterval(setWorldMapData, 4600);
	}).fail(function () {
		initWorldMap();
	});
}

//世界地图
//type 1植入事件 2失陷事件
function setWorldMapData(){
    if (worldMapData.length == 0) return;
	var attackData1 = [];
	// 攻击国家，有可能不包含全部的被攻击国家
	// 用于记录所有的国家，去除攻击国家中相同数据之后，显示被攻击图标
	var countryMap = {};
	var attackCountryMap = {};
    $.each(worldMapData, function(i,d){
		if(machineInChina && (d.ascountry == 'cn'||d.ascountry == '00')){
			attackCountryMap[d.asregdetail] = 1;
			var dname = (d.adcountry=='cn'||d.adcountry == '00')?d.adregdetail:d.adcountry;
			countryMap[d.asregdetail] = 1;
			countryMap[dname] = 1;
			attackData1.push([{name: machineAddress[0].name}, {name:d.asregdetail,eventType:d.eventType,isCN:true}, {name: dname}]);
		}else{
			var dname =d.adcountry;
			if(machineInChina)
			{
				dname = (d.adcountry=='cn'||d.adcountry == '00')?d.adregdetail:d.adcountry;
			}
			attackCountryMap[d.ascountry] = 1;
			countryMap[d.ascountry] = 1;
			countryMap[dname] = 1;
			attackData1.push([{name: machineAddress[0].name}, {name:d.ascountry,eventType:d.eventType,isCN:false}, {name: d.adcountry}]);
		}
	});

	//将已存在于攻击国家中的值去除
	$.each(attackCountryMap, function (key, value) {
		if (countryMap[key] && countryMap[key] == 1)
			countryMap[key] = 0;
	});
	// 防止中国和cn显示重复
	if (attackCountryMap['cn'] || attackCountryMap['中国']) {
		countryMap['cn'] = 0;
		countryMap['中国'] = 0;
	} else if (countryMap['cn']) {
		countryMap['中国'] = 0;
	}

	option = myChart.getOption();

	option.series[0].data = convertData(attackData1);
	//修改数组中的值
	var series1Data = attackData1.map(function (dataItem) {
		var name = dataItem[1].name=='Local'?dataItem[0].name:dataItem[1].name;
		var value;
		if (worldConfig != 'world' && worldConfig != 'china') {
			value = provincesGeoData[dataItem[1].name];
		} else {
			value = geoCoordMapAll[dataItem[1].name=='Local'?dataItem[0].name:dataItem[1].name];
		}
		if(!dataItem[1].isCN){
			if($.i18n.browserLang().indexOf("zh") > -1){
				name = worldCountryZH[name];
			}else{
				name = worldCountryEN[name];
			}
		}
		
		
		var pointValue = 8;
		if (dataItem[1].eventType > 7) {
			pointValue = 10;
		} else if (dataItem[1].eventType > 5) {
			pointValue = 9;
		}
		return {
			symbol: 'image://../../images/page/point'+pointValue+'.png',
			name: name,
			value: value,
			eventType: dataItem[1].eventType,
			itemStyle: {
				normal: {
					color: color[pointValue-8]
				}
			}
		};
	});

	$.each(countryMap, function (key, value) {
		if (value == 1) {
			var name= key;
			if($.i18n.browserLang().indexOf("zh") > -1){
				name = worldCountryZH[key]==null?key:worldCountryZH[key];
			}else{
				name = worldCountryEN[key]==null?key:worldCountryEN[key];
			}
			
			series1Data.push({
				symbol: 'pin',
				name: name,
				value: geoCoordMapAll[key],
				itemStyle: {
					normal: {
						color: '#fff'
					}
				}
			});
		}
	});

	option.series[1].data = series1Data;

	myChart.setOption(option);
}

//type 1植入事件 2失陷事件
function getTopN(type, obj){
	if (topNFlag) {
		topNFlag = false;
		defaultType = type;
		if(obj != null) {
			if(!$(obj).hasClass("active")){
				$("#nav-tabs-prime li").removeClass("active");
				$(obj).addClass("active");
			}
		}
        if (type == 3) {
            $('#topNTabPane1').hide();
            $('#topNTabPane2').show().find('tbody').html('加载中...');
        } else {
            $('#topNTabPane1').show().find('tbody').html('加载中...');
            $('#topNTabPane2').hide();
        }
		$.ajax({
			url: '../../homepage/getTopNStat/' + type + '/' + dataInterval + stoken,
			type: 'GET'
		}).done(function(data){
            var startDate = new Date();
            var endDate = new Date();
            startDate.setDate(startDate.getDate() - (dataInterval - 1));
            startDate = startDate.Format("yyyy-MM-dd");
            endDate = endDate.Format("yyyy-MM-dd");

            var asipList = data.asipList;
			if (type == 3) {
				$('#topNTabPane2').find('tbody').html('');

                var sipList = data.sipList;
                var resipList = data.resipList;
                var dmList = data.dmList;

                $.each(sipList, function(i,d){
                    //var url = "../attack/abnormal_behavior.html?sip=" + d.content1 + "&startDate=" + startDate + "&endDate=" + endDate + '&eventType=HT#f_ht&tab_dt';
                    var url = "/webpages/index.html?atk-log&sip=" + d.content1 + "&startDate=" + startDate + "&endDate=" + endDate + '&eventType=HT#f_ht&tab_dt';
                    url = encodeURI(encodeURI(url));

                    var tr = document.createElement("tr");
                    tr.addEventListener('click', function () {
                        window.location.href = url;
                    });

                    var td1 = document.createElement("td");
                    td1.innerHTML = d.content1;
                    if (d.assetNameMap && d.assetNameMap.ip) {
                        setAssetSpan(td1, d.assetNameMap.ip);
                    }
                    tr.appendChild(td1);
                    
                     var str = '<td>' + d.content2 + '</td><td><span class="flag" title="'
                    + d.content4 + '"><span class="flag_'
                    + d.content3 + '"></span>' + convertRegdetail(d.content4) + '</span></td>';

                   // var str = '<td>' + formatNum(d.content2) + '</td>';  str = str + '<td>' + d.content4 +'</td>';
                    $(tr).append(str);
                    $("#topNReqip").find('tbody').append(tr);
                });

                $.each(resipList, function(i,d){
                    var url = "../attack/abnormal_behavior.html?dip=" + d.content1 + "&startDate=" + startDate + "&endDate=" + endDate + '&eventType=HT#f_ht&tab_dt';
                    url = encodeURI(encodeURI(url));

                    var tr = document.createElement("tr");
                    tr.addEventListener('click', function () {
                        window.location.href = url;
                    });

                    var td1 = document.createElement("td");
                    td1.innerHTML = d.content1;
                    if (d.assetNameMap && d.assetNameMap.ip) {
                        setAssetSpan(td1, d.assetNameMap.ip);
                    }
                    tr.appendChild(td1);

                    var str = '<td>' + formatNum(d.content2) + '</td>';  str = str + '<td>' + d.content4 +'</td>';
                    $(tr).append(str);
                    $("#topNResip").find('tbody').append(tr);
                });
                
                $.each(dmList, function(i,d){
                    var url = "../attack/abnormal_behavior.html?dm=" + d.content1 + "&startDate=" + startDate + "&endDate=" + endDate + '&eventType=DGA#f_cmmt&tab_dga';
                    url = encodeURI(encodeURI(url));

                    var tr = document.createElement("tr");
                    tr.addEventListener('click', function () {
                        window.location.href = url;
                    });

                    var td1 = document.createElement("td");
                    td1.innerHTML = d.content1;
                    if (d.assetNameMap && d.assetNameMap.ip) {
                        setAssetSpan(td1, d.assetNameMap.ip);
                    }
                    tr.appendChild(td1);

                    var str = '<td>' + formatNum(d.content2) + '</td>';  str = str + '<td>' + d.content4 +'</td>';
                    $(tr).append(str);
                    $("#topDGA").find('tbody').append(tr);
                });
			} else {
                $('#topNTabPane1').find('tbody').html('');

                var adipList = data.adipList;
                var countryList = data.countryList;

                $.each(adipList, function(i,d){
                	
                	
                    //var url = "warn.html?adip=" + d.content1 + "&eventTypes=" + convertType(type) + "&startDate=" + startDate + "&endDate=" + endDate;
                    if (type == 1)
                        var url = "/webpages/index.html?atk-log&sip=" + d.content1 + "&startDate=" + startDate + "&endDate=" + endDate + '&eventType=HT#f_ht&tab_dt';
                    else 
                    	  var url = "/webpages/index.html?atk-trend";   
                    url = encodeURI(encodeURI(url));

                    var tr = document.createElement("tr");
                    tr.addEventListener('click', function () {
                        window.location.href = url;
                    });

                    var td1 = document.createElement("td");
                    td1.innerHTML = d.content1;
                    if (d.assetNameMap && d.assetNameMap.ip) {
                        setAssetSpan(td1, d.assetNameMap.ip);
                    }
                    tr.appendChild(td1);

                    var str = '<td>' + formatNum(d.content2) + '</td><td><span class="flag" title="'
                        + d.content4 + '"><span class="flag_'
                        + d.content3 + '"></span>' + convertRegdetail(d.content4) + '</span></td>';
                    $(tr).append(str);
                    $("#topNAdip").find('tbody').append(tr);
                });

                $.each(countryList, function(i,d){
                	var url ;
                	if(machineInChina)
            		{
                		url="warn.html?asregdetail=" + d.content2 + "&eventTypes=" + convertType(type)  + "&startDate=" + startDate + "&endDate=" + endDate;
            		}else
        			{
            			url="warn.html?ascountry=" + d.content1 + "&eventTypes=" + convertType(type)  + "&startDate=" + startDate + "&endDate=" + endDate;
        			}
                     
                	if(d.haveLocal){
                		url +="&haveLocal="+d.haveLocal;
                	}
                	
                    url = encodeURI(encodeURI(url));

                    var tr = document.createElement("tr");
                    tr.addEventListener('click', function () {
                        //window.location.href = url;
                    });

                    var str = '<td><span class="flag"><span class="flag_' + d.content1 + '"></span>'
                        + convertLocal(d.content2,d.content1) + '</span></td><td>' + formatNum(d.content3) + '</td>';
                    $(tr).append(str);
                    $("#topNCountry").find('tbody').append(tr);
                });
			}
            $.each(asipList, function(i,d){
                var url = "warn.html?asip=" + d.content1 + "&eventTypes=" + convertType(type)  + "&startDate=" + startDate + "&endDate=" + endDate;
                if (type == 1) 
                     var url = "/webpages/index.html?atk-log&sip=" + d.content1 + "&startDate=" + startDate + "&endDate=" + endDate + '&type=1';
                if (type == 2)      
                  var url = "/webpages/index.html?atk-trend";      
                    
                  
				       //url = "../../../webpages/index.html?atk-log";  
                url = encodeURI(encodeURI(url));

                var tr = document.createElement("tr");
                tr.addEventListener('click', function () {
                    window.location.href = url;
                });

                var td1 = document.createElement("td");
                td1.innerHTML = d.content1;
                if (d.assetNameMap && d.assetNameMap.ip) {
                    setAssetSpan(td1, d.assetNameMap.ip);
                }
                tr.appendChild(td1);
                
                if (type == 1) { 
                    var str = '<td>' + formatNum(d.content2) + '</td><td><span class="flag" title="'
                    + d.content4 + '"><span class="flag_'
                    + d.content3 + '"></span>' + convertRegdetail(d.content4) + '</span></td>';
                    
                } else {                    	
                   var str = '<td>' + formatNum(d.content2) + '</td><td>'   + d.content3 + '</td>';
                }    
                $(tr).append(str);
				$("#topNAsip" + (type == 3 ? 'File' : '')).find('tbody').append(tr);
            });
            topNFlag = true;
		}).fail(function () {
			topNFlag = true;
		});
	}
}

function setAssetSpan(td, name) {
    var span = document.createElement("span");
    $(span).addClass('icon icon-asset2').css('position', 'relative');
    span.innerHTML = '<div class="asset-wrap2" style="display: none;"><div class="asset-des2"><h3>资产名</h3><p>'
        + name + '</p></div></div>';
    span.addEventListener('mouseenter', function () {
        $(this).children('div').show();
    });
    span.addEventListener('mouseleave', function () {
        $(this).children('div').hide();
    });
    td.appendChild(span);
}

function convertRegdetail(content) {
	  var pos = content.indexOf('省');
	  if (pos > 0) {
	  	  var s = content.substr(pos + 1); 
	  	  if (s.length > 2)
	  	      content = s;	  	
	  }
    if (content.indexOf('中国-') != -1) {
        content = content.replace('中国-', '');
    }
    if(content=='Local')
    {
    	content='内部网络';
    }
    if(content == 'Not Available'){
    	content = '未知';
    }
    return cutStr(content, 8);
}



function convertLocal(content,country) {
	
	if(!machineInChina)
	{
		content = content.split('-')[0];
	}
	
    if(content=='Local')
    {
    	return worldCountryZH[country];
    }
    return content;
}

function realtimeAlarm(){
	if (realtimeAlarmFlag) {
		realtimeAlarmFlag = false;
		$.ajax({
			type : "GET",
			url : '../../homepage/getRealTimeAlarm/' + maxAlarmId + stoken
		}).done(function(data, textStatus, jqXHR) {
			var currentLis = $("#alarmUl>li");
			if(data.length > 0){
				// $('#alarmUl').children('div').remove();
				$.each(data,function(i,d){
					if (alarmQueue.length < 100) alarmQueue.push(d);
					maxAlarmId = maxAlarmId > d.id ? maxAlarmId : d.id;
                });
			}
			// else {
			// 	if (currentLis.length == 0) {
			// 		$('#alarmUl').html('<div style="text-align: center;marginTop:25px;"><img src="../../images/icon-empty-alarm1.png"><p style="color: #667084; padding-top: 5px;">暂无告警信息</p></div>');
			// 	}
			// }
            realtimeAlarmFlag = true;
		}).fail(function () {
			realtimeAlarmFlag = true;
		});
	}
}

function refreshAlarmList() {
	if (realtimeAlarmFlag && alarmQueue.length > 0) {
		var d = alarmQueue.shift();

        // unknownType 2  为黑 DNS 事件，不在地图炮上显示
        if (d.unknownType != 2) {
			var hasAlarm = true;
			if (worldMapData.length > 0) {
				$.each(worldMapData, function(i,d1){
					if (d.ascountry == d1.ascountry && d.adcountry == d1.adcountry) {
						hasAlarm = false;
						return false;
					}
				});
			}

			if (hasAlarm) {
				if (worldMapData.length >= 20) {
					worldMapData.shift();
				}
				worldMapData.push(d);
			}
		}

        var level = '高危', type = '文件检测', risk = 1;
        if (d.level == 3) {
            level = '中危';
        } else if(d.level == 2) {
            level = '低危';
        }
        if (d.type == 2) {
            type = '流量行为';
        }
        if (d.eventType > 5 && d.eventType < 8) {
            risk = 2;
        }
        var datetime = (new Date(d.lastTime)).Format("yyyy-MM-dd hh:mm:ss");
        var time = (new Date(d.lastTime)).Format("hh:mm:ss");

        //var url = 'warn.html?id=' + d.id;
        var url = '/webpages/index.html?atk-log&sip=' + d.asip;
        var li = document.createElement('li');
        $(li).append('<h6>' + time + '</h6>');

        //攻击者ip为4个0或255的，告警中攻击者ip显示为空
        var attackIp = d.asip;
        if (attackIp == '0.0.0.0' || attackIp == '255.255.255.255') {
        	attackIp = '';
		}

        var span = document.createElement('span');
        /*var spanStr = '<div class="asset-wrap3" style="display: none;"><div class="asset-des3"><h3>' + datetime + '</h3>'
            + '<p>检测到&nbsp;<span class="level' + d.level + '">' + level + '</span>【'
            + eventTypeMap[d.eventType] + '】事件</p><ol><li>该事件总共发生：【' + d.total + '】次</li>'
            + '<li>受害者为：【' + d.adip + '】</li><li>攻击者IP为：【' + attackIp + '】</li>'
            + '<li>来源于 :<span class="flag"><span class="flag_'+ d.ascountry + '"></span>' + convertRegdetail(d.asregdetail)
            + '</span></li><li>协议为：【' + d.protocol + '】</li><li>检测方式为：【' + type + '】</li>'
            + '<li>参考信息：【' + d.description + '】</li></ol></div></div><img src="../../images/risk0'
            + risk + '.png"/>';*/
            
        var spanStr = '<div class="asset-wrap3" style="display: none;"><div class="asset-des3"><h3>' + datetime + '</h3>'
            + '<p>检测到&nbsp;<span class="level' + d.level + '">' + level + '</span>'
            + '攻击</p><ol><li>该IP攻击：【' + d.total + '】次</li>'
            + '<li>攻击者IP为：【' + attackIp + '】</li>'
            + '<li>来源于 :<span class="flag"><span class="flag_'+ d.ascountry + '"></span>' + convertRegdetail(d.asregdetail)
            + '</span></li>'
            + '</ol></div></div><img src="../../images/risk0'
            + risk + '.png"/>';    
            
        $(span).addClass('risk0' + d.level).html(spanStr);
        span.addEventListener('mouseenter', function (e) {
            if ($(window).width() - e.pageX < 240) {
                $(this).children('div').css('left', '-190px');
            } else {
                $(this).children('div').css('left', '-60px');
            }
            $(this).children('div').show();
        });
        span.addEventListener('mouseleave', function () {
            $(this).children('div').hide();
        });
        span.addEventListener('click', function () {
            window.open(url);
        });
        $(li).append(span);
        var currentLis = $("#alarmUl>li");
        var maxLiCount = parseInt($('#alarmUl').width()/60);
        if (currentLis.length >= maxLiCount) {
            $(currentLis[0]).remove();
        }
        $("#alarmUl").append(li);
        // $(li).fadeIn(800);
	}
}

//给数字 每三位添加逗号
function formatNum(str){
	str = str + "";
	var newStr = "";
	var count = 0;
	if(str.indexOf(".")==-1){
		for(var i=str.length-1;i>=0;i--){
			if(count % 4 == 0 && count != 0){
				newStr = str.charAt(i) + "," + newStr;
			}else{
				newStr = str.charAt(i) + newStr;
			}
			count++;
		}
		str = newStr;
	}else{
		for(var i = str.indexOf(".")-1;i>=0;i--){
			if(count % 3 == 0 && count != 0){
				newStr = str.charAt(i) + "," + newStr;
			}else{
				newStr = str.charAt(i) + newStr; //逐个字符相接起来
			}
			count++;
		}
		str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
	}
	return str;
}

function jumpWarn(eventType) {
	
	  if (eventType == 1 || eventType == 2 ) {
        location.href='/webpages/index.html?atk-log&sip=0&startDate=' + startDate + "&endDate=" + endDate + '&eventType='+ eventType ;
	  } 
	  
	  if (eventType == 3) {
        location.href='/webpages/index.html?killip-log';
	  } 		  
	  if (eventType == 4) {
        location.href='/webpages/index.html?atk-log' ;
	  } 
	  if (eventType == 5) {
        location.href='/webpages/index.html?ip-stat' ;
	  } 
	   if (eventType == 6) {
        location.href='/webpages/index.html?ip-stat' ;
	  } 
	
	
	  if (eventType == 10) {
        location.href='/webpages/index.html?http-settings';
	  }  
	 if (eventType == 11) {
        location.href='/webpages/index.html?mod-rule';
	  } 
	
	
	  return;
	  
    // 隐蔽信道单独处理
    if (eventType == 8) {
        location.href='../attack/abnormal_behavior.html?startDate=' + startDate + "&endDate=" + endDate + '&eventType=HT#f_ht&tab_dt';
	} else if(eventType == 10){//dga
		location.href='../attack/abnormal_behavior.html?startDate=' + startDate + "&endDate=" + endDate + '&eventType=DGA#f_cmmt&tab_dga';
	}else if (eventType == 9) {
        location.href='warn.html?unknownType=1&startDate=' + startDate + '&endDate=' + endDate;
	} else {
        location.href='warn.html?eventTypes=' + eventType + "&startDate=" + startDate + "&endDate=" + endDate;
    }
}

function convertType(type)
{
	if(type==1)
	{
		return "1,2,3,4,5";
	}else
	{
		return "6,7";
	}
}
