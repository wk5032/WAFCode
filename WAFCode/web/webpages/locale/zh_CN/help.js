(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.su.CHAR.HELP ={
     DEVMNGR_GMNT: {
        TITLE: "终端管理",
        CONTENT:[{
            type: "paragraph",
            content: "可以对于选定的终端管理设备进行管理控制。"
        }, {
            type: "name", 
            title: "显示类型",
            content: "可以选择需要查看的设备类型。",
            children:[{
                type:"step",
                content:[
                    "在线设备：仅显示当前在线的设备情况。",
                    "所有设备：包含在线设备和所有受到管理过的设备。"
                ]
            }]
        }, {
            type: "name", 
            title: "搜索框",
            content: "可以针对设备名称和MAC地址来进行搜索相关设备，查看对应设备的状态信息并进行管理。"
        }, {
            type: "name", 
            title: "上行/下行速率（KB/s）",
            content: "表示终端实时的上下行速率，如果设置了最大上下行带宽，其表示方式为：当前速率/已设最大带宽。"
        }, {
            type: "name", 
            title: "移入黑名单",
            content: "设备被移入黑名单后，将无法上网。"
        }, {
            type: "name", 
            title: "取消管控按钮",
            content: "对设备进行管控后，点击此按钮，可以取消管控规则。"
        }, {
            type: "name", 
            title: "排序",
            content: "点击对应表头中的文字，可以对于IP地址、所属范围、上行速率、下行速率进行排序。"
        }, {
            type: "name", 
            title: "设备名称",
            content: "连入设备的主机名，可以修改为指定名称方便管理。"
        }, {
            type: "name", 
            title: "所属范围",
            content: "连入设备的连接方式：无线设备显示其连接的SSID，以太网接入设备显示有线接入，VPN客户端显示相应的客户端类型。"
        },{
            type: "name", 
            title: "MAC地址",
            content: "连入设备的MAC地址。"
        },{
            type: "name", 
            title: "IP地址",
            content: "连入设备的IP地址。"
        },{
            type: "name", 
            title: "最大上行/下行速率",
            content: "可设置该设备的最大上传下载速率，防止局域网中某台设备占用带宽过高的情况。"
        }, {
            type: "name",
            title: "时间设置",
            content: "用于设置时间所包含的时间段，有两种设置方式。",
             children:[{
                 type:"step",
                 content:[
                    "日历：通过在日历上划分矩形覆盖对应的时间区域来设置包含的时间段，只能精确到小时。",
                    "手动设置：通过手动输入生效时间段并勾选生效星期来设置一个时间段，精确到分钟，但一个对象最多只能设置12个时间段。"
                 ]
             }]
        }]
     },
     DEVMNGR_GMNT_WAR: {
        TITLE: "终端管理",
        CONTENT:[{
            type: "paragraph",
            content: "可以对于选定的终端管理设备进行管理控制。"
        }, {
            type: "name", 
            title: "显示类型",
            content: "可以选择需要查看的设备类型。",
            children:[{
                type:"step",
                content:[
                    "在线设备：仅显示当前在线的设备情况。",
                    "所有设备：包含在线设备和所有受到管理过的设备。"
                ]
            }]
        }, {
            type: "name", 
            title: "搜索框",
            content: "可以针对设备名称和MAC地址来进行搜索相关设备，查看对应设备的状态信息并进行管理。"
        }, {
            type: "name", 
            title: "上行/下行速率（KB/s）",
            content: "表示终端实时的上下行速率，如果设置了最大上下行带宽，其表示方式为：当前速率/已设最大带宽。"
        }, {
            type: "name", 
            title: "移入黑名单",
            content: "设备被移入黑名单后，将无法上网。"
        }, {
            type: "name", 
            title: "取消管控按钮",
            content: "对设备进行管控后，点击此按钮，可以取消管控规则。"
        }, {
            type: "name", 
            title: "排序",
            content: "点击对应表头中的文字，可以对于IP地址、所属范围、上行速率、下行速率进行排序。"
        }, {
            type: "name", 
            title: "设备名称",
            content: "连入设备的主机名，可以修改为指定名称方便管理。"
        }, {
            type: "name", 
            title: "所属范围",
            content: "连入设备的连接方式：无线设备显示其连接的SSID，以太网接入设备显示有线接入。"
        },{
            type: "name", 
            title: "MAC地址",
            content: "连入设备的MAC地址。"
        },{
            type: "name", 
            title: "IP地址",
            content: "连入设备的IP地址。"
        },{
            type: "name", 
            title: "最大上行/下行速率",
            content: "可设置该设备的最大上传下载速率，防止局域网中某台设备占用带宽过高的情况。"
        }, {
            type: "name",
            title: "时间设置",
            content: "用于设置时间所包含的时间段，有两种设置方式。",
             children:[{
                 type:"step",
                 content:[
                    "日历：通过在日历上划分矩形覆盖对应的时间区域来设置包含的时间段，只能精确到小时。",
                    "手动设置：通过手动输入生效时间段并勾选生效星期来设置一个时间段，精确到分钟，但一个对象最多只能设置12个时间段。"
                 ]
             }]
        }]
     },
     DEVMNGR_BL_GMNT: {
        TITLE: "黑名单",
        CONTENT:[{
            type: "paragraph",
            content: "可以查看所有在终端管理页面中被禁止上网的设备。"
        }, {
            type: "name", 
            title: "设备名称",
            content: "列入黑名单设备的主机名。"
        },{
            type: "name", 
            title: "MAC地址",
            content: "列入黑名单设备的主机MAC地址。"
        }, {
            type: "name", 
            title: "恢复上网按钮",
            content: "可以将设备黑名单从黑名单中移除，使其可以上网。"
        }]
    },
	WIRELESS_BASIC:{
		TITLE: "无线网络设置",
		CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面进行无线网络的基本设置。"
        }, {
            type:"name",
            title:"无线网络状态",
            content:"滑块为灰色表示禁用无线网络，滑块为蓝色表示启用无线网络。"
        },{
			type:"name",
			title:"无线网络名称（SSID）",
			content:"设备的无线(Wi-Fi)名称。"
		},{
			type:"name",
            title:"SSID编码方式",
            content:"当SSID不包含中文时，该选项会隐藏，当SSID包含中文时，该选项会显示，可以选择UTF8和GBK两种编码方式对包含中文的SSID进行编码。"
        },{
			type:"name",
			title:"内部隔离",
			content:"启用内部隔离，可以使连接到设备上的无线终端不能互相通信。滑块为灰色表示禁用，滑块为蓝色表示启用。"
		},{
			type:"name",
			title:"隐藏无线网络",
			content:"启用隐藏无线网络，局域网中无线终端将搜不到设备的无线名称。滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type:"name",
            title:"加密方式",
            content: "用于无线网络连接时的加密方式，有三种加密方式可选。",
            children:[{
                type: "step",
                content:[
                    "不设密码：无线终端无需密码即可连接设备。",
                    "WPA-PSK/WPA2-PSK(推荐)：使用WPA2-PSK/WPA-PSK加密方式，该加密方式无需自设认证服务器，设置无线密码即可。",
                    "WPA/WPA2:使用WPA/WPA2加密方式，该加密方式需要自行配置Radius服务器进行相关认证。"
                ]
            }]
        },{
            type:"name",
            title:"认证类型",
            content: "用于设置无线网络使用加密连接时的认证类型。",
            children:[{
                type:"step",
                content:[
                   "WPA-PSK/WPA2-PSK加密方式的认证类型包括自动、WPA-PSK、WPA2-PSK三个选项，自动涵盖WPA-PSK和WPA2-PSK两种认证类型，建议认证类型选择自动。",
                   "WPA/WPA2加密方式的认证类型包括自动、WPA和WPA2三个选项，自动涵盖WPA和WPA2两种认证类型，建议认证类型选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"加密算法",
            content: "用于设置无线网络使用加密连接时的加密算法。",
            children:[{
                type:"step",
                content:[
                    "WPA-PSK/WPA2-PSK加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。",
                    "WPA/WPA2加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"无线密码",
            content:"选择WPA-PSK/WPA2-PSK加密时连接无线网络的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        },{
            type:"name",
            title:"组密匙更新周期",
            content:"定时更新用于广播和组播的密钥的周期，以秒为单位，最小值为30，不更新则为0。"
        },{
            type:"name",
            title:"Radius服务器",
            content:"进行身份认证的Radius服务器的IP地址。"
        },{
            type:"name",
            title:"Radius端口",
            content:"Radius服务使用的端口。"
        },{
            type:"name",
            title:"Radius密码",
            content:"访问Radius服务的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        }]
    },
    WIRELESS_MSSID: {
         TITLE: "多SSID",
         CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面添加多个SSID并进行管理。"
        }, {
             type: "name",
             title: "SSID间隔离",
             content: "启用该功能后，连接不同的SSID无线终端不能互相通信。滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },{
            type:"name",
            title:"无线网络名称（SSID）",
            content:"设备的无线(Wi-Fi)名称。"
        },{
            type:"name",
            title:"SSID编码方式",
            content:"当SSID不包含中文时，该选项会隐藏，当SSID包含中文时，该选项会显示，可以选择UTF8和GBK两种编码方式对包含中文的SSID进行编码。"
        },{ 
            type:"name",
            title:"内部隔离",
            content:"启用内部隔离，可以使连接到设备上的无线终端不能互相通信。滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type:"name",
            title:"隐藏无线网络",
            content:"启用隐藏无线网络，局域网中无线终端将搜不到设备的无线名称。滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type:"name",
            title:"加密方式",
            content: "用于无线网络连接时的加密方式，有三种加密方式可选。",
            children:[{
                type: "step",
                content:[
                    "不设密码：无线终端无需密码即可连接设备。",
                    "WPA-PSK/WPA2-PSK(推荐)：使用WPA2-PSK/WPA-PSK加密方式，该加密方式无需自设认证服务器，设置无线密码即可。",
                    "WPA/WPA2:使用WPA/WPA2加密方式，该加密方式需要自行配置Radius服务器进行相关认证。"
                ]
            }]
        },{
            type:"name",
            title:"认证类型",
            content: "用于设置无线网络使用加密连接时的认证类型。",
            children:[{
                type:"step",
                content:[
                   "WPA-PSK/WPA2-PSK加密方式的认证类型包括自动、WPA-PSK、WPA2-PSK三个选项，自动涵盖WPA-PSK和WPA2-PSK两种认证类型，建议认证类型选择自动。",
                   "WPA/WPA2加密方式的认证类型包括自动、WPA和WPA2三个选项，自动涵盖WPA和WPA2两种认证类型，建议认证类型选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"加密算法",
            content: "用于设置无线网络使用加密连接时的加密算法。",
            children:[{
                type:"step",
                content:[
                    "WPA-PSK/WPA2-PSK加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。",
                    "WPA/WPA2加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"无线密码",
            content:"选择WPA-PSK/WPA2-PSK加密时连接无线网络密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        },{
            type:"name",
            title:"组密匙更新周期",
            content:"定时更新用于广播和组播的密钥的周期，以秒为单位，最小值为30，不更新则为0。"
        },{
            type:"name",
            title:"Radius服务器",
            content:"进行身份认证的Radius服务器的IP地址。"
        },{
            type:"name",
            title:"Radius端口",
            content:"Radius服务使用的端口。"
        },{
            type:"name",
            title:"Radius密码",
            content:"访问Radius服务的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        }]
    },
    WIRELESS_WDS: {
        TITLE: "无线桥接",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置并使用无线桥接功能。"
        }, {
            type: "name",
            title: "无线桥接",
            content: "滑块为灰色表示关闭桥接功能，滑块为蓝色表示启用桥接功能。"
        },{
            type: "name",
            title: "桥接方式",
            content: "扫描桥接是设备扫描周围无线信号进行桥接，手动桥接是手动添加被桥接设备的无线网络名称和无线密码进行桥接。"
        }, {
            type:"name",
            title:"扫描桥接",
            content: "使用扫描桥接时的设置步骤如下。",
            children:[{
                type:"step",
                content:[
                    "点击“扫描”按钮，扫描周围的无线信号。",
                    "点击“连接”按钮，连接被桥接的无线信号。",
                    "填写被桥接信号的密钥，即无线密码。"
                ]
            }]
        }, {
            type:"name",
            title:"手动桥接",
            content: "使用手动桥接时相关设置项的含义如下。",
            children:[{
                type:"step",
                content:[
                    "无线网络名称：被桥接的设备的无线名称。",
                    "MAC地址：被桥接的设备的MAC地址。",
                    "加密方式：选择被桥接无线信号的加密方式。",
                    "密钥：填写被桥接的设备的无线密码。"
                ]
            }]
        }]
    },
    WIRELESS_ADVANCED:{
        TITLE: "高级设置",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面进行无线网络的高级设置。"
        }, {
            type:"name",
            title:"信道",
            content:"以无线信号作为传输媒体的数据信号传送的通道。如果您选择的是自动，则设备会自动根据周围的环境选择一个最好的信道，建议使用自动。无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"模式",
            content:"设备工作的无线模式，修改无线模式后会影响设备的无线速率，建议使用默认设置，无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"频段带宽",
            content:"设备传输无线数据的频段宽度，无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"发射功率",
            content:"发射功率分为“高”“中”“低”三个选项，“高”适合大面积或多阻隔覆盖需求，“中”适合中等面积或少阻隔覆盖需求，“低”适合小面积或者无阻隔覆盖需求。"
        },{
            type:"name",
            title:"Beacon时槽",
            content:"设置Beacon帧的发包间隔，可以设置为(40～1000)内的值，单位为毫秒(ms)，默认值为100。"
        },{
            type:"name",
            title:"WMM",
            content:"启用该选项将使设备可以处理带有优先级信息的数据包，建议选择此选项。"
        }]
    },
    WIRELESS_ADVANCED_5G:{
        TITLE: "高级设置",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面进行无线网络的高级设置。"
        }, {
            type:"name",
            title:"信道",
            content:"以无线信号作为传输媒体的数据信号传送的通道。如果您选择的是自动，则设备会自动根据周围的环境选择一个最好的信道，建议使用自动。无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"模式",
            content:"设备工作的无线模式，修改无线模式后会影响设备的无线速率，建议使用默认设置，无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"频段带宽",
            content:"设备传输无线数据的频段宽度，无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"发射功率",
            content:"发射功率分为“高”“中”“低”三个选项，“高”适合大面积或多阻隔覆盖需求，“中”适合中等面积或少阻隔覆盖需求，“低”适合小面积或者无阻隔覆盖需求。"
        },{
            type:"name",
            title:"Beacon时槽",
            content:"设置Beacon帧的发包间隔，可以设置为(40～1000)内的值，单位为毫秒(ms)，默认值为100。"
        },{
            type:"name",
            title:"WMM",
            content:"启用该选项将使设备可以处理带有优先级信息的数据包，建议选择此选项。"
        }]
    },
    WIRELESS_ADVANCED_5G_1:{
        TITLE: "高级设置",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面进行无线网络的高级设置。"
        }, {
            type:"name",
            title:"信道",
            content:"以无线信号作为传输媒体的数据信号传送的通道。如果您选择的是自动，则设备会自动根据周围的环境选择一个最好的信道，建议使用自动。无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"模式",
            content:"设备工作的无线模式，修改无线模式后会影响设备的无线速率，建议使用默认设置，无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"频段带宽",
            content:"设备传输无线数据的频段宽度，无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"发射功率",
            content:"发射功率分为“高”“中”“低”三个选项，“高”适合大面积或多阻隔覆盖需求，“中”适合中等面积或少阻隔覆盖需求，“低”适合小面积或者无阻隔覆盖需求。"
        },{
            type:"name",
            title:"Beacon时槽",
            content:"设置Beacon帧的发包间隔，可以设置为(40～1000)内的值，单位为毫秒(ms)，默认值为100。"
        },{
            type:"name",
            title:"WMM",
            content:"启用该选项将使设备可以处理带有优先级信息的数据包，建议选择此选项。"
        }]
    },
    WIRELESS_ADVANCED_5G_2:{
        TITLE: "高级设置",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面进行无线网络的高级设置。"
        }, {
            type:"name",
            title:"信道",
            content:"以无线信号作为传输媒体的数据信号传送的通道。如果您选择的是自动，则设备会自动根据周围的环境选择一个最好的信道，建议使用自动。无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"模式",
            content:"设备工作的无线模式，修改无线模式后会影响设备的无线速率，建议使用默认设置，无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"频段带宽",
            content:"设备传输无线数据的频段宽度，无线桥接开启时无法配置。"
        },{
            type:"name",
            title:"发射功率",
            content:"发射功率分为“高”“中”“低”三个选项，“高”适合大面积或多阻隔覆盖需求，“中”适合中等面积或少阻隔覆盖需求，“低”适合小面积或者无阻隔覆盖需求。"
        },{
            type:"name",
            title:"Beacon时槽",
            content:"设置Beacon帧的发包间隔，可以设置为(40～1000)内的值，单位为毫秒(ms)，默认值为100。"
        },{
            type:"name",
            title:"WMM",
            content:"启用该选项将使设备可以处理带有优先级信息的数据包，建议选择此选项。"
        }]
    },
    WIRELESS_VISITOR:{
        TITLE: "访客网络",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面设置访客网络相关内容。"
        }, {
            type:"name",
            title:"访客网络状态",
            content:"滑块为灰色表示禁用访客网络，滑块为蓝色表示启用访客网络。"
        },{
            type:"name",
            title:"访客网络名称（SSID）",
            content:"设备访客网络的无线(Wi-Fi)名称。"
        },{
            type:"name",
            title:"SSID编码方式",
            content:"当SSID不包含中文时，该选项会隐藏，当SSID包含中文时，该选项会显示，可以选择UTF8和GBK两种编码方式对包含中文的SSID进行编码。"
        },{
            type:"name",
            title:"加密方式",
            content:"不加密表示访客网络不设置无线密码，加密使用WPA-PSK/WPA2-PSK的加密方式。"
        },{
            type:"name",
            title:"无线密码",
            content:"加密方式时，需设置至少8位的无线密码。"
        }]
    },
    WIRELESS_VISITOR_ADVANCED:{
        TITLE: "高级设置",
        CONTENT:[{
            type: "paragraph",
            content: "访客网络设置的高级选项。"
        }, {
            type:"name",
            title:"上行/下行带宽",
            content:"访客网络上行和下行速度的上限值。"
        },{
            type:"name",
            title:"最大接入设备数量",
            content:"允许连接访客网络无线设备的上限个数。"
        }]
    },
    WIRELESS_MACFILTER:{
        TITLE: "MAC地址过滤",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面设置无线网络的MAC地址过滤功能。"
        }, {
            type:"name",
            title:"MAC地址过滤功能",
            content:"滑块为灰色为禁用该功能，滑块为蓝色为启用功能。"
        },{
            type:"name",
            title:"作用域",
            content:"MAC过滤对选中的无线网络生效。"
        },{
            type:"name",
            title:"规则类型",
            content: "设备对规则列表中的MAC地址的过滤方式。",
            children:[{
                type:"step",
                content:[
                    "黑名单（禁止设备访问无线网络）：设备将禁止MAC地址在过滤规则列表中的主机连接在作用域中选中的无线网络。",
                    "白名单（允许设备访问无线网络）：设备将只允许MAC地址在过滤规则列表中的主机连接在作用域中选中的无线网络。"
                ]
            }]
        }]
    },
    WIRELESS_MACFILTER_LIST: {
        TITLE: "规则列表",
        CONTENT:[{
            type: "paragraph",
            content: "您可以查看所有的MAC地址条目，并可以编辑、添加和删除MAC地址条目。"
        }, {
            type:"name",
            title:"MAC地址",
            content:"欲做过滤限制的MAC地址。"
        },{
            type:"name",
            title:"备注",
            content:"您可以设置MAC地址过滤条目的备注，以方便您管理和查找。备注最多支持50个字符。"
        }]
    },
    WIRELESS_HOST_STATUS: {
        TITLE: "无线主机状态",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面查看无线网络客户端的相关连接信息。"
        }, {
            type: "name",
            title: "主机状态显示范围",
            content: "可以选择需要显示当前客户端主机连接信息的无线网络，ALL为显示所有无线网络的客户端主机。"
        },{
            type: "name",
            title: "设备名称",
            content: "通过无线连接到设备或者AP设备的客户端主机的设备名称。"
        },{
            type: "name",
            title: "MAC地址",
            content: "通过无线连接到设备或者AP设备的客户端主机的MAC地址。"
        },{
            type: "name",
            title: "接入设备",
            content: "客户端主机所连接的设备名称。"			
        },{
            type: "name",
            title: "所属无线网络",
            content: "客户端主机所连接的无线网络名称。"
        },{
            type: "name",
            title: "上/下行速率（KB/s）",
            content: "客户端主机当前上/下行速率。"
        }/*,{
            type: "name",
            title: "状态",
            content: "客户端主机当前的连接状态。"
        }*/]
    },
    WIRELESS_HOST_STATUS_WIRED: {
        TITLE: "无线主机状态",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面查看连接到AP设备上无线网络客户端的相关连接信息。"
        }, {
            type: "name",
            title: "主机状态显示范围",
            content: "可以选择需要显示当前客户端主机连接信息的无线网络，ALL为显示所有无线网络的客户端主机。"
        },{
            type: "name",
            title: "设备名称",
            content: "通过无线连接到AP设备的客户端主机的设备名称。"
        },{
            type: "name",
            title: "MAC地址",
            content: "通过无线连接到AP设备的客户端主机的MAC地址。"
        },{
            type: "name",
            title: "接入设备",
            content: "客户端主机所连接的AP设备名称。"			
        },{
            type: "name",
            title: "所属无线网络",
            content: "客户端主机所连接的无线网络名称。"
        },{
            type: "name",
            title: "上/下行速率（KB/s）",
            content: "客户端主机当前上/下行速率。"
        }/*,{
            type: "name",
            title: "状态",
            content: "客户端主机当前的连接状态。"
        }*/]
    },	
     NAPT: {
         TITLE: "NAPT规则列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以查看选路规则，还可以通过表格按钮对条目进行操作。"
         },{
             type: "name",
             title: "规则名称",
             content: "您可以设置规则条目名称。"
         },{
             type: "name",
             title: "出接口",
             content: "您可以选择规则生效的出接口。"
         },{
             type: "name",
             title: "源地址范围",
             content: "您可以选择规则生效的地址对象。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         }]
     },

	ONE_NAT: {
         TITLE: "一对一NAT规则列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以查看规则条目，还可以通过表格按钮对条目进行操作。"
         },{
             type: "name",
             title: "规则名称",
             content: "您可以设置规则条目名称。"
         },{
             type: "name",
             title: "出接口",
             content: "您可以选择规则生效的出接口。",
             children: [{
                type: "step",
                content: [
                    "一对一NAT规则只允许选择静态IP的出接口",
                    "当出接口从静态IP更改为非静态IP，对应出接口的已配置的一对一NAT规则会被自动禁用"
                ]
             }]
         },{
             type: "name",
             title: "映射前/后地址",
             content: "您可以选择规则生效的地址对象。映射前/后地址不能为各个接口的广播，网段和接口IP地址。"
         },{
             type: "name",
             title: "DMZ转发",
             content: "您可以选择勾选\"启用\"来使DMZ转发功能生效，即将发送到映射后的地址的报文全部转发到映射前的地址主机。滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         }]
     },
	VIRTUAL_SERVER: {
         TITLE: "虚拟服务器规则列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以查看规则条目，还可以通过表格按钮对条目进行操作。"
         },{
             type: "name",
             title: "规则名称",
             content: "您可以设置服务条目名称。"
         },{
             type: "name",
             title: "生效接口",
             content: "您可以选择规则生效的出接口。"
         },{
             type: "name",
             title: "外部端口",
             content: "设备提供给广域网的服务端口（范围）。端口组之间不允许重叠。"
         },{
             type: "name",
             title: "内部端口",
             content: "局域网主机的服务端口。"
         },{
             type: "name",
             title: "内部服务器IP",
             content: "局域网中建立服务的主机地址。"
         },{
             type: "name",
             title: "服务协议",
             content: "触发条目生效的协议类型。选择ALL表示所有协议均生效。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         }]
     },

	PORT_TRIGGERING: {
         TITLE: "触发列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以查看规则条目，还可以通过表格按钮对条目进行操作。"
         },{
             type: "name",
             title: "接口",
             content: "您可以选择规则生效的出接口。"
         },{
             type: "name",
             title: "服务名称",
             content: "您可以设置端口触发条目的服务名称，以方便您管理和查找。"
         },{
             type: "name",
             title: "触发端口",
             content: "使开放端口生效的触发端口（范围）。触发端口最多允许5组，每个端口组可以为单个端口，可以为端口范围，但端口组之间不允许重叠。"
         },{
             type: "name",
             title: "触发协议",
             content: "触发端口被触发时所需要的协议。"
         },{
             type: "name",
             title: "开放端口",
             content: "开放的端口（范围）。开放端口最多允许5组，每个端口组可以为单个端口，可以为端口范围，但端口组之间不允许重叠。"
         },{
             type: "name",
             title: "开放协议",
             content: "开放端口所需要的协议。"
         },{
             type: "name",
             title: "启用/禁用",
             content: "您可以选择规则是否生效。"
         }]
     },

	ALG: {
         TITLE: "ALG服务",
         CONTENT: [{
             type: "paragraph",
             content: "为了适应NAT协议本身的特点，FTP、H.323、SIP、PPTP等特殊协议需要启用ALG才能正常工作。"
         }]
     },

	NAT_DMZ: {
         TITLE: "NAT-DMZ规则列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以查看规则条目，还可以通过表格按钮对条目进行操作。"
         },{
             type: "name",
             title: "规则名称",
             content: "您可以设置条目的规则名称，以方便您管理和查找。"
         },{
             type: "name",
             title: "出接口",
             content: "您可以选择规则生效的出接口。"
         },{
             type: "name",
             title: "主机地址",
             content: "NAT DMZ服务指向的主机地址。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         }]
     },
     IPSEC_TUNNEL_SETTING: {
         TITLE: "IPSec安全策略设置",
         CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面设置IPSec安全策略，安全策略规定了对什么样的数据流采用什么样的安全提议。安全策略设置分为必要设置和高级设置两个部分，其中高级设置是可选部分。"
         },
		 {
             type: "paragraph",
			 title:"必要设置",
			 content:"对于新建的安全策略，必要设置是必须提供的，不能省略。"
         },
		 {
             type: "name",
             title: "安全策略名称",
             content: "设置IPSec安全策略的名称，名称最多支持32个字符。"
         },
         {
             type: "name",
             title: "对端网关",
             content: "设置对端网关，可以填写对端的IP地址或域名，作为响应者的时候可以将对端网关设为“0.0.0.0”,表示对端地址可以任意。"
         },
		 {
             type: "name",
             title: "绑定接口",
             content: "从下拉列表中指定本地使用的WAN口；对端网关设置的\"对端网关地址\"必须与该WAN口的IP地址相同。"
         },
		 {
             type: "name",
             title: "本地子网范围",
             content: "设置受保护的数据流的本地子网范围，由IP地址和子网掩码来确定。"
         },
		 {
             type: "name",
             title: "对端子网范围",
             content: "设置受保护的数据流的对端子网范围，由IP地址和子网掩码来确定。"
         },
		 
		 
		 {
             type: "name",
             title: "预共享密钥",
             content: "对于每对<绑定接口，对端网关>，都必须指定唯一的预共享密钥作为它们之间相互认证的凭证。"
         },
         {
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },
		 {
             type: "paragraph",
			 title:"高级设置",
             content: "高级设置包括两个部分：阶段1设置和阶段2设置。一般地，用户不需要配置高级设置，采用默认值即可。"
         },
		 {
             type: "name",
			 title:"高级设置-阶段1设置",
             content: "设定IKEv1的第一阶段的相关参数。"
         },
		 {
             type: "name",
             title: "安全提议",
             content: "用于IKE协商方式下选择IPSec安全提议，在IKE协商模式下可以最多选择四条不同安全提议，主模式协商可以选择4条，野蛮模式协商可以选择1条。"
         },
		 {
             type: "name",
             title: "交换模式",
             content: "IKEv1版本支持两种模式：主模式和野蛮模式，默认是选择主模式。"
         },
		 {
             type: "name",
             title: "协商模式",
             content: "初始者模式会主动向对端发起连接，此时要求对端网关是路由可达，而响应者模式仅仅会等待对端发起连接。"
         },
		 {
             type: "name",
             title: "本地ID类型",
             content: "作为对端的身份标识，支持两种类型：IP地址和NAME，默认选择\"IP地址\",如果选择NAME类型，则需要输入任意的字符串。"
         },
		 {
             type: "name",
             title: "本地ID",
             content: "仅仅在本地ID类型选择NAME的时候生效，用于存储用户输入对应的字符串。"
         },
		 {
             type: "name",
             title: "对端ID类型",
             content: "作为对端的身份标识，支持两种类型：IP地址和NAME，默认选择\"IP地址\",如果选择NAME类型，则需要输入任意的字符串。"
         },
		 {
             type: "name",
             title: "对端ID",
             content: "仅仅在对端ID类型选择NAME的时候生效，用于存储用户输入对应的字符串。"
         },
		 {
             type: "name",
             title: "生存时间",
             content: "用于IKE协商方式下设置第一阶段IPSec会话密钥的生存时间。"
         },
		 {
             type: "name",
             title: "DPD检测开启",
             content: "选择是否开启DPD检测功能，开启该功能会定时发送DPD数据包以快速发现对端是否在线。"
         },
		 {
             type: "name",
             title: "DPD检测周期",
             content: "仅在DPD检测开启启用之后生效，用于指定相邻两次发送DPD检测数据包的时间间隔。"
         },

		 {
             type: "name",
             title: "高级设置-阶段2设置",
             content: "设定IKEv1的第二阶段的相关参数。"
         },
         {
             type: "name",
             title: "封装模式",
             content: "指定该策略是隧道模式还是传输模式，两者的区别在于：前者会在原始IP报文外多增加一个IP头，后者则不会。"
         },
		 {
             type: "name",
             title: "安全提议",
             content: "用于IKE协商方式下选择IPSec安全提议，在IKE协商模式下可以最多选择四条不同安全提议。"
         },
		 
		 {
             type: "name",
             title: "PFS",
             content: "用于IKE协商方式下设置IPSec会话密钥的PFS属性，对端的PFS属性必须与本地的PFS属性一致。"
         },
		 {
             type: "name",
             title: "生存时间",
             content: "用于IKE协商方式下设置第二阶段IPSec会话密钥的生存时间。"
         }
		 ]
     },

     IPSEC_TUNNEL_LISTS: {
         TITLE: "IPSec安全策略列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以查看已经配置的IPSec安全策略条目，还可以通过表格按钮对条目进行操作。"
         }]
     },

     IPSEC_SA: {
         TITLE: "IPSec安全联盟列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面查看当前建立的安全联盟。"
         },
		 {
             type: "name",
             title: "名称",
             content: "显示安全联盟的名称，一般地，该名称和安全策略名称相同。"
         },
		 {
             type: "name",
             title: "SPI",
             content: "显示安全联盟的SPI（Security Parameter Index，安全性参数索引），注意每一个安全联盟的SPI都不相同。"
         },
		 {
             type: "name",
             title: "方向",
             content: "显示安全联盟的方向（in:流入/out:流出）。"
         },
		 {
             type: "name",
             title: "隧道两端",
             content: "显示安全联盟的两端的网关地址。"
         },
		 {
             type: "name",
             title: "数据流",
             content: "显示安全联盟的两端的子网范围。"
         }	,
		 {
             type: "name",
             title: "安全协议",
             content: "显示安全联盟使用的安全协议。"
         }	,
		 {
             type: "name",
             title: "AH验证算法",
             content: "显示安全联盟使用的AH验证算法。"
         }	,
		 {
             type: "name",
             title: "ESP验证算法",
             content: "显示安全联盟使用的ESP验证算法。"
         }	,
		 {
             type: "name",
             title: "ESP加密算法",
             content: "显示安全联盟使用的ESP加密算法。"
         }
		 ]
     },


	IMB_ENABLE:{
        TITLE:"功能设置",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以设置ARP防护的相关选项。"
        },
        {
            type:"name",
            title:"ARP防欺骗功能",
            content:"启用或关闭ARP的防欺骗功能。<br>若关闭，防ARP欺骗，禁止非IP-MAC绑定的数据包通过，发送GARP功能等功能都不会生效。"
        },{
            type:"name",
            title:"禁止非IP-MAC绑定的数据包通过",
            content:"开启该功能，则设备只会放过在IP-MAC绑定规则中的数据包。<br>注意，要开启该功能，需要先开启ARP防欺骗功能。"
        },{
            type:"name",
            title:"允许设备在发现ARP攻击时发送GARP包",
            content:"开启该功能，设备收到与IP-MAC绑定列表中不一致的报文时，会发送GARP。<br>注意，要开启该功能，需要先开启ARP防欺骗功能。"
        }]
    },

    IMB_EXPORT:{
        TITLE:"备份绑定列表",
        CONTENT:[{
            type:"name",
            title:"备份",
            content:"点击“备份”将IP与MAC地址绑定列表备份到您的计算机中。"
        }]
    },

    IMB_IMPORT:{
        TITLE:"导入绑定列表",
        CONTENT:[{
            type:"name",
            title:"导入",
            content:"点击“导入”将合法的IP与MAC地址绑定列表导入到设备。"
        }]
    },

    IMB_LIST:{
        TITLE:"IP与MAC地址绑定列表",
        CONTENT:[{
        type:"paragraph",
        content:"您可以扫描IP-MAC列表，查看IP-MAC绑定规则，还可以通过表格按钮对条目进行操作。"},
        {
            type:"name",
            title:"扫描范围",
            content:"输入扫描的IP地址范围，设备会对该范围的IP地址进行ARP查询。"
        },
        {
            type:"name",
            title:"扫描结果",
            content:"扫描结束后，扫描得到的结果会出现在这个列表中。"
        },
        {
            type:"name",
            title:"添加到绑定列表",
            content:"您可以将扫描结果中的IP-MAC对添加到IP-MAC绑定列表中。"
        },
        {
            type:"name",
            title:"添加到静态地址",
            content:"可以将该IP-MAC绑定条目导入到DHCP静态地址分配列表。"
        },
        {
            type:"name",
            title:"添加到静态地址分配列表",
            content:"选择多条IP-MAC绑定列表中的条目，点击“添加到静态地址分配列表”按钮，可一次将多个条目一次性导入到DHCP静态地址分配列表中，您可以在 基本设置-LAN设置-静态地址分配 中查看。"
        },
        {
            type:"name",
            title:"IP地址",
            content:"您可以输入待绑定的IP地址。"
        },
        {
            type:"name",
            title:"MAC地址",
            content:"您可以输入待绑定的MAC地址，格式为xx-xx-xx-xx-xx-xx。"
        },{
            type:"name",
            title:"生效域",
            content:"针对局域网中的ARP绑定请选择LAN口；如果需要对于WAN口绑定请选择对应的WAN口。"
        },{
            type:"name",
            title:"备注",
            content:"请添加备注信息。"
        },{
            type:"name",
            title:"状态",
            content:"滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }]
    },

     MAC_FILTERING_SETTING: {
         TITLE: "功能设置",
         CONTENT: [
        {
            type:"paragraph",
            content:"您可以进行MAC地址过滤功能设置。"
        },
         {
             type: "name",
             title: "启用MAC地址过滤功能。",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },{
             type: "name",
             title: "规则类型",
             content: "白名单（允许设备访问外网）：设备将只允许MAC地址在过滤规则列表中的主机通过设备。<br>黑名单（不允许设备访问外网）设备将禁止MAC地址在过滤规则列表中的主机通过设备。"
         }]
     },

     MAC_FILTERING_LIST: {
         TITLE: "MAC过滤规则列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以查看MAC地址过滤条目，还可以通过表格按钮对条目进行操作。"
         },{
             type: "name",
             title: "名称",
             content: "您可以设置规则的名称。"
         },{
             type: "name",
             title: "MAC地址",
             content: "过滤的MAC地址，格式为xx-xx-xx-xx-xx-xx。"
         }]
     },

     ARPSCAN_SCAN:{
        TITLE:"ARP扫描",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以输入有效的IP扫描范围，扫描结束后会弹出扫描结果。"
        },
        {
            type:"name",
            title:"扫描范围",
            content:"输入扫描的IP地址范围，设备会对该范围的IP地址进行ARP查询。"
        },
        {
            type:"name",
            title:"扫描结果",
            content:"扫描结束后，扫描得到的结果会出现在这个列表中。"
        },
        {
            type:"name",
            title:"导入IP-MAC绑定",
            content:"您可以将扫描结果中的IP-MAC对导入IP-MAC绑定页面中。"
        }]
     },

     ARPLIST_SCAN:{
        TITLE:"ARP列表",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以查看系统中ARP列表。"
        },
        {
            type:"name",
            title:"ARP列表",
            content:"设备学习连接在设备各接口上的网络设备IP与MAC对应表。"
        },{
            type:"name",
            title:"添加到绑定列表",
            content:"可以选择多条ARP列表中的条目，一次性添加到IP-MAC绑定列表中。"
        }]
     },

    /* DEFENSE_ENABLE:{
        TITLE:"全局设置",
        CONTENT:[{
            type:"name",
            title:"启用防护攻击日志",
            content:"开启或者关闭攻击防护的日志"
        }]
     },*/

     DEFENSE_FLOOD:{
        TITLE:"防Flood类攻击",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以进行防FLOOD攻击的相关设置。"
        },
        {
          type:"name",
          title:"启用防多连接的TCP SYN Flood攻击",
          content:"开启TCP的连接限制，将TCP连接限制在给定值之内。"
        },{
            type:"name",
            title:"启用防多连接的UDP Flood攻击",
            content:"开启UDP的连接限制，将UDP连接限制在给定值之内。"
        },{
            type:"name",
            title:"启用防多连接的ICMP Flood攻击",
            content:"开启ICMP的连接限制，将ICMP连接限制在给定值之内。"
        },{
            type:"name",
            title:"启用防固定源的TCP SYN Flood攻击",
            content:"将某个IP的TCP的连接限制在给定值之内。"
        },{
            type:"name",
            title:"启用防固定源的UDP Flood攻击",
            content:"将某个IP的UDP的连接限制在给定值之内。"
        },{
            type:"name",
            title:"启用防固定源的ICMP Flood攻击",
            content:"将某个IP的ICMP的连接限制在给定值之内。"
        }]
     },

     DEFENSE_DOS:{
        TITLE:"防可疑包攻击",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以进行防DOS攻击相关设置。"
        },
        {
            type:"name",
            title:"启用防碎片包攻击",
            content:"开启该功能，设备会过滤掉碎片包。"
        },{
            type:"name",
            title:"启用防TCP Scan(Strealth FIN/Xmas/Null)",
            content:"开启该功能，设备会过滤掉三种工具的tcp scan包。"
        },{
            type:"name",
            title:"启用防ping of Death",
            content:"开启该功能，设备会过滤掉异常的ping包。"
        },{
            type:"name",
            title:"启用防Large Ping",
            content:"开启该功能，设备会过滤掉大ping包。"
        },{
            type:"name",
            title:"启用WinNuke攻击",
            content:"开启该功能，防止winNuke攻击。"
        },
        {
            type:"name",
            title:"阻止同时设置FIN和SYN的TCP包",
            content:"开启该功能，设备会过滤掉同时包含FIN和SYN的TCP报文。"
        },{
            type:"name",
            title:"阻止仅设置FIN未设置ACK的TCP包",
            content:"开启该功能，设备会过滤掉设置了FIN未设置ACK的TCP报文。"
        },{
            type:"name",
            title:"阻止带选项的包",
            content:"开启该功能，设备会过滤掉设置某些IP选项中的报文。"
        }]
     },

     ACL_LIST:{
        TITLE:"访问控制列表",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以查看访问控制条目，还可以通过表格按钮对条目进行操作。"
        },
        {
            type:"name",
            title:"规则名称",
            content:"为添加的规则命名，字符数限制在28个字符以内，且任意两条规则不能重名。"
        },{
            type:"name",
            title:"策略类型",
            content:"指明这条规则对符合条件的数据包放行还是丢弃。"
        },{
            type:"name",
            title:"服务类型",
            content:"选择生效的协议，ALL表示所有协议。"
        },{
            type:"name",
            title:"生效接口域",
            content:"在设备接口中选择该规则对应生效的接口，ALL表示所有的接口。"
        },{
            type:"name",
            title:"源地址范围",
            content:"选择地址对象，以建立访问规则条目的源地址范围。"
        },{
            type:"name",
            title:"目的地址范围",
            content:"选择地址对象，以建立访问规则条目的目的地址范围。"
        },{
            type:"name",
            title:"生效时间",
            content:"选择规则生效的时间。"
        },{
            type:"name",
            title:"添加到指定位置(第几条)",
            content:"指定添加的规则的位置，排在前面的规则比后面规则优先级高。"
        }]
     },

     WEB_GROUP:{
        TITLE:"网站分组",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以查看网站分组条目，还可以通过表格按钮对条目进行操作。"
        },
        {
            type:"name",
            title:"组名称",
            content:"为网站分组添加名称，字符限制在28个字符以内，且两个分组不能重名。"
        },{
            type:"name",
            title:"组成员",
            content:"网站分组成员，您可以同时输入多个网站进行批量添加。<br>组成员可以为域名，如www.hihttps.com,也可以在域名前面加通配符'*'，如*.hihttps.com。但是'*'只允许输入在最前面，而不能夹杂在域名中间或后面。"
        },
        {
            type:"name",
            title:"清空",
            content:"您可以清空组成员中输入的内容。"
        },
        {
            type:"name",
            title:"文件路径",
            content:"您可以通过文件导入的形式为网站分组添加成员，文件格式为txt格式。"
        }]
     },

     WEB_FILTER_ENABLE:{
        TITLE:"功能设置",
        CONTENT:[{
            type:"name",
            title:"启用网站过滤功能",
            content:"您可以选择开启或关闭网站过滤功能。"
        }]
     },

     WEB_FILTER:{
        TITLE:"规则列表",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以查看网站访问条目，还可以通过表格按钮对条目进行操作。"
        },
        {
            type:"name",
            title:"受管理IP地址组",
            content:"设置欲管控IP地址组。"
        },
        {
            type:"name",
            title:"受管理时间段",
            content:"设置管控时间段。"
        },
        {
            type:"name",
            title:"规则类型",
            content:"对符合规则的网站放行或禁止。"
        },{
            type:"name",
            title:"受管理网站类型",
            content:"选择网站分组对象，其中所有网站表示对所有网站都生效。"
        },
        {
            type:"name",
            title:"备注",
            content:"您可以为该规则添加备注，50字符以内。"
        },
        {
            type:"name",
            title:"状态",
            content:"滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },
        {
            type:"name",
            title:"添加到指定位置(第几条)",
            content:"指定添加的规则的位置，排在前面的规则比后面规则优先级高。"
        }]
     },

     URLFILTER_ENABLE:{
        TITLE:"全局设置",
        CONTENT:[{
            type:"name",
            title:"启用URL过滤功能",
            content:"您可以选择是否开启URL过滤功能。"
        }]
     },

 URLFILTER_LIST:{
        TITLE:"URL过滤规则列表",
        CONTENT:[{
            type:"name",
            title:"受控地址组",
            content:"选择地址对象，以建立过滤规则条目的地址范围。"
        },{
            type:"name",
            title:"策略类型",
            content:"对符合规则的网址放行或禁止。"
        },{
            type:"name",
            title:"过滤方式",
            content:"关键字为部分匹配，完整URL表示完全匹配。"
        },{
            type:"name",
            title:"过滤内容列表",
            content:"填写需要过滤的内容。其中单独符号.表示任意URL，也就是与任意URL匹配。<br>.规则只能配置一条，表示对任意的URL禁止或者允许，并且该规则只能在规则列表最后面。"
        },{
            type:"name",
            title:"生效时间",
            content:"选择规则生效的时间。"
        },
        {
            type:"name",
            title:"状态",
            content:"表示是否启用该规则。"
        },{
            type:"name",
            title:"备注",
            content:"您可以为该规则添加备注，50字符以内。"
        },{
            type:"name",
            title:"添加到指定位置(第几条)",
            content:"指定添加的规则的位置，排在前面的规则比后面规则优先级高。"
        }]
     },

     WEBSEC_ENABLE:{
        TITLE:"功能设置",
        CONTENT:[{
            type:"name",
            title:"启用网页安全功能",
            content:"您可以开启或关闭网页安全功能。"
        }]
     },

     WEBSEC_SETTING:{
        TITLE:"规则列表",
        CONTENT:[
        {
            type:"paragraph",
            content:"您可以查看文件下载条目，还可以通过表格按钮对条目进行操作。"
        },
        {
            type:"name",
            title:"受管理IP地址组",
            content:"设置欲管控IP地址组。"
        },{
            type:"name",
            title:"受管理时间段",
            content:"设置管控时间段。"
        },{
            type:"name",
            title:"规则类型",
            content:"对符合规则的文件放行或禁止。"
        },{
            type:"name",
            title:"文件类型",
            content:"填写要过滤的文件的关键字，例如exe，txt等。"
        },{
             type:"name",
            title:"状态",
            content:"滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type:"name",
            title:"备注",
            content:"您可以为该规则添加备注，50字符以内。"
        },{
            type:"name",
            title:"添加到指定位置（第几条）",
            content:"指定添加的规则的位置，排在前面的规则比后面规则优先级高。"
        }]
     },

     ISP_ROUTING_SETTING:{
        TITLE: "ISP数据库",
        CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面设置进行ISP数据库导入。"
        },
        {
             type: "name",
             title: "导入ISP数据库",
             content: "可以导入ISP数据库对系统预设的ISP选路进行升级。"
        }]
     },   

     ISP_ROUTING_LIST:{
        TITLE: "选路列表",
        CONTENT: [{
             type: "paragraph",
             content: "您可以查看选路条目，还可以通过表格按钮对条目进行操作。"
        },
        {
             type: "name",
             title: "接口",
             content: "选择ISP选路的出接口。"
         },
        {
             type: "name",
             title: "ISP",
             content: "选择ISP（Internet Service Provider，网络服务提供商）。"
         }]
     },
    LINE_BACKUP_SETTING:{
        TITLE: "线路备份",
        CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面设置，对线路数据进行备份。"
        },
        {
             type: "name",
             title: "主接口",
             content: "您可以选择一个接口作为主接口。"
        },
        {
             type: "name",
             title: "备接口",
             content: "您可以选择一个接口作为备用接口用来备份主接口的流量。"
         },
         {
             type: "name",
             title: "备份模式",
             content: "您可以选择定时备份或故障备份。"
         },
         {
             type: "name",
             title: "生效时间",
             content: "您可以选择规则备份生效时间。"
         },
         {
             type: "name",
             title: "状态",
             content: "您可以选择备份策略是否生效。"
         }
         ]
     },
     LINE_BACKUP_LIST:{
        TITLE: "主备组列表",
        CONTENT: [{
             type: "paragraph",
             content: "您可以查看备份策略，还可以通过表格按钮对条目进行操作。"
        }]
     },
    BALANCE_GLOBAL_SETTING:{
        TITLE: "全局设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以在本页面进行流量均衡的基本设置。"
        },
        {
             type: "name",
             title: "启用流量均衡",
             content: "流量均衡的全局开关，勾选以启用流量均衡功能。"
        }]
    },
    BALANCE_BASIC_SETTING:{
        TITLE: "流量均衡",
        CONTENT: [
        {
             type: "paragraph",
             content: "多WAN口情况下，设置流量均衡可提高WAN口利用率。"
        },
        {
             type: "name",
             title: "特殊应用程序选路",
             content: "属于同一网络应用的多条连接通过同一个WAN口转发，避免多WAN口下由于该应用的多条连接通过不同的WAN口转发导致应用异常的问题。"
        },
        {
             type: "name",
             title: "均衡模式",
             children: [{
                type: "step",
                content: [
                    "连接均衡：多WAN口情况下，根据总连接数合理分配给各个WAN口，保证每个WAN口利用率相同。",
                    "带宽均衡：多WAN口情况下，接口的流量比等于设置的各接口带宽比。如果接口 1 和接口 2 带宽比为 2：1，那么启用“带宽均衡”后，通过接口 1 和接口 2 的流量比约为 2：1。"                    
                ]
            }]
         }
         ]
     },
     ONLINE_SETTING: {
        TITLE: "在线检测",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置不同的检测方式，并查看设备接口是否已经连接外网。"
        },
        {
            type: "name",
            title: "接口名",
            content: "进行在线检测的接口。对所有WAN口以及参与流量均衡的接口，均会进行在线检测。"
        },
        {
            type: "name",
            title: "自动模式",
            content: "自动模式通过使用在设置接口时设置的DNS服务器进行DNS检测判断是否连接外网。"
        },
        {
            type: "name",
            title: "手动模式",
            content: "手动模式通过使用在本页面上手动设置的DNS服务器和IP地址进行DNS检测和PING检测判断是否连接外网。"
        },
        {
            type: "name",
            title: "永远在线",
            content: "永远在线模式不进行检测，而在页面上永远显示为在线状态。"
        },
        {
            type: "name",
            title: "PING检测",
            content: "您可以指定一个IP地址，让对应的接口去ping这个地址，从而判断是否连接外网，只能在手动模式下设置。"
        },
        {
            type: "name",
            title: "DNS检测",
            content: "您可以指定一个DNS服务器的IP地址，让对应的接口通过这个DNS服务器使用默认的域名进行DNS查询，从而判断是否连接外网，只能在手动模式下中设置。"
        }
        ]
     },
    POLICY_ROUTING_SETTING:{
        TITLE: "策略路由",
        CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面设置，对数据包出接口进行选择。"
        }
         ]
     },
    POLICY_ROUTING_LIST:{
        TITLE: "策略路由规则列表",
        CONTENT: [{
             type: "paragraph",
             content: "您可以查看选路规则，还可以通过表格按钮对条目进行操作。"
        },
        {
             type: "name",
             title: "规则名称",
             content: "设置策略选路规则的名称。"
         },
          {
             type: "name",
             title: "服务类型",
             content: "策略选路功能针对特定的协议生效。"
         },
          {
             type: "name",
             title: "源地址",
             content: "您可以选择地址对象，以建立选路规则条目的源地址范围。"
         },
          {
             type: "name",
             title: "目的地址",
             content: "您可以选择地址对象，以建立选路规则条目的目的地址范围。"
         },
          {
             type: "name",
             title: "出接口",
             content: "您可以选择符合此选路规则条目数据包的出接口。"
         },          
          {
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },
          {
             type: "name",
             title: "添加到指定位置（第几条）",
             content: "指定添加的规则的位置，排在前面的规则比后面规则优先级高。"
         },
         {
            type: "name",
            title: "时间设置",
            content: "用于设置时间所包含的时间段，有两种设置方式。",
             children:[{
                 type:"step",
                 content:[
                    "日历：通过在日历上划分矩形覆盖对应的时间区域来设置包含的时间段，只能精确到小时。",
                    "手动设置：通过手动输入生效时间段并勾选生效星期来设置一个时间段，精确到分钟，但一个对象最多只能设置12个时间段。"
                 ]
             }]
          }
        ]
     },

    ADVANCED_ROUTING_STATIC_ROUTING:{
        TITLE: "静态路由规则",
        CONTENT: [
            {
                 type: "paragraph",
                 content: "您可以通过本页面设置静态路由条目。当数据包与静态路由匹配成功时，将按照指定的转发方式进行转发。"
            },
            {
                 type: "name",
                 title: "规则名称",
                 content: "路由条目的名称，不能和已有的路由条目名称重复。"
            },
            {
                 type: "name",
                 title: "目的地址/子网掩码",
                 content: "数据要到达的目的网络和目的网络的子网掩码。"
            },            
            {
                 type: "name",
                 title: "下一跳",
                 content: "数据包将发往的下一个路由点。"
            },
            {
                 type: "name",
                 title: "出接口",
                 content: "数据包进行转发的接口。"
            },
            {
                 type: "name",
                 title: "Metric",
                 content: "路由条目的优先级，其数值越低优先级越高。默认值为0，一般不需要修改。"
            },
            {
                 type: "name",
                 title: "状态",
                 content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
            }
         ]
     },
    ADVANCED_ROUTING_STATIC_RULE:{
        TITLE: "规则列表",
        CONTENT: [{
             type: "paragraph",
             content: "您可以查看路由条目，还可以通过表格按钮对条目进行操作。"
        }
         ]
     },
     ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE:{
        TITLE: "系统路由表",
        CONTENT: [
            {
                 type: "paragraph",
                 content: "您可以通过本页面查看系统路由表。"
            },
            {
                 type: "name",
                 title: "目的地址/子网掩码",
                 content: "数据要到达的目的网络和目的网络的子网掩码。"
            },
            {
                 type: "name",
                 title: "下一跳",
                 content: "数据包到达目的地址前可以直接转发的下一个设备地址。"
            },
            {
                 type: "name",
                 title: "出接口",
                 content: "数据包进行转发的接口。"
            },
            {
                 type: "name",
                 title: "Metric",
                 content: "数据包到达目的需要的跳数。"
            }
        ]
     },
    QOS_SETTING:{
        TITLE: "功能设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以全局开启或关闭IP带宽控制功能，或设置为仅当带宽利用率达到一定值以上才开启IP带宽控制功能"
        },
        {
            type: "name",
            title: "启用IP带宽控制",
            content: "您可以全局开启或关闭IP带宽控制功能"
        },
        {
            type: "name",
            title: "带宽利用率条件",
            content: "在全局开启IP带宽控制功能的情况下，您可以设置一个百分比值，仅当带宽利用率高于这个值，带宽分配功能才会开启"
        }]
    },
    QOS_LIST: {
        TITLE: "规则列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以查看IP带宽控制的用户规则，还可以通过表格按钮对每条规则进行操作。"
        },
        {
            type: "name",
            title: "受管理IP地址组",
            content: "设置管控IP地址组。"
        },
        {
            type: "name",
            title: "受管理时间段",
            content: "设置管控时间段。"
        },
        {
            type: "name",
            title: "带宽模式",
            content: "共享表示地址组内IP共用设定的上下行带宽；独立表示地址组内所有IP均独占设定的上下行带宽。"
        },
        {
            type: "name",
            title: "数据流向",
            content: "选择规则控制的数据流向。当添加了所有WAN类的规则后，不允许再添加到某一WAN口的规则，反之亦然。"
        },
        {
            type: "name",
            title: "最小上行/下行带宽",
            content: "规则定义的数据流的最小上行/下行保证带宽（单位为 Kbps）。"
        },
        {
            type: "name",
            title: "最大上行/下行带宽",
            content: "规则定义的数据流的最大上行/下行限制带宽（单位为 Kbps）。"
        },
        {
            type: "name",
            title: "备注",
            content: "您可以为该规则添加备注，50字符以内。"
        },
        {
            type: "name",
            title: "状态",
            content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },
        {
            type: "name",
            title: "移动到指定位置（第几条）",
            content: "指定添加的规则的位置，排在前面的规则比后面规则优先匹配，匹配命中的流量不会再被后续规则匹配。"
        },
        {
            type: "note",
            title: "注意",
            content: [
                "最小上/下行带宽实际效果受WAN口设置的上/下行带宽值影响，请正确配置WAN口上下行带宽，需要小于实际线路带宽"
            ]
        }]
    },
    APP_QOS_SETTING:{
        TITLE: "功能设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以全局开启或关闭应用带宽控制功能"
        },
        {
            type: "name",
            title: "启用应用带宽控制",
            content: "您可以全局开启或关闭应用带宽控制功能"
        }]
    },
    APP_QOS_LIST:{
        TITLE: "应用带宽控制规则列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以查看应用带宽控制的规则，还可以通过表格按钮对每条规则进行操作。"
        },
        {
            type: "name",
            title: "最小上行带宽",
            content: "您可以选择规则定义的数据流的最小上行带宽保证（单位为 Kbps）。"
        },
        {
            type: "name",
            title: "最大上行带宽",
            content: "您可以选择规则定义的数据流的最大上行带宽限制（单位为 Kbps）。"
        },
        {
            type: "name",
            title: "最小下行带宽",
            content: "您可以选择规则定义的数据流的最小下行带宽保证（单位为 Kbps）。"
        },
        {
            type: "name",
            title: "最大下行带宽",
            content: "您可以选择规则定义的数据流的最大下行带宽限制（单位为 Kbps）。"
        },
        {
            type: "name",
            title: "备注",
            content: "您可以为规则创建描述信息，以便于记忆。"
        },
        {
            type: "name",
            title: "状态",
            content: "您可以选择此规则是否启用"
        }]
    },
     IPGROUP_ADDRESS_SETTING: {
        TITLE: "地址列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置地址对象，进行地址对象的管理。"
        },
        {
            type: "name",
            title: "地址名称",
            content: "标志地址的名称。"
        },
        {
            type: "name",
            title: "IP类型",
            content: "用于设置地址对象的类型，不同类型计算得到IP集合的方式不同，有下面两种类型：",
             children:[{
                 type:"step",
                 content:[
                    "IP段：设置一个起始地址和一个结束地址，引用包含该地址对象地址组的规则在该地址段内均会生效。",
                    "IP/MASK：设置一个网络标识和一个子网掩码，得到IP网段，引用包含该地址对象地址组的规则在该网段内均会生效。"
                 ]
             }]
        },
        {
            type: "name",
            title: "备注",
            content: "您可以设置地址对象的备注，以方便您管理和查找。备注最多支持50个字符。"
        }
        ]
     },
     IPGROUP_GROUP_SETTING: {
        TITLE: "地址组列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面进行地址管理。"
        },
        {
            type: "name",
            title: "组名称",
            content: "自定义地址组的名称。"
        },
        {
            type: "name",
            title: "IP地址段",
             content: "设置一个起始地址和一个结束地址，引用包含该地址对象地址组的规则在该地址段内均会生效。点击右边的加号可以添加多个地址段。"
        },
        {
            type: "note",
            title: "注意",
            content: "地址组一旦在其他地方被引用则无法在本页面被删除，除非解除引用。"
        }
        ]
     },
     TIME_MNGT_SETTING: {
        TITLE: "时间列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置时间，进行时间的管理。"
        },
        {
            type: "name",
            title: "时间名称",
            content: "标志时间的名称。"
        },
        {
            type: "name",
            title: "时间设置",
            content: "用于设置时间所包含的时间段，有两种设置方式。",
             children:[{
                 type:"step",
                 content:[
                    "日历：通过在日历上划分矩形覆盖对应的时间区域来设置包含的时间段，只能精确到小时。",
                    "手动设置：通过手动输入生效时间段并勾选生效星期来设置一个时间段，精确到分钟，但一个对象最多只能设置12个时间段。"
                 ]
             }]
        },
        {
            type: "note",
            title: "注意",
            content: "时间一旦在其他地方被引用则无法在本页面被删除，除非解除引用。"
        }
        ]
     },
     IP_POOL_LIST: {
         TITLE: "IP 地址池列表",
         CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面设置地址池条目，进行地址池的管理。"
         },{
             type: "name",
             title: "地址池名称",
             content: "标识地址池的名称。"
         },{
             type: "name",
             title: "起始IP地址",
             content: "设置地址池起始地址。"
         },{
             type: "name",
             title: "结束IP地址",
             content: "设置地址池结束地址。"
         },{
             type: "note",
             title: "注意",
             content: "由地址池起始IP和地址池结束IP组成，且地址池起始IP必须不大于地址池结束IP，而且不能与已有的地址池范围重叠。当前一个地址池最多可以包含1024个IP。"
         }]
     },
     SESSIONLIMIT_ENABLE: {
         TITLE: "功能设置",
         CONTENT: [{
             type: "name",
             title: "启用连接数限制",
             content: "您可以勾选此项，使连接数限制功能生效。"
         }]
     },
    SESSIONLIMIT_LIST: {
        TITLE: "连接数规则列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以查看连接数限制的用户规则，还可以通过表格按钮对每条规则进行操作。"
        },{
            type: "name",
            title: "受管理IP地址组",
            content: "设置受限的IP地址范围。"
        },{
            type: "name",
            title: "最大连接数",
            content: "设置受限IP的最大连接数。"
        },{
            type: "name",
            title: "备注",
            content: "您可以为该规则添加备注，50字符以内。"
        },{
            type: "name",
            title: "状态",
            content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }]
    },
     SESSION_LIMITS: {
        TITLE: "连接数监控",
        CONTENT: [{
            type: "paragraph",
            content: "您可通过本页面查看已设置连接数限制规则的地址组内IP地址已建立的连接数。"
        }, {
            type: "name",
            title: "IP",
            content: "已被设置连接数限制规则的地址组中已被监控到的IP地址。"
        }, {
            type: "name",
            title: "最大连接数",
            content: "设置受限IP的最大连接数。"
        }, {
            type: "name",
            title: "当前连接数",
            content: "受限IP当前的连接数。"
        }
        ]
     },
     APPDIST_LIST:{
        TITLE: "应用控制规则列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面添加应用控制条目。"
        },
        {
             type: "name",
             title: "受管理IP地址组",
             content: "设置欲管控IP地址组。"
        },
        {
             type: "name",
             title: "受管理时间段",
             content: "设置管控时间段，在受控时间内，IP地址组内的客户端无法访问禁用列表中勾选的应用。"
        },
        {
             type: "name",
             title: "禁用列表",
             content: "设置需要禁止的应用。"
        },
        {
             type: "name",
             title: "备注",
             content: "设置备注信息，方便查询。"
        },
        {
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }]
     },
     APPDIST_LIST_R:{
        TITLE: "应用控制规则列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面添加应用控制条目。"
        },
        {
             type: "name",
             title: "受管理IP地址组",
             content: "设置欲管控IP地址组。"
        },
        {
             type: "name",
             title: "受管理时间段",
             content: "设置管控时间段，在受控时间内，IP地址组内的客户端无法访问禁用列表中勾选的应用。"
        },
        {
             type: "name",
             title: "禁用列表",
             content: "设置需要禁止的应用。"
        },
        {
             type: "name",
             title: "记录列表",
             content: "将选中的应用的使用记录写到系统日志中。"
        },
        {
             type: "name",
             title: "备注",
             content: "设置备注信息，方便查询。"
        },
        {
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }]
     }, 
     BWLIST:{
        TITLE: "规则列表",
        CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面设置QQ白名单。"
        },
        {
             type: "name",
             title: "受管理IP地址组",
             content: "设置欲管控IP地址组。"
        },
        {
             type: "name",
             title: "受管理时间段",
             content: "设置管控时间段。"
        },
        {
             type: "name",
             title: "QQ号码",
             content: "设置相应的QQ信息。"
        },
        {
             type: "name",
             title: "备注",
             content: "设置备注信息，方便查询。"
        },        
        {
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }]
     },
	 APPDIST_DB:{
        TITLE: "策略库升级",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面升级当前数据库。"
        },
        {
             type: "name",
             title: "当前数据库版本",
             content: "显示当前数据库的版本信息。"
        },
        {
             type: "name",
             title: "数据库路径",
             content: "选择需要导入的策略库，点击“导入”导入最新的策略库。"
         }]
     },
    UPNP_SETTING:{
        TITLE: "功能设置",
        CONTENT: [{
             type: "paragraph",
             content: "如果您启用UPnP服务，则本地应用程序可以通过UPnP协议与设备协商相关功能（如端口映射）设置。"
        },
        {
             type: "name",
             title: "对外生效接口",
             content: "您可以指定一组接口集，该集合包含的接口将被配置以端口映射的功能。"
         },
         {
             type: "name",
             title: "UPnP状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         }]
     },
     UPNP_LIST:{
        TITLE: "服务列表",
        CONTENT: [{
             type: "paragraph",
             content: "在服务列表中，您会看到通过UPnP协议向设备请求的端口映射条目。您可以通过表格按钮对这些条目进行操作。"
        },
        {
             type: "name",
             title: "服务名称",
             content: "对应用程序所配置的端口映射的描述信息。"
        },
        {
             type: "name",
             title: "协议类型",
             content: "表示对何种协议（TCP、UDP或TCP/UDP）进行端口映射。"
        },
        {
             type: "name",
             title: "接口",
             content: "显示需要进行端口转换的设备接口集。"
        },
        {
             type: "name",
             title: "服务IP地址",
             content: "显示需要进行端口转换的主机IP地址。"
        },
        {
             type: "name",
             title: "外部端口/内部端口",
             content: "显示端口映射配置的外部端口/内部端口。"
        },
        {
             type: "name",
             title: "状态",
             content: [
                "已启用：表示请求的端口映射功能被开启； 已禁用：表示请求的端口映射功能未生效。"
                ]
        }]
     },
     INTERFACE_MODE:{
         TITLE: "接口模式选择",
         CONTENT: [{
             type: "paragraph",
             content: "设置WAN口的数目，当改变WAN口数量时，会自动增加/删除接口相关的条目。"
         },
             {
                 type: "name",
                 title: "单WAN口",
                 content: "设备将物理端口1配置为WAN1口。"
             },
             {
                 type: "name",
                 title: "双WAN口",
                 content: "设备将物理端口1、2分别配置为WAN1口、WAN2口。"
             },
             {
                 type: "name",
                 title: "三WAN口",
                 content: "设备将物理端口1、2、3分别配置为WAN1口、WAN2口、WAN3口。"
             },
             {
                 type: "name",
                 title: "四WAN口",
                 content: "设备将物理端口1、2、3、4分别配置为WAN1口、WAN2口、WAN3口、WAN4口。"
             },{
                 type: "name",
                 title: "保存",
                 content: "点击保存按钮进行设置。"
             },{
                 type: "note",
                 title: "注意",
                 content: "切换接口模式后会重启系统，在此过程中请不要做任何其他操作，否则可能导致设备功能异常。"
             }]
     },
     INTERFACE_MODE_9:{
         TITLE: "接口模式选择",
         CONTENT: [{
             type: "paragraph",
             content: "设置WAN口的数目，当改变WAN口数量时，会自动增加/删除接口相关的条目。"
         },
             {
                 type: "name",
                 title: "单WAN口",
                 content: "设备将物理端口9配置为WAN1口。"
             },
             {
                 type: "name",
                 title: "双WAN口",
                 content: "设备将物理端口9、8分别配置为WAN1口、WAN2口。"
             },
             {
                 type: "name",
                 title: "三WAN口",
                 content: "设备将物理端口9、8、7分别配置为WAN1口、WAN2口、WAN3口。"
             },
             {
                 type: "name",
                 title: "四WAN口",
                 content: "设备将物理端口9、8、7、6分别配置为WAN1口、WAN2口、WAN3口、WAN4口。"
             },{
                 type: "name",
                 title: "保存",
                 content: "点击保存按钮进行设置。"
             },{
                 type: "note",
                 title: "注意",
                 content: "切换接口模式后会重启系统，在此过程中请不要做任何其他操作，否则可能导致设备功能异常。"
             }]
     },
     
     INTERFACE_MAC: {
         TITLE: "MAC设置",
         CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面进行设备接口的MAC配置。"
         },{
             type: "name",
             title: "接口",
             content: "设备的WAN、LAN口。"
         },{
             type: "name",
             title: "当前MAC地址",
             content: "接口对应的MAC地址。"
         },{
             type: "name",
             title: "恢复出厂MAC",
             content: "单击此按钮并进行保存，恢复MAC为出厂时设置的MAC地址。"
         },{
             type: "name",
             title: "克隆管理主机MAC",
             content: "单击此按钮并进行保存，设置MAC为当前管理主机的MAC地址。"
         },{
             type: "note",
             title: "提示",
             content: [
                 "使用WAN口的克隆管理主机MAC功能时，管理主机必须位于LAN口。",
                 "如果WAN口连接方式为PPPoE，修改WAN口MAC地址可能会导致连接断开（手动连接）或接口重新连接（自动连接）。"
             ]
         }]
     },
     INTERFACE_LAN: {
         TITLE: "接口设置",
         CONTENT: [{
             type: "paragraph",
             content: "您可以通过本页面设置LAN接口。"
         },{
             type: "name",
             title: "模式设置",
             content: "模式设置有下面两种模式：", 
             children:[{
                type:"step",
                content:[
                         "设为自动模式时，当WAN口获取到的IP与LAN口发生冲突时，LAN口会主动变换网段来避免冲突。",
                         "设为手动模式时，可以自行更改LAN口IP，WAN口获取到的IP不会影响到LAN接口。"
                 ]   
             }] 
         },{
             type: "name",
             title: "IP地址",
             content: "本设备的IP地址，局域网中所有计算机的默认网关应设置为该IP地址。"
         },{
             type: "name",
             title: "子网掩码",
             content: "本设备对局域网的子网掩码，一般为255.255.255.0，局域网中所有计算机的子网掩码应与此处设置相同。"
         },{
             type: "name",
             title: "MAC地址",
             content: "本设备的MAC地址，不可更改。"
         },{
             type: "note",
             title: "提示",
             content: [
                 "当在配置一些功能模块中涉及到LAN地址段，模式将自动切换成“手动”模式以避免自动变更LAN地址IP而带来的配置错乱。"
             ]
         }]
     },
     SWITCH_MONITOR_ENABLE: {
        TITLE: "端口监控",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置端口监控。"         
        },{
             type: "name",
             title: "端口监控",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type: "name",
            title: "监控模式",
            content: "端口监控有下面三种监控模式：", 
            children:[{
                type:"step",
                content:[
                         "输出输入监控：流入流出被监控端口的数据帧将被复制到监控端口。",
                         "输入监控：流入被监控端口的数据帧将被复制到监控端口。",
                         "输出监控：流出被监控端口的数据帧将被复制到监控端口。"
                 ]   
            }]         
        }]
     },
     SWITCH_MONITOR_SETTING: {
        TITLE: "监控列表",
        CONTENT: [{
            type: "name",
            title: "监控端口",
            content: "被监控端口的数据帧将被复制到该端口。"
        }, {
            type: "name",
            title: "被监控端口",
            content: "经过该端口的数据帧将被复制到监控端口。"
        }, {
            type: "note",
            title: "提示",
            content: [
                "一个端口不能同时作为监控端口和被监控端口。",
                "只能设置一个监控端口。"
            ]
        }
        ]
     },
     SWITCH_PORTLIMIT: {
        TITLE: "端口流量限制",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面对流经端口的特定类型数据帧的速率进行控制。"
        }, {
            type: "name",
            title: "入口限制",
            content: "对端口的入口流量限制是否启用。"
        }, {
            type: "name",
            title: "入口限制模式",
            content: "对端口入口的数据帧类型进行限制，有所有帧、广播帧、广播帧和多播帧三种限制模式。"
        }, {
            type: "name",
            title: "入口限制速率(Mbps)",
            content: "对端口的入口流量的限制速率。"
        }, {
            type: "name",
            title: "出口限制",
            content: "对端口的出口流量限制是否启用。"
        }, {
            type: "name",
            title: "出口限制速率(Mbps)",
            content: "对端口的出口流量的限制速率。"
        }
        ]
     },
     SWICH_PARAMETER: {
        TITLE: "端口参数",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置各个端口的工作参数。"
        }, {
            type: "name",
            title: "流量控制",
            content: "您可以勾选此项，端口将启用流量控制功能。"
        }, {
            type: "name",
            title: "协商模式",
            content: "端口的协商模式，包括自协商和双工方式"
        }
        ]
     },
     SWITCH_STATUS: {
        TITLE: "端口状态",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面查看当前各个端口的工作状态。"
        }, {
            type: "name",
            title: "端口状态",
            content: "端口的连接状态，有以下三种状态：",
            children: [{
               type: "step",
               content: [
                    "已禁用：端口处于禁用状态。",
                    "已断开：端口处于启用状态但物理网络未就绪。",
                    "已连接：端口处于启用状态并已正常连接。"
               ]
            }]
        }, {
            type: "name",
            title: "连接速率(Mbps)",
            content: "端口的连接速率。"
        }, {
            type: "name",
            title: "双工模式",
            content: "端口的双工模式，包括：全双工和半双工。"
        }, {
            type: "name",
            title: "流量控制",
            content: "端口的流量控制是否开启。"
        }
        ]
     },
		SERVICE_TYPE: {
         TITLE: "服务类型",
         CONTENT: [{
             type: "paragraph",
             content: "您可以在本页面设置自定义服务类型。"
         },{
             type: "name",
             title: "服务名称",
             content: "您将要设置的服务类型的名称，注意不能与系统预定义服务类型名称重复。"
         },{
             type: "name",
             title: "协议类型",
             content: "服务所使用的协议。您可以选择TCP，UDP，TCP/UDP或ICMP，也可以选择other并输入协议号(0-255)。"
         },{
             type: "name",
             title: "源端口范围",
             content: "服务所使用的源端口范围，仅TCP或UDP协议需要设置。"
         },{
             type: "name",
             title: "目的端口范围",
             content: "服务所使用的目的端口范围，仅TCP或UDP协议需要设置。"
         },{
             type: "name",
             title: "ICMP",
             content: "ICMP协议的类型(type)和编码(code)，填充255时表明所有类型/编码。"
         } ,{
             type: "name",
             title: "备注",
             content: "您可以对服务类型进行描述。"
         }]
     },


    HIHTTPS_ID: {
         TITLE: "hihttps ID",
         CONTENT: [{
             type: "paragraph",
             content: "登录hihttps ID后，您可以使用hihttps动态域名服务。"
         },{
             type: "name",
             title: "登录hihttps ID",
             content: "您可以使用hihttps ID（手机号码或邮箱）登录到支持该功能的hihttps设备。"
         },{
             type: "name",
             title: "免费注册hihttps ID",
             content: "您可以通过手机号码或邮箱免费注册hihttps ID。"
         },{
             type: "name",
             title: "重置hihttps ID的密码",
             content: "忘记密码时，您可以通过手机或邮箱重置hihttps ID的密码。"
         }]
     },

    TPDDNS: {
         TITLE: "hihttps动态域名",
         CONTENT: [{
             type: "paragraph",
             content: "通过DDNS（Dynamic DNS，动态域名解析服务），您可以将固定域名与动态IP进行绑定，使Internet用户可以通过域名来访问设备或内网主机。您可以通过本页面设置hihttps动态域名服务。"
         },{
             type: "name",
             title: "域名",
             content: "您可以创建以“.tpddns.cn”为结尾的域名，例如hello123.tpddns.cn。"
         },{
             type: "name",
             title: "绑定状态",
             content: "已创建的域名有3种状态：未绑定、绑定到本设备、绑定到其他设备。 只有状态为“未绑定”的域名可以被删除。"
         },{
             type: "name",
             title: "绑定信息",
             content: "域名绑定到本设备时，显示绑定的WAN口；域名绑定到其他设备时，显示该设备的LAN端MAC地址。"
         }]
     },


	CMXDDNS: {
         TITLE: "科迈动态域名",
         CONTENT: [{
             type: "paragraph",
             content: "通过DDNS（Dynamic DNS，动态域名解析服务），您可以将固定域名与动态IP进行绑定，使Internet用户可以通过域名来访问设备或内网主机。您可以通过本页面登录科迈动态域名服务器，开启科迈动态域名服务。"
         },{
             type: "name",
             title: "服务接口",
             content: "科迈动态域名服务生效的接口。"
         },{
             type: "name",
             title: "用户名/密码",
             content: "科迈动态域名服务账户的用户名和密码。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },{
             type: "name",
             title: "域名",
             content: "从DDNS服务器获取的域名服务列表，最多可以显示16条域名信息。"
         } ]
     },

	 	PHDDNS: {
         TITLE: "花生壳动态域名",
         CONTENT: [{
             type: "paragraph",
             content: "通过DDNS（Dynamic DNS，动态域名解析服务），您可以将固定域名与动态IP进行绑定，使Internet用户可以通过域名来访问设备或内网主机。您可以通过本页面登录花生壳动态域名服务器，开启花生壳动态域名服务。"
         },{
             type: "name",
             title: "服务接口",
             content: "花生壳动态域名服务生效的接口。"
         },{
             type: "name",
             title: "用户名/密码",
             content: "花生壳动态域名服务账户的用户名和密码。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },{
             type: "name",
             title: "域名",
             content: "从DDNS服务器获取的域名服务列表，最多可以显示16条域名信息。"
         } ]
     },
	 	 	DYN3322DDNS: {
         TITLE: "3322动态域名",
         CONTENT: [{
             type: "paragraph",
             content: "通过DDNS（Dynamic DNS，动态域名解析服务），您可以将固定域名与动态IP进行绑定，使Internet用户可以通过域名来访问设备或内网主机。您可以通过本页面登录3322动态域名服务器，开启3322动态域名服务。"
         },{
             type: "name",
             title: "服务接口",
             content: "3322动态域名服务生效的接口。"
         },{
             type: "name",
             title: "用户名/密码",
             content: "3322动态域名服务账户的用户名和密码。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },{
             type: "name",
             title: "域名",
             content: "用户名绑定的域名信息。"
         } ]
     },
     VPN_CLIENT:{
        TITLE: "VPN客户端",
        CONTENT: [{
             type: "paragraph",
             content: "您可以在本页配置对应WAN口上的VPN客户端。"
         },{
             type: "name",
             title: "服务器地址",
             content: "VPN服务器的地址，可以输入域名或者IP地址。"
         },{
             type: "name",
             title: "用户名/密码",
             content: "拨号使用的用户名称和密码。"
         },{
             type: "name",
             title: "状态",
             content: "显示当前VPN连接的状态。"
         },{
             type: "name",
             title: "协议类型",
             content: "选择使用L2TP/PPTP/L2TP over IPSec协议来进行VPN连接。"
         },{
             type: "name",
             title: "路由设置",
             content: "选择不同的方式进行路由。手动模式下需要填写对端子网。"
         },{
             type: "name",
             title: "对端子网",
             content: "L2TP/PPTP隧道对端局域网使用的IP地址范围（一般可以填隧道对端设备LAN口的IP地址范围），由IP和子网掩码组成。"
         },{
             type: "name",
             title: "连接方式",
             children: [{
                type: "step",
                content: [
                    "自动：立刻进行连接并不断尝试重新连接。",
                    "手动模式：配合连接/断开按钮，根据用户操作进行连接/断开。",
                    "定时连接：根据配置的时间段进行连接。"
                ]
            }]
         },{
             type: "name",
             title: "时间设置",
             content: "选择使用日历或者手动方式设置时间段。",
             children: [{
                type: "step",
                content: [
                    "日历:同过框选的直观方式设置规则生效的时间段。",
                    "手动设置：通过勾选星期几和对应星期几的时间段来设置规则生效。"
                ]
            }]
         },{
             type: "name",
             title: "模式",
             content: "选择使用NAT模式或者路由模式来进行VPN连接。",
             children: [{
                type: "step",
                content: [
                    "NAT模式：从VPN隧道转发的数据包会经过NAT转换。",
                    "路由模式：从VPN隧道转发的数据包不会经过NAT转换。"
                ]
            }]
         }
        ]
     },
	 VPNUSER : {
        TITLE: "VPN用户管理",
        CONTENT: [{
             type: "paragraph",
             content: "您可以配置L2TP/PPTP服务器的用户信息。"
         },{
             type: "name",
             title: "用户名/密码",
             content: "允许拨入的用户名称和密码。"
         },{
             type: "name",
             title: "服务类型",
             content: "根据不同的VPN类型选择。"
         },{
             type: "name",
             title: "本地地址",
             content: "VPN隧道的本地虚拟IP地址。此地址可以任意设置，对端拨通后可通过此IP管理设备。"
         },{
             type: "name",
             title: "地址池",
             content: "L2TP/PPTP服务器分配给客户端的IP地址从地址池内获取。"
         },{
             type: "name",
             title: "DNS地址",
             content: "L2TP/PPTP服务器分配给客户端的DNS地址，如8.8.8.8。"
         },{
             type: "name",
             title: "组网模式",
			 children: [{
                type: "step",
                content: [
                    "PC到站点：拨入的客户端是个人用户，往往由单个计算机拨入实现远端计算机与本地局域网的通信。",
                    "站点到站点：拨入的客户端是一个网段的用户，往往通过一个设备拨入，实现隧道两端局域网的通信。"
                ]
            }]
         },{
             type: "name",
             title: "最大会话数",
             content: "每个用户允许接入的最大客户端数量。注意：用户类型为自动的用户，意味着L2TP和PPTP的最大接入客户端数量均为最大会话数。"
         },{
             type: "name",
             title: "对端子网",
             content: "L2TP/PPTP隧道对端局域网使用的IP地址范围（一般可以填隧道对端设备LAN口的IP地址范围），由IP和子网掩码组成。"
         }
        ]
     },
    L2TP_CLIENT_GLOBAL : {
        TITLE: "全局设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以设置L2TP客户端的全局配置。"
         },{
             type: "name",
             title: "L2TP链路维护时间间隔",
             content: "VPN拨通成功后，发送L2TP链路维护检测报文的时间间隔。"
         },{
             type: "name",
             title: "PPP链路维护时间间隔",
             content: "VPN拨通成功后，发送PPP链路维护检测报文的时间间隔。"
         }
        ]
     },
    L2TP_CLIENT_SET : {
        TITLE: "客户端设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以配置L2TP的客户端。"
         },{
             type: "name",
             title: "隧道名称",
             content: "L2TP隧道的名称，用于区分不同的隧道。"
         },{
             type: "name",
             title: "用户名/密码",
             content: "L2TP隧道用户身份认证的用户名密码。"
         },{
             type: "name",
             title: "出接口",
             content: "L2TP报文收发的接口。"
         },{
             type: "name",
             title: "服务器地址",
             content: "L2TP服务器的地址，可以为IP或域名。"
         },{
             type: "name",
             title: "IPSec加密",
             content: "是否对隧道进行加密。若启用，则使用IPSec对L2TP隧道加密。"
         },{
             type: "name",
             title: "预共享密钥",
             content: "IPSec设置为加密后，需设置IPSec加密时的预共享密钥。"
         },{
             type: "name",
             title: "对端子网",
             content: "L2TP隧道对端局域网使用的IP地址范围（一般可以填隧道对端设备LAN口的IP地址范围），由IP和子网掩码组成。"
         },{
             type: "name",
             title: "上行/下行带宽",
             content: "设备会根据上下行带宽进行流量均衡的计算。"
         },{
             type: "name",
             title: "工作模式",
             children: [{
                type: "step",
                content: [
                    "NAT：对经过此L2TP隧道的数据包进行NAT转换（数据包的源IP替换为L2TP隧道的本地虚拟IP）。",
                    "路由：对经过此L2TP隧道的数据包只进行路由转发。"
                ]
            }]
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },{
             type: "name",
             title: "在线检测模式",
             content: "在线检测是通过PING和DNS检测接口是否在线：",
			 children: [{
					type: "step",
					content: [
                    "自动：DNS检测选择接口的DNS服务器作为目的地址。",
                    "永远在线：不对接口进行任何在线检测，接口状态一直在线。",
					"手动：手动指定PING检测和DNS检测的地址，判断接口是否在线。"
					]
			}]
         },{
            type: "name",
            title: "运营商",
            content: "设置线路的运营商。"
        }
        ]
     },

    L2TP_SERVER_GLOBAL : {
        TITLE: "全局设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以设置L2TP服务器的全局配置。"
         },{
             type: "name",
             title: "L2TP链路维护时间间隔",
             content: "VPN拨通成功后，发送L2TP链路维护检测报文的时间间隔。"
         },{
             type: "name",
             title: "PPP链路维护时间间隔",
             content: "VPN拨通成功后，发送PPP链路维护检测报文的时间间隔。"
         }
        ]
     },
    L2TP_SERVER_SET : {
        TITLE: "服务器设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以配置L2TP的服务器。"
         },{
             type: "name",
             title: "服务接口",
             content: "L2TP服务器监听的接口，只有来自服务接口的报文才会被处理。"
         },{
             type: "name",
             title: "IPSec加密",
             content: "是否对隧道进行加密。若加密，则使用IPSec对L2TP隧道加密。若可选加密，则L2TP隧道按客户端的需求决定是否进行IPSec加密。"
         },{
             type: "name",
             title: "预共享密钥",
             content: "IPSec设置为加密或可选加密后，需设置IPSec的预共享密钥。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         }
        ]
     },

     L2TP_TUNNEL : {
        TITLE: "隧道信息列表",
        CONTENT: [{
             type: "paragraph",
             content: "您可以获得L2TP隧道的信息。"
         },{
             type: "name",
             title: "用户名",
             content: "L2TP隧道建立时用于认证身份使用的用户名称。"
         },{
             type: "name",
             title: "服务器/客户端",
             content: "建立隧道时，本端是作为服务器还是客户端。"
         },{
             type: "name",
             title: "隧道名称",
             content: "L2TP隧道的名称，用于区分不同的隧道。"
         },{
             type: "name",
             title: "虚拟本地IP",
             content: "隧道的本地虚拟IP地址。"
         },{
             type: "name",
             title: "接入服务IP",
             content: "隧道的对端实际IP地址。"
         },{
             type: "name",
             title: "对端虚拟IP",
             content: "隧道的对端虚拟IP地址。"
         },{
             type: "name",
             title: "DNS",
             content: "隧道的DNS地址。"
         }
        ]
     },

     PPTP_CLIENT_GLOBAL : {
        TITLE: "全局设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以设置PPTP客户端的全局配置。"
         },{
             type: "name",
             title: "PPTP链路维护时间间隔",
             content: "VPN拨通成功后，发送PPTP链路维护检测报文的时间间隔。"
         },{
             type: "name",
             title: "PPP链路维护时间间隔",
             content: "VPN拨通成功后，发送PPP链路维护检测报文的时间间隔。"
         }
        ]
     },
    PPTP_CLIENT_SET : {
        TITLE: "客户端设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以配置PPTP的客户端。"
         },{
             type: "name",
             title: "隧道名称",
             content: "PPTP隧道的名称，用于区分不同的隧道。"
         },{
             type: "name",
             title: "用户名/密码",
             content: "PPTP隧道用户身份认证的用户名密码。"
         },{
             type: "name",
             title: "出接口",
             content: "PPTP报文收发的接口。"
         },{
             type: "name",
             title: "服务器地址",
             content: "PPTP服务器的地址，可以为IP或域名。"
         },{
             type: "name",
             title: "MPPE加密",
             content: "是否对隧道进行加密。若启用，则使用MPPE对PPTP隧道加密。"
         },{
             type: "name",
             title: "对端子网",
             content: "PPTP隧道对端局域网使用的IP地址范围（一般可以填隧道对端设备LAN口的IP地址范围），由IP和子网掩码组成。"
         },{
             type: "name",
             title: "上行/下行带宽",
             content: "设备会根据上下行带宽进行流量均衡的计算。"
         },{
             type: "name",
             title: "工作模式",
             children: [{
                type: "step",
                content: [
                    "NAT：对经过此PPTP隧道的数据包进行NAT转换（数据包的源IP替换为PPTP隧道的本地虚拟IP）。",
                    "路由：对经过此PPTP隧道的数据包只进行路由转发。"
                ]
            }]
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         },{
             type: "name",
             title: "在线检测模式",
             content: "在线检测是通过PING和DNS检测接口是否在线：",
			 children: [{
					type: "step",
					content: [
                    "自动：DNS检测选择接口的DNS服务器作为目的地址。",
                    "永远在线：不对接口进行任何在线检测，接口状态一直在线。",
					"手动：手动指定PING检测和DNS检测的地址，判断接口是否在线。"
					]
				}]
         },{
            type: "name",
            title: "运营商",
            content: "设置线路的运营商。"
        }]
     },

    PPTP_SERVER_GLOBAL : {
        TITLE: "全局设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以设置PPTP服务器的全局配置。"
         },{
             type: "name",
             title: "PPTP链路维护时间间隔",
             content: "VPN拨通成功后，发送PPTP链路维护检测报文的时间间隔。"
         },{
             type: "name",
             title: "PPP链路维护时间间隔",
             content: "VPN拨通成功后，发送PPP链路维护检测报文的时间间隔。"
         }
        ]
     },
    PPTP_SERVER_SET : {
        TITLE: "服务器设置",
        CONTENT: [{
             type: "paragraph",
             content: "您可以配置PPTP的服务器。"
         },{
             type: "name",
             title: "服务接口",
             content: "PPTP服务器监听的接口，只有来自服务接口的报文才会被处理。"
         },{
             type: "name",
             title: "MPPE加密",
             content: "是否对隧道进行加密。若启用，则使用MPPE对PPTP隧道加密。"
         },{
             type: "name",
             title: "状态",
             content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
         }
        ]
     },

     PPTP_TUNNEL : {
        TITLE: "隧道信息列表",
        CONTENT: [{
             type: "paragraph",
             content: "您可以获得PPTP隧道的信息。"
         },{
             type: "name",
             title: "用户名",
             content: "PPTP隧道建立时用于认证身份使用的用户名称。"
         },{
             type: "name",
             title: "服务器/客户端",
             content: "建立隧道时，本端是作为服务器还是客户端。"
         },{
             type: "name",
             title: "隧道名称",
             content: "PPTP隧道的名称，用于区分不同的隧道。"
         },{
             type: "name",
             title: "虚拟本地IP",
             content: "隧道的本地虚拟IP地址。"
         },{
             type: "name",
             title: "接入服务IP",
             content: "隧道的对端实际IP地址。"
         },{
             type: "name",
             title: "对端虚拟IP",
             content: "隧道的对端虚拟IP地址。"
         },{
             type: "name",
             title: "DNS",
             content: "隧道的DNS地址。"
         }
        ]
     },
     REMOTE_MNGT: {
        TITLE: "远程管理",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置进行远程管理的IP地址。"
        }, {
            type: "name",
            title: "远程地址范围",
            content: "远程管理主机的地址范围。"
        }, {
            type: "name",
            title: "状态",
            content: "您可以通过启用/禁用该项来设置是否允许对应地址范围内的主机进行远程管理。"
        }, {
            type: "note",
            title: "举例",
            content: "如果您想让地址段为102.31.70.0/24的主机（非LAN口网段）对设备进行远程管理，您可以建立远程管理地址条目，点击<新增>，设置远程地址范围102.31.70.0/24，状态设置为启用。"
        }, {
            type: "note",
            title: "注意",
            content: [
                "包含局域网地址的远程管理地址条目无效（局域网地址包括LAN口合法地址）。",
                "如果添加0.0.0.0/0的条目，将允许所有远程计算机访问设备，有可能在非法攻击情况下无法访问设备。"
            ]
        }
        ]
     },
    IFSTAT:{
        TITLE: "流量统计列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来查看设备各接口的流量信息。"
         },{
            type: "name",
            title: "刷新",
            content: "点击刷新按钮可以查看设备各接口的最新流量统计信息。"
         },{
            type: "name",
            title: "排序",
            content: "点击表头中的文字，可以对该列进行升序/降序排序。"
         }]
     },
     IP_STATS_SETTING:{
        TITLE: "功能设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以设置启用IP流量统计以及监控的IP地址范围。"
         },{
            type: "name",
            title: "启用IP流量统计",
            content: "启用或关闭IP流量统计功能。"
         },{
            type: "name",
            title: "监控IP范围",
            content: "监控IP范围内的流量统计信息将会显示在本页的列表当中。"
         }]
     },
     IP_STATS_LIST:{
        TITLE: "流量统计列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本列表来查看设备各IP的流量统计信息。"
         },{
            type: "name",
            title: "刷新",
            content: "点击刷新按钮可以查看设备最新的IP流量统计信息。"
         },{
            type: "name",
            title: "排序",
            content: "点击表头中的文字，可以对该列进行升序/降序排序。"
         }]
     },
     ADMIN_ACCOUNT:{
        TITLE: "修改管理账户",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来修改管理账户的用户名和密码。"
         },{
            type: "name",
            title: "原用户名",
            content: "原用户名为您本次登录使用的用户名。"
         },{
            type: "name",
            title: "原密码",
            content: "原密码为您本次登录使用的密码。"
         },{
            type: "name",
            title: "新用户名",
            content: "您可以设置一个新的用户名。可以使用字母、数字及常用符号的组合，不能使用中文及特殊符号。"
         },{
            type: "name",
            title: "新密码",
            content: "您可以设置一个新的密码。推荐使用强度较高的密码以保证设备及网络的安全。"
         },{
            type: "name",
            title: "确认新密码",
            content: "请您再输入一遍新设置的密码，来确认新密码。"
         },{
            type: "name",
            title: "密码强度",
            content: "在新密码输入框下的密码强度控件会提示您密码的强度，建议您使用字母、数字及常用符号的组合来提升密码的强度和安全性。"
         }]
     },
     
     NOTHING_CONFIG:{
        TITLE: "暂无帮助",
        CONTENT: [{
            type: "暂无帮助",
            content: "暂无帮助。"
         }]
     },
     
     ADMIN_CONFIG:{
        TITLE: "系统管理设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面进行服务端口和会话超时时间的管理。"
         },{
            type: "name",
            title: "Http服务端口",
            content: "用于Web管理界面的服务端口，默认为80端口。不能与其他的服务端口重复。"
         },{
            type: "name",
            title: "Https服务",
            content: "Https服务功能默认关闭。当选择开启此功能之后，可以通过Https方式对Web进行管理。"
         },{
            type: "name",
            title: "Https服务端口",
            content: "用于Web管理界面的Https服务端口，默认为443端口。不能与其他的服务端口重复。"
         },{
            type: "name",
            title: "认证服务端口",
            content: "用于认证服务的端口，默认为8080端口。不能与其他的服务端口重复。"
         },{
            type: "name",
            title: "Web会话超时时间",
            content: "如果在会话超时时间内都没有进行操作，系统将自动退出登录，以保证设备和网络的安全。"
         }]
     },
     SWITCH_PORTVLAN:{
        TITLE: "Port VLAN",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过基于端口的VLAN划分，控制端口之间是否可以进行通信，从而灵活地部署网络环境。"
         },{
            type: "name",
            title: "网络",
            content: "用于标识各个物理端口此时属于的逻辑网络。"
         },{
            type: "name",
            title: "VLAN",
            content: "您可以将端口划分入不同的VLAN。"
         },{
            type: "note",
            title: "提示",
            content: [
                "Port VLAN的划分只能在LAN口中进行。",
                "只有位于同一个Port VLAN中的端口之间才能进行通信，位于不同Port VLAN的端口之间无法进行通信。"
            ]
         }]
     },
     SWITCH_PORTVLAN_R:{
        TITLE: "Port VLAN",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过基于端口的VLAN划分，控制端口之间是否可以进行通信，从而灵活地部署网络环境。"
         },{
            type: "name",
            title: "VLAN",
            content: "您可以将端口划分入不同的VLAN。"
         },{
            type: "note",
            title: "提示",
            content: [
                "Port VLAN的划分只能在LAN口中进行。",
                "只有位于同一个Port VLAN中的端口之间才能进行通信，位于不同Port VLAN的端口之间无法进行通信。"
            ]
         }]
     },
     SWITCH_PORT_STATISTICS:{
        TITLE: "端口统计列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过端口统计查看各个端口收发数据帧的统计信息。"
         },{
            type: "name",
            title: "单播帧",
            content: "接收/发送目的MAC地址为单播MAC地址的正常数据帧数目。"
         },{
            type: "name",
            title: "广播帧",
            content: "接收/发送目的MAC地址为广播MAC地址的正常数据帧数目。"
         },{
            type: "name",
            title: "流控帧",
            content: "接收/发送的流控帧（起流量控制作用的数据帧）数目。"
         },
         {
            type: "name",
            title: "多播帧",
            content: "接收/发送目的MAC地址为多播MAC地址的正常数据帧数目。"
         },
         {
            type: "name",
            title: "过小帧",
            content: "接收的长度小于64字节的数据帧数目（包含错误帧）。"
         },
         {
            type: "name",
            title: "正常帧",
            content: "接收的长度在64字节到最大帧长的数据帧数目（包含错误帧）。"
         },
         {
            type: "name",
            title: "过大帧",
            content: "接收的长度大于最大帧长的数据帧数目（包含错误帧）。"
         },
         {
            type: "name",
            title: "刷新",
            content: "点击<刷新>按钮以获取最新的统计结果。"
        },{
            type: "name",
            title: "清空",
            content: "点击<清空>按钮以清空统计结果。"
        },{
            type: "note",
            title: "提示",
            content: [
                "错误帧：指校验和错误的帧。",
                "最大帧长：设备支持的最大帧的大小，对于不带Tag标签的帧该值为1518字节，对于带Tag标签的帧该值为1522字节。"
            ]
        }]
     },
     
     INTERFACE_WAN:{
        TITLE: "接口设置",
        CONTENT: [{
                type: "paragraph",
                content: "您可以通过本页面设置WAN接口。"
            },{
                type: "name",
                title: "连接方式",
                children: [{
                type: "step",
                content: [
                    "动态IP：使用运营商动态分配的临时IP地址进行上网的方式。",
                    "静态IP：使用运营商提供的固定IP进行上网的方式。",
					"PPPoE拨号：使用运营商提供的宽带帐号和密码进行上网的方式。"
                ]
            }]
            },{
				type: "name",
                title: "连接状态",
                content: "如果WAN口获取到上网参数显示“已连接”，未获取到上网参数显示“未连接”。"
			},{
                type: "name",
                title: "IP地址、子网掩码、网关地址、DNS服务器",
                content: "运营商分配的上网参数或用户设置的上网参数。"
            },{
                type: "name",
                title: "在线时长",
                content:"设备获取到上网参数的累计时长。"
            },{
                type: "name",
                title: "用户名/密码",
                content: "运营商提供的宽带账号和密码。"
            },
            {
                type: "name",
                title: "主机名",
                content: "网络中其他设备看到该设备的名称，缺省为空。"
            },
            {
                type: "name",
                title: "连接模式",
				children: [{
					type: "step",
					content: [
					"自动连接：设备自动进行连接。在使用过程中，如果由于外部原因网络被断开，设备会每隔固定时间尝试重连，直到连接上为止。",
                    "手动连接：宽带拨号的连接断开都需要手动点击“连接”“断开”按钮进行操作。",
					"定时连接：在连接时段内，设备将自动进行PPPoE连接。"
					]
				}]
            },
            {
                type: "name",
                title: "服务名",
                content: "填入ISP提供的服务名称。如若不是运营商特别要求，请勿填入。"
            },
            {
                type: "name",
                title: "上行/下行带宽",
                content: "请填写运营商提供的实际上下行带宽，当使用多WAN口的流量均衡模式时，设备会根据该值进行流量均衡的计算。"
            },
            {
                type: "name",
                title: "MTU",
                content: "数据包的最大传输单元，动静态IP可设置范围为576 ~ 1500，PPPoE可设置的最大范围是576~1492。"
            },{
                type: "name",
                title: "首选/备用DNS服务器",
                content: "运营商会自动分配DNS服务器，如果有需要可手动设置。"
            },{
                type: "name",
                title: "WAN口速率",
                content: "设置WAN口速率以及双工模式。"
            },{
                type: "name",
                title: "WAN口MAC地址设置",
                content: "设置设备对广域网的MAC地址，一般情况下不需要更改此地址。某些地区的运营商会将线路与MAC地址进行绑定，同时提供一个“有效的MAC地址”，此时只有将WAN口的MAC地址设置为该“有效的MAC地址”才可以正常共享上网。"
            },{
                type: "name",
                title: "在线检测模式",
                content: "在线检测是通过PING和DNS检测接口是否在线：",
				children: [{
					type: "step",
					content: [
                    "自动：DNS检测选择接口的DNS服务器作为目的地址。",
                    "永远在线：不对接口进行任何在线检测，接口状态一直在线。",
					"手动：手动指定PING检测和DNS检测的地址，判断接口是否在线。"
					]
				}]
            },{
                type: "name",
                title: "保存",
                content: "保存接口配置。"
            },{
                type: "name",
                title: "连接",
                content: "当设备未拨号成功可点击此按钮拨号。"
            },{
                type: "name",
                title: "断开",
                content: "当设备拨号成功后可点击此按钮手动断开。"
            },{
                type: "name",
                title: "更新",
                content: "WAN口重新获取IP地址。"
            },{
                type: "name",
                title: "运营商",
                content: "设置线路的运营商。"
            }]
     },
     WAN_STATUS:{
        TITLE: "连接状态",
        CONTENT: [{
            type: "paragraph",
            content: "您可以查看到当前WAN口的状态。"
        }]
     },
     DHCP_SERVER_SETTINGS:{
        TITLE: "DHCP服务设置",
        CONTENT: [{
            type: "paragraph",
            content: "DHCP服务器能够自动给局域网当中的设备分配IP、子网掩码等TCP/IP协议参数。"
        },{
            type: "name",
            title: "DHCP服务",
            content: "DHCP服务器有两种状态，分别为开启和关闭，滑块为蓝色表示开启，滑块为灰色表示关闭。"
        },{
            type: "name",
            title: "开始/结束地址",
            content: "DHCP服务器自动分配的IP的开始/结束地址。"
        },{
            type: "name",
            title: "地址租期",
            content: "自动分配的IP的有效时间，超过该时间后局域网内的设备将重新获取IP。"
        },{
            type: "name",
            title: "网关地址",
            content: "可选项，默认为空，此时生效的网关为设备的LAN口IP地址。"
        },{
            type: "name",
            title: "缺省域名",
            content: "可选项，填入本地网域名。"
        },{
            type: "name",
            title: "首选/备用DNS服务器",
            content: "可选项，如果运营商有提供DNS服务器地址，请在此填写。"
        },{
            type: "name",
            title: "Option60",
            content: "可选项，请填入厂商信息。具体厂商信息请咨询相关厂商，例如hihttps的厂商信息为hihttps。"
        },{
            type: "name",
            title: "Option138",
            content: "可选项，请填入AC（无线控制器）IP地址。"
        }]
     },
     DHCP_CLIENT_LIST:{
        TITLE: "DHCP客户端列表",
        CONTENT: [{
            type: "paragraph",
            content: "您可以在本页面查看DHCP的客户端相关信息。"
        },{
            type: "name",
            title: "主机名",
            content: "由DHCP服务器分配IP的客户端主机名。"
        },{
            type: "name",
            title: "MAC地址",
            content: "分配到IP地址的客户端主机的MAC地址。"
        },{
            type: "name",
            title: "IP地址",
            content: "DHCP服务器分配给客户端主机的IP地址。"
        },{
            type: "name",
            title: "剩余租期",
            content: "DHCP服务器所分配IP地址的剩余有效使用时间，超时将重新分配。"
        },{
            type: "name",
            title: "刷新",
            content: "点击刷新将刷新显示目前已分配的DHCP客户端。"
        },{
            type: "name",
            title: "清空",
            content: "点击清空将目前记录在设备中所有的客户端条目清空。"
        },{
            type: "name",
            title: "添加到静态地址",
            content: "点击“添加”按钮，路由自动将目前已经学习到的IP与MAC条目添加到静态地址分配列表中。"
        }]
     },
     DHCP_STATIC:{
        TITLE: "DHCP静态地址分配",
        CONTENT: [{
            type: "paragraph",
            content: "您可以在本页面为指定的MAC地址预留IP地址。当该主机向DHCP服务器请求分配IP时，服务器将为其分配预留的IP地址。"
        },{
            type: "name",
            title: "MAC地址",
            content: "预留IP地址的主机MAC地址。"
        },{
            type: "name",
            title: "IP地址",
            content: "为指定主机预留的IP地址。"
        },{
            type: "name",
            title: "备注",
            content: "您可以设置静态地址分配条目备注，以方便您管理和查找。备注最多支持32个字符。"
        },{
            type: "name",
            title: "状态",
            content: "控制该条目是否启用，滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }]
     },
     FACTORY: {
        TITLE: "恢复出厂配置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过恢复出厂配置，将设备的所有配置重置为出厂时的默认配置。"
        }, {
            type: "name",
            title: "恢复出厂配置",
            content: "点击<恢复出厂配置>来进行设备恢复出厂配置。"
        }, {
            type: "note",
            title: "注意",
            content: [
                "恢复出厂配置后，当前的配置信息将会丢失。如果您想保留当前配置，请注意备份。",
                "恢复出厂配置后，设备将自动重启。"
            ]
        }]
     },
     BACKUP_RESTORE: {
        TITLE: "备份与导入配置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面保存或恢复您的配置。"
        }, {
            type: "name",
            title: "备份配置信息",
            content: "您可以通过点击<备份>按钮来保存您当前的配置信息。设备将以文件的形式保存您的设置，建议您在进行软件升级前进行备份。"
        }, {
            type: "name",
            title: "导入配置信息",
            content: "您可以通过浏览选择配置文件后点击<导入>按钮，导入配置文件来恢复您的配置信息。"
        }, {
            type: "note",
            title: "注意",
            content: [
                "如果您导入的配置文件版本与现有版本差距过大，有可能导致配置信息丢失。",
                "导入配置信息后，设备将自动重启。"
            ]
        }]

     },
     REBOOT: {
        TITLE: "重启设备",
        CONTENT: [{
            type: "paragraph",
            content: "设备的部分配置修改需要重启设备才能生效，您可以通过本页面来重启设备。"
        }, {
            type: "name",
            title: "重启设备",
            content: "点击<重启设备>按钮来完成设备的重启。"
        }, {
            type: "note",
            title: "注意",
            content: "在设备重启过程中，请不要将设备断电！"
        }]
     },
     FIRMWARE: {
        TITLE: "软件升级",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来进行软件升级。建议您进行软件升级前，先备份您的配置信息。"
        }, {
            type: "name",
            title: "当前软件版本",
            content: "设备的软件版本。"
        }, 
        {
            type: "name",
            title: "检测新版本",
            content: "点击<检测新版本>按钮向云端检测是否存在更新版本的软件。"
        }, 
        {
            type: "name",
            title: "最新软件版本",
            content: "从云端获取到的最新的软件版本。"
        }, 
        {
            type: "name",
            title: "软件更新说明",
            content: "最新版本软件的更新说明。"
        }, 
        {
            type: "name",
            title: "在线升级",
            content: "点击<在线升级>按钮后设备将自动从云端下载最新版本的软件并升级。"
        }, 
        {
            type: "name",
            title: "当前硬件版本",
            content: "设备的硬件版本。"
        }, {
            type: "name",
            title: "升级文件路径",
            content: "您可以在此选择升级文件后点击<升级>按钮来进行软件升级。"
        }, {
            type: "note",
            title: "提示",
            content: [
                "使用在线升级的时候请确保设备正常联网。",
                "请确保在设备升级过程中，不要将设备断电，不要对页面进行刷新。升级完毕，设备将自动重启。",
                "您可以到网址<a href=\"http:\/\/www.hihttps.com\" target=\"_blank\">www.hihttps.com</a>下载最新的升级软件。"
            ]
        }, {
            type: "note",
            title: "注意",
            content: [
                "在设备升级过程中，请不要将设备断电。",
                "进行软件升级后，当前的配置信息可能会丢失。请您在升级前备份产品配置信息。"
            ]
        }]
     },
     TIME_SETTING: {
        TITLE: "时间设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来查看和设置系统时间。"
        }, {
            type: "name",
            title: "当前时间",
            content: "设备的系统时间，如未曾设置或联网同步，则该时间为设备出厂时间。"
        }, {
            type: "name",
            title: "设置时间",
            content: "设置设备系统时间的方式，分为通过网络获取系统时间和手动设置系统时间，其中手动设置系统时间也可以通过获取管理主机时间的方式进行设置。"
        }, {
            type: "name",
            title: "通过网络获取系统时间",
            content: "选中<通过网络获取系统时间>，设备将通过网络获取GMT时间。",
            children: [{
                type: "step",
                content: [
                    "时区：设备所在的时区。",
                    "首选/备用NTP服务器：您可以自行指定NTP服务器地址。"
                ]
            }]
        }, {
            type: "name",
            title: "手动设置系统时间",
            content: "选中<手动设置系统时间>，您可以通过手动输入的方式来设置设备日期和时间。"
        }, {
            type: "name",
            title: "获取管理主机时间",
            content: "点击<获取管理主机时间>，系统将获取当前管理主机的时间并将设备的系统时间设置为该时间。"
        }]
     },
     SYSTEM_LOG: {
        TITLE: "系统日志",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面来查看系统运行状况。"
        }
        ]
     },
     SYSTEM_LOG_SETTING: {
        TITLE: "日志设置",
        CONTENT: [{
            type: "name",
            title: "启用自动刷新",
            content: "选中<启用自动刷新>，页面将每隔10秒自动刷新一次。"
        }, {
            type: "name",
            title: "选择日志等级",
            content: "选中<选择日志等级>，将弹出日志等级复选框以供您查看特定等级的日志信息。",
            children: [{
                type: "step",
                content: [
                    "所有等级：查看所有等级的日志信息。",
                    "致命错误：导致系统不可用的错误。",
                    "紧急错误：必须对其采取紧急措施的错误。",
                    "严重错误：导致系统处于危险状态的错误。",
                    "一般错误：一般性的错误提示。",
                    "警告信息：系统仍然正常运行，但可能存在隐患的提示信息。",
                    "通知信息：正常状态下的重要提示信息。",
                    "信息报告：一般性的提示信息。",
                    "调试信息：调试过程中产生的信息。"
                ]
            }]
        }]
     },
     SYSTEM_LOG_SETTING_R: {
        TITLE: "日志设置",
        CONTENT: [{
            type: "name",
            title: "启用自动刷新",
            content: "打开启用自动刷新，页面将每隔10秒自动刷新一次。"
        }, {
            type: "name",
            title: "选择日志等级",
            content: "选中<选择日志等级>，将弹出日志等级复选框以供您查看特定等级的日志信息。",
            children: [{
                type: "step",
                content: [
                    "所有等级：查看所有等级的日志信息。",
                    "致命错误：导致系统不可用的错误。",
                    "紧急错误：必须对其采取紧急措施的错误。",
                    "严重错误：导致系统处于危险状态的错误。",
                    "一般错误：一般性的错误提示。",
                    "警告信息：系统仍然正常运行，但可能存在隐患的提示信息。",
                    "通知信息：正常状态下的重要提示信息。",
                    "信息报告：一般性的提示信息。",
                    "调试信息：调试过程中产生的信息。"
                ]
            }]
        }, {
            type: "name",
            title: "发送系统日志",
            content: "打开发送系统日志开关后，将会往指定IP地址发送系统日志数据。"
        }, {
            type: "name",
            title: "服务器地址",
            content: "指定一个服务器的IP地址，在发送系统日志功能开启时往该服务器发送日志数据。"
        }]
     },
     SYSTEM_LOG_LIST: {
        TITLE: "日志列表",
        CONTENT: [{
            type: "name",
            title: "日志内容",
            content: "每一项日志内容组成格式为“时间+功能模块+日志等级+日志信息”。"
        }, {
            type: "name",
            title: "刷新",
            content: "手动刷新日志内容。"
        }, {
            type: "name",
            title: "全部删除",
            content: "点击<全部删除>将删除设备中保存的所有日志。"
        }, {
            type: "name",
            title: "导出日志",
            content: "点击<导出日志>按钮，设备将以文件形式保存当前设备中所有的日志内容。"
        }]
     },
     DIGNOSTIC: {
        TITLE: "诊断工具",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过诊断工具来检测和诊断当前的网络状况。"
        }, {
            type: "name",
            title: "诊断工具类型",
            content: "用于诊断网络状况的方式。有下面两种：",
            children: [{
                type: "step",
                content: [
                    "PING通信检测，用于检测到达网络中的某节点是否连通。",
                    "路由跟踪检测，用于检测到达联络中的某节点经过节点的个数以及节点地址。"
                ]
            }]
        },{
            type: "name",
            title: "目的IP/域名",
            content: "需要进行Ping通信检测或者路由跟踪检测的主机地址，支持IP地址和域名。"
        }, {
            type: "name",
            title: "出接口",
            content: "需要进行Ping通信检测或者路由跟踪检测的接口。"
        },{
            type: "name",
            title: "PING次数",
            content: "设置Ping通信检测时发送Ping包的数量。"
        }, {
            type: "name",
            title: "PING数据包大小",
            content: "设置Ping通信检测时发送的Ping包的大小。"
        },{
            type: "name",
            title: "路由跟踪最大TTL",
            content: "设置路由跟踪检测发送数据包在网络中的最大转发跳数。"
        }]
     },
     
     PRINTER_SERVER: {
        TITLE: "打印服务器",
        CONTENT: [{
            type: "paragraph",
            content: "通过本页面您可以设置启用/禁用USB网络打印服务器。"
        },{
            type: "name",
            title: "打印服务器状态",
            content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }]
     },
     STORAGE_SHARE: {
        TITLE: "功能设置",
        CONTENT: [{
            type: "paragraph",
            content: "通过本页面您可以设置启用/禁用USB存储共享。"
        },{
            type: "name",
            title: "FTP服务器状态",
            content: "启用该功能后，内网主机可以通过FTP服务器地址访问您插在设备上的USB存储设备。滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type: "name",
            title: "允许从WAN口登录",
            content: "启用该功能后，可以从外网登录您的USB存储设备。例如，WAN口IP为10.10.10.1时，可通过ftp://10.10.10.1登录。"
        },{
            type: "name",
            title: "FTP登录方式",
            content: "您可以选择匿名登录或账号登录."
        }]
     },
     SMSPORTAL_FUNCTION: {
        TITLE: "功能设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置短信认证功能。"
        },
        {
            type: "name",
            title: "状态",
            content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }, {
            type:"name",
            title:"生效SSID",
            content:"认证功能可以生效在指定的SSID上，可多选。"
        }, {
            type: "name",
            title: "空闲断线",
            content: "启用该功能后，如果接入设备下线时长达到空闲时间，将会被清除认证状态。"
        }, {
            type: "name",
            title: "免费上网时长",
            content: "用户短信认证上线后，可以免费上网的时长，达到时长自动下线。"
        }]     
     },
     SMSPORTAL_PAGE: {
        TITLE: "认证界面设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置短信认证重定向界面。"
        }, {
            type: "name",
            title: "背景图片",
            content: "用于自定义页面的背景展示图，图片大小限制在200KB以内。"
        },  {
            type: "name",
            title: "欢迎信息",
            content: "显示自定义页面的欢迎信息。"
        }, {
            type: "name",
            title: "版权声明",
            content: "显示自定义页面的版权声明信息。"
        }, {
            type: "name",
            title: "页面预览",
            content: "通过点击<预览登录页面>按钮可以预览设置后的短信认证页面效果。"                                          
        }]
     },
     SMSPORTAL_PATAMETER:{
        TITLE: "认证参数设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置短信认证的参数信息。"
        },{
            type: "name",
            title: "验证码有效期",
            content: "用户在该时间内输入验证码进行验证有效，否则需重新获取验证码。"
        },{
            type: "name",
            title: "通道类型",
            content: "分为http协议类型及指定的第三方短信平台。当选择http协议类型时，需填写所选择平台的url地址（'?'前面部分）、编码类型、请求方式以及短信模板（以url参数的形式列出，为'?'后面部分内容）；当选择指定的第三方平台，需填写对应的用户名、密码、模板ID、签名等相关项，且在第三方平台上设置模板时，要求以'code'为关键字，如阿里云的模板设置：尊敬的用户您好，您的免费上网验证码为${code}！。"
        },{
            type:"name",
            title:"阿里云",
            content:"使用阿里云平台进行短信发送",
            children:[{
                type:"step",
                content:[
                    "Access Key ID：访问阿里云平台短信接口所对应的用户名。",
                    "Access Key Secret：访问阿里云平台短信接口所对应的密码。",
                    "模板CODE：阿里云平台所提供的模板ID号。",
                    "签名名称：阿里云平台发送的短信模板对应的签名名称。"
                ]
            }]
        },{
            type:"name",
            title:"腾讯云",
            content:"使用腾讯云平台进行短信发送",
            children:[{
                type:"step",
                content:[
                    "SMK_App_ID：访问腾讯云平台短信接口所对应的用户名。",
                    "App Secret：访问腾讯云平台短信接口所对应的密码。",
                    "模板ID：腾讯云平台所提供的模板ID号。",
                    "签名：腾讯云平台发送的短信模板对应的签名名称。"
                ]
            }]
        },{
            type:"name",
            title:"百度云",
            content:"使用百度云平台进行短信发送",
            children:[{
                type:"step",
                content:[
                    "Access Key ID：访问百度云平台短信接口所对应的用户名。",
                    "Secret Access Key：访问百度云平台短信接口所对应的密码。",
                    "模板ID：百度云平台所提供的模板ID号。",
                    "短信签名：百度云平台发送的短信模板对应的签名名称。",
                    "调用ID：百度云平台调用短信发送应用的调用ID。"
                ]
            }]
        },{
            type:"name",
            title:"网易云信",
            content:"使用网易云信平台进行短信发送",
            children:[{
                type:"step",
                content:[
                    "AppKey：访问网易云信平台短信接口所对应的用户名。",
                    "App Secret：访问网易云信平台短信接口所对应的密码。",
                    "模板ID：网易云信平台所提供的模板ID号。",
                    "短信签名：网易云信平台发送的短信模板对应的签名名称。"
                ]
            }]
        },{
            type:"name",
            title:"HTTP协议",
            content:"使用HTTP协议方式发送短信",
            children:[{
                type:"step",
                content:[
                    "短信模板：当为http类型时，短信模板为url参数。其中，手机号与验证码分别采用'{PHONE}'与'{CODE}'关键字替换，例如：user=zhangsan&password=12345678&phone={PHONE}&msg=您的验证码为{CODE}，请不要告诉他人！。参数中可增加其它固定的参数信息，如：action=send。不可添加不固定项，主要包括时间戳、MD5项、校验和项等。",
                    "URL地址：所选择平台的URL地址。",
                    "请求方式：向服务器发送请求的HTTP报文类型。"
                ]
            }]
        }]
     },
     SMS_USER: {
        TITLE: "短信认证用户信息备份",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面备份下短信认证上网的用户的基本信息。"
        },{
            type: "name",
            title: "备份",
            content: "您可以备份下短信认证用户的手机号和设备厂商等信息。"
        }]
     },
     WPORTAL_FUNCTION: {
        TITLE: "功能设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置Web认证功能。"
        },
        {
            type: "name",
            title: "状态",
            content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }, {
            type:"name",
            title:"生效SSID",
            content:"认证功能可以生效在指定的SSID上，可多选。"
        }, {
            type: "name",
            title: "空闲断线",
            content: "启用该功能后，如果接入设备下线时长达到空闲时间，将会被清除认证状态。"
        }]     
     },
     WPORTAL_PARAMETER: {
        TITLE: "认证参数设置",
        CONTENT: [
        {
            type: "name",
            title: "认证页面",
            content: "选择“自定义页面”将使用设备自带的页面版式，选择“外部链接”终端将重定向到外部链接上获取认证页面信息。"
        }, {
            type: "name",
            title: "背景图片",
            content: "用于自定义页面的背景展示图，图片大小限制在200KB以内。"
        }, {
            type: "name",
            title: "欢迎信息",
            content: "显示自定义页面的欢迎信息。"
        }, {
            type: "name",
            title: "版权声明",
            content: "显示自定义页面的版权声明信息。"
        }, {
            type: "name",
            title: "完成后跳转URL",
            content: "当成功完成认证后，页面自动跳转到设置的URL。"
        }, {
            type: "name",
            title: "页面预览",
            content: "预览用户登录的页面。"
        }, {
            type: "name",
            title: "认证URL",
            content: "认证页面选择使用外部链接，填写用于认证的URL信息。"
        }, {
            type: "name",
            title: "认证成功跳转链接",
            content: "认证页面选择外部链接，当认证成功后跳转到的链接。"
        }, {
            type: "name",
            title: "认证失败跳转链接",
            content: "认证页面选择外部链接，当认证失败后跳转到的链接。"
        }, {
            type: "name",
            title: "认证方式",
            content: "选择认证的方式，有本地认证、radius认证和一键上网可供选择。",
            children: [{
                type: "step",
                content: [
                    "本地认证：通过用户管理页面设置的本地用户进行认证。"
                ]
            },{
                type: "step",
                content: [
                    "radius认证：使用外部配置的认证服务器进行认证，如果认证服务器不指定上网时长值，上网时长将设置为默认值30分钟。"
                ]
            },{
                type: "step",
                content: [
                    "一键上网：通过一键设置通过认证，无需用户名密码。"
                ]
            }]

        }, {
            type: "name",
            title: "到期提醒",
            content: "本地认证方式时，可以设置在用户即将到期时提醒用户。滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }, {
            type: "name",
            title: "开始提醒时间",
            content: "设置帐号到期前几天开始提醒用户。"
        }, {
            type: "name",
            title: "提醒方式",
            content: "认证时提醒只在认证成功后提醒用户一次；周期提醒会在开始提醒时间范围内，每隔一段时间提醒用户。"
        }, {
            type: "name",
            title: "周期提醒间隔",
            content: "提醒用户认证到期的时间间隔。"
        }, {
            type: "name",
            title: "提醒页面内容",
            content: "设置提醒页面内容。"
        }, {
            type: "name",
            title: "页面预览",
            content: "预览用于提醒用户到期的页面。"
        }, {
            type: "name",
            title: "主radius服务器地址",
            content: "填写外部radius认证服务器地址。"
        }, {
            type: "name",
            title: "备用radius服务器地址",
            content: "选择radius认证时，备用的radius服务器地址。"
        }, {
            type: "name",
            title: "认证端口",
            content: "用于radius认证的端口号。"
        }, {
            type: "name",
            title: "授权共享密钥",
            content: "外部radius认证授权共享密钥。"
        }, {
            type: "name",
            title: "失败发送次数",
            content: "radius认证失败后，重复发送认证请求的次数。"
        }, {
            type: "name",
            title: "超时时间",
            content: "radius认证超时时间。"
        }, {
            type: "name",
            title: "认证方式",
            content: "支持PAP和CHAP两种认证方式。PAP是采用认证用户名密码不加密的方式，CHAP采用认证用户名不加密，认证密码加密的方式认证。"
        }, {
            type: "name",
            title: "免费上网时长",
            content: "设置一键上网的免费时长，1-1440分钟。"
        }, {
            type: "note",
            title: "提示",
            content: "不能同时开启Web认证、微信连WiFi服务和短信认证。"
        }]     
     },
     WECHAT_WIFI_FUNCTION: {
        TITLE: "功能设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置微信连WiFi功能。"
        },
        {
            type: "name",
            title: "状态",
            content: "滑块为灰色表示禁用，滑块为蓝色表示启用。"
        }, {
            type: "name",
            title: "空闲断线",
            content: "启用该功能后，如果接入设备下线时长达到空闲时间，将会被清除认证状态。"
        }]
     },
     WECHAT_WIFI_PARAMETER: {
        TITLE: "微信公众平台参数设置",
        CONTENT: [{
            type: "name",
            title: "微信公众平台参数设置",
            content: "设置微信公众平台参数前需先登陆微信公众平台官网注册相关门店，注册成功后，微信公众平台提供一系列参数（SSID、ShopID、AppID、Secretkey），获取到参数后需将相关添加到设备中，如果之前已经注册成功，只需将微信公众平台参数设置到设备中。"
        },{
            type: "name",
            title: "SSID",
            content: "设备无线网络的名称。设备的SSID需与微信公众平台上注册的SSID保存一致。"
        }, {
            type: "name",
            title: "ShopID",
            content: "商家微信公众平台门店ID。"
        }, {
            type: "name",
            title: "AppID",
            content: "商家微信公众平台账号。"
        }, {
            type: "name",
            title: "Secretkey",
            content: "商家微信公众平台账号的密钥。"
        }, {
            type: "name",
            title: "微信连Wi-Fi设置说明",
            content: "通过该链接您可以看到更详细的设置教程。您需要连接互联网才能查看该教程。"
        },{
            tpye: "note",
            title: "提示",
            content: "更新公众号参数后，强制关注的相关参数将重新生成，请到强制关注页面查看并更新到您的公众号中。"
        }]
     },
     WECHAT_WIFI_PAGE: {
        TITLE: "认证页面设置",
        CONTENT: [{
            type: "name",
            title: "背景图片",
            content: "设置微信认证页面的背景图片。点击<上传>按钮来设置您的自定义背景图片。如不上传，则会使用设备自带的默认背景图片。"
        }, {
            type: "name",
            title: "Logo图片",
            content: "设置微信认证页面的Logo图片。点击<上传>按钮来设置您的自定义Logo图片。点击<删除>按钮将不使用Logo图片。"
        }, {
            type: "name",
            title: "Logo信息",
            content: "设置微信认证页面的Logo信息。Logo信息位于Logo图片的正下方。可以输入1-25个字符。"
         }, {
            type: "name",
            title: "欢迎信息",
            content: "设置微信认证页面的欢迎信息。欢迎信息位于登录按钮的上方。可以输入1-50个字符。"
         }, {
            type: "name",
            title: "登录按钮提示文字",
            content: "设置微信认证页面的登录按钮提示文字。可以输入1-15个字符。"
         }, {
            type: "name",
            title: "版权声明",
            content: "设置微信认证页面的版权声明。版权声明位于认证页面底部。可以输入1-25个字符。"
         }, {
            type: "name",
            title: "页面预览",
            content: "通过点击<预览Portal页面>按钮可以预览设置后的微信认证页面效果。"                                          
        }]
     },
     WECHAT_WIFI_TIME: {
        TITLE: "免费上网时长设置",
        CONTENT: [{
            type: "name",
            title: "免费上网时长",
            content: "设置用户通过认证后能使用网络的时长，可设置最短1分钟，最长1440分钟。"
        }]
     },
     WECHAT_FORCE:{
        TITLE: "微信强制关注设置",
        CONTENT: [{
            type: "name",
            title: "强制关注开关",
            content: "开启强制关注功能后，用户需要关注您的公众号才能上网。"
        }, {
            type: "name",
            title: "公众号二维码",
            content: "上传您的公众号二维码，提供给用户进行识别关注。"
        }, {
            type: "name",
            title: "完成按钮URL",
            content: "将此处给出的URL粘贴到微信公众号平台中的“完成页面”链接完成强制关注的相关配置。"
         }, {
            type: "name",
            title: "公众号认证URL",
            content: "将此处给出的URL以文字消息或者公众号菜单的方式提供给用户来完成认证。"
         }, {
            type: "note",
            title: "提示",
            content: "您必须首先开启和正确配置微信连Wi-Fi才能使用强制关注功能。"                                          
        }]
     },
     USERMNGR_USER: {
        TITLE: "认证用户管理",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面进行认证用户管理。"
        },
        {
            type: "name",
            title: "用户类型",
            content: "认证用户类型分为正式用户和免费用户。",
            children: [
            {
                type: "step",
                content: [
                    "正式用户：存留在系统中的正式用户，具有一定的有效期，且可以绑定相应的设备MAC地址。可以记录更多用户的资料信息。",
                    "免费用户：免费用户具有一定的上网时长限制。"
                ]
            }]
        }, {
            type: "name",
            title: "用户名/密码",
            content: "用户认证使用的用户名密码。",
        }, {
            type: "name",
            title: "有效期至",
            content: "正式用户的有效期,2037-12-31内有效。",
        }, {
            type: "name",
            title: "上网时长",
            content: "免费用户的免费上网时长。",
        }, {
            type: "name",
            title: "允许认证的时间段",
            content: "允许用户进行认证上网的时间，其他时间不允许认证。",
        },{
            type: "name",
            title: "MAC地址绑定方式",
            content: "选择是否绑定MAC地址，以及绑定的方式。",
            children: [{
                type: "step",
                content: [
                    "不绑定：不绑定用户的MAC地址。",
                    "静态绑定：绑定一个静态的MAC地址。",
                    "动态绑定：进行动态绑定。"
                ]
            }]
        }, {
            type: "name",
            title: "同时登陆用户数",
            content: "允许同时使用该账号登陆的最大用户数量。",
        }, {
            type: "name",
            title: "上行/下行带宽",
            content: "当前用户允许的上行/下行带宽，以Kbps为单位，0表示不限制。",
        }, {
            type: "name",
            title: "姓名、电话",
            content: "可记录当前用户的姓名和联系方式。",
        }, {
            type: "name",
            title: "备注",
            content: "记录当前用户备注信息。",
        }, {
            type: "name",
            title: "状态",
            content: "滑块为灰色表示禁用，滑块为蓝色表示启用。",
        }]
     },
     USERMNGR_USER_BK: {
        TITLE: "用户配置备份",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面备份和导入用户配置信息。"
        }, {
            type: "name",
            title: "备份",
            content: "点击<备份>按钮，可以将用户配置信息下载到本地进行备份。",
        }, {
            type: "name",
            title: "导入",
            content: "选择已备份的配置文件，并点击<导入>按钮，可以将已备份的配置重新导入到设备中。",
        }]
     },
     USERMNGR_USER_RT: {
        TITLE: "导入配置信息",
        CONTENT: [{
            type: "name",
            title: "导入",
            content: "导入和还原用户配置信息。",
        }]     
     },
     QOS_FREE: {
        TITLE: "例外管理",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置和查看带宽控制例外管理信息，例外管理用来配置指定用户不受IP带宽控制和应用带宽控制的限制。"
        }, {
            type: "name",
            title: "规则名称",
            content: "设置例外管理的规则名称。",
        }, {
            type: "name",
            title: "源IP地址范围",
            content: "设置例外管理的源IP地址和网络掩码。",
        }, {
            type: "name",
            title: "目的IP地址范围",
            content: "设置例外管理的目的IP地址和网络掩码。",
        }, {
            type: "name",
            title: "源MAC地址",
            content: "设置例外管理的源MAC地址。",
        }, {
            type: "name",
            title: "源端口范围",
            content: "设置例外管理的源端口范围。",
        }, {
            type: "name",
            title: "目的端口范围",
            content: "设置例外管理的目的端口范围。",
        }, {
            type: "name",
            title: "服务协议",
            content: "设置例外管理的服务协议。",
        }, {
            type: "name",
            title: "状态",
            content: "滑块为灰色表示禁用，滑块为蓝色表示启用，您可以通过滑块来启用或禁用该例外管理规则。"
        }]
     },
     PORTAL_FREE: {
        TITLE: "免认证策略",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面设置和查看免认证策略信息，免认证策略用来配置用户在认证通过前可以免费访问的资源。"
        }, {
            type: "name",
            title: "策略名称",
            content: "设置免认证策略的名称。",
        }, {
            type: "name",
            title: "免认证方式",
            content: "设置免认证策略的方式，可选择五元组和URL两种方式。",
        }, {
            type: "name",
            title: "URL方式",
            content: "设置免认证的目的网络地址。",
        }, {
            type: "name",
            title: "源IP地址范围",
            content: "设置免认证策略的源IP地址和网络掩码。",
        }, {
            type: "name",
            title: "目的IP地址范围",
            content: "设置免认证策略的目的IP地址和网络掩码。",
        }, {
            type: "name",
            title: "源MAC地址",
            content: "设置免认证策略的源MAC地址。",
        }, {
            type: "name",
            title: "源端口范围",
            content: "设置免认证策略的源端口范围。",
        }, {
            type: "name",
            title: "目的端口范围",
            content: "设置免认证策略的目的端口范围。",
        }, {
            type: "name",
            title: "服务协议",
            content: "设置免认证策略的服务协议。",
        }, {
            type: "name",
            title: "备注",
            content: "您可以设置免认证策略的备注，以方便您管理和查找。备注最多支持50个字符。",
        }, {
            type: "name",
            title: "状态",
            content: "您可以勾选该项来启用该免认证策略。"
        }]
     },
     SESSMNGR_LIST: {
        TITLE: "认证状态",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来查看认证状态。"
        }, {
            type: "name",
            title: "刷新",
            content: "手动刷新认证用户列表。"
        },{
            type: "name",
            title: "下线",
            content: "可选中多条认证信息，点击“下线”按钮，将多条认证信息同时下线。"
        }, {
            type: "name",
            title: "认证方式",
            content: "用户通过认证使用的认证方式。"
        }, {
            type: "name",
            title: "接入时间",
            content: "用户认证成功的时间。"
        }, {
            type: "name",
            title: "IP地址",
            content: "用户认证使用的IP地址。"
        }, {
            type: "name",
            title: "设置",
            content: "可断开当前认证条目的链接。"
        }, {
            type: "note",
            title: "提示",
            content: "当您希望获取用户的收发包速率、收发报文数量信息时，请您前往运行状态->流量统计->IP流量统计页面启用流量统计功能。"
        }]
     },
     HA:{
        TITLE: "自动恢复/自动清理",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来设置自动恢复/自动清理功能。"
        }, {
            type: "name",
            title: "自动恢复功能",
            content: "开启该功能后，当设备发生硬件或者软件异常时，系统可检测并自动恢复正常。滑动开关后设置生效。"
        },{
            type: "name",
            title: "自动清理功能",
            content: "开启自动清理功能后，设备将会在设定的时间自动清理。滑动开关后需要保存设置方可生效。"
        }, {
            type: "name",
            title: "星期",
            content: "用户指定每周周几进行自动清理。"
        }, {
            type: "name",
            title: "时间",
            content: "用户指定对应每周周几进行清理时间。"
        }, {
            type: "note",
            title: "注意",
            content: [
                "在自动恢复和自动清理的过程中，设备将会进行短暂重启。请根据需要设定本功能的时间。",
                "自动清理功能仅在本设备获取到网络时间或者手动设置时间后生效。"
            ]
        }]

     },
     HA_R:{
        TITLE: "自动清理",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来设置自动清理功能。"
        }, {
            type: "name",
            title: "自动清理功能",
            content: "开启自动清理功能后，设备将会在设定的时间自动清理。滑动开关后需要保存设置方可生效。"
        }, {
            type: "name",
            title: "星期",
            content: "用户指定每周周几进行自动清理。"
        }, {
            type: "name",
            title: "时间",
            content: "用户指定对应每周周几进行清理时间。"
        }, {
            type: "note",
            title: "注意",
            content: [
                "在自动清理的过程中，设备将会进行短暂重启。请根据需要设定本功能的时间。",
                "自动清理功能仅在本设备获取到网络时间或者手动设置时间后生效。"
            ]
        }]

     },
     DIA_ENABLE:{
        TITLE: "故障诊断模式",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来打开/关闭故障诊断模式。"
        }, {
            type: "name",
            title: "开启诊断模式:",
            content: "点击滑动开关来进行操作，蓝色表示开启诊断模式，灰色表示诊断模式关闭。开启本功能后可以配合技术支持人员对设备进行诊断。"
        }, {
            type: "name",
            title: "导出诊断信息:",
            content: "点击按钮下载基本的诊断信息，将其提供给技术人员以协助您分析和解决问题。"
        },
        {
            type: "name",
            title: "一键清理:",
            content: "点击按钮进行设备清理，以协助解决问题。该功能需在技术支持人员的协助下使用。"
        },
        {
            type: "note",
            title: "注意",
            content: [
                "一般情况下请不要随意开启本功能。",
                "需要诊断时，请先联系技术支持人员，在其协助下打开并使用本功能。"
            ]
        }]

     },
	 AP_SETTING : {
        TITLE: "AP设置",
        CONTENT:[{
            type:"paragraph",
            content:"您可以通过本页面来查看AP的设置。"
        }, {
            type:"name",
            title:"AP管理功能",
            content:'打开或关闭设备的AP管理功能。'
        }, {
            type:"name",
            title:"显示类型",
            content:'选择需要显示的某种类型的AP，可选择的类型为：在线AP设备、离线AP设备、所有AP设备。'
        }]
    }, 
    APMNGR_GLOBAL: {
        TITLE: "全局设置",
        CONTENT: [{
            type: "paragraph",
            content: "本栏用于进行AP管理的全局设置。"
        }, {
            type: "name",
            title: "定时重启",
            content: "开启该功能，在您设定的时间到达时，会重启所有已接入的AP。",
            children: [{
                type: "step",
                content: [
                "重启日期：设定需要AP重启的日期。",
                "重启时间：设定需要AP重启的时间。"
                ]
            }]
        }]
    },
    AP_LIST:{
        TITLE: "AP设备",
        CONTENT: [{
            type: "paragraph",
            content: "本栏用于进行AP设备的管理。"
        },{
            type:"name",
            title:"AP设备数量",
            content:'选中类型的AP设备的数量。'
        }, {
            type:"paragraph",
            content:"AP设备列表"
        }, {
            type:"name",
            title:"设备名称",
            content:"显示AP的名称。"
        }, {
            type: "name",
            title: "软件版本",
            content: "显示AP当前运行的软件版本。"
        }, {
            type: "name",
            title: "频段",
            content: "显示AP当前的射频单元。"
        }, {
            type: "name",
            title: "设备接入",
            content: "显示AP射频单元关联客户端的当前数目和最大数目。"
        }, {
            type:"name",
            title:"信道",
            content:'显示AP射频单元实际工作的信道值。'
        }, {
            type: "name",
            title: "发射功率",
            content: "显示AP射频单元的当前发射功率。"
        }, {
            type:"name",
            title:"LED当前状态",
            content:'显示/修改AP当前的LED指示灯状态。修改AP当前的LED指示灯状态，将同步修改设置项中的LED默认状态。'
        }, {
            type:"paragraph",
            content:"设置页面"
        }, {
            type:"name",
            title:"设备名称",
            content:"设置AP的名称。"
        }, {
            type: "name",
            title: "设备型号",
            content: "显示AP的硬件型号。"
        }, {
            type: "name",
            title: "设备状态",
            content: "显示AP的运行状态：在线或离线。"
        }, {
            type: "name",
            title: "MAC地址",
            content: "显示AP的MAC地址。"
        }, {
            type: "name",
            title: "软件版本",
            content: "显示AP当前运行的软件版本。"
        }, {
            type: "name",
            title: "升级",
            content: "导入该机型的升级软件，对该型号的所有AP进行升级。"
        }, {
            type: "name",
            title: "硬件版本",
            content: "显示AP的硬件版本。"
        }, {
            type:"name",
            title:"LED默认状态",
            content:'设置AP接入时的LED指示灯的初始状态。修改该配置项，不会影响AP当前的LED指示灯状态。'
        }, {
            type:"paragraph",
            content:"射频列表"
        }, {
            type: "name",
            title: "频段",
            content: "显示需要设置参数的AP射频单元。"
        }, {
            type: "name",
            title: "最大接入设备数量",
            content: "设置AP射频单元关联客户端的最大数目。"
        }, {
            type:"name",
            title:"信道",
            content:'设置AP射频单元实际工作的信道。'
        }, {
            type: "name",
            title: "发射功率",
            content: "设置AP射频单元的发射功率。"
        }, {
            type: "name",
            title: "射频模式",
            content: "设置AP射频单元的工作模式。"
        }, {
            type: "name",
            title: "频段带宽",
            content: "当射频模式支持11n或者11ac时，设置频段带宽。"
        }, {
            type: "name",
            title: "弱信号限制",
            content: "设置AP接受新客户端接入的最小信号强度值，可以设置（-95～0）内的值，单位为dBm，建议最大值不超过-40。如果试图连接到AP的客户端与AP之间由于障碍物、距离远等原因导致相对于AP的信号强度低于阈值，那么将被AP拒绝接入。"
        }, {
            type: "name",
            title: "弱信号踢除",
            content: "设置AP踢除已连接客户端的最小信号强度值，可以设置（-95～0）内的值，单位为dBm，建议最大值不超过-40。如果已连接客户端由于移动或与AP之间出现障碍物导致相对于AP的信号强度低于阈值，那么将被AP直接踢除。"
        }]
    }, 
    AC_APDB:{
        TITLE:"导入AP数据库",
        CONTENT:[
        {
            type:"paragraph",
            content:"本栏用于导入AP数据库文件以支持新AP机型的识别和管理。"
        }, 
		{
            type: "name",
            title: "当前数据库版本",
            content: "显示当前设备使用的AP数据库的版本号。"
        },
		{
            type: "name",
            title: "AP数据库文件路径",
            content: "需要导入的AP数据库文件所在的路径。"
        }]
    },
	AP_WIRELESS:{
		TITLE: "无线网络设置",
		CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面进行AP无线网络的基本设置。"
        }, {
            type:"name",
            title:"即插即用功能",
            content:"滑块为灰色表示禁用即插即用功能，滑块为蓝色表示启用即插即用功能。启用即插即用功能，AP接入时，如果没有配置无线网络，会自动为其同步设备除了访客网络外的所有无线网络条目。注：只有无线设备才支持即插即用功能。"
        },{
			type:"name",
			title:"无线网络名称（SSID）",
			content:"下发到AP的无线(Wi-Fi)名称。"
		},{
			type:"name",
            title:"SSID编码方式",
            content:"当SSID不包含中文时，该选项会隐藏，当SSID包含中文时，该选项会显示，可以选择UTF8和GBK两种编码方式对包含中文的SSID进行编码。"
        },{
			type:"name",
			title:"应用频段",
			content:"无线网络生效的AP频段。"
		},{
			type:"name",
			title:"AP设备",
			content:"无线网络生效的AP设备。"
		},{
			type:"name",
			title:"内部隔离",
			content:"启用内部隔离，可以使连接到AP的无线终端不能互相通信，此功能不能跨AP生效。滑块为灰色表示禁用，滑块为蓝色表示启用。"
		},{
			type:"name",
			title:"隐藏无线网络",
			content:"启用隐藏无线网络，局域网中无线终端将搜不到该无线名称。滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type:"name",
            title:"加密方式",
            content: "用于无线网络连接时的加密方式，有三种加密方式可选。",
            children:[{
                type: "step",
                content:[
                    "不设密码：无线终端无需密码即可连接到AP上。",
                    "WPA-PSK/WPA2-PSK(推荐)：使用WPA2-PSK/WPA-PSK加密方式，该加密方式无需自设认证服务器，设置无线密码即可。",
                    "WPA/WPA2:使用WPA/WPA2加密方式，该加密方式需要自行配置Radius服务器进行相关认证。"
                ]
            }]
        },{
            type:"name",
            title:"认证类型",
            content: "用于设置无线网络使用加密连接时的认证类型。",
            children:[{
                type:"step",
                content:[
                   "WPA-PSK/WPA2-PSK加密方式的认证类型包括自动、WPA-PSK、WPA2-PSK三个选项，自动涵盖WPA-PSK和WPA2-PSK两种认证类型，建议认证类型选择自动。",
                   "WPA/WPA2加密方式的认证类型包括自动、WPA和WPA2三个选项，自动涵盖WPA和WPA2两种认证类型，建议认证类型选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"加密算法",
            content: "用于设置无线网络使用加密连接时的加密算法。",
            children:[{
                type:"step",
                content:[
                    "WPA-PSK/WPA2-PSK加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。",
                    "WPA/WPA2加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"无线密码",
            content:"选择WPA-PSK/WPA2-PSK加密时连接无线网络的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        },{
            type:"name",
            title:"组密匙更新周期",
            content:"定时更新用于广播和组播的密钥的周期，以秒为单位，最小值为30，不更新则为0。"
        },{
            type:"name",
            title:"Radius服务器",
            content:"进行身份认证的Radius服务器的IP地址。"
        },{
            type:"name",
            title:"Radius端口",
            content:"Radius服务使用的端口。"
        },{
            type:"name",
            title:"Radius密码",
            content:"访问Radius服务的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        },{
            type:"name",
            title:"VLAN",
            content:"连接到该无线网络无线终端的业务VLAN。注：本设备不支持VLAN接口，仅在接入交换机时才需要根据实际网络拓扑填写对应的VLAN。"
        },{
            type:"name",
            title:"状态",
            content:"滑块为灰色表示禁用无线网络，滑块为蓝色表示启用无线网络。"
        }]
    },
    AP_WIRELESS_WIRED:{
        TITLE: "无线网络设置",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面进行AP无线网络的基本设置。"
        }, {
            type:"name",
            title:"无线网络名称（SSID）",
            content:"下发到AP的无线(Wi-Fi)名称。"
        },{
            type:"name",
            title:"SSID编码方式",
            content:"当SSID不包含中文时，该选项会隐藏，当SSID包含中文时，该选项会显示，可以选择UTF8和GBK两种编码方式对包含中文的SSID进行编码。"
        },{
            type:"name",
            title:"应用频段",
            content:"无线网络生效的AP频段。"
        },{
            type:"name",
            title:"AP设备",
            content:"无线网络生效的AP设备。"
        },{
            type:"name",
            title:"内部隔离",
            content:"启用内部隔离，可以使连接到AP的无线终端不能互相通信，此功能不能跨AP生效。滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type:"name",
            title:"隐藏无线网络",
            content:"启用隐藏无线网络，局域网中无线终端将搜不到该无线名称。滑块为灰色表示禁用，滑块为蓝色表示启用。"
        },{
            type:"name",
            title:"加密方式",
            content: "用于无线网络连接时的加密方式，有三种加密方式可选。",
            children:[{
                type: "step",
                content:[
                    "不设密码：无线终端无需密码即可连接到AP上。",
                    "WPA-PSK/WPA2-PSK(推荐)：使用WPA2-PSK/WPA-PSK加密方式，该加密方式无需自设认证服务器，设置无线密码即可。",
                    "WPA/WPA2:使用WPA/WPA2加密方式，该加密方式需要自行配置Radius服务器进行相关认证。"
                ]
            }]
        },{
            type:"name",
            title:"认证类型",
            content: "用于设置无线网络使用加密连接时的认证类型。",
            children:[{
                type:"step",
                content:[
                   "WPA-PSK/WPA2-PSK加密方式的认证类型包括自动、WPA-PSK、WPA2-PSK三个选项，自动涵盖WPA-PSK和WPA2-PSK两种认证类型，建议认证类型选择自动。",
                   "WPA/WPA2加密方式的认证类型包括自动、WPA和WPA2三个选项，自动涵盖WPA和WPA2两种认证类型，建议认证类型选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"加密算法",
            content: "用于设置无线网络使用加密连接时的加密算法。",
            children:[{
                type:"step",
                content:[
                    "WPA-PSK/WPA2-PSK加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。",
                    "WPA/WPA2加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"无线密码",
            content:"选择WPA-PSK/WPA2-PSK加密时连接无线网络的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        },{
            type:"name",
            title:"组密匙更新周期",
            content:"定时更新用于广播和组播的密钥的周期，以秒为单位，最小值为30，不更新则为0。"
        },{
            type:"name",
            title:"Radius服务器",
            content:"进行身份认证的Radius服务器的IP地址。"
        },{
            type:"name",
            title:"Radius端口",
            content:"Radius服务使用的端口。"
        },{
            type:"name",
            title:"Radius密码",
            content:"访问Radius服务的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        },{
            type:"name",
            title:"VLAN",
            content:"连接到该无线网络无线终端的业务VLAN。注：本设备不支持VLAN接口，仅在接入交换机时才需要根据实际网络拓扑填写对应的VLAN。"
        },{
            type:"name",
            title:"状态",
            content:"滑块为灰色表示禁用无线网络，滑块为蓝色表示启用无线网络。"
        }]
    },
    AP_WIRELESS_BASIC:{
        TITLE: "即插即用设置",
        CONTENT:[{
            type: "paragraph",
            content: "您可以通过本页面进行AP即插即用的设置。当AP首次接入时，会自动同步本页面的基本无线服务条目。"
        },{
            type:"name",
            title:"即插即用功能",
            content:"滑块为灰色表示禁用即插即用功能，滑块为蓝色表示启用即插即用功能。"
        }, {
            type:"name",
            title:"无线网络名称（SSID）",
            content:"下发到AP的无线(Wi-Fi)名称。"
        },{
            type:"name",
            title:"SSID编码方式",
            content:"当SSID不包含中文时，该选项会隐藏，当SSID包含中文时，该选项会显示，可以选择UTF8和GBK两种编码方式对包含中文的SSID进行编码。"
        },{
            type:"name",
            title:"加密方式",
            content: "用于无线网络连接时的加密方式，有三种加密方式可选。",
            children:[{
                type: "step",
                content:[
                    "不设密码：无线终端无需密码即可连接到AP上。",
                    "WPA-PSK/WPA2-PSK(推荐)：使用WPA2-PSK/WPA-PSK加密方式，该加密方式无需自设认证服务器，设置无线密码即可。",
                    "WPA/WPA2:使用WPA/WPA2加密方式，该加密方式需要自行配置Radius服务器进行相关认证。"
                ]
            }]
        },{
            type:"name",
            title:"认证类型",
            content: "用于设置无线网络使用加密连接时的认证类型。",
            children:[{
                type:"step",
                content:[
                   "WPA-PSK/WPA2-PSK加密方式的认证类型包括自动、WPA-PSK、WPA2-PSK三个选项，自动涵盖WPA-PSK和WPA2-PSK两种认证类型，建议认证类型选择自动。",
                   "WPA/WPA2加密方式的认证类型包括自动、WPA和WPA2三个选项，自动涵盖WPA和WPA2两种认证类型，建议认证类型选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"加密算法",
            content: "用于设置无线网络使用加密连接时的加密算法。",
            children:[{
                type:"step",
                content:[
                    "WPA-PSK/WPA2-PSK加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。",
                    "WPA/WPA2加密方式的加密算法包括自动、TKIP、AES三个选项，自动涵盖TKIP和AES两种加密算法，建议加密算法选择自动。"
                ]
            }]
        },{
            type:"name",
            title:"无线密码",
            content:"选择WPA-PSK/WPA2-PSK加密时连接无线网络的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        },{
            type:"name",
            title:"组密匙更新周期",
            content:"定时更新用于广播和组播的密钥的周期，以秒为单位，最小值为30，不更新则为0。"
        },{
            type:"name",
            title:"Radius服务器",
            content:"进行身份认证的Radius服务器的IP地址。"
        },{
            type:"name",
            title:"Radius端口",
            content:"Radius服务使用的端口。"
        },{
            type:"name",
            title:"Radius密码",
            content:"访问Radius服务的密码，由8-63个ASCII码字符或8-64个十六进制字符组成。"
        }]
    },
    AP_IPTV_SINGLE: {
        TITLE: "IPTV设置",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来查看IPTV的设置。"
        },{
            type: "name",
            title: "IPTV功能",
            content: "打开或关闭设备的IPTV功能。"
        },{
            type: "name",
            title: "IPTV口",
            content: "与光猫（PoN）连接的设备LAN端口。"
        },{
            type: "name",
            title: "AP设备",
            content: "与机顶盒连接的AP名称。"
        },{
            type: "name",
            title: "MAC地址",
            content: "所连接AP的MAC地址。"
        },{
            type: "name",
            title: "指定网口",
            content: "AP的有线网口。当前只支持单网口与双网口机型（单网口机型：单网口、单网口+电话口、单网口+USB口、单网口+穿透口；双网口机型：双网口、双网口+USB口）。"
        }]
    },
	PPPOE_SERVER_GLOBAL_HELP:{
		TITLE: "全局设置",
		CONTENT: [{
            type: "paragraph",
            content: "根据您的网络环境，对PPPoE服务器进行正确的配置，以保证高效管理网络。"
        }, {
            type: "name",
            title: "PPPoE服务器",
            content: "您可以勾选此项，选择是否开启PPPoE服务器功能。"
        },{
            type: "name",
            title: "强制PPPoE拨号",
            content: "您可以勾选此项，选择是否启用强制PPPoE拨号功能。功能开启后，仅有拨号用户和例外IP的用户能使用网络。设置例外IP，请到例外IP管理页面进行设置。"
        }, {
            type: "name",
            title: "拨号用户互访",
            content: "您可以勾选此项，选择是否开启拨号用户互访功能。拨号用户互访功能允许拨号用户之间互相通信。"
        }, {
            type: "name",
            title: "首选/备选DNS服务器",
            content: "请正确填写，作为DNS服务器地址，缺省为空。"
        }, {
            type: "name",
            title: "系统最大会话数",
            content: "设置会话数的最大值。"
        }, {
            type: "name",
            title: "最大未应答LCP包数",
            content: "作为最大未应答LCP包数，缺省为10。当一条连接的未应答LCP包数超过这个数值时，PPPoE Server会自动断开这条连接。"
        }, {
            type: "name",
            title: "空闲断线时间",
            content: "作为最大空闲断线时间，缺省为30。请填写0-10080（分钟），即最大为7天。0代表不空闲断线。"
        },{
			type:"name",
			title:"认证方式",
			content:"提供四种认证方式，请至少选择一种。"
		}]
	 },
	 PPPOE_SERVER_USER_HELP:{
		TITLE: "账号管理",
		CONTENT: [{
            type: "paragraph",
            content: "您可以查看账号设置信息，还可以通过表格按钮对账号设置信息条目进行操作。"
        }, {
            type: "name",
            title: "账号",
            content: "账号规则设置的名称。"
        },{
            type: "name",
            title: "密码",
            content: "账号的密码。"
        }/*, {
            type: "name",
            title: "地址分配方式",
            content: "您可以选择以下两种地址分配方式。",
			children:[{
				type: "step",
				content: [
				"静态分配：由用户输入的静态IP地址。",
				"动态分配：动态分配的IP地址。"
				]
			}]
        }, {
            type: "name",
            title: "静态IP地址",
            content: "当用户选择地址分配方式为静态分配时填写的IP地址。"
        }*/, {
            type: "name",
            title: "地址池",
            content: "PPPoE服务器分配给客户端的IP地址从地址池获取。"
        }, {
            type: "name",
            title: "最大会话数",
            content: "用户允许登陆的最大会话数。"
        }, {
            type: "name",
            title: "账号到期时间",
            content: "设置账号的有效时间，最大值为2099-01-01。"
        }, {
            type: "name",
            title: "带宽模式",
            content: "设置账号带宽控制模式：共享表示账号的所有用户共用带宽；独立表示账号的所有用户独占带宽。"
        }, {
            type: "name",
            title: "上行带宽",
            content: "当前账号用户允许的上行带宽，以Kbps为单位，0表示不限制。"
        }, {
            type: "name",
            title: "下行带宽",
            content: "当前账号用户允许的下行带宽，以Kbps为单位，0表示不限制。"
        }, {
			type:"name",
			title:"备注",
			content:"您可以设置规则条目备注，以方便您管理和查找。备注最多支持50个字符。"
		}, {
			type:"name",
			title:"启用/禁用规则",
			content:"您可以选择<启用>，使该规则生效。您也可以选择<禁用>，使该规则失效。"
		}, {
            type: "name",
            title: "地址分配方式",
            content: "您可以选择以下3种绑定方式。",
			children:[{
				type: "step",
				content: [
				"不绑定：不进行用户和MAC的绑定。",
				"静态绑定：静态绑定一个MAC地址，该账户只能在该MAC的主机上登录。",
				"动态绑定：当用户第一次登录的时候记录其MAC，以后用户的登录必须使用该MAC。"
				]
			}]
        },{
			type:"name",
			title:"MAC地址",
			content:"当选择MAC绑定方式为静态绑定时须填写的MAC地址。"
		},{
			type:"name",
			title:"定时断线时间",
			content:"设置定时断线的时间，当定时断线时间为0时，表示不会定时断线。"
		}]
	 },
	PPPOE_SERVER_EXCEPTIP_HELP:{
		TITLE: "例外IP管理",
		CONTENT: [{
            type: "paragraph",
            content: "您可以查看例外IP条目，还可以通过表格按钮对条目进行操作。"
        },{
            type: "name",
            title: "起始IP地址",
            content: "IP地址段的起始IP地址，且起始IP地址必须小于或等于结束IP地址，而且不能与已有的IP地址范围重叠。"
        },{
            type: "name",
            title: "结束IP地址",
            content: "IP地址段的结束IP地址，且结束IP地址必须大于或等于起始IP地址，而且不能与已有的IP地址范围重叠。"
        },{
            type: "name",
            title: "备注",
            content: "您可以对所添加的例外IP地址进行描述。"
        },{
            type: "name",
            title: "启用/禁用规则",
            content: "您可以选择<启用>，使该规则生效。您也可以选择<禁用>，使该规则失效。"
        }]
	},
	PPPOE_SERVER_USERINFO_HELP:{
		TITLE: "账号信息列表",
		CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面查看账号的有关信息。"
        },{
            type: "name",
            title: "账号",
            content: "账号名。"
        },{
            type: "name",
            title: "状态",
            content: "该账号的该IP对应的用户当时所处的状态。同一账号可允许异地登录。"
        },{
            type: "name",
            title: "IP地址",
            content: "该用户的IP地址。"
        },{
            type: "name",
            title: "MAC地址",
            content: "该用户的MAC地址。"
        },{
            type: "name",
            title: "在线时间",
            content: "该用户的在线时间。"
        }/*,{
            type: "name",
            title: "接口",
            content: "该用户接入网络的物理端口。"
        }*/,{
            type: "name",
            title: "备注",
            content: "该用户的备注信息。"
        },{
            type: "name",
            title: "断开连接",
            content: "您可以点击此项，选择强制挂断该用户。"
        }
     ]},
     DIA_ENABLE:{
        TITLE: "故障诊断模式",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来打开/关闭故障诊断模式。"
        }, {
            type: "name",
            title: "开启诊断模式:",
            content: "点击滑动开关来进行操作，蓝色表示开启诊断模式，灰色表示诊断模式关闭。开启本功能后可以配合技术支持人员对设备进行诊断。"
        }, {
            type: "name",
            title: "导出诊断信息:",
            content: "点击按钮下载基本的诊断信息，将其提供给技术人员以协助您分析和解决问题。"
        }, {
            type: "name",
            title: "一键清理:",
            content: "点击按钮进行设备清理，以协助解决问题。该功能需在技术支持人员的协助下使用。"
        }, {
            type: "note",
            title: "注意",
            content: [
                "一般情况下请不要随意开启本功能。",
                "需要诊断时，请先联系技术支持人员，在其协助下打开并使用本功能。"
            ]
        }]

     },
     ACTION_CHECK:{
        TITLE: "上网行为分析",
        CONTENT: [{
            type: "paragraph",
            content: "您可以通过本页面来设置上网行为分析功能。"
        }, {
            type: "name",
            title: "行为审计服务器地址",
            content: "设置行为审计服务器的IP地址，行为审计的相关数据将发往该地址的服务器。"
        }, {
            type: "name",
            title: "上传用户上网行为",
            content: "点击可开关上网行为分析功能。滑块为蓝色时开启，将往行为审计服务器发送审计数据。"
        }, {
            type: "note",
            title: "注意",
            content: [
                "行为审计功能需要配合hihttps行为审计软件才能进行上网行为的分析。",
                "您可以访问hihttps官方网站<a href=\"http://www.hihttps.com\" target=\"_blank\">www.hihttps.com</a>获取最新的行为审计软件，或者联系400售后服务热线及4108863@hihttps.com售后服务邮箱。"
            ]
        }]

     },

     "" :     ""
    };
})(jQuery);