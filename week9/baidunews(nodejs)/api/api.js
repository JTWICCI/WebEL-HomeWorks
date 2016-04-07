var restify = require('restify');
var orm = require("orm");
var qs = require("querystring");//qs API 为了把通过POST得到的数据变成JSON格式

var dblinkaddr = "mysql://root:@127.0.0.1/news"; //数据库连接地址

var server = restify.createServer();
server.get('/reviewall/:data', reviewTable);// 响应返回数据表中整个类别内容的请求
server.get('/editresp/:data', editResponse);// 响应返回当前编辑数据的详细内容的请求
server.get('/lunboload', loadLbData); // 响应返回轮播数据的请求
server.get('/gundongload', loadGdData); // 响应返回滚动文字数据的请求

//这句将正确的解析通过POST收到的数据
server.use(restify.bodyParser());
server.post('/addrow', addRow);// 响应增加数据的请求
server.post('/edit', editData);// 响应修改数据的请求
server.post('/delete', deleteData);// 响应删除数据的请求
server.post('/load', loadContent); // 响应发送数据给客户端的请求

server.post('/editlunbo', editLbData);// 响应修改轮播数据的请求
server.post('/editgundong', editGdData);// 响应修改滚动文字数据的请求

server.listen(3900, function() {
	console.log('%s listening at %s', server.name, server.url);
});

// 返回整个数据表内容的函数
function reviewTable(req, res, next) {
	dbOperation(dblinkaddr,"reviewTable",req,res);
}
// 执行添加数据的函数
function addRow(req, res, next) {
	// 将获得的post数据转化成json格式
	var reqbody = qs.parse(req.body);
	dbOperation(dblinkaddr,"addRow",req,res,reqbody);
}
// 返回单个数据条目的函数
function editResponse(req, res, next) {
	dbOperation(dblinkaddr,"editResponse",req,res);
}
// 执行修改数据的函数
function editData(req, res, next) {
	var reqbody = qs.parse(req.body);
	dbOperation(dblinkaddr,"editData",req,res,reqbody);
}
// 删除单个数据条目的函数
function deleteData(req, res, next) {
	var reqbody = qs.parse(req.body);
	dbOperation(dblinkaddr,"deleteData",req,res,reqbody);
}

// 加载轮播数据的函数
function loadLbData(req, res, next) {
	lunboDataOP(dblinkaddr,"loadLbData",req,res);
}
// 修改轮播数据的函数
function editLbData(req, res, next) {
	var reqbody = qs.parse(req.body);
	lunboDataOP(dblinkaddr,"editLbData",req,res,reqbody);
}

// 加载滚动文字数据的函数
function loadGdData(req, res, next) {
	gundongDataOP(dblinkaddr,"loadGdData",req,res);
}
// 修改滚动文字数据的函数
function editGdData(req, res, next) {
	var reqbody = qs.parse(req.body);
	gundongDataOP(dblinkaddr,"editGdData",req,res,reqbody);
}
// 发送（新闻块儿）数据给客户端的函数
function loadContent(req, res, next) {
	var reqbody = qs.parse(req.body);
	dbOperation(dblinkaddr,"loadContent",req,res,reqbody);
}

