<?php
// 点击“编辑”按钮后查询数据库并返回对应数据的php脚本
header("Content-type:text/html;charset=utf-8");
    if (isset($_GET['contid']) && is_numeric($_GET['contid']) && ($_GET['contid'] > 0)) {
        // 根据相应的页面选择相应的数据表（声明变量存放数据表名）
        $tablename = $_GET["pgname"];
        //包含数据库连接。
        include('../mysql_connect.php');
        // 定义查询
        $query = "SELECT displaytype, tagtype, tagtext, image1_src, image2_src, image3_src, title, discribe, href FROM $tablename WHERE content_id={$_GET['contid']}";

        if ($r = mysql_query($query, $dbc)) { // 运行查询
            $row = mysql_fetch_array($r); // 返回信息

            echo json_encode($row);//用json类型返回数据给back-stage.php里的ajax

            mysql_close($dbc); // 关闭连接
        }
    }
?>