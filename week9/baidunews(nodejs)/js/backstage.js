// JavaScript Document
//后台的主js文件

var pageid = 0;   //这个变量将存放“类别”索引与数据表中的content_id对应（比如：“推荐”是1，“百家”是2）
var pgtype = 1; //这个变量将当前显示页类型（pgtype属性值）
//监听后台左侧的菜单按钮
(function(){
    //先加载默认显示的“轮播”后台页面
    $("#cont_display").load("backstage/lunbo.html",function() {
        lunboimgHWfix();//调整设置轮播展示图片的宽高比不变
    });
    $(".sidebar ul li").on('click',function(){
        $(".sidebar ul li").removeClass("active");
        $(this).addClass("active");
        var subpage = ""; //变量将存放当前按钮对应的右侧要载入的html文件名
        //获得当前按钮对应的页类型（pgtype属性值）
        pgtype = $(this).attr("pgtype");
        var tbname = "";    //声明一个变量，将与数据表名对应
        
        switch (pgtype) {
            // 根据页类设置要查询的数据库表名 和要载入的html文件名
            case "1":
                tbname = "lunbo";
                subpage = "lunbo.html";
                lunboimgHWfix();//调整轮播展示图片的宽高比不变
                loadLunboData(); //调用载入轮播内容数据的函数
            break;
            case "2":
                tbname = "gundong";
                subpage = "zmgundong.html";
                loadGundongData();//调用载入滚动文字数据到后台界面的函数
            break;
            case "3":
                tbname = "newsblock";
                subpage = "tongyong.html";
                pageid = $(this).attr("pageid"); //获得"pageid"属性值
            break;
        }
        // 选择按钮后显示右侧相应页
        $("#cont_display").load("backstage/" + subpage,function(){
            if(pgtype == "3"){ //如果载入的页面不是是“滚动”或“轮播”,是其它的,则载入它们共用的“添加”面板模板
                // 设置后载入模板内的最外层id：
                var contboxid = "tongyong" + pageid; //先声明变量存放id值
                $("#cont_display div:first-child").eq(0).attr("id",contboxid); //设置id值

                // 设置后载入模板内容里显示服务器数据（数据列表）的容器id：
                var tbodyid = "tydatabox" + pageid; //先声明变量存放id值
                $("#cont_display #"+ contboxid +" .table-responsive table tbody").attr("id",tbodyid);

                // 载入右侧相应页内需要的“添加内容”面板
                $(".template_add").load("backstage/templates/data_adding_pannel.html",function(){
                    /*
                    *根据激活的左侧菜单项按钮，调整对应的右侧“添加”面板表单
                    */
                    //切换“展示种类”时改变相应内容
                    $("#"+ contboxid +" .display_types").delegate("li","click",function(){
                        var index = $("#"+ contboxid +" .display_types li").index(this);
                        $(this).addClass("active").siblings().removeClass("active");
                        $("#"+ contboxid +" .add-cont").eq(index).show().siblings().hide();
                    });

                    /*
                    * 添加数据时的表单异步提交（这里要注意数据表名要改）
                    */
                    $("#"+ contboxid +" .add_contype_1").submit(function(e){ //第1种展示样式的数据提交
                        e.preventDefault(); //防止表单提交后页面刷新
                        //为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑的数据所属的数据表名
                        $("#"+ contboxid +" .add_contype_1 input[name='tbname']").attr("value",tbname);
                        //在form里增加一个隐藏的input的值,存放要编辑数据的所属类别“推荐、百家、或图片....”
                        $("#"+ contboxid +" .add_contype_1 input[name='contentid']").attr("value",pageid);
                        // 调用ajaxSubmit方法通过ajax发送请求并返回内容（参数1：提交表单的id，参数2：发送到请求的位置，参数3：被载入内容的DOM元素，参数4：操作方式）
                        ajaxSubmit("#"+ contboxid +" .add_contype_1","http://localhost:3900/addrow","#"+tbodyid,"add",pageid,tbodyid);
                        // return false; 
                    });

                    $("#"+ contboxid +" .add_contype_2").submit(function(e){ //第2种展示样式的数据提交
                        e.preventDefault(); //防止表单提交后页面刷新
                        //为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
                        $("#"+ contboxid +" .add_contype_2 input[name='tbname']").attr("value",tbname);
                        //在form里增加一个隐藏的input的值,存放要编辑数据的所属类别“推荐、百家、或图片....”
                        $("#"+ contboxid +" .add_contype_2 input[name='contentid']").attr("value",pageid);
                        // 调用ajaxSubmit方法通过ajax发送请求并返回内容
                        ajaxSubmit("#"+ contboxid +" .add_contype_2","http://localhost:3900/addrow","#"+tbodyid,"add",pageid,tbodyid);
                    });

                    $("#"+ contboxid +" .add_contype_3").submit(function(e){ //第3种展示样式的数据提交
                        e.preventDefault(); //防止表单提交后页面刷新
                        //为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
                        $("#"+ contboxid +" .add_contype_3 input[name='tbname']").attr("value",tbname);
                        //在form里增加一个隐藏的input的值,存放要编辑数据的所属类别“推荐、百家、或图片....”
                        $("#"+ contboxid +" .add_contype_3 input[name='contentid']").attr("value",pageid);
                        // 调用ajaxSubmit方法通过ajax发送请求并返回内容
                        ajaxSubmit("#"+ contboxid +" .add_contype_3","http://localhost:3900/addrow","#"+tbodyid,"add",pageid,tbodyid);
                    });

                    //加载当前页的数据条目
                    loadAndPrint(pageid,tbodyid);
                });
            }
        });
    });
})();