//链接数据库并执行一些相应操作的函数
function dbOperation(dblink,optype,req,res,reqbody) { //参数1：数据库链接地址，参数2：操作类型字符串（和调用的函数名相同）
	// 指定允许其他域名访问  
	res.header("Access-Control-Allow-Origin","*");
	// 响应头设置
	res.header("Access-Control-Allow-Headers","x-requested-with,content-type");
	orm.connect(dblink, function (err, db) {
		if (err) throw err;
		var Newsblock = db.define("newsblock", { //目前只用一个表，用多个表的时候要进行判断（待完善）
			id  : {
				type: 'serial',
				key: true
			},
			content_id  : Number,
			displaytype : Number,
			tagtype     : Number,
			tagtext     : String,
			image1_src  : String,
			image2_src  : String,
			image3_src  : String,
			title       : String,
			discribe    : String,
			href        : String,
			add_time    : Date,
		});
		switch (optype) { //根据操作类型选择相应执行路径
			case "reviewTable":
				Newsblock.find({
					content_id: req.params.data //找到所有当前“类别”的数据
				}).orderRaw("?? DESC", ['add_time']).run(function(err,blockdata){
					if (err) throw err;
					res.charSet('utf-8');
					res.json(blockdata);
				});
			break;
			case "addRow":
				db.sync(function(err) {
					if (err) throw err;
					//定义一些变量存放可能不存在的json数据（根据表单的种类，存在的数据数量会有些差异）
					var tagtext="",image1_src="",image2_src="",image3_src="",discribe="";
					if (reqbody.tagtype == 1){//如果有标签，提取标签值，否者默认为空
						tagtext = reqbody.tagtext;
					}//下面4行同上，如果有值赋值
					if (reqbody.image1_src) {image1_src = reqbody.image1_src;}
					if (reqbody.image2_src) {image2_src = reqbody.image2_src;}
					if (reqbody.image3_src) {image3_src = reqbody.image3_src;}
					if (reqbody.discribe) {discribe = reqbody.discribe;}

					Newsblock.create({
						content_id: reqbody.contentid,
						displaytype: reqbody.displaytype,
						tagtype: reqbody.tagtype,
						tagtext: tagtext,
						image1_src: image1_src,
						image2_src: image2_src,
						image3_src: image3_src,
						title: reqbody.title,
						discribe: discribe,
						href: reqbody.href,
					},function(err) {
						if (err) throw err;
						var errmsg={};
						if (err) {
							errmsg={'error_code':'1','error_msg':err};
						}else{
							errmsg={'error_code':'0'};
						}
						res.charSet('utf-8');
						res.json(errmsg);
					});
				});
			break;
			case "editResponse":
				//找到当前id的数据
				Newsblock.get(req.params.data, function(err,blockdata){
					if (err) throw err;
					res.charSet('utf-8');
					res.json(blockdata);
				});
			break;
			case "editData":
				db.sync(function(err) {
					if (err) throw err;
					//定义一些变量存放可能不存在的json数据（根据表单的种类，存在的数据数量会有些差异）
					var tagtext="",image1_src="",image2_src="",image3_src="",discribe="";
					if (reqbody.tagtype == 1){//如果有标签，提取标签值，否者默认为空
						tagtext = reqbody.tagtext;
					}//下面4行同上，如果有值赋值
					if (reqbody.image1_src) {image1_src = reqbody.image1_src;}
					if (reqbody.image2_src) {image2_src = reqbody.image2_src;}
					if (reqbody.image3_src) {image3_src = reqbody.image3_src;}
					if (reqbody.discribe) {discribe = reqbody.discribe;}
					
					Newsblock.get(reqbody.contid, function(err,Datarow){
						Datarow.save({
							content_id: reqbody.contentid,
							displaytype: reqbody.displaytype,
							tagtype: reqbody.tagtype,
							tagtext: tagtext,
							image1_src: image1_src,
							image2_src: image2_src,
							image3_src: image3_src,
							title: reqbody.title,
							discribe: discribe,
							href: reqbody.href,
						},function(err){
							if (err) throw err;
							var errmsg={};
							if (err) {
								errmsg={'error_code':'1','error_msg':err};
							}else{
								errmsg={'error_code':'0'};
							}
							res.charSet('utf-8');
							res.json(errmsg);
						});
					});

				});
			break;
			case "deleteData":
				//找到当前id的数据
				Newsblock.get(reqbody.contid, function(err,blockdata){
					if (err) throw err;
					blockdata.remove(function(err){
						if (err) throw err;
						var errmsg={};
						if (err) {
							errmsg={'error_code':'1','error_msg':err};
						}else{
							errmsg={'error_code':'0'};
						}
						res.charSet('utf-8');
						res.json(errmsg);
					});
				});
			break;
			case "loadContent":
				var loadmore = reqbody.loadmore; // 声明变量，存放从前台获取的“加载更多”的点击数
				var offsetnum = loadmore * 5;
				Newsblock.find({
					content_id: reqbody.contentid //找到当前“类别”的数据,每次加载五条
				}).orderRaw("?? DESC", ['add_time']).limit(5).offset(offsetnum).run(function(err,blockdata){
					if (err) throw err;
					res.charSet('utf-8');
					res.json(blockdata);
				});
			break;
		}
	});
}


// 轮播的数据操作函数
function lunboDataOP(dblink,optype,req,res,reqbody) { //参数1：数据库链接地址，参数2：操作类型字符串（和调用的函数名相同）
	// 指定允许其他域名访问  
	res.header("Access-Control-Allow-Origin","*");
	// 响应头设置
	res.header("Access-Control-Allow-Headers","x-requested-with,content-type");
	orm.connect(dblink, function (err, db) {
		if (err) throw err;
		var Lunbo = db.define("lunbo", { 
			id  : {
				type: 'serial',
				key: true
			},
			content_id  : Number,
			image_src   : String,
			title       : String,
			href        : String,
		});
		switch (optype) {
			case "loadLbData":
				Lunbo.find({}).limit(3).offset(0).run(function(err,data){
					if (err) throw err;
					res.charSet('utf-8');
					res.json(data);
				});
			break;
			case "editLbData":
				Lunbo.get(reqbody.contid, function(err,Datarow){
					Datarow.save({
						image_src: reqbody.image_src,
						title: reqbody.title,
						href: reqbody.href,
					},function(err){
						if (err) throw err;
						var errmsg={};
						if (err) {
							errmsg={'error_code':'1','error_msg':err};
						}else{
							errmsg={'error_code':'0'};
						}
						res.charSet('utf-8');
						res.json(errmsg);
					});
				});
			break;
		}
	});
}

// 滚动文字的数据操作函数
function gundongDataOP(dblink,optype,req,res,reqbody) {
	// 指定允许其他域名访问  
	res.header("Access-Control-Allow-Origin","*");
	// 响应头设置
	res.header("Access-Control-Allow-Headers","x-requested-with,content-type");
	orm.connect(dblink, function (err, db) {
		if (err) throw err;
		var Gundong = db.define("gundong", { 
			id  : {
				type: 'serial',
				key: true
			},
			content_id  : Number,
			title       : String,
		});
		if (optype === "loadGdData") {
			Gundong.find({}).limit(10).offset(0).run(function(err,data){
				if (err) throw err;
				res.charSet('utf-8');
				res.json(data);
			});
		}
		if (optype === "editGdData") {
			//将获取的列表中的文字放进数组，为依此修改数据条目做准备
			var gdArray = [reqbody.gd1,reqbody.gd2,reqbody.gd3,reqbody.gd4,reqbody.gd5,reqbody.gd6,reqbody.gd7,reqbody.gd8,reqbody.gd9,reqbody.gd10];
			var err_exist = 0;
			var errmsg={};
			gdArray.forEach(function(element,index){ //依次修改数据
				Gundong.get(index + 1, function(err,Datarow){
					Datarow.save({title: element},function(err){
						if (err) throw err;
					});
				});
			});
			if (err_exist) {
				errmsg={'error_code':'1'};
			}else{
				errmsg={'error_code':'0'};
			}
			res.charSet('utf-8');
			res.json(errmsg);
		}
	});
}