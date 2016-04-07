<?php  //“百家”内容显示在后台的脚本

	//包含数据库连接。
	include('../../mysql_connect.php');

	//定义查询：
	$query = 'SELECT content_id, displaytype, title, add_time FROM baijia ORDER BY add_time DESC';

	//运行查询：
	if ($r = mysql_query($query, $dbc)) {

		// 返回查询结果：
		while ($row = mysql_fetch_array($r)) {

			// 打印查询结果
			if ($row['displaytype'] == 1) {
				$distype = '三图';
			} elseif ($row['displaytype'] == 2) {
				$distype = '单图';
			} else {
				$distype = '纯字';
			}
			print "<tr>
					   <td>{$row['content_id']}</td>
					   <td>{$distype}</td>
					   <td>{$row['title']}</td>
					   <td>{$row['add_time']}</td>
					   <td>
					   	  <button class=\"btn btn-info btn-xs\">编辑</button>
					   	  <button class=\"btn btn-warning btn-xs\">删除</button>
					   </td>
					</tr>";
		} //结束循环
	} else { //没有运行查询
		print '<p class="error">Could not retrieve the data because:<br/>'.mysql_error($dbc).'.</p><p>The query being run was:'.$query.'</p>';
	} // 结束查询条件语句

	mysql_close($dbc); // 关闭连接
?>