//加载或刷新数据条目的函数
function loadAndPrint(_pageid,_tbodyid) {//参数1：当前页的“类别”, 参数2：要载入的DOM框架id名
    //加载从数据库读取的数据并生成数据条目
    $.get('http://localhost:3900/reviewall/'+ _pageid,function(data){
        var displaytype = "", id=0, title="", addtime="";
        for(var i=0,l=data.length;i<l;i++){  //将数据逐行打印出来
            switch (data[i].displaytype) {
                case 1:
                    displaytype = "三图";
                break;
                case 2:
                    displaytype = "单图";
                break;
                case 3:
                    displaytype = "纯字";
                break;
            }
            id = data[i].id;
            title = data[i].title;
            addtime = data[i].add_time;
            addtime = new Date(addtime).Format("yyyy-M-d hh:mm:ss");
            //打印html：
            $("#"+_tbodyid).append("<tr>\n<td>"+id+"</td>\n<td>"+displaytype+"</td>\n<td>"+title+"</td>\n<td>"+addtime+"</td>\n<td>\n<button class=\"btn btn-info btn-xs\">编辑</button>\n<button class=\"btn btn-warning btn-xs\">删除</button>\n</td>\n</tr>");
        }  
    });
}


// 操作“编辑”动作的自执行函数
(function(){
    var contid; //此变量将存放要编辑内容在数据库的索引值
    var tbname; //此变量将存放要查询的数据表名
    var contloadid; //此变量将存放载入数据的容器id
    //监听所有的编辑按钮，即使是后载入的也能监听
    $("body").on("click",".btn-info",function(){
       // 根据按钮位置向服务器发送请求
       // 找到当前要编辑内容的数据库索引值：
       contid = $(this).parent().siblings().eq(0).html();
       // 根据其当前显示的页面确定当前按钮所在的位置
       switch (pgtype) {
            case "1":
                contloadid = ""; //——————还未开发轮播！！
                tbname = "lunbo"; //这个字符串是要查询的数据表的名字
                editResponse(tbname); //向服务器发送请求，获得并返回当前内容的可编辑数据
            break;
            case "2":
                contloadid = ""; //——————还未开发轮播！！
                tbname = "gundong"; //这个字符串是要查询的数据表的名字
                editResponse(tbname); //向服务器发送请求，获得并返回当前内容的可编辑数据
            break;
            case "3":
                contloadid = "tydatabox" + pageid;
                tbname = "newsblock"; //这个字符串是要查询的数据表的名字
                editResponse(tbname); //向服务器发送请求，获得并返回当前内容的可编辑数据
            break;
       }

        function editResponse(tbname) {
            //向服务器发送请求，获得并返回当前内容的可编辑数据
            $.get("http://localhost:3900/editresp/"+contid,function(data){
                $("#edit_pannel").show(); //显示编辑面板框架
                // 根据返回的displaytype的值（哪种展示方式）做相应处理
                switch (data.displaytype) {
                    case 1:
                        // 根据从服务器取到的展示类型显示相应面板
                        $(".edit-cont.edit-cont-1").show().siblings().hide();
                        // 将原来的值载入到input标签的value中:
                        $("#edit_contype_1 input[name='title']").attr("value",data.title);
                        if (data.tagtype == "1") {
                            $("#edit_contype_1 select option[value='"+data.tagtype+"']").attr("selected",true);
                            $("#edit_contype_1 input[name='tagtext']").attr("value",data.tagtext);
                        }
                        $("#edit_contype_1 input[name='image1_src']").attr("value",data.image1_src);
                        $("#edit_contype_1 input[name='image2_src']").attr("value",data.image2_src);
                        $("#edit_contype_1 input[name='image3_src']").attr("value",data.image3_src);
                        $("#edit_contype_1 input[name='href']").attr("value",data.href);
                        
                    break;
                    case 2:
                        $(".edit-cont.edit-cont-2").show().siblings().hide();
                        // 将原来的值载入到input标签的value中:
                        $("#edit_contype_2 input[name='title']").attr("value",data.title);
                        if (data.tagtype == "1") {
                            $("#edit_contype_2 select option[value='"+data.tagtype+"']").attr("selected",true);
                            $("#edit_contype_2 input[name='tagtext']").attr("value",data.tagtext);
                        }
                        $("#edit_contype_2 input[name='discribe']").attr("value",data.discribe);
                        $("#edit_contype_2 input[name='image1_src']").attr("value",data.image1_src);
                        $("#edit_contype_2 input[name='href']").attr("value",data.href);
                    break;
                    case 3:
                        $(".edit-cont.edit-cont-3").show().siblings().hide();
                        // 将原来的值载入到input标签的value中:
                        $("#edit_contype_3 input[name='title']").attr("value",data.title);
                        if (data.tagtype == "1") {
                            $("#edit_contype_3 select option[value='"+data.tagtype+"']").attr("selected",true);
                            $("#edit_contype_3 input[name='tagtext']").attr("value",data.tagtext);
                        }
                        $("#edit_contype_3 input[name='discribe']").attr("value",data.discribe);
                        $("#edit_contype_3 input[name='href']").attr("value",data.href);
                    break;
                    case 4:
                        $(".edit-cont.edit-cont-4").show().siblings().hide();
                        // 将原来的值载入到input标签的value中:
                        $("#edit_contype_4 input[name='title']").attr("value",data.title);
                    break;
                }
            });
        }
       
    });
    // 监听“修改”按钮所属的表单submit事件
    $("#edit_contype_1").submit(function(e){
        e.preventDefault();
        // 为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的索引值
        $("#edit_contype_1 input[name='contid']").attr("value",contid);
        //同上，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
        $("#edit_contype_1 input[name='tbname']").attr("value",tbname);
        //在form里增加一个隐藏的input的值,存放要编辑数据的所属类别“推荐、百家、或图片....”
        $("#edit_contype_1 input[name='contentid']").attr("value",pageid);
        //调用异步表单提交函数（参数1：提交表单的id，参数2：发送到请求的位置，参数3：被载入内容的DOM元素，参数4：操作方式，[刷新页面的方法用的：参数5：当前页的“类别”num, 参数6：要载入的DOM框架id名]）
        ajaxSubmit("#edit_contype_1","http://localhost:3900/edit","#"+contloadid,"edit",pageid,contloadid);
        $("#edit_pannel").hide();
    });

    $("#edit_contype_2").submit(function(e){
        e.preventDefault();
        // 为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的索引值
        $("#edit_contype_2 input[name='contid']").attr("value",contid);
        //同上，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
        $("#edit_contype_2 input[name='tbname']").attr("value",tbname);
        //在form里增加一个隐藏的input的值,存放要编辑数据的所属类别“推荐、百家、或图片....”
        $("#edit_contype_2 input[name='contentid']").attr("value",pageid);
        ajaxSubmit("#edit_contype_2","http://localhost:3900/edit","#"+contloadid,"edit",pageid,contloadid);
        $("#edit_pannel").hide();
    });

    $("#edit_contype_3").submit(function(e){
        e.preventDefault();
        // 为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的索引值
        $("#edit_contype_3 input[name='contid']").attr("value",contid);
        //同上，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
        $("#edit_contype_3 input[name='tbname']").attr("value",tbname);
        //在form里增加一个隐藏的input的值,存放要编辑数据的所属类别“推荐、百家、或图片....”
        $("#edit_contype_3 input[name='contentid']").attr("value",pageid);
        ajaxSubmit("#edit_contype_3","http://localhost:3900/edit","#"+contloadid,"edit",pageid,contloadid);
        $("#edit_pannel").hide();
    });

    // 点击“取消”按钮隐藏编辑面板
    $("#edit_pannel .btn-default").on("click",function(e){
        e.preventDefault();
        $("#edit_pannel").hide();
    });
})();

