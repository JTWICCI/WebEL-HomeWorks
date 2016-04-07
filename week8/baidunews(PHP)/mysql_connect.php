<?php 
/* 脚本连接到服务器并选中数据库 */
$host = 'localhost';
$user = 'root';
$pass = '';
// 连接：
$dbc = mysql_connect($host,$user,$pass);

// 设置编码为utf8
mysql_query("set names 'utf8'");  
mysql_query("set character_set_client=utf8");  
mysql_query("set character_set_results=utf8"); 

// 选中：
mysql_select_db('baidunews', $dbc);
?>