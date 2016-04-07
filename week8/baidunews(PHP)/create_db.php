<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Create Database</title>
</head>
<body>
	<?php 
	/* 脚本连接到MySQL服务器 */
	
	// 尝试连接到MySQL并打印消息：
	if ($dbc = mysql_connect('localhost','root','')) {

		print '<p>成功连接到 MySQL!</p>';

		//尝试创建数据库
		if (@mysql_query('CREATE DATABASE baidunews DEFAULT CHARACTER SET utf8', $dbc)) {
			print '<p>成功创建数据库!</p>';
		} else { //无法创建数据库
			print '<p style="color: red;">不能创建数据库，因为:<br/>'.mysql_error($dbc).'.</p>';
		}

		//尝试选中数据库
		if (@mysql_selectdb('baidunews', $dbc)) {
			print '<p>数据库已选中!</p>';

			// 定义查询（创建表）：
			$query = 'CREATE TABLE tuijian (
		content_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		displaytype TINYINT(1) UNSIGNED NOT NULL,
		tagtype TINYINT(1) UNSIGNED NOT NULL,
		tagtext VARCHAR(100) NOT NULL,
		image1_src TEXT NOT NULL,
		image2_src TEXT NOT NULL,
		image3_src TEXT NOT NULL,
		title TEXT NOT NULL,
		discribe TEXT NOT NULL,
		href TEXT NOT NULL,
		add_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
		PRIMARY KEY (content_id)
		)';


			// 执行查询：
			if (@mysql_query($query, $dbc)) {
				print '<p>成功创建表!</p>';
				//说明创建表没问题，再创建三个：
				mysql_query('CREATE TABLE baijia (
			content_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
			displaytype TINYINT(1) UNSIGNED NOT NULL,
			tagtype TINYINT(1) UNSIGNED NOT NULL,
			tagtext VARCHAR(100) NOT NULL,
			image1_src TEXT NOT NULL,
			image2_src TEXT NOT NULL,
			image3_src TEXT NOT NULL,
			title TEXT NOT NULL,
			discribe TEXT NOT NULL,
			href TEXT NOT NULL,
			add_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (content_id)
			)');
			} else {
				print '<p style="color: red;"> 不能创建表因为:<br/>'.mysql_error($dbc).'.</p> <p>The query being run was:'.$query.'</p>';
			}
		} else {
			print '<p style="color: red;">不能连接到 MySQL:<br/>'.mysql_error().'.</p>';
		}

		mysql_close($dbc); //关闭连接

	} else {

		print '<p style="color: red;">不能连接到 MySQL:<br/>'.mysql_error().'</p>';

	}

	?>
	
</body>
</html>