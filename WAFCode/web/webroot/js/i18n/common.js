var jsPath="../js/i18n/", jsArr = $("script");
for (var i=0; i<jsArr.length; i++) {
	if (jsArr[i].attributes.src.value.indexOf("jquery.i18n.properties-min-1.0.9.js") > -1) {
		jsPath = jsArr[i].attributes.src.value.substr(0,jsArr[i].attributes.src.value.lastIndexOf("/")+1);
	}
}
/*if($.i18n.browserLang().indexOf("zh") > -1){
	document.write("<script type=\"text\/javascript\" src=\""
			+jsPath.substr(0,jsPath.length-5)+"ext-lang-zh_CN.js\"><\/script>");
}
else
{
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\""
			+jsPath.substr(0,jsPath.length-8)+"css/e-public.css\" \/>");
}*/
$(function() {
	jQuery.i18n.properties({ //加载资浏览器语言对应的资源文件
		name:'strings', //资源文件名称
		path:jsPath, //资源文件路径
		mode:'map', //用Map的方式使用资源文件中的值
		callback: function() { //加载成功后设置显示内容
			if (!document.title || document.title.length == 0)
				document.title=$.i18n.prop('i18n_head_title');
			replaceAllI18nCode();
		}
	});
});

function replaceAllI18nCode(){
	//通过html赋值的元素
    $('.class_i18n_html').each(function() {
    	//判断字符串是否是国际化参数，防止英文input中出现多余“[]”情况
    	if($(this).html().indexOf('i18n_') > -1)
    		$(this).html($.i18n.prop($.trim($(this).html())));
    });
	//通过text赋值的元素
    $('.class_i18n_text').each(function() {
    	if($(this).text().indexOf('i18n_') > -1)
    		$(this).text($.i18n.prop($.trim($(this).text())));
    });
    //通过value赋值的元素
    $('.class_i18n_value').each(function() {
    	if($(this).val().indexOf('i18n_') > -1)
    		$(this).val($.i18n.prop($(this).val()));
    });
    //通过placeholder赋值的元素
    $('.class_i18n_placeholder').each(function() {
    	if($(this).attr("placeholder").indexOf('i18n_') > -1)
    		$(this).attr("placeholder", $.i18n.prop($(this).attr("placeholder")));
    });
    //通过title赋值的元素
    $('.class_i18n_title').each(function() {
    	if($(this).attr("title").indexOf('i18n_') > -1)
    		$(this).attr("title", $.i18n.prop($(this).attr("title")));
    });
    //通过alt赋值的元素
    $('.class_i18n_alt').each(function() {
    	if($(this).attr("alt").indexOf('i18n_') > -1)
    		$(this).attr("alt", $.i18n.prop($(this).attr("alt")));
    });
    
    $('.class_i18n_image').each(function() {
    	if($(this).attr("src").indexOf('i18n_') > -1)
    		$(this).attr("src",$.i18n.prop($(this).attr("src")));
    });
    
    $('.class_i18n_background').each(function() {
    	if($(this).attr("bim").indexOf('i18n_') > -1)
    		$(this).css("background",$.i18n.prop($(this).attr("bim")));
    });
    
    if (typeof stringMap != "undefined") {
        for (var name in stringMap) {
        	if(stringMap[name].indexOf('i18n_') > -1){
        		stringMap[name] = $.i18n.prop(stringMap[name]);
        	}
        }
    }
}
