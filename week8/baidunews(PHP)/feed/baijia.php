<?php
//“百家”内容显示在手机页面的脚本
	$limit = $_POST['limit'];
	//包含数据库连接。
	include('../mysql_connect.php');

	//定义查询：
	$query = "SELECT displaytype, tagtype, tagtext, image1_src, image2_src, image3_src, title, discribe, href, add_time FROM baijia ORDER BY add_time DESC limit 0, $limit";

	//运行查询：
	if ($r = mysql_query($query, $dbc)) {

		// 返回查询结果：
		while ($row = mysql_fetch_array($r)) {
			print "<div class=\"index-list-item\" data-src=\"{$row['href']}\" data-title=\"{$row['title']}\" data-time=\"{$row['add_time']}\" data-displaytype=\"{$row['displaytype']}\">";
			// 打印查询结果
			if ($row['displaytype'] == 1) { // 三图
				print "<div class=\"index-list-main\">
					   	   <div class=\"index-list-main-text\">
						   	   <div class=\"index-list-main-title\">{$row['title']}</div>
						   </div>
						   <div class=\"index-list-album-container\">
					           <div class=\"index-list-album\">
					               <div class=\"index-list-album-wrapper one\">
					                   <img src=\"{$row['image1_src']}\">
					               </div>
					           </div>
					           <div class=\"index-list-album\">
					               <div class=\"index-list-album-wrapper two\">
					                   <img src=\"{$row['image2_src']}\">
					               </div>
					           </div>
					           <div class=\"index-list-album\">
					               <div class=\"index-list-album-wrapper three\">
					                   <img src=\"{$row['image3_src']}\">
					               </div>
					           </div>
					       </div>";
			} elseif ($row['displaytype'] == 2) { // 单图
				print "<div class=\"index-list-main showleft\">
					       <div class=\"index-list-image\">
					           <img src=\"{$row['image1_src']}\">
					       </div>
					       <div class=\"index-list-main-text\">
			           		   <div class=\"index-list-main-title\">{$row['title']}</div>";
			    if (!empty($row['discribe'])){
			    	print "	   <div class=\"index-list-main-abs\">{$row['discribe']}</div>";
			    }
			    print "    </div>";
			} else {	// 纯文字
				print "<div class=\"index-list-main  moretext\">
				           <div class=\"index-list-main-text\">
				               <div class=\"index-list-main-title\">{$row['title']}</div>";
				if (!empty($row['discribe'])){
			    	print "	   <div class=\"index-list-main-abs\">{$row['discribe']}</div>";
			    }
			    print "
			       </div>";
			}
			print "		   <div class=\"index-list-bottom\">
        					   <div class=\"index-list-main-time\">";
        	if (!empty($row['tagtype'])){
        		print "			   <b class=\"tip-tag tip-strokeblue\">{$row['tagtext']}</b>";
        	}
            print "			   	   <b class=\"tip-time\">{$row['add_time']}</b>
        					   </div>
    					   </div>
					   </div>
				   </div>";

		} //结束循环
	} else { //没有运行查询
		print '<p class="error">Could not retrieve the data because:<br/>'.mysql_error($dbc).'.</p><p>The query being run was:'.$query.'</p>';
	} // 结束查询条件语句

	mysql_close($dbc); // 关闭连接
?>