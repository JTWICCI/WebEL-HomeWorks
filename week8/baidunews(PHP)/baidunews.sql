-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-03-17 11:14:00
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `baijia`
--

CREATE TABLE `baijia` (
  `content_id` int(10) UNSIGNED NOT NULL,
  `displaytype` tinyint(1) UNSIGNED NOT NULL,
  `tagtype` tinyint(1) UNSIGNED NOT NULL,
  `tagtext` varchar(100) NOT NULL,
  `image1_src` text NOT NULL,
  `image2_src` text NOT NULL,
  `image3_src` text NOT NULL,
  `title` text NOT NULL,
  `discribe` text NOT NULL,
  `href` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `baijia`
--

INSERT INTO `baijia` (`content_id`, `displaytype`, `tagtype`, `tagtext`, `image1_src`, `image2_src`, `image3_src`, `title`, `discribe`, `href`, `add_time`) VALUES
(1, 2, 1, '三星手机', 'img/feed_index_37.jpg', '', '', '寄希望于运营商？三星手机重新占领中国市场很困难！', '三星手机，应该先知道它近年来为什么会在中国市场屡战屡败。', 'http://jiangbojing.baijia.baidu.com/article/352367', '2016-03-17 07:45:35'),
(2, 2, 1, 'LOL', 'img/feed_index_36.jpg', '', '', '双害相全取其轻 直播平台接受英雄联盟公约的逻辑', '为什么这么多直播平台会加入这个直播公约。', 'http://dingpeng.baijia.baidu.com/article/352191', '2016-03-17 07:47:19'),
(3, 2, 1, '产品经理', 'img/feed_index_35.jpg', '', '', '作为产品经理，你的核心技能是什么？', '产品经理第三项核心技能就是以上这些，推动者、合作桥梁、组织润滑剂。', 'http://woshipm.baijia.baidu.com/article/351668', '2016-03-17 07:48:02'),
(4, 1, 1, 'P2P', 'img/feed_index_34_a.jpg', 'img/feed_index_34_b.jpg', 'img/feed_index_34_c.jpg', '银行系P2P是转型还是要彻底退出？', '', 'http://yufenghui.baijia.baidu.com/article/352377', '2016-03-17 07:49:08'),
(5, 2, 1, '搜索引擎', 'img/feed_index_33.jpg', '', '', '人机世纪大战为何会引爆传播？', '这一次人机世纪大战之所以会引发如此大的传播度，这其中绝对少不了众多科技公司在暗中使劲。', 'http://lidonglou.baijia.baidu.com/article/352376', '2016-03-17 07:49:52'),
(6, 2, 1, '朋友圈', 'img/feed_index_32.jpg', '', '', '人机世纪大战 不懂围棋如何在朋友圈装逼？', '因为根据公开资料，我国的围棋人口也才1000万多点，平均下来100个人里不到1个人会下围棋。', 'http://niubsir.baijia.baidu.com/article/352381', '2016-03-17 07:50:33'),
(7, 3, 1, '数码', '', '', '', '从人机大赛中看摩尔定律失效后计算机世界如何发展', '在这一年的十一月份，英特尔发布了世界上首个商业微处理器芯片——4004，包含2300个微晶体管...', 'http://synchuman.baijia.baidu.com/article/352401', '2016-03-17 07:51:43'),
(8, 2, 1, 'BATM', 'img/feed_index_31.jpg', '', '', '企业微信给用户带来的是社交减负还会是社交焦虑？', '腾讯公布将了即将发布“企业微信”APP的消息，并邀请了部分企业进行内测。', 'http://wangxinxi.baijia.baidu.com/article/352575', '2016-03-17 07:52:25'),
(9, 2, 1, '谷歌', 'img/feed_index_30.jpg', '', '', 'AlphaGo：人类棋手被吊打而不自知', '万众瞩目的人机大战已经完成两回合，机器超出大多数人的想象获胜了，而且是大胜，棋坛震动。', 'http://wangxiaochuan.baijia.baidu.com/article/352695', '2016-03-17 07:53:08'),
(10, 2, 1, '阿里巴巴', 'img/feed_index_29.jpg', '', '', '顺丰上市：快递之王卫冕之战', '一向声称不缺钱的顺丰创始人王卫，突然出手将顺丰推向国内的资本市场。', 'http://xiepeng.baijia.baidu.com/article/352734', '2016-03-17 07:53:47'),
(11, 3, 1, '自媒体', '', '', '', '自媒体人频遭巨额起诉，个人写作的边界在哪？', '2015年可以说是自媒体蓬勃发展的一年，差不多大街上碰到一个人就全家都是自媒体了。', 'http://zongning.baijia.baidu.com/article/352782', '2016-03-17 07:54:23'),
(12, 1, 0, '', 'img/feed_index_28_a.jpg', 'img/feed_index_28_b.jpg', 'img/feed_index_28_c.jpg', '市场没规矩？近30支女团混战，《超级女声》也凑热闹', '', 'http://musicbusiness.baijia.baidu.com/article/353188', '2016-03-17 07:55:20'),
(13, 1, 1, '社交', 'img/feed_index_27_a.jpg', 'img/feed_index_27_b.jpg', 'img/feed_index_27_c.jpg', '音乐节VR直播来了，视频直播鼻祖Meerkat却被迫退出', '', 'http://musicbusiness.baijia.baidu.com/article/353206', '2016-03-17 07:56:04'),
(14, 2, 1, '阿尔法', 'img/feed_index_26.jpg', '', '', '阿尔法完胜，人类怎么办？', '我们都知道人工智能迟早赶上人类，只是不愿意也没有料到超越来的怎么快，以致还来不及做好防止下一步...', 'http://linhua.baijia.baidu.com/article/353217', '2016-03-17 07:56:40'),
(15, 2, 1, '房价', 'img/feed_index_25.jpg', '', '', '央行围剿P2P首付贷对房价影响几何？', '买房人的首付不能是借的。', 'http://yufenghui.baijia.baidu.com/article/353349', '2016-03-17 07:57:18'),
(16, 1, 1, 'O2O', 'img/feed_index_24_a.jpg', 'img/feed_index_24_b.jpg', 'img/feed_index_24_c.jpg', '女性消费行为调查：女生们的钱都去哪儿了？', '', 'http://yulejiashiyanshi.baijia.baidu.com/article/353372', '2016-03-17 07:58:15'),
(17, 1, 1, '华谊', 'img/feed_index_23_a.jpg', 'img/feed_index_23_b.jpg', 'img/feed_index_23_c.jpg', 'VR可能颠覆影视娱乐产业吗？华策华谊掀起VR并购潮', '', 'http://yulezibenlun.baijia.baidu.com/article/353431', '2016-03-17 07:58:54'),
(18, 1, 1, 'P2P', 'img/feed_index_22_a.jpg', 'img/feed_index_22_b.jpg', 'img/feed_index_22_c.jpg', '创业是红海好还是蓝海好，从创新扩散理论解读', '', 'http://gupowang.baijia.baidu.com/article/353474', '2016-03-17 07:59:35'),
(19, 1, 1, '创业', 'img/feed_index_21_a.jpg', 'img/feed_index_21_b.jpg', 'img/feed_index_21_c.jpg', '最近美国创投圈热文: 计算产业的下一步将走向何方？', '', 'http://yanglinhua.baijia.baidu.com/article/353490', '2016-03-17 08:00:10'),
(20, 2, 1, '中兴', 'img/feed_index_20.jpg', '', '', '美国商务部制裁中兴通讯事件的客观评价与应对建议', '客观评价“美国商务部制裁中兴通讯”这一事件，从性质而言，中兴通讯被制裁是其违反商业准则的行为所...', 'http://laoxie.baijia.baidu.com/article/353704', '2016-03-17 08:01:17');

-- --------------------------------------------------------

--
-- 表的结构 `tuijian`
--

CREATE TABLE `tuijian` (
  `content_id` int(10) UNSIGNED NOT NULL,
  `displaytype` tinyint(1) UNSIGNED NOT NULL,
  `tagtype` tinyint(1) UNSIGNED NOT NULL,
  `tagtext` varchar(100) NOT NULL,
  `image1_src` text NOT NULL,
  `image2_src` text NOT NULL,
  `image3_src` text NOT NULL,
  `title` text NOT NULL,
  `discribe` text NOT NULL,
  `href` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tuijian`
--

INSERT INTO `tuijian` (`content_id`, `displaytype`, `tagtype`, `tagtext`, `image1_src`, `image2_src`, `image3_src`, `title`, `discribe`, `href`, `add_time`) VALUES
(1, 2, 0, '', 'img/feed_index_19.jpg', '', '', '政策组合拳发力拓展消费新空间', '从今年的政府工作报告中可以看出，消费成为当前经济工作中谋篇布局的重点。', 'http://epaper.gansudaily.com.cn/gsrb/html/2016-03/13/content_308067.htm', '2016-03-17 08:03:12'),
(2, 2, 0, '', 'img/feed_index_18.jpg', '', '', '过高政策预期引大宗商品集体暴动 反弹还是反转', '过高政策预期引“黑金”集体暴动。', 'http://sinanews.sina.cn/sharenews.shtml?id=fxqhmve9127050-comos-finance-cms&amp;fromsinago=1&amp;page_start=1&amp;page_end=100', '2016-03-17 08:03:55'),
(3, 3, 1, '热点', '', '', '', '周强：保持反腐败高压态势 促进反腐败斗争深入开展', '加强重大职务犯罪案件审判工作，促进反腐败斗争深入开展。', 'http://m.cankaoxiaoxi.com/baidunews-eco/china/20160313/1098875.shtml', '2016-03-17 08:05:02'),
(4, 3, 1, '热点', '', '', '', '岁陈慧娴感情触礁“意中人”邝祖德发长文回应', '陈慧娴早前在演唱会上自曝遇上意中人，称爱上一个有男朋友的男人，之后盛传慧娴“意中人”是歌手邝祖德。', 'http://m.cankaoxiaoxi.com/baidunews-eco/ent/20160313/1098907.shtml', '2016-03-17 08:05:37'),
(5, 2, 0, '', 'img/feed_index_17.jpg', '', '', '野蛮人耗资1798亿举牌86股 6成举牌不幸被套', '熊市挡不住“野蛮人”进击的脚步，自去年6月30日以来，A股累计已经有149次举牌行为，涉及到8...', 'http://sinanews.sina.cn/sharenews.shtml?id=fxqhmvc2381538-comos-finance-cms&amp;fromsinago=1&amp;page_start=1&amp;page_end=100', '2016-03-17 08:06:09'),
(6, 2, 1, '推广', 'img/feed_index_16.jpg', '', '', '等了18年，这包终于降价了 限时1折', '限量500只，抢到就是赚到', 'www.jd.com', '2016-03-17 08:06:58'),
(7, 2, 0, '', 'img/feed_index_15.jpg', '', '', '金融界部分代表委员应邀接受本报集体采访', '代表委员们以畅想“十三五”为主题，共议创新发展，为推进供给侧结构性改革、促进经济平稳健康发展建...', 'http://www.financialnews.com.cn/yw/jryw/201603/t20160313_93875.html', '2016-03-17 08:07:27'),
(8, 2, 0, '', 'img/feed_index_14.jpg', '', '', '北京简化保障房申请手续 取消纳税等5项材料', '经过此次简化，保障房申请家庭在提出申请时，申请证明材料由以前的18项，简化为12项。', 'http://sinanews.sina.cn/sharenews.shtml?id=fxqhnev5878110-comos-finance-cms&amp;fromsinago=1&amp;page_start=1&amp;page_end=100', '2016-03-17 08:07:58'),
(9, 1, 0, '', 'img/feed_index_13_a.jpg', 'img/feed_index_13_b.jpg', 'img/feed_index_13_c.jpg', '外媒称周小川给市场吃“定心丸”：有能力稳增长', '', 'http://www.cankaoxiaoxi.com/finance/20160313/1098938.shtml', '2016-03-17 08:08:41'),
(10, 3, 1, '网易头条', '', '', '', '周强:法官在职责范围内对案件质量终身负责', '相关试点法院审判质效明显提升，上海法院法官人均结案187件，贵州试点法院法官人均结案数量同比增...', 'http://news.163.com/16/0313/09/BI1EKPOE0001124J.html', '2016-03-17 08:09:39'),
(11, 2, 1, '网易要闻', 'img/feed_index_17.jpg', '', '', '曹建明:建成远程视频接访系统', '建成全国四级检察机关全联通的远程视频接访系统，实现跨越千里的“面对面”接访。', 'http://news.163.com/16/0313/10/BI1H5C3F0001124J.html', '2016-03-17 08:13:34'),
(12, 2, 0, '', 'img/feed_index_11.jpg', '', '', '国企深化改革是“去产能”的关键环节', '国企改革是“去产能”的难点，也是关键。', 'http://opinion.china.com.cn/opinion_48_145348.html', '2016-03-17 08:14:04'),
(13, 2, 0, '', 'img/feed_index_10.jpg', '', '', '稳定粮食产能 发展现代农业', '2015年我国科技进步对农业贡献率超过50％，这说明科技已经成为农业发展的主要引擎，未来科技兴...', 'http://cqrbepaper.cqnews.net/cqrb/html/2016-03/13/content_1898574.htm', '2016-03-17 08:14:44'),
(14, 2, 0, '', 'img/feed_index_9.jpg', '', '', '中国一线城市生活成本全球排名跳升 "漂泊族"吐槽租金压力大', '“漂”在一线城市，生活成本很大一部分来自高昂的租房费用，租金占到月工资三分之一甚至更多。', 'http://ku.m.chinanews.com/wapapp/baidu/cj/2016/03-13/7795163.shtml', '2016-03-17 08:15:20'),
(15, 2, 0, '', 'img/feed_index_8.jpg', '', '', '国资委回应“央企成年报亏损重灾区”：将加大重组力度', '央企控股的上市公司的亏损主要是在煤炭、钢铁、有色这些产能严重过剩的行业，企业亏损和行业有关，同...', 'http://www.yicai.com/news/2016/03/4760868.html', '2016-03-17 08:15:50'),
(16, 2, 1, '搜狐头条', 'img/feed_index_7.jpg', '', '', '社论:最高检报告强化检察监督 倒逼法治蝶变', '此次最高检报告两次提到羁押必要性审查的重要，这与此前最高检出台的专门性文件遥相呼应。', 'http://3g.k.sohu.com/t/n121645444', '2016-03-17 08:16:26'),
(17, 2, 1, '腾讯要闻', 'img/feed_index_6.jpg', '', '', '数读2016两会最高检报告', '1.1390933人、全国检察机关共批准逮捕各类刑事犯罪嫌疑人873148人，提起公诉1390...', 'http://view.inews.qq.com/a/NEW2016031302293305', '2016-03-17 08:16:53'),
(18, 2, 0, '', 'img/feed_index_5.jpg', '', '', '两会上演超级星期六 五部长联手为经济“排雷”(图)', '银监会将防患于未然，力排“信用风险、交叉金融产品风险、流动性风险、外部风险”四颗地雷。', 'http://business.sohu.com/20160313/n440230837.shtml', '2016-03-17 08:17:15'),
(19, 2, 0, '', 'img/feed_index_4.jpg', '', '', '激发内生动力 深化国企改革', '肖亚庆表示，国企改革中一些重点难点问题也取得了初步进展，央企积极探索开展了多层次的试点。', 'http://paper.ce.cn/jjrb/html/2016-03/13/content_295532.htm', '2016-03-17 08:17:39'),
(20, 1, 0, '', 'img/feed_index_3_a.jpg', 'img/feed_index_3_b.jpg', 'img/feed_index_3_c.jpg', '徐佳莹歌手4垫底 金志文踢馆略显尴尬', '', 'http://fun.youth.cn/2016/0313/4022605.shtml', '2016-03-17 08:18:09'),
(21, 2, 1, '置顶', 'img/feed_index_2.jpg', '', '', '正直播：人机大战第四场 李世石为荣誉而战', '谷歌围棋开发者回应：这次比赛没有所谓的不能“打劫”的保密协议。', 'http://news.baidu.com/n?cmd=2&amp;class=detail&amp;article_id=1457755196423', '2016-03-17 08:19:16'),
(22, 2, 1, '置顶', 'img/feed_index_1.jpg', '', '', '习近平两会为这五种人“撑腰”', '习近平两会为这五种人“撑腰”', 'http://view.inews.qq.com/a/NEW201603010183599T', '2016-03-17 08:19:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baijia`
--
ALTER TABLE `baijia`
  ADD PRIMARY KEY (`content_id`);

--
-- Indexes for table `tuijian`
--
ALTER TABLE `tuijian`
  ADD PRIMARY KEY (`content_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `baijia`
--
ALTER TABLE `baijia`
  MODIFY `content_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- 使用表AUTO_INCREMENT `tuijian`
--
ALTER TABLE `tuijian`
  MODIFY `content_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