// 监听表单的submit事件后，在触发时，发送ajax请求并返回内容给后台数据页面的方法：
function ajaxSubmit(formid,toaddress,beload,actype,_pageid,_tbodyid) { //（参数1：提交表单的id，参数2：发送到请求的位置，参数3：被载入内容的DOM元素，参数4：操作方式，[刷新页面的方法用的：参数5：当前页的“类别”num, 参数6：要载入的DOM框架id名]）
    //先验证表单（必填项是否为空）
    var formcheck = $(formid).serializeJson();
    if (!formcheck.title) {
        $("#error_info").fadeIn(500,function(){ // 显示错误信息 
            $("#error_info").html(
                            "<p>注意：</p>" +
                            "<p>标题不能为空</p>");
            setTimeout(function(){
                $("#error_info").fadeOut(2000);
            },4000);
        });
        return false;
    }
    $.ajax(toaddress,{
        data: $(formid).serializeJson(),//转换成Json对象
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        type: 'POST',
        success: function(data){ 
            if (data.error_code == "0") {
                $(formid)[0].reset(); //重置(清空)表单
                
                //刷新内容
                $("#"+_tbodyid).html(" ");//先清空内容
                loadAndPrint(_pageid,_tbodyid);//再写入
                
                $("#"+actype+"_success").fadeIn(500,function(){ // 显示“数据添加/修改成功”
                    setTimeout(function(){
                        $("#"+actype+"_success").fadeOut(500);
                    },1000);
                });
            } else {    // 显示错误信息
                $("#"+actype+"_failed").fadeIn(500,function(){ // 显示“数据添加/修改失败”
                    setTimeout(function(){
                        $("#"+actype+"_failed").fadeOut(2000);
                    },4000);
                });
                $("#error_info").fadeIn(500,function(){ // 打印详细错误信息
                    $("#error_info").html(data.error_msg);
                    setTimeout(function(){
                        $("#error_info").fadeOut(2000);
                    },4000);
                });
            }
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#"+actype+"_failed").fadeIn(500,function(){   // 显示“数据添加/修改失败”
                setTimeout(function(){
                    $("#"+actype+"_failed").fadeOut(2000);
                },4000);
            });
            $("#error_info").fadeIn(500,function(){ // 显示错误信息 
                $("#error_info").html(
                                "<p>status:" + XMLHttpRequest.status + "</p>" +
                                "<p>readyState:" + XMLHttpRequest.readyState + "</p>" +
                                "<p>textStatus:" + textStatus + "</p>");
                setTimeout(function(){
                    $("#error_info").fadeOut(2000);
                },4000);
            });
        }
    });
}

