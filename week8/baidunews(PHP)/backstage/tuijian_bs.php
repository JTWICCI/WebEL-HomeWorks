<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="tj_bs">
    <h2>添加新闻</h2>
    <ul class="nav nav-tabs display_types">
      <li role="presentation" class="active"><a href="#"><strong>三图展示</strong></a></li>
      <li role="presentation"><a href="#"><strong>单图展示</strong></a></li>
      <li role="presentation"><a href="#"><strong>文本展示</strong></a></li>
    </ul>
    <div>
<?php
include('data_adding_pannel.html');
?>
    <div>
        <h2 class="sub-header">内容管理</h2>
        <form>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>索引</th>
                            <th>类型</th>
                            <th>标题</th>
                            <th>时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody id="view_content_tj">
                        <!--这里是从服务器读取的数据后生成的内容-->
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
<script type="text/javascript">
    (function(){ //切换“展示种类”时改变相应内容
        $("#tj_bs .display_types").delegate("li","click",function(){
            var index = $("#tj_bs .display_types li").index(this);
            $(this).addClass("active").siblings().removeClass("active");
            $("#tj_bs .add-cont").eq(index).show().siblings().hide();
        });
    })();

    // 增加数据时的表单异步提交
    (function(){
        $("#tj_bs .add_contype_1").submit(function(e){ //第1种展示样式的数据提交
            e.preventDefault(); //防止表单提交后页面刷新
            //为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
            $("#tj_bs .add_contype_1 input[name='pgname']").attr("value","tuijian");
            // $("#error_info").load("backstage/baijia.php",$("#add_contype_1").serialize()); //此方法尝试失败
            // 调用ajaxSubmit方法通过ajax发送请求并返回内容（参数1：提交的表单id，参数2：发送到请求的位置，参数3：读取数据库后生成并返回页面内容的脚本，参数4：被载入内容的html DOM元素，参数5：操作方式）
            ajaxSubmit("#tj_bs .add_contype_1","backstage/db_operation.php","backstage/load_content/tuijian_review.php","#view_content_tj","add");
            // return false; 
        });

        $("#tj_bs .add_contype_2").submit(function(e){ //第2种展示样式的数据提交
            e.preventDefault(); //防止表单提交后页面刷新
            //为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
            $("#tj_bs .add_contype_2 input[name='pgname']").attr("value","tuijian");
            // 调用ajaxSubmit方法通过ajax发送请求并返回内容
            ajaxSubmit("#tj_bs .add_contype_2","backstage/db_operation.php","backstage/load_content/tuijian_review.php","#view_content_tj","add");
        });

        $("#tj_bs .add_contype_3").submit(function(e){ //第3种展示样式的数据提交
            e.preventDefault(); //防止表单提交后页面刷新
            //为了通过post方式发送数据，在form里增加一个隐藏的input的值,存放要编辑数据的所属的数据表名
            $("#tj_bs .add_contype_3 input[name='pgname']").attr("value","tuijian");
            // 调用ajaxSubmit方法通过ajax发送请求并返回内容
            ajaxSubmit("#tj_bs .add_contype_3","backstage/db_operation.php","backstage/load_content/tuijian_review.php","#view_content_tj","add");
        });
    })();
</script>