<?php
//“推荐”和“百家”内容数据增删改查脚本（改变数据库的数据）
//显示除去 E_NOTICE 和 E_DEPRECATED 之外的所有错误信息 
error_reporting(E_ALL^E_NOTICE^E_DEPRECATED);	

header("Content-type:application/json;charset=utf-8");

	// 检查表单是否提交：
	if ($_SERVER['REQUEST_METHOD'] == 'POST') { // 处理表单

		if (!empty('REQUEST_METHOD') && !empty($_POST['title'])) {

			//获得要操作的数据表名

			//包含数据库连接。
			include('../mysql_connect.php');

			//准备查询中使用的值：
			$displaytype = mysql_real_escape_string(trim(strip_tags($_POST['displaytype'])),$dbc);
			$tagtype = mysql_real_escape_string(trim(strip_tags($_POST['tagtype'])),$dbc);
			$tagtext = mysql_real_escape_string(trim(strip_tags($_POST['tagtext'])),$dbc);
			$image1_src = mysql_real_escape_string(trim(strip_tags($_POST['image1_src'])),$dbc);
			$image2_src = mysql_real_escape_string(trim(strip_tags($_POST['image2_src'])),$dbc);
			$image3_src = mysql_real_escape_string(trim(strip_tags($_POST['image3_src'])),$dbc);
			$title = mysql_real_escape_string(trim(strip_tags($_POST['title'])),$dbc);
			$discribe = mysql_real_escape_string(trim(strip_tags($_POST['discribe'])),$dbc);
			$href = mysql_real_escape_string(trim(strip_tags($_POST['href'])),$dbc);

			
			//根据actype的值("增、删、改")做相应处理
			$actype = mysql_real_escape_string(trim(strip_tags($_POST['actype'])),$dbc);
			//获得要操作的数据表名
			$tablename = mysql_real_escape_string(trim(strip_tags($_POST['pgname'])),$dbc);

			switch ($actype) {
				case "add":
					$query = "INSERT INTO $tablename (displaytype, tagtype, tagtext, image1_src, image2_src, image3_src, title, discribe, href) VALUES ('$displaytype','$tagtype','$tagtext','$image1_src','$image2_src','$image3_src','$title','$discribe','$href')";
					$r = mysql_query($query, $dbc);
					break;
				case "edit":
					// 定义查询
					$query = "UPDATE $tablename SET displaytype='$displaytype', tagtype='$tagtype', tagtext=
					'$tagtext', image1_src='$image1_src', image2_src='$image2_src', image3_src='$image3_src', title='$title', discribe='$discribe', href='$href' WHERE content_id={$_POST['contid']}";
					$r = mysql_query($query, $dbc);
					break;
				// case "delete":
				// 	break;
			}


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

			// 关闭连接：
			mysql_close($dbc);

		} else { // 数据提交不全
			$error_code = 1;
			$error_msg = '<p>提交数据不全,标题必填！</p>';
			$error_arr = array('error_code' => $error_code, 'error_msg' => $error_msg);
			echo json_encode($error_arr);
		}

	} // 结束提交条件语句
?>