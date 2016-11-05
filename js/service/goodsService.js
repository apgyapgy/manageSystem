define(['main'],function(app){
	app.factory("goodsService",function(){
		var goods = {};
		goods.list = function(obj){console.log(obj);
			return webToData(obj,mapping.color);
		} 
		return goods;
	});
	
	var mapping = {
		color:{
			id:"c_id",
			name:"c_name"
		}
	}
	//将后台返回的数据转化为前台自定义的格式
	function dataToWeb(data,mapping){
		if(Array.isArray(data)){
			var arr = [];
			for(var i = 0;i<data.length;i++){
				var obj = {};
				for(var key in mapping){
					var val = mapping[key];
					obj[key] = data[i][val];
				}
				arr.push(obj);
			}
			return arr;
		}else{
			var obj = {};
			for(var key in mapping){
				var val = mapping[key];
				obj[key] = data[val]; 
			}
			return obj;
		}
	}
	//将前后的格式转化为后台编写的格式
	function webToData(data,mapping){
		if(Array.isArray(data)){
			var arr = [];
			for(var i=0;i<data.length;i++){
				var config = {};
				for(var key in mapping){
					var val = mapping[key];
					config[val] = data[key];
				}
				arr.push(config);
			}
			return arr;
		}else{
			var config = {};
			for(var key in mapping){
				var val = mapping[key];
				config[val] = data[key];
			}
			return config;
		}
	}
});
