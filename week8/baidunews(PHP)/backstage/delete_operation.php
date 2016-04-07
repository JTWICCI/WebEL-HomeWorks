<?php
// 点击“删除”按钮后删除数据库数据并返回结果的php脚本
header("Content-type:application/json;charset=utf-8");
    // 检查表单是否提交：
	if ($_SERVER['REQUEST_METHOD'] == 'POST') { // 处理表单
        // 根据相应的页面选择相应的数据表（声明变量存放数据表名）
        $tablename = $_POST["pgname"];
        //包含数据库连接。
        include('../mysql_connect.php');

        // 定义查询：
        $query = "DELETE FROM $tablename WHERE content_id={$_POST['contid']} LIMIT 1";
		$r = mysql_query($query, $dbc); //执行查询

        if (mysql_affected_rows($dbc) == 1) {
			// 将错误码设为0（无错误）：
			$error_code = "0";
			$error_arr = array("error_code" => $error_code);
			echo json_encode($error_arr);
		} else {
			// 打印错误消息：
			$error_code = 1;
			$error_msg = '<p>数据执行错误，因为:<br/>'.mysql_error($dbc).'.</p><p>The query being run was:'.$query.'</p>';
			$error_arr = array('error_code' => $error_code, 'error_msg' => $error_msg);
			echo json_encode($error_arr);
		}
    }
?>