// 操作“删除”动作的自执行函数
(function(){
    var contid; //此变量将存放要查询内容的数据库索引值
    var tbname; //此变量将存放要查询的数据表的名字
    var contloadid; //此变量将存放载入数据的容器id
    //监听所有的"删除"按钮，即使是后载入的也能监听
    $("body").on("click",".btn-warning",function(){
        //先询问是否确定删除
        var realdelete = confirm("确定删除吗?");
        if (realdelete !== true) {
            return false;
        }
        // 找到当前要编辑内容的数据库索引值：
        contid = $(this).parent().siblings().eq(0).html();
        // 根据其当前显示的页面确定当前按钮所在的位置
        switch (pgtype) {
            // case "1":
            //     contloadid = ""; //——————还未开发，目前只支持“推荐”页有轮播
            //     tbname = "lunbo"; //这个字符串是要查询的数据表的名字
            //     deleteData(tbname); //向服务器发送请求，删除数据
            // break;
            case "2":
                contloadid = ""; //——————还未开发！！
                tbname = "gundong"; //这个字符串是要查询的数据表的名字
                deleteData(tbname); //向服务器发送请求，删除数据
            break;
            case "3":
                contloadid = "tydatabox" + pageid;
                tbname = "newsblock"; //这个字符串是要查询的数据表的名字
                deleteData(tbname); //向服务器发送请求，删除数据
            break;
        }

        function deleteData(tbname) {
            //向服务器发送请求，并返回当前操作的执行结果
            $.post("http://localhost:3900/delete",{contid:contid,tbname:tbname},function(data){
                if (data.error_code == "0") {
                    //刷新内容
                    $("#"+contloadid).html(" ");//先清空内容
                    loadAndPrint(pageid,contloadid);//再写入

                    $("#delete_success").fadeIn(500,function(){ // 显示“数据删除成功”
                        setTimeout(function(){
                            $("#delete_success").fadeOut(500);
                        },1000);
                    });
                } else {    // 显示错误信息
                    $("#delete_failed").fadeIn(500,function(){ // 显示“数据删除失败”
                        setTimeout(function(){
                            $("#delete_failed").fadeOut(2000);
                        },4000);
                    });
                    $("#error_info").fadeIn(500,function(){ // 打印详细错误信息
                        $("#error_info").html(data.error_msg);
                        setTimeout(function(){
                            $("#error_info").fadeOut(2000);
                        },4000);
                    });
                }
            });
        }
    });
})();

