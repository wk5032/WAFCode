$(function() {
	
	
	var jsPath ="../../", jsArr = $("script");
	for (var i=0; i<jsArr.length; i++) {
		if (jsArr[i].attributes.src.value.indexOf("jquery-1.11.0.min.js") > -1) {
			jsPath = jsArr[i].attributes.src.value.substr(0,jsArr[i].attributes.src.value.lastIndexOf("/js/")+1);
			break;
		}
	}

	var localurl = window.location.href;
	localurl = localurl.split("?")[0];
	$.get(jsPath+'users/mode',function(data){
		mode = parseInt(data.split(',')[0]);
		role = parseInt(data.split(',')[1]);
		
//		 try {
//             $.ajaxSetup({
//                 error: function (x, e) {
//                     alert(e);
//                     return false;
//                 }
//             });
		 $.getJSON(jsPath+'json/urlrole.json',function(data){
		 	$.each(data, function (index, roledata) {
		 		
		 			if(role == roledata.role)
		 			{
		 				var flag = false;
		 				$.each(roledata.urllist, function (index, urlstr) {
		 					if(localurl.endWith(urlstr))
		 					{
		 						flag=true;
		 						return;
		 					}
		 				});
		 				if(!flag)
		 				{
		 					window.location.href=jsPath+'html/error.html'
		 				}
		 			}
		 		});
		 });
		 
//		 }
//         catch (ex) {
//         alert(ex);
//         }
		
	}); 
});


String.prototype.endWith=function(endStr){
			  var d=this.length-endStr.length;
			  return (d>=0&&this.lastIndexOf(endStr)==d)
			}

			
String.prototype.startWith=function(str){     
  var reg=new RegExp("^"+str);     
  return reg.test(this);        
}