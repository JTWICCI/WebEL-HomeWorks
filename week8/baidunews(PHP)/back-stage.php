<!doctype html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>后台管理</title>
    <link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/dashboard.css" />
    <link rel="stylesheet" type="text/css" href="css/backstage.css" />
    <script type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</head>

<body>
    <div id="add_success" class="sqlresponse">数据添加成功！</div>
    <div id="edit_success" class="sqlresponse">数据修改成功！</div>
    <div id="delete_success" class="sqlresponse">数据删除成功！</div>
    <div id="add_failed" class="sqlresponse failed">数据添加失败！</div>
    <div id="edit_failed" class="sqlresponse failed">数据修改失败！</div>
    <div id="delete_failed" class="sqlresponse failed">数据删除失败！</div>
    <div id="error_info"></div>

    <!--顶部导航栏-->
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a class="active" href="#">首页</a></li>
                    <li><a href="#" target="#">网站首页</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">管理员</a></li>
                    <li><a href="#">修改密码</a></li>
                    <li><a href="#">退出</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!--导航栏下方所有内容容器-->
    <div class="container-fluid">
        <div class="row">
            <!--左侧边栏-->
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar text-center">
                    <li class="active" subpage="lunbo"><a href="#"><i class="icon-font">&#xe052;</i>&nbsp;图片轮播</a></li>
                    <li subpage="gundong"><a href="#"><i class="icon-font">&#xe005;</i>&nbsp;滚动文字</a></li>
                    <li subpage="tuijian_bs"><a href="#"><i class="icon-font">&#xe008;</i>&nbsp;推荐内容</a></li>
                    <li subpage="baijia_bs"><a href="#"><i class="icon-font">&#xe003;</i>&nbsp;百家内容</a></li>
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe006;</i>&nbsp;本地内容</a></li>
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe033;</i>&nbsp;图片内容</a></li>
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe012;</i>&nbsp;娱乐内容</a></li>
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe004;</i>&nbsp;社会内容</a></li>
                </ul>
                <ul class="nav nav-sidebar text-center">
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe018;</i>&nbsp;系统管理</a></li>
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe017;</i>&nbsp;系统设置</a></li>
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe037;</i>&nbsp;清理缓存</a></li>
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe046;</i>&nbsp;数据备份</a></li>
                    <li subpage="notyet"><a href="#"><i class="icon-font">&#xe045;</i>&nbsp;数据还原</a></li>
                </ul>
            </div>
            <div>
                <!--右侧主体内容-->
                <div id="lunbo" style="display: block;">
                    <?php
                        include('backstage/lunbo.php'); //管理轮播的界面
                    ?>
                </div>
                <div id="gundong" style="display: none;">
                    <?php
                        include('backstage/gundong.php'); //管理滚动字幕的界面
                    ?>
                </div>
                <div id="tuijian_bs" style="display: none;">
                    <?php
                        include('backstage/tuijian_bs.php'); //管理“推荐”内容的界面
                    ?>
                </div>
                <div id="baijia_bs" style="display: none;">
                    <?php
                        include('backstage/baijia_bs.php'); //管理“百家”内容的界面
                    ?>
                </div>
                <div id="notyet" style="display: none;">
                    <?php
                        include('backstage/notyet.php'); //未开发内容的界面
                    ?>
                </div>
                
            </div>
        </div>
    </div>
    <!--点“编辑”后弹出的修改数据界面（编辑面板）-->
    <nav class="navbar navbar-default navbar-fixed-bottom" id="edit_pannel">
        <div class="container panel">
            <div class="edit-cont edit-cont-1">
                <!--“三图展示”的提交表单-->
                <form  id="edit_contype_1">
                    <!--隐式提交值，指明当前表单是为修改数据-->
                    <input type="hidden" name="actype" value="edit" />
                    <input type="hidden" name="displaytype" value="1" />
                    <input type="hidden" name="contid" value="" />
                    <input type="hidden" name="pgname" value="" />
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-7">
                            <div class="input-group">
                                <span class="input-group-addon">标题文字</span>
                                <input type="text" name="title" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-5">
                            <div class="input-group">
                                <span class="input-group-addon">标签</span>
                                <select name="tagtype" class="form-control">
                                    <option value="0">无</option>
                                    <option value="1">有</option>
                                </select>
                                <span class="input-group-addon">标签文字</span>
                                <input type="text" name="tagtext" class="form-control"  />
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-4">
                            <div class="input-group">
                                <span class="input-group-addon">图片1地址</span>
                                <input type="text" name="image1_src" class="form-control" />
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="input-group">
                                <span class="input-group-addon">图片2地址</span>
                                <input type="text" name="image2_src" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="input-group">
                                <span class="input-group-addon">图片3地址</span>
                                <input type="text" name="image3_src" class="form-control"  />
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-10">
                            <div class="input-group">
                                <span class="input-group-addon">链接指向地址</span>
                                <input type="text" name="href" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-1">
                            <input type="submit" name="submit" class="btn btn-success" value="修改" />
                        </div>
                        <div class="col-xs-1">
                            <button class="btn btn-warning">取消</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="edit-cont edit-cont-2" >
                <!--“单图展示”的提交表单-->
                <form id="edit_contype_2">
                    <input type="hidden" name="actype" value="edit" />
                    <input type="hidden" name="displaytype" value="2" />
                    <input type="hidden" name="contid" value="" />
                    <input type="hidden" name="pgname" value="" />
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-7">
                            <div class="input-group">
                                <span class="input-group-addon">标题文字</span>
                                <input type="text" name="title" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-5">
                            <div class="input-group">
                                <span class="input-group-addon">标签</span>
                                <select name="tagtype" class="form-control">
                                    <option value="0">无</option>
                                    <option value="1">有</option>
                                </select>
                                <span class="input-group-addon">标签文字</span>
                                <input type="text" name="tagtext" class="form-control"  />
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-7">
                            <div class="input-group">
                                <span class="input-group-addon">概述文字</span>
                                <input type="text" name="discribe" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-5">
                            <div class="input-group">
                                <span class="input-group-addon">图片地址</span>
                                <input type="text" name="image1_src" class="form-control"  />
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-10">
                            <div class="input-group">
                                <span class="input-group-addon">链接指向地址</span>
                                <input type="text" name="href" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-1">
                            <input type="submit" name="submit" class="btn btn-success" value="修改" />
                        </div>
                        <div class="col-xs-1">
                            <button class="btn btn-warning">取消</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="edit-cont edit-cont-3">
                <!--“文本展示”的提交表单-->
                <form id="edit_contype_3">
                    <input type="hidden" name="actype" value="edit" />
                    <input type="hidden" name="displaytype" value="3" />
                    <input type="hidden" name="contid" value="" />
                    <input type="hidden" name="pgname" value="" />
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-7">
                            <div class="input-group">
                                <span class="input-group-addon">标题文字</span>
                                <input type="text" name="title" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-5">
                            <div class="input-group">
                                <span class="input-group-addon">标签</span>
                                <select name="tagtype" class="form-control">
                                    <option value="0">无</option>
                                    <option value="1">有</option>
                                </select>
                                <span class="input-group-addon">标签文字</span>
                                <input type="text" name="tagtext" class="form-control"  />
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-12">
                            <div class="input-group">
                                <span class="input-group-addon">概述文字</span>
                                <input type="text" name="discribe" class="form-control"  />
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-10">
                            <div class="input-group">
                                <span class="input-group-addon">链接指向地址</span>
                                <input type="text" name="href" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-1">
                            <input type="submit" name="submit" class="btn btn-success" value="修改" />
                        </div>
                        <div class="col-xs-1">
                            <button class="btn btn-warning">取消</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="edit-cont edit-cont-4">
                <form id="edit_contype_4">
                    <input type="hidden" name="actype" value="edit" />
                    <input type="hidden" name="displaytype" value="4" />
                    <input type="hidden" name="contid" value="" />
                    <input type="hidden" name="pgname" value="" />
                    <div class="row" style="margin-top: 5px;">
                        <div class="col-xs-10">
                            <div class="input-group">
                                <span class="input-group-addon">滚动字幕标题</span>
                                <input type="text" name="title" class="form-control"  />
                            </div>
                        </div>
                        <div class="col-xs-1">
                            <input type="submit" class="btn btn-success" value="修改" />
                        </div>
                        <div class="col-xs-1">
                            <button class="btn btn-warning">取消</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </nav>
    <script type="text/javascript">
        (function(){
            $(".sidebar ul li").on('click',function(){
                $(".sidebar ul li").removeClass("active");
                $(this).addClass("active");
                // 选择按钮后显示右侧相应页
                var subpage = $(this).attr("subpage");
                $("#"+subpage).show().siblings().hide();
                // 根据相应页的显示从数据库载入内容
                if($("#tuijian_bs").css("display") == 'block'){ //刷新内容管理界面
                    $("#view_content_tj").load("backstage/load_content/tuijian_review.php");
                }
                if($("#baijia_bs").css("display") == 'block'){ //刷新内容管理界面
                    $("#view_content_bj").load("backstage/load_content/baijia_review.php");
                }
            });
        })();

        // 操作“编辑”动作的自执行函数
        (function(){
            var contid; //此变量将存放要编辑内容的数据库索引值
            var pgname; //此变量将存放要查询的数据表的名字
            var contloadid; //此变量将存放载入数据的容器id
            var contreview; //此变量将存放数据的php脚本路径
            //监听所有的编辑按钮，即使是后载入的也能监听
            $("body").on("click",".btn-info",function(){
               // 根据按钮位置向服务器发送请求
               // 找到当前要编辑内容的数据库索引值：
               contid = $(this).parent().siblings().eq(0).html();
               // 向上找到tbody标签，根据其id确定是哪个页面
               var pgid = $(this).parentsUntil("table","tbody").attr("id");
               switch (pgid) {
                    case "view_content_tj":
                        contloadid = "#view_content_tj";
                        contreview = "backstage/load_content/tuijian_review.php";
                        pgname = "tuijian"; //这个字符串是要查询的数据表的名字
                        editResponse(pgname); //向服务器发送请求，获得并返回当前内容的可编辑数据
                    break;
                    case "view_content_bj":
                        contloadid = "#view_content_bj";
                        contreview = "backstage/load_content/baijia_review.php";
                        pgname = "baijia"; //这个字符串是要查询的数据表的名字
                        editResponse(pgname); //向服务器发送请求，获得并返回当前内容的可编辑数据
                    break;
               }

                function editResponse(pgname) {
                    //向服务器发送请求，获得并返回当前内容的可编辑数据
                    $.getJSON("backstage/edit_response.php?contid="+contid+"&pgname="+pgname,function(data){
                        $("#edit_pannel").show(); //显示编辑面板框架
                        // 根据返回的displaytype的值（哪种展示方式）做相应处理
                        switch (data.displaytype) {
                            case "1":
                                // 根据从服务器取到的展示类型显示相应面板
                                $(".edit-cont.edit-cont-1").show().siblings().hide();
                                // 将原来的值载入到input标签的value中:
                                $("#edit_contype_1 input[name='title']").attr("value",data.title);
                                if (data.tagtype == "1" || "2" || "3") {
                                    $("#edit_contype_1 select option[value='"+data.tagtype+"']").attr("selected",true);
                                    $("#edit_contype_1 input[name='tagtext']").attr("value",data.tagtext);
                                }
                                $("#edit_contype_1 input[name='image1_src']").attr("value",data.image1_src);
                                $("#edit_contype_1 input[name='image2_src']").attr("value",data.image2_src);
                                $("#edit_contype_1 input[name='image3_src']").attr("value",data.image3_src);
                                $("#edit_contype_1 input[name='href']").attr("value",data.href);
                                
                            break;
                            case "2":
                                $(".edit-cont.edit-cont-2").show().siblings().hide();
                                // 将原来的值载入到input标签的value中:
                                $("#edit_contype_2 input[name='title']").attr("value",data.title);
                                if (data.tagtype == "1" || "2" || "3") {
                                    $("#edit_contype_2 select option[value='"+data.tagtype+"']").attr("selected",true);
                                    $("#edit_contype_2 input[name='tagtext']").attr("value",data.tagtext);
                                }
                                $("#edit_contype_2 input[name='discribe']").attr("value",data.discribe);
                                $("#edit_contype_2 input[name='image1_src']").attr("value",data.image1_src);
                                $("#edit_contype_2 input[name='href']").attr("value",data.href);
                            break;
                            case "3":
                                $(".edit-cont.edit-cont-3").show().siblings().hide();
                                // 将原来的值载入到input标签的value中:
                                $("#edit_contype_3 input[name='title']").attr("value",data.title);
                                if (data.tagtype == "1" || "2" || "3") {
                                    $("#edit_contype_3 select option[value='"+data.tagtype+"']").attr("selected",true);
                                    $("#edit_contype_3 input[name='tagtext']").attr("value",data.tagtext);
                                }
                                $("#edit_contype_3 input[name='discribe']").attr("value",data.discribe);
                                $("#edit_contype_3 input[name='href']").attr("value",data.href);
                            break;
                            case "4":
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
                $("#edit_contype_1 input[name='pgname']").attr("value",pgname);
                ajaxSubmit("#edit_contype_1","backstage/db_operation.php",contreview,contloadid,"edit");
                $("#edit_pannel").hide();
            });

            $("#edit_contype_2").submit(function(e){
                e.preventDefault();
                // 为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的索引值
                $("#edit_contype_2 input[name='contid']").attr("value",contid);
                //同上，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
                $("#edit_contype_2 input[name='pgname']").attr("value",pgname);
                ajaxSubmit("#edit_contype_2","backstage/db_operation.php",contreview,contloadid,"edit");
                $("#edit_pannel").hide();
            });

            $("#edit_contype_3").submit(function(e){
                e.preventDefault();
                // 为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的索引值
                $("#edit_contype_3 input[name='contid']").attr("value",contid);
                //同上，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
                $("#edit_contype_3 input[name='pgname']").attr("value",pgname);
                ajaxSubmit("#edit_contype_3","backstage/db_operation.php",contreview,contloadid,"edit");
                $("#edit_pannel").hide();
            });

            // 点击“取消”按钮隐藏编辑面板
            $("#edit_pannel .btn-warning").on("click",function(e){
                e.preventDefault();
                $("#edit_pannel").hide();
            });
        })();

        // 监听表单的submit事件后，在触发时，发送ajax请求并返回内容给后台数据页面的方法：
        function ajaxSubmit(contype,tophp,loadphp,beload,actype) { //（参数1：提交表单的id，参数2：发送到请求的位置，参数3：读取数据库后生成并返回页面内容的脚本，参数4：被载入内容的html DOM元素，参数5：操作方式）
            $.ajax(tophp,{
                // dataType: "html", //（数据能被php接收处理，但会是乱码）
                data: $(contype).serialize(),
                // contentType: 'text/html;charset=utf-8', //（数据不能被php接收处理）
                contentType: "application/x-www-form-urlencoded; charset=UTF-8", // 这样可以
                // contentType: 'application/json;charset=utf-8', //（数据不能被php接收处理）
                type: 'POST',
                success: function(data){ 
                    if (data.error_code == "0") {
                        $(contype)[0].reset(); //重置(清空)表单
                        
                        //刷新内容
                        $(beload).load(loadphp);
                        
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
                            $("#add_failed").fadeOut(2000);
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
            var contid; //此变量将存放要内容的数据库索引值
            var pgname; //此变量将存放要查询的数据表的名字
            var contloadid; //此变量将存放载入数据的容器id
            var contreview; //此变量将存放数据的php脚本路径
            //监听所有的"删除"按钮，即使是后载入的也能监听
            $("body").on("click",".btn-warning",function(){
                //先询问是否确定删除
                var realdelete = confirm("确定删除吗?");
                if (realdelete != true) {
                    return false;
                }
                // 找到当前要编辑内容的数据库索引值：
                contid = $(this).parent().siblings().eq(0).html();
                // 向上找到tbody标签，根据其id确定是哪个页面
                var pgid = $(this).parentsUntil("table","tbody").attr("id");
                switch (pgid) {
                    case "view_content_tj":
                        contloadid = "#view_content_tj";
                        contreview = "backstage/load_content/tuijian_review.php";
                        pgname = "tuijian"; //这个字符串是要查询的数据表的名字
                        deleteData(pgname); //向服务器发送请求，并返回当前操作的执行结果
                    break;
                    case "view_content_bj":
                        contloadid = "#view_content_bj";
                        contreview = "backstage/load_content/baijia_review.php";
                        pgname = "baijia"; //这个字符串是要查询的数据表的名字
                        deleteData(pgname); //向服务器发送请求，并返回当前操作的执行结果
                    break;
                }
                function deleteData(argument) {
                    //向服务器发送请求，并返回当前操作的执行结果
                    // $.getJSON("backstage/delete_operation.php?contid="+contid+"&pgname="+pgname,function(data){
                    $.post("backstage/delete_operation.php?",{contid:contid,pgname:pgname},function(data){
                        if (data.error_code == "0") {
                            //刷新内容
                            $(contloadid).load(contreview);

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
    </script>
</body>

</html>