//载入轮播数据到后台界面的函数
function loadLunboData() {
    $.get('http://localhost:3900/lunboload',function(data){ //从数据库提取数据
        $("#lunboimg1").css("background-image","url("+ data[0].image_src +")");
        $("#lunboimg2").css("background-image","url("+ data[1].image_src +")");
        $("#lunboimg3").css("background-image","url("+ data[2].image_src +")");
        $("#lunboform1 input[name='title']").attr("value",data[0].title);
        $("#lunboform2 input[name='title']").attr("value",data[1].title);
        $("#lunboform3 input[name='title']").attr("value",data[2].title);
        $("#lunboform1 input[name='image_src']").attr("value",data[0].image_src);
        $("#lunboform2 input[name='image_src']").attr("value",data[1].image_src);
        $("#lunboform3 input[name='image_src']").attr("value",data[2].image_src);
        $("#lunboform1 input[name='href']").attr("value",data[0].href);
        $("#lunboform2 input[name='href']").attr("value",data[1].href);
        $("#lunboform3 input[name='href']").attr("value",data[2].href);
    });
}
loadLunboData(); //调用载入轮播数据到后台界面的函数

//监听更新轮播数据的“更新”按钮的函数：
(function(){
    $("body").on("click",".btn-primary",function(){ //监听“更新”按钮
        var btnindex = $(this).attr("btn-index");
        editLunboData("#lunboform"+btnindex,btnindex);
    });
})();

//载入修改轮播数据的函数
function editLunboData(formid,index) { //参数1：提交表单的id，参数2：第几个图片的表单
    //向服务器发送请求，并返回当前操作的执行结果
    $.post("http://localhost:3900/editlunbo",$(formid).serializeJson(),function(data){
        if (data.error_code == "0") {
            //刷新内容
            $.get('http://localhost:3900/lunboload',function(dat){ //从数据库提取数据
                $("#lunboimg"+index).css("background-image","url("+ dat[index-1].image_src +")");
                $("#lunboform"+index+" input[name='title']").attr("value",dat[index-1].title);
                $("#lunboform"+index+" input[name='image_src']").attr("value",dat[index-1].image_src);
                $("#lunboform"+index+" input[name='href']").attr("value",dat[index-1].href);
            });

            $("#update_success").fadeIn(500,function(){ // 显示“数据更新成功”
                setTimeout(function(){
                    $("#update_success").fadeOut(500);
                },1000);
            });
        } else {    // 显示错误信息
            $("#update_failed").fadeIn(500,function(){ // 显示“数据更新失败”
                setTimeout(function(){
                    $("#update_failed").fadeOut(2000);
                },4000);
            });
            $("#error_info").fadeIn(500,function(){ // 打印详细错误信息
                $("#error_info").html(data.error_msg);
                setTimeout(function(){
                    $("#error_info").fadeOut(2000);
                },4000);
            });
        }
    });
}

//载入滚动文字数据到后台界面的函数
function loadGundongData() {
    $.get('http://localhost:3900/gundongload',function(data){ //从数据库提取数据
        for (var i = 0; i < 10; i++) {
            $("#formgd input").eq(i).attr("value",data[i].title);
        }
    });
}

//监听更新滚动文字数据的“更新”按钮的函数：
(function(){
    $("body").on("click",".btn-danger",function(){ //监听“更新”按钮
        editGundongData();
    });
})();

//修改滚动文字数据的函数
function editGundongData() {
    $.post("http://localhost:3900/editgundong",$("#formgd").serializeJson(),function(data){
        if (data.error_code == "0") {
            //刷新内容
            loadGundongData();

            $("#update_success").fadeIn(500,function(){ // 显示“数据更新成功”
                setTimeout(function(){
                    $("#update_success").fadeOut(500);
                },1000);
            });
        } else {    // 显示错误信息
            $("#update_failed").fadeIn(500,function(){ // 显示“数据更新失败”
                setTimeout(function(){
                    $("#update_failed").fadeOut(2000);
                },4000);
            });
            $("#error_info").fadeIn(500,function(){ // 打印详细错误信息
                $("#error_info").html(data.error_msg);
                setTimeout(function(){
                    $("#error_info").fadeOut(2000);
                },4000);
            });
        }
    });
}


//这个方法可以将表单转换成Json对象
(function($){ 
    $.fn.serializeJson=function(){ 
      var serializeObj={}; 
      var array=this.serializeArray(); 
      var str=this.serialize(); 
      $(array).each(function(){ 
        if(serializeObj[this.name]){ 
          if($.isArray(serializeObj[this.name])){ 
            serializeObj[this.name].push(this.value); 
          }else{ 
            serializeObj[this.name]=[serializeObj[this.name],this.value]; 
          } 
        }else{ 
          serializeObj[this.name]=this.value;  
        } 
      }); 
      return serializeObj; 
    }; 
})(jQuery); 

//自定义日期格式化函数
Date.prototype.Format = function(fmt) 
{ 
  var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
    "S"  : this.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); //格式化年份
  for(var k in o) //循环获取上面定义的月、日、小时等，格式化对应的数据。
    if(new RegExp("("+ k +")").test(fmt)) 
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
  return fmt; 
};

//设置轮播展示图片的宽度和高度固定：
(function(){
    //监听窗口大小是否有改变
    $(window).resize(function(){
        lunboimgHWfix();
    });
})();
function lunboimgHWfix() {
    var ibwidth = $(".imgbox").width(); //获得轮播展示图片的宽度
    var ibheight = ibwidth * 0.6;
    $(".imgbox").height(ibheight); //设置其高度, 使得宽高比固定
}