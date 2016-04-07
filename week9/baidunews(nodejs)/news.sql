-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-03-27 16:16:50
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `gundong`
--

CREATE TABLE `gundong` (
  `id` int(10) UNSIGNED NOT NULL,
  `content_id` tinyint(2) UNSIGNED NOT NULL,
  `title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `gundong`
--

INSERT INTO `gundong` (`id`, `content_id`, `title`) VALUES
(1, 1, '新版iPhone'),
(2, 1, '免费阅读图文教程 送Kindle'),
(3, 1, '围棋人机大战'),
(4, 1, '贩卖碎片时间，轻松月入5000'),
(5, 1, 'AlphaGo 李世石'),
(6, 1, '精品系列课程限免中！不要错过！'),
(7, 1, '中国直男癌'),
(8, 1, '疑似MH370残骸'),
(9, 1, '狂送 HTML5与CSS3权威指南'),
(10, 1, '全球游客最爱城市');

-- --------------------------------------------------------

--
-- 表的结构 `lunbo`
--

CREATE TABLE `lunbo` (
  `id` int(10) UNSIGNED NOT NULL,
  `content_id` tinyint(2) UNSIGNED NOT NULL,
  `image_src` text NOT NULL,
  `title` text NOT NULL,
  `href` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lunbo`
--

INSERT INTO `lunbo` (`id`, `content_id`, `image_src`, `title`, `href`) VALUES
(1, 1, 'img/1.png', '4个月成为 web/HTML5 工程师', 'www.jikexueyuan.com'),
(2, 1, 'img/2.png', 'Android 这么学 拿着滴滴offer毕业！', 'www.jikexueyuan.com'),
(3, 1, 'img/3.png', '4个月 成为iOS工程师 75%成功转行率！', 'www.jikexueyuan.com');

-- --------------------------------------------------------

--
-- 表的结构 `newsblock`
--

CREATE TABLE `newsblock` (
  `id` int(10) UNSIGNED NOT NULL,
  `content_id` tinyint(2) UNSIGNED NOT NULL,
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
-- 转存表中的数据 `newsblock`
--

INSERT INTO `newsblock` (`id`, `content_id`, `displaytype`, `tagtype`, `tagtext`, `image1_src`, `image2_src`, `image3_src`, `title`, `discribe`, `href`, `add_time`) VALUES
(1, 1, 2, 0, '', 'img/feed_index_19.jpg', '', '', '政策组合拳发力拓展消费新空间', '从今年的政府工作报告中可以看出，消费成为当前经济工作中谋篇布局的重点。', 'img/feed_index_19.jpg', '2016-03-23 21:06:50'),
(2, 1, 2, 1, '置顶', 'img/feed_index_18.jpg', '', '', '过高政策预期引大宗商品集体暴动 反弹还是反转', '过高政策预期引“黑金”集体暴动。', 'www.baidu.com', '2016-03-23 21:07:21'),
(3, 1, 3, 1, '热点', '', '', '', '周强：保持反腐败高压态势 促进反腐败斗争深入开展', '加强重大职务犯罪案件审判工作，促进反腐败斗争深入开展。', 'www.baidu.com', '2016-03-23 21:08:00'),
(4, 1, 3, 1, '热点', '', '', '', '岁陈慧娴感情触礁“意中人”邝祖德发长文回应', '陈慧娴早前在演唱会上自曝遇上意中人，称爱上一个有男朋友的男人，之后盛传慧娴“意中人”是歌手邝祖德。', 'http://m.cankaoxiaoxi.com/baidunews-eco/ent/20160313/1098907.shtml', '2016-03-23 21:09:10'),
(5, 1, 2, 0, '', 'img/feed_index_17.jpg', '', '', '野蛮人耗资1798亿举牌86股 6成举牌不幸被套', '熊市挡不住“野蛮人”进击的脚步，自去年6月30日以来，A股累计已经有149次举牌行为，涉及到8...', 'http://sinanews.sina.cn/sharenews.shtml?id=fxqhmvc2381538-comos-finance-cms&amp;fromsinago=1&amp;page_start=1&amp;page_end=100', '2016-03-23 21:10:02'),
(6, 1, 2, 1, '推广', 'img/feed_index_16.jpg', '', '', '等了18年，这包终于降价了 限时1折', '限量500只，抢到就是赚到', 'www.jd.com', '2016-03-23 21:10:50'),
(7, 1, 2, 0, '', 'img/feed_index_15.jpg', '', '', '金融界部分代表委员应邀接受本报集体采访', '代表委员们以畅想“十三五”为主题，共议创新发展，为推进供给侧结构性改革、促进经济平稳健康发展建...', 'http://www.financialnews.com.cn/yw/jryw/201603/t20160313_93875.html', '2016-03-23 21:11:34'),
(8, 1, 2, 0, '', 'img/feed_index_14.jpg', '', '', '北京简化保障房申请手续 取消纳税等5项材料', '经过此次简化，保障房申请家庭在提出申请时，申请证明材料由以前的18项，简化为12项。', 'www.baidu.com', '2016-03-23 21:12:12'),
(9, 1, 1, 0, '', 'img/feed_index_13_a.jpg', 'img/feed_index_13_b.jpg', 'img/feed_index_13_c.jpg', '外媒称周小川给市场吃“定心丸”：有能力稳增长', '', 'www.baidu.com', '2016-03-23 21:13:38'),
(10, 1, 3, 1, '网易头条', '', '', '', '周强:法官在职责范围内对案件质量终身负责', '相关试点法院审判质效明显提升，上海法院法官人均结案187件，贵州试点法院法官人均结案数量同比增...', 'http://news.163.com/16/0313/09/BI1EKPOE0001124J.html', '2016-03-23 21:15:36'),
(11, 1, 2, 1, '网易要闻', 'img/feed_index_17.jpg', '', '', '曹建明:建成远程视频接访系统', '建成全国四级检察机关全联通的远程视频接访系统，实现跨越千里的“面对面”接访。', 'http://news.163.com/16/0313/10/BI1H5C3F0001124J.html', '2016-03-23 21:16:47'),
(12, 1, 2, 0, '', 'img/feed_index_11.jpg', '', '', '国企深化改革是“去产能”的关键环节', '国企改革是“去产能”的难点，也是关键。', 'http://opinion.china.com.cn/opinion_48_145348.html', '2016-03-23 21:17:21'),
(13, 1, 2, 0, '', 'img/feed_index_10.jpg', '', '', '稳定粮食产能 发展现代农业', '2015年我国科技进步对农业贡献率超过50％，这说明科技已经成为农业发展的主要引擎，未来科技兴...', 'http://cqrbepaper.cqnews.net/cqrb/html/2016-03/13/content_1898574.htm', '2016-03-23 21:18:19'),
(14, 1, 2, 0, '', 'img/feed_index_9.jpg', '', '', '中国一线城市生活成本全球排名跳升 "漂泊族"吐槽租金压力大', '“漂”在一线城市，生活成本很大一部分来自高昂的租房费用，租金占到月工资三分之一甚至更多。', 'http://ku.m.chinanews.com/wapapp/baidu/cj/2016/03-13/7795163.shtml', '2016-03-23 21:18:41'),
(15, 1, 2, 0, '', 'img/feed_index_8.jpg', '', '', '国资委回应“央企成年报亏损重灾区”：将加大重组力度', '央企控股的上市公司的亏损主要是在煤炭、钢铁、有色这些产能严重过剩的行业，企业亏损和行业有关，同...', 'http://www.yicai.com/news/2016/03/4760868.html', '2016-03-23 21:19:40'),
(16, 1, 2, 1, '搜狐头条', 'img/feed_index_7.jpg', '', '', '社论:最高检报告强化检察监督 倒逼法治蝶变', '此次最高检报告两次提到羁押必要性审查的重要，这与此前最高检出台的专门性文件遥相呼应。', 'http://3g.k.sohu.com/t/n121645444', '2016-03-23 21:20:08'),
(17, 1, 2, 1, '腾讯要闻', 'img/feed_index_6.jpg', '', '', '数读2016两会最高检报告', '1.1390933人、全国检察机关共批准逮捕各类刑事犯罪嫌疑人873148人，提起公诉1390...', 'http://view.inews.qq.com/a/NEW2016031302293305', '2016-03-23 21:20:57'),
(18, 1, 2, 0, '', 'img/feed_index_5.jpg', '', '', '两会上演超级星期六 五部长联手为经济“排雷”(图)', '银监会将防患于未然，力排“信用风险、交叉金融产品风险、流动性风险、外部风险”四颗地雷。', 'http://business.sohu.com/20160313/n440230837.shtml', '2016-03-23 21:21:25'),
(19, 1, 2, 0, '', 'img/feed_index_4.jpg', '', '', '激发内生动力 深化国企改革', '肖亚庆表示，国企改革中一些重点难点问题也取得了初步进展，央企积极探索开展了多层次的试点。', 'www.baidu.com', '2016-03-23 21:22:04'),
(20, 1, 1, 0, '', 'img/feed_index_3_a.jpg', 'img/feed_index_3_b.jpg', 'img/feed_index_3_c.jpg', '徐佳莹歌手4垫底 金志文踢馆略显尴尬', '', 'http://fun.youth.cn/2016/0313/4022605.shtml', '2016-03-23 21:23:02'),
(21, 1, 2, 1, '置顶', 'img/feed_index_2.jpg', '', '', '正直播：人机大战第四场 李世石为荣誉而战', '谷歌围棋开发者回应：这次比赛没有所谓的不能“打劫”的保密协议。', 'www.google.com', '2016-03-23 21:23:40'),
(22, 2, 2, 1, '三星手机', 'img/feed_index_37.jpg', '', '', '寄希望于运营商？三星手机重新占领中国市场很困难！', '三星手机，应该先知道它近年来为什么会在中国市场屡战屡败。', 'http://jiangbojing.baijia.baidu.com/article/352367', '2016-03-23 21:28:13'),
(23, 2, 2, 1, 'LOL', 'img/feed_index_36.jpg', '', '', '双害相全取其轻 直播平台接受英雄联盟公约的逻辑', '为什么这么多直播平台会加入这个直播公约。', 'http://dingpeng.baijia.baidu.com/article/352191', '2016-03-23 21:28:45'),
(24, 2, 2, 1, '产品经理', 'img/feed_index_35.jpg', '', '', '作为产品经理，你的核心技能是什么？', '产品经理第三项核心技能就是以上这些，推动者、合作桥梁、组织润滑剂。', 'http://woshipm.baijia.baidu.com/article/351668', '2016-03-23 21:29:48'),
(25, 2, 1, 1, 'P2P', 'img/feed_index_34_a.jpg', 'img/feed_index_34_b.jpg', 'img/feed_index_34_c.jpg', '银行系P2P是转型还是要彻底退出？', '', 'http://yufenghui.baijia.baidu.com/article/352377', '2016-03-23 21:31:02'),
(26, 2, 2, 1, '搜索引擎', 'img/feed_index_33.jpg', '', '', '人机世纪大战为何会引爆传播？', '这一次人机世纪大战之所以会引发如此大的传播度，这其中绝对少不了众多科技公司在暗中使劲。', 'http://lidonglou.baijia.baidu.com/article/352376', '2016-03-23 21:31:47'),
(27, 2, 2, 1, '朋友圈', 'img/feed_index_32.jpg', '', '', '人机世纪大战 不懂围棋如何在朋友圈装逼？', '因为根据公开资料，我国的围棋人口也才1000万多点，平均下来100个人里不到1个人会下围棋。', 'http://niubsir.baijia.baidu.com/article/352381', '2016-03-23 21:32:24'),
(28, 2, 3, 1, '数码', '', '', '', '从人机大赛中看摩尔定律失效后计算机世界如何发展', '在这一年的十一月份，英特尔发布了世界上首个商业微处理器芯片——4004，包含2300个微晶体管...', 'http://synchuman.baijia.baidu.com/article/352401', '2016-03-23 21:33:01'),
(29, 2, 2, 1, 'BATM', 'img/feed_index_31.jpg', '', '', '企业微信给用户带来的是社交减负还会是社交焦虑？', '腾讯公布将了即将发布“企业微信”APP的消息，并邀请了部分企业进行内测。', 'http://wangxinxi.baijia.baidu.com/article/352575', '2016-03-23 21:33:31'),
(30, 2, 2, 1, '谷歌', 'img/feed_index_30.jpg', '', '', 'AlphaGo：人类棋手被吊打而不自知', '万众瞩目的人机大战已经完成两回合，机器超出大多数人的想象获胜了，而且是大胜，棋坛震动。', '万众瞩目的人机大战已经完成两回合，机器超出大多数人的想象获胜了，而且是大胜，棋坛震动。', '2016-03-23 21:33:57'),
(31, 2, 2, 1, '阿里巴巴', 'img/feed_index_29.jpg', '', '', '顺丰上市：快递之王卫冕之战', '一向声称不缺钱的顺丰创始人王卫，突然出手将顺丰推向国内的资本市场。', 'http://xiepeng.baijia.baidu.com/article/352734', '2016-03-23 21:34:22'),
(32, 2, 3, 1, '自媒体', '', '', '', '自媒体人频遭巨额起诉，个人写作的边界在哪？', '2015年可以说是自媒体蓬勃发展的一年，差不多大街上碰到一个人就全家都是自媒体了。', 'http://zongning.baijia.baidu.com/article/352782', '2016-03-23 21:35:24'),
(33, 2, 1, 0, '', 'img/feed_index_28_a.jpg', 'img/feed_index_28_b.jpg', 'img/feed_index_28_c.jpg', '市场没规矩？近30支女团混战，《超级女声》也凑热闹', '', 'http://musicbusiness.baijia.baidu.com/article/353188', '2016-03-23 21:36:05'),
(34, 2, 1, 1, '社交', 'img/feed_index_27_a.jpg', 'img/feed_index_27_b.jpg', 'img/feed_index_27_c.jpg', '音乐节VR直播来了，视频直播鼻祖Meerkat却被迫退出', '', '音乐节VR直播来了，视频直播鼻祖Meerkat却被迫退出', '2016-03-23 21:36:51'),
(35, 2, 2, 1, '阿尔法', 'img/feed_index_26.jpg', '', '', '阿尔法完胜，人类怎么办？', '我们都知道人工智能迟早赶上人类，只是不愿意也没有料到超越来的怎么快，以致还来不及做好防止下一步...', 'http://linhua.baijia.baidu.com/article/353217', '2016-03-23 21:37:22'),
(36, 2, 2, 1, '房价', 'img/feed_index_25.jpg', '', '', '央行围剿P2P首付贷对房价影响几何？', '买房人的首付不能是借的。', 'http://yufenghui.baijia.baidu.com/article/353349', '2016-03-23 21:39:16'),
(37, 2, 1, 1, 'O2O', 'img/feed_index_24_a.jpg', 'img/feed_index_24_b.jpg', 'img/feed_index_24_c.jpg', '女性消费行为调查：女生们的钱都去哪儿了？', '', '女性消费行为调查：女生们的钱都去哪儿了？', '2016-03-23 21:39:49'),
(38, 2, 1, 1, '华谊', 'img/feed_index_23_a.jpg', 'img/feed_index_23_b.jpg', 'img/feed_index_23_c.jpg', 'VR可能颠覆影视娱乐产业吗？华策华谊掀起VR并购潮', '', 'http://yulezibenlun.baijia.baidu.com/article/353431', '2016-03-23 21:40:32'),
(39, 2, 1, 1, 'P2P', 'img/feed_index_22_a.jpg', 'img/feed_index_22_b.jpg', 'img/feed_index_22_c.jpg', '创业是红海好还是蓝海好，从创新扩散理论解读', '', 'http://gupowang.baijia.baidu.com/article/353474', '2016-03-23 21:41:05'),
(40, 2, 1, 1, '创业', 'img/feed_index_21_a.jpg', 'img/feed_index_21_b.jpg', 'img/feed_index_21_c.jpg', '最近美国创投圈热文: 计算产业的下一步将走向何方？', '', 'http://yanglinhua.baijia.baidu.com/article/353490', '2016-03-23 21:41:32'),
(41, 2, 2, 1, '中兴', 'img/feed_index_20.jpg', '', '', '美国商务部制裁中兴通讯事件的客观评价与应对建议', '客观评价“美国商务部制裁中兴通讯”这一事件，从性质而言，中兴通讯被制裁是其违反商业准则的行为所...', 'http://laoxie.baijia.baidu.com/article/353704', '2016-03-23 21:42:03'),
(42, 3, 3, 0, '', '', '', '', '贾康：北京一楼盘每平从30万降到15万 只有富豪得好处', '财政部财政科学研究所原所长贾康表示，房地产市场要双轨统筹，一个是保障轨，一个是市场轨。', 'http://finance.eastmoney.com/news/1350,20160327608248095.html', '2016-03-27 05:49:49'),
(43, 3, 3, 0, '', '', '', '', '最高人民检察院常务副检察长胡泽君就检察改革答记者问', '记者近日采访了最高人民检察院党组副书记、常务副检察长胡泽君。', 'http://news.ifeng.com/a/20160327/48230641_0.shtml', '2016-03-27 05:50:46'),
(44, 3, 3, 0, '', '', '', '', '一次义务植树 为何来了150名省部级官员？ ', '全国绿化委员会办公室介绍，今年的“共和国部长义务植树”活动一切从简、厉行节约、注重实效。', 'http://finance.jrj.com.cn/2016/03/27090220743900.shtml', '2016-03-27 05:51:42'),
(45, 3, 3, 0, '', '', '', '', '北京严查房产中介“十宗罪”：禁止哄抬房价', '本市开展房地产经纪机构专项执法检查，重点检查擅自发布房源信息、违规群租、哄抬房价、阴阳合同、经...', 'http://www.qhnews.com/newscenter/system/2016/03/27/011965618.shtml', '2016-03-27 05:52:20'),
(46, 3, 3, 1, '别墅', '', '', '', '北京一别墅区员工监守自盗狂偷18家涉案600万', '北京昌平警方打掉一盗窃高档别墅的犯罪团伙，7名团伙成员落网，为群众挽回经济损失600余万元。', 'http://www.cnr.cn/lvyou/list/20160327/t20160327_521721480.shtml', '2016-03-27 05:53:19'),
(47, 3, 2, 1, '李晨', 'img/feed_index_38.jpg', '', '', '李晨任北京环保公益大使 穿西装挺拔帅气', '', 'http://ent.ce.cn/news/201603/27/t20160327_9844426.shtml', '2016-03-27 05:59:09'),
(48, 3, 2, 1, '汽车资讯', 'img/feed_index_39.jpg', '', '', '二手车新政落实 价格或略上涨', '今年5月取消限迁后，市民手里的二手车价格有望多卖出10%到20%，更多原本北京车主“懒得卖”、...', 'http://auto.163.com/16/0327/10/BJ5ISLQL00084TV1.html', '2016-03-27 06:05:17'),
(50, 3, 3, 0, '', '', '', '', '第七届北京双年展筹备启动', '以“记忆与梦想”为主题的第六届北京双年展在2015年秋天成功举办后，第七届北京双年展日前也正式...', 'http://epaper.ccdy.cn/html/2016-03/27/content_175729.htm', '2016-03-27 06:08:44'),
(51, 3, 3, 0, '', '', '', '', '北京二手房现交易降温 售楼小姐称客户明显少了', '业内人士认为，目前市场供需矛盾有所缓和，3月交易规模或将见顶，短期房价走势会趋于平稳。', 'http://news.cyol.com/content/2016-03/27/content_12345912.htm', '2016-03-27 06:10:04'),
(52, 3, 3, 0, '', '', '', '', '北京的棚改：一线城市如何发力', '600万套棚改任务，一半以上用货币化安置，住建部能在2016年实现这个目标吗。', 'http://bj.house.163.com/16/0327/11/BJ5NFOR700073SD3.html', '2016-03-27 06:10:49'),
(53, 3, 3, 1, '创投', '', '', '', '孵化器困境调查：骗补贴者投机者横行，微商滥竽充数', '反而能达到一个效果，对于有些人可能会有一些影响，但整个来说，泡沫过后整个国家和水平，就真的提升了。', 'http://news.ittime.com.cn/news/news_10675.shtml', '2016-03-27 06:12:48'),
(54, 3, 1, 1, '明朝', 'img/feed_index_40_a.jpg', 'img/feed_index_40_b.jpg', 'img/feed_index_40_c.jpg', '明代内官与西山诸寺', '', 'http://dajia.qq.com/original/category/zsy20160327.html', '2016-03-27 06:17:59'),
(55, 3, 1, 0, '', 'img/feed_index_41_a.jpg', 'img/feed_index_41_b.jpg', 'img/feed_index_41_c.jpg', '北京(首都)=日照=厦门 重庆=郑州=日照航线开通', '', 'http://rizhao.iqilu.com/rzyaowen/2016/0327/2732402.shtml', '2016-03-27 06:21:33'),
(56, 3, 3, 0, '', '', '', '', '北京体育特长生统测首用人脸识别技术', '与往年不同的是，此次考试首次启用了人脸识别技术，以验证考生身份。', 'http://roll.sohu.com/20160327/n442364919.shtml', '2016-03-27 06:22:11'),
(57, 3, 3, 0, '', '', '', '', '北京所有公墓不再新建传统墓碑', '今后，本市将不再新建传统墓碑，对于20年租用合同到期的墓穴，原则上不再以传统墓穴的形式续租，鼓...', 'http://roll.sohu.com/20160327/n442364798.shtml', '2016-03-27 06:22:58'),
(58, 3, 3, 1, '冰球', '', '', '', '北京青少年冰球联赛芳菲收官 历时6月经770场比赛', '770场比赛的北京市最大规模的青少年冰球联赛在三月末芳菲收官。', 'http://news.eastday.com/eastday/13news/auto/news/sports/20160327/u7ai5460393.html', '2016-03-27 06:23:59'),
(59, 3, 3, 0, '', '', '', '', '北京昌平未来科技城地下空间与地铁17号线同步建', '记者在昌平未来科技城看到，地铁17号线未来科技城段施工正在火热进行。', 'http://beijing.qianlong.com/2016/0327/487110.shtml', '2016-03-27 06:24:25'),
(62, 4, 2, 0, '', 'img/feed_index_42.jpg', '', '', '探访“月亮山区”里的“体操之乡”', '3月26日，在榕江县少年儿童业余体操运动学校内，小学员张志斌（右二）和同伴在进行体操训练。在贵...', 'http://www.cankaoxiaoxi.com/photo/20160327/1110993.shtml', '2016-03-27 06:36:53'),
(63, 4, 2, 0, '', 'img/feed_index_43.jpg', '', '', '伊拉克巴比伦省自杀式爆炸袭击致26死90伤', '当地时间25日夜间，巴比伦省伊斯坎迪亚镇附近一个村庄的民众正在足球场观看足球比赛，袭击者在人群...', 'http://www.cankaoxiaoxi.com/photo/20160327/1110999.shtml', '2016-03-27 06:38:13'),
(64, 4, 2, 0, '', 'img/feed_index_44.jpg', '', '', '深圳百人上街游行抗议现场', '其中绿景公馆1866上百名业主23日游行遭警方驱散，当晚近百警力更上门抓捕5名带头维权的业主。', 'http://news.ifeng.com/a/20160325/48212992_0.shtml', '2016-03-27 06:41:44'),
(65, 4, 2, 0, '', 'img/feed_index_45.jpg', '', '', '贵州剑河苗族“姊妹节”比赛抓鱼抢鸭', '村民们在参加抢鸭子民俗活动。', 'http://www.chinanews.com/tp/hd2011/2016/03-25/621981.shtml', '2016-03-27 06:42:31'),
(66, 4, 2, 0, '', 'img/feed_index_46.jpg', '', '', '教皇方济各走访难民营 为难民洗脚并亲吻脚背', '教皇方济各走访意大利的难民收容中心，为11名寻求庇护的年轻难民和1名工作人员洗脚，以凸显国际社...', 'http://www.chinanews.com/tp/hd2011/2016/03-25/622001.shtml', '2016-03-27 06:43:42'),
(67, 4, 2, 0, '', 'img/feed_index_47.jpg', '', '', '实拍红旗17导弹一步一步蹿上天', '电视新闻节目报道了北部战区陆军机步师防空团进行实弹射击训练，国产红旗-17型野战防空导弹在节目...', 'http://mil.huanqiu.com/photo_china/2016-03/2825909.html', '2016-03-27 06:44:45'),
(68, 4, 2, 0, '', 'img/feed_index_48.jpg', '', '', '男子自家后院挖出古墓 盗出13件文物被拘', '让侄子高某某下去将墓葬里的文物取走。', 'http://www.chinanews.com/tp/hd2011/2016/03-25/622031.shtml', '2016-03-27 06:45:57'),
(69, 4, 2, 0, '', 'img/feed_index_49.jpg', '', '', 'baby素颜现身机场 获赞后心情', '23日，angelababy（杨颖）现身上海虹桥机场，虽见镜头一路微笑但向大家表示自己是素颜，...', 'http://ent.ifeng.com/a/20160325/42595796_0.shtml', '2016-03-27 06:47:46'),
(70, 4, 2, 0, '', 'img/feed_index_50.jpg', '', '', '日本女主播边哭边播报天气遭开除', '她将于本月25日的节目播出后正式辞去职位，事实上是被NHK给开除了。', 'http://view.inews.qq.com/a/NEW2016032501854502', '2016-03-27 06:48:55'),
(71, 4, 2, 0, '', 'img/feed_index_51.jpg', '', '', '两司机马路上打斗 造成道路拥堵', '本就繁忙路口，一度造成严重拥堵。', 'http://news.163.com/photoview/00AP0001/114138.html', '2016-03-27 06:51:58'),
(72, 4, 2, 0, '', 'img/feed_index_52.jpg', '', '', '世预赛中国队4-0击败马尔代夫', '3月24日晚，俄罗斯世界杯亚洲区预选赛，中国男足在武汉体育中心与马尔代夫队交锋。凭借杨旭的进球...', 'http://www.chinanews.com/tp/hd2011/2016/03-25/622081.shtml', '2016-03-27 06:52:57'),
(73, 4, 2, 0, '', 'img/feed_index_53.jpg', '', '', '15英寸MacBook Pro概念设计', '（来源：网易数码）（来源：网易数码）（来源：网易数码）（来源：网易数码）（来源：网易数码）（来...', 'http://digi.163.com//photoview/0BTF0016/243894.html', '2016-03-27 06:54:00'),
(74, 4, 2, 0, '', 'img/feed_index_54.jpg', '', '', '昆明举行巨型麻将赛 打麻将成体力活', '25-27日共三天时间，主办方设下巨型牌局，感兴趣的市民都可现场报名参加，每天的最佳守擂者将获...', 'http://view.inews.qq.com/a/SPO2016032600983203', '2016-03-27 06:55:25'),
(75, 4, 2, 0, '', 'img/feed_index_55.jpg', '', '', '金正恩检阅军队百炮齐射', '称一旦下达了攻击命令，就会在没有任何警告或是事前通报的情况下先发制人打击首尔的统治机关，完成祖...', 'http://news.ifeng.com/a/20160326/48223759_0.shtml', '2016-03-27 06:56:44'),
(76, 4, 2, 0, '', 'img/feed_index_56.jpg', '', '', '24岁女模特变身日本最美出租车司机', '模特儿出身的生田佳那今年24岁，但你绝对想不到她还是个出租车司机，目前已经稳定执业一年半。', 'http://view.inews.qq.com/a/NEW2016032601089401', '2016-03-27 06:57:35'),
(77, 4, 2, 0, '', 'img/feed_index_57.jpg', '', '', '日本无四肢作家外遇对象恐超50人', '在日本被称为“生命斗士”“最顽强男人”的无四肢作家乙武洋匡被曝光有5段婚外情。', 'http://view.inews.qq.com/a/SSH2016032601027102', '2016-03-27 06:58:26'),
(78, 4, 2, 0, '', 'img/feed_index_58.jpg', '', '', '卖花女街上缠绊 不买花不让走', '看得出男子并不想买花，但是卖花女分别使出“勾，拉，缠，绊”等绝招，硬是不让男子走。', 'http://help.3g.163.com/photoview/dutu/90518.html', '2016-03-27 06:59:08'),
(79, 4, 2, 0, '', 'img/feed_index_59.jpg', '', '', '北京法官主持迁坟现场', '中国北京，北京房山的李某欲将父母的骨灰合葬，不料却认错坟墓，误将母亲的骨灰葬入村民张某的祖父母墓内。', 'http://photo.sina.cn/album_1_2841_96863.htm?ch=1&fromsinago=1&page_start=1&page_end=100', '2016-03-27 07:00:38'),
(80, 4, 2, 0, '', 'img/feed_index_60.jpg', '', '', '东海舰队多艘现代级战舰对抗飞豹火力全开', '东部战区海军某驱逐舰支队开展舰机对抗演练。', 'http://war.163.com/photoview/4T8E0001/114233.html', '2016-03-27 07:01:46'),
(81, 4, 2, 0, '', 'img/feed_index_61.jpg', '', '', '00后女主播小学生赛高：最强王者 天天玩盖伦', '赛高妹子：hello，推软妹栏目的各位小伙伴大家好，我是微博上的小学生赛高，很开心能接受软妹君...', 'http://view.inews.qq.com/a/GAM2016032600384703', '2016-03-27 07:02:34'),
(82, 4, 2, 0, '', 'img/feed_index_62.jpg', '', '', '甘肃男老师暴打7名女生 扯头发扇耳光', '一名男子在教室内采用扯头发、扇耳光和用脚踢等方式先后殴打多名女生。', 'http://view.inews.qq.com/a/NEW2016032601147101', '2016-03-27 07:03:13'),
(83, 4, 2, 0, '', 'img/feed_index_63.jpg', '', '', '大妈无视警告牌 “踏春伤花”自拍', '园方安插的严禁踩踏的广告牌，并没对大妈们造成影响。', 'http://view.inews.qq.com/a/SSH2016032600674702', '2016-03-27 07:03:58'),
(84, 4, 2, 0, '', 'img/feed_index_64.jpg', '', '', '李治廷上"花姐"谈恋爱 自带cp光环', '程序式的CP设定似乎已经满足不了观众的口味，《花样姐姐第二季》中的李治廷X林志玲这对姐弟堪称意...', 'http://lady.163.com/photoview/5S410026/95797.html', '2016-03-27 07:05:06'),
(85, 4, 2, 0, '', 'img/feed_index_65.jpg', '', '', '四川新人办豪华婚礼 10余豪车环绕', '成都市双流区一农家乐内，两位新人在此举行婚礼，现场宴请亲朋的宴席超过200桌。', 'http://view.inews.qq.com/a/NEW201603260288200E', '2016-03-27 07:06:14'),
(86, 4, 2, 0, '', 'img/feed_index_66.jpg', '', '', '人类上火星 得靠这个半人半神的疯子？', '马斯克今年45岁，31岁就成了亿万富翁，娶过两个漂亮老婆离过三次婚，是5个孩子的爸爸。', 'http://view.inews.qq.com/a/FIN2016032602193001', '2016-03-27 07:07:16'),
(87, 4, 2, 0, '', 'img/feed_index_67.jpg', '', '', '宏碁V5 EDG特别版图赏：个性暗纹 性能出色', '在硬件方面，宏碁V5威武EDG特别版采用了15.6英寸的雾面屏幕，并且采用了1080P分辨率，...', 'http://tech.ifeng.com/a/20160327/41586119_0.shtml', '2016-03-27 07:08:53'),
(88, 4, 2, 0, '', 'img/feed_index_68.jpg', '', '', '剖腹产黑猩猩6周后露出婴儿般微笑', '据英国《每日邮报》3月24日报道，英国首例剖腹产黑猩猩经过医护人员6周的悉心照料，体重迅速增长...', 'http://news.ifeng.com/a/20160327/48229325_0.shtml', '2016-03-27 07:10:49'),
(89, 4, 2, 0, '', 'img/feed_index_69.jpg', '', '', '日本东京民众举行反核示威', '当地时间2016年3月26日，日本东京，民众举行反核示威。', 'http://news.163.com/photoview/00AO0001/114289.html', '2016-03-27 07:12:10'),
(90, 4, 2, 0, '', 'img/feed_index_70.jpg', '', '', '罕见！日本北海道出现壮观流冰大漩涡', '当日，日本海上保安总部派出飞机，在北海道知床半岛周边进行了流冰调查，观测地点则位于半岛以北约3...', 'http://view.inews.qq.com/a/SSH2016032700698701', '2016-03-27 07:13:20'),
(91, 4, 2, 0, '', 'img/feed_index_71.jpg', '', '', '一个富豪结婚，请来了黄晓明范冰冰', '有网友发布了一组晨朗集团董事长之子陈栋、儿媳姚婷婷在南通海安县大婚的照片。', 'http://i.ifeng.com/news?aid=107638533', '2016-03-27 07:14:37'),
(92, 5, 1, 1, '顾长卫', 'img/feed_index_72_a.jpg', 'img/feed_index_72_b.jpg', 'img/feed_index_72_c.jpg', '王宝强孟非顾长卫领衔10大男星校花妻子美艳PK', '', 'http://m.china.com.cn/baidu/doc_1_4_1104211.html', '2016-03-27 07:23:46'),
(93, 5, 1, 1, '徐佳莹', 'img/feed_index_73_a.jpg', 'img/feed_index_73_b.jpg', 'img/feed_index_73_c.jpg', '张信哲演唱会表白徐佳莹 俩人在一起了？', '', 'http://toutiao.com/item/6266605550566375938', '2016-03-27 07:27:47'),
(94, 5, 1, 0, '', 'img/feed_index_74_a.jpg', 'img/feed_index_74_b.jpg', 'img/feed_index_74_c.jpg', '绝代双骄演员现状：燕南天身家330亿娶张庭(图)', '', 'http://m.china.com.cn/baidu/doc_1_4_1104150.html', '2016-03-27 07:30:21'),
(95, 5, 1, 1, '奶茶妹妹', 'img/feed_index_75_a.jpg', 'img/feed_index_75_b.jpg', 'img/feed_index_75_c.jpg', '昔日网红现状:西单女孩身价过亿 奶茶妹妹升级人母', '', 'http://m.china.com.cn/baidu/doc_1_4_1104163.html', '2016-03-27 07:33:34'),
(96, 5, 1, 1, '整容', 'img/feed_index_76_a.jpg', 'img/feed_index_76_b.jpg', 'img/feed_index_76_c.jpg', '李依晓回应第五次整容 女星出道容貌对比', '', 'http://m.china.com.cn/baidu/doc_1_4_1104207.html', '2016-03-27 07:37:59'),
(97, 5, 1, 1, '杨幂', 'img/feed_index_77_a.jpg', 'img/feed_index_77_b.jpg', 'img/feed_index_77_c.jpg', '女星事业线伸缩功力PK 杨幂胸器缩水似飞机场', '', 'http://m.china.com.cn/baidu/doc_1_4_1104153.html', '2016-03-27 07:40:24'),
(98, 5, 1, 1, '七龙珠', 'img/feed_index_78_a.jpg', 'img/feed_index_78_b.jpg', 'img/feed_index_78_c.jpg', '《七龙珠》原作者鸟山明看完《西游降魔篇》后的电影心得全文', '', 'http://toutiao.com/item/6266397831200768514', '2016-03-27 07:42:38'),
(99, 5, 1, 1, '明星', 'img/feed_index_79_a.jpg', 'img/feed_index_79_b.jpg', 'img/feed_index_79_c.jpg', '陈学冬杨幂李晨baby王宝强 明星身价差距大(图)', '', 'http://m.china.com.cn/baidu/doc_1_4_1104148.html', '2016-03-27 07:45:11'),
(100, 5, 1, 1, '刘亦菲', 'img/feed_index_80_a.jpg', 'img/feed_index_80_b.jpg', 'img/feed_index_80_c.jpg', '陈晓赵丽颖胡歌刘亦菲 荧幕CP感情现状引唏嘘(图)', '', 'http://m.china.com.cn/baidu/doc_1_4_1104154.html', '2016-03-27 07:47:55'),
(101, 5, 1, 1, '碧昂斯', 'img/feed_index_81_a.jpg', 'img/feed_index_81_b.jpg', 'img/feed_index_81_c.jpg', '女星PS前后对比照 杨幂周迅显老态碧昂斯惊悚(图)', '', 'http://m.china.com.cn/baidu/doc_1_4_1104152.html', '2016-03-27 07:51:56'),
(102, 5, 1, 0, '', 'img/feed_index_82_a.jpg', 'img/feed_index_82_b.jpg', 'img/feed_index_82_c.jpg', '剁手也要买的包包 List已经为大家整理好了', '', 'http://toutiao.com/item/6266612678630834689', '2016-03-27 08:01:59'),
(103, 5, 1, 0, '', 'img/feed_index_83_a.jpg', 'img/feed_index_83_b.jpg', 'img/feed_index_83_c.jpg', '最时髦的心机刘海露出眉毛就对了！', '', '最时髦的心机刘海露出眉毛就对了！', '2016-03-27 08:04:49'),
(104, 5, 1, 0, '', 'img/feed_index_84_a.jpg', 'img/feed_index_84_b.jpg', 'img/feed_index_84_c.jpg', '这些情侣的定情之作low到让人不忍直视，你喜欢的有几对中招？', '', 'http://toutiao.com/item/6265959617952481793', '2016-03-27 08:06:42'),
(105, 5, 1, 1, '性爱', 'img/feed_index_85_a.jpg', 'img/feed_index_85_b.jpg', 'img/feed_index_85_c.jpg', '打脸啪啪啪！大神找出了《蝙蝠侠大战超人》官方字幕19处错误...', '', 'http://toutiao.com/item/6266621794162049537', '2016-03-27 08:08:38'),
(106, 5, 1, 1, '李晨', 'img/feed_index_86_a.jpg', 'img/feed_index_86_b.jpg', 'img/feed_index_86_c.jpg', '李晨任环保大使 李晨家庭背景曝光拥有多辆顶级豪车', '', 'http://fun.youth.cn/2016/0327/4115327.shtml', '2016-03-27 08:10:56'),
(107, 5, 1, 1, '秦岚', 'img/feed_index_87_a.jpg', 'img/feed_index_87_b.jpg', 'img/feed_index_87_c.jpg', '蒋勤勤尖下巴似蛇精秦岚似削骨 揭琼瑶女郎容貌巨变', '', 'http://m.china.com.cn/baidu/doc_1_4_1104149.html', '2016-03-27 08:14:12'),
(108, 5, 1, 1, '葛优', 'img/feed_index_88_a.jpg', 'img/feed_index_88_b.jpg', 'img/feed_index_88_c.jpg', '葛优老婆贺聪睡衣照流出 结婚20年膝下无子原因曝光', '', 'http://m.china.com.cn/baidu/doc_1_4_1104149.html', '2016-03-27 08:18:12'),
(109, 5, 3, 1, '鹿晗', '', '', '', '鹿晗开个唱惊动娱乐圈 邓超助阵现场选“儿媳”', '早前邓超曾高调为鹿晗“征婚”，而此次演唱会则成为了邓超替儿子的征婚现场。', 'http://fun.youth.cn/2016/0327/4113995.shtml', '2016-03-27 08:20:15'),
(110, 5, 1, 1, '吴奇隆', 'img/feed_index_89_a.jpg', 'img/feed_index_89_b.jpg', 'img/feed_index_89_c.jpg', '葛天刘翔吴奇隆马雅舒 盘点明星夫妻离婚撕逼大战', '', 'http://m.china.com.cn/baidu/doc_1_4_1104210.html', '2016-03-27 08:25:00'),
(111, 5, 3, 1, '古巴', '', '', '', '西媒：英国滚石乐队古巴首都免费开唱创造历史 ', '带有传奇色彩的英国滚石乐队25日在哈瓦那体育城举行了历史性的演唱会，数万名观众在现场观看了这场...', 'http://m.cankaoxiaoxi.com/baidunews-eco/world/20160327/1111176.shtml', '2016-03-27 08:25:49'),
(112, 6, 2, 0, '', 'img/feed_index_90.jpg', '', '', '新手山路上练车过手瘾 不慎翻入深沟车子报废', '', 'http://m.china.com.cn/baidu/doc_1_1_1104244.html', '2016-03-27 08:43:13'),
(113, 6, 2, 0, '', 'img/feed_index_91.jpg', '', '', '停车乱摊贩乱 沪上医院门前交通乱象让人忧', '', 'http://m.china.com.cn/baidu/doc_1_1_1104243.html', '2016-03-27 08:44:10'),
(114, 6, 2, 0, '', 'img/feed_index_92.jpg', '', '', '货车撞断树枝砸中小车 ', '现场交通一度中断，事故没造成人员伤亡。', 'http://mzrb.meizhou.cn/html/2016-03/27/content_99017.htm', '2016-03-27 08:44:55'),
(115, 6, 2, 0, '', 'img/feed_index_93.jpg', '', '', '任贤齐电脑遭黑客入侵 ', '虽然此事暂未引发什么严重后果，但由于任贤齐的明星身份，还是引起了不小的关注。', 'http://mzrb.meizhou.cn/html/2016-03/27/content_99000.htm', '2016-03-27 08:45:51'),
(116, 6, 1, 0, '', 'img/feed_index_94_a.jpg', 'img/feed_index_94_b.jpg', 'img/feed_index_94_c.jpg', '囧字怎么写!开豪车偷羊被拦 村民追逐豪车将其拦下', '', 'http://m.china.com.cn/baidu/doc_1_1_1104290.html', '2016-03-27 08:48:50'),
(117, 6, 1, 0, '', 'img/feed_index_95_a.jpg', 'img/feed_index_95_b.jpg', 'img/feed_index_95_c.jpg', '大学女生宿舍产子身亡 母子双双殉命阳台引发同情', '', 'http://cnews.chinadaily.com.cn/2016-03/27/content_24121999.htm', '2016-03-27 08:51:14'),
(118, 6, 3, 0, '', '', '', '', '胡忠思：演奏春耕交响曲', '3台旋耕机在田间“突突突”地来回奔跑，身后划出一排排翻动的泥土。', 'http://cdrb.cdyee.com/html/2016-03/27/content_479453.htm?div=-1', '2016-03-27 08:52:46'),
(119, 6, 3, 0, '', '', '', '', '一路口10分钟内响起55次喇叭声', '机动车鸣笛被查处后，会被处以20元罚款，但他很少看到交警处罚，这可能让司机们有恃无恐。', 'http://ctdsb.cnhubei.com/html/ctdsb/20160327/ctdsb2869252.html', '2016-03-27 08:53:27'),
(120, 6, 3, 0, '', '', '', '', '定制公交有望每月新开一条线路', '南湖中商平价门口，一名乘客正登上开往光谷金融港的定制公交。', 'http://ctdsb.cnhubei.com/html/ctdsb/20160327/ctdsb2869251.html', '2016-03-27 08:53:52'),
(121, 6, 2, 0, '', 'img/feed_index_96.jpg', '', '', '男子酒后起邪念强奸表弟妻子', '', 'http://view.inews.qq.com/a/SSH2016032700813601', '2016-03-27 08:55:03'),
(122, 6, 3, 0, '', '', '', '', '10岁女孩被出租车撞倒 公交司机下车急呼120 ', '当晚女孩的父亲打电话给王君表示感谢，并说已经报警。', 'http://news.qingdaonews.com/qingdao/2016-03/27/content_11537450.htm', '2016-03-27 08:55:22'),
(123, 6, 3, 0, '', '', '', '', '株洲麻将馆聚众赌博民警一锅端 已有6人被行拘', '民警现场控制了10余名参赌人员，并收缴了参赌人员遗落的赌资两万多元。', 'http://hn.qq.com/a/20160327/020801.htm', '2016-03-27 08:55:43'),
(124, 6, 2, 0, '', 'img/feed_index_97.jpg', '', '', '金沙路路口平房突起大火 火场抢出7个氧气瓶 ', '', 'http://news.qingdaonews.com/qingdao/2016-03/27/content_11537464.htm', '2016-03-27 08:58:23'),
(125, 6, 3, 0, '', '', '', '', '济南芦苇引燃停车场十多辆车被烧', '起火的主要是垃圾、木材等，停放在此处的10多辆车也被烧毁，十余公里外都可看到弥漫的浓烟。', 'http://news.sohu.com/20160327/n442387171.shtml', '2016-03-27 08:58:47'),
(126, 6, 2, 0, '', 'img/feed_index_98.jpg', '', '', '青年水库大青鱼被捕 市民花高价买下准备放生 ', '', 'http://news.qingdaonews.com/qingdao/2016-03/27/content_11537434.htm', '2016-03-27 09:00:38'),
(127, 6, 3, 0, '', '', '', '', '济南肇事弃童案嫌犯家属：他不是十恶不赦的混蛋', '事发一周后，济南3·18交通肇事弃童案掀起的舆论终于波及到了庆云县尚堂镇东郎坞村，那里是弃童车...', 'http://news.sohu.com/20160327/n442386935.shtml', '2016-03-27 09:01:00'),
(128, 6, 1, 0, '', 'img/feed_index_99_a.jpg', 'img/feed_index_99_b.jpg', 'img/feed_index_99_c.jpg', '济南肇事弃童案嫌犯家属：他不是十恶不赦的混蛋', '', 'http://view.inews.qq.com/a/SSH2016032701819701', '2016-03-27 09:03:05'),
(129, 6, 3, 0, '', '', '', '', '怪癖男子专偷女性内衣被抓现行 称因为好奇', '在进一步调查过程中，民警发现该男子不仅偷车内物品，还有偷女性用品的怪癖。', 'http://m.cankaoxiaoxi.com/baidunews-eco/china/20160327/1111195.shtml', '2016-03-27 09:03:45'),
(130, 6, 2, 0, '', 'img/feed_index_100.jpg', '', '', '沪上一女子骑电动车闯红灯，被拦下后猛踢民警下身被刑拘', '', 'http://news.ifeng.com/a/20160326/48227229_0.shtml', '2016-03-27 09:04:57'),
(131, 6, 2, 1, '腾讯要闻', 'img/feed_index_101.jpg', '', '', '绵阳女子婚内出轨生下龙凤胎', '', 'http://view.inews.qq.com/a/NEW2016032702107602', '2016-03-27 09:08:17'),
(132, 7, 3, 0, '', '', '', '', '坚守底线 移风易俗', '时利用闭路电视滚动播放、法制宣传车巡回宣讲、印发宣传资料、刷写墙体标语、编发手机短信等多种形式...', 'http://dzb.qnz.com.cn/dzb/html/2016-03/27/content_430996.htm', '2016-03-27 09:18:00'),
(133, 7, 2, 1, '武警', 'img/feed_index_102.jpg', '', '', '小漫画大主题!武警马鞍山支队寓教于乐中抓教育', '', 'http://m.cnr.cn/mil/20160327/t20160327_521721931.html', '2016-03-27 09:20:40'),
(134, 7, 2, 0, '', 'img/feed_index_117.jpg', '', '', '俄海军或在俄日争议岛屿设基地 ', '俄海军正考虑在千岛群岛设立军事基地的可能性。', 'http://bjrb.bjd.com.cn/html/2016-03/27/content_19970.htm', '2016-03-27 09:23:00'),
(135, 7, 2, 0, '', 'img/feed_index_116.jpg', '', '', '法媒称日本人拒绝参军:竟有47名军校毕业生不愿入伍', '法国国际战略关系研究所网站3月21日刊登该研究所客座研究员爱德华·弗林姆兰的文章，题为《日本人...', 'http://m.cankaoxiaoxi.com/baidunews-eco/world/20160327/1110317.shtml', '2016-03-27 09:23:17'),
(136, 7, 2, 0, '', 'img/feed_index_103.jpg', '', '', '渔船获救回家 仍有8人被扣', '今报北海讯北海地角渔船“桂北渔10078”号在经历了遭印尼海警开火射击及非法扣押的历险后，被中...', 'http://epaper.gxnews.com.cn/ngjb/html/2016-03/27/content_2712056.htm', '2016-03-27 09:25:12'),
(137, 7, 1, 0, '', 'img/feed_index_104_a.jpg', 'img/feed_index_104_b.jpg', 'img/feed_index_104_c.jpg', '日军校毕业生入伍率创新低：转行去私企只为自己', '', 'http://3g.china.com/act/military/11132797/20160327/22315927.html', '2016-03-27 09:30:19'),
(138, 7, 2, 0, '', 'img/feed_index_105.jpg', '', '', '军报记者直击：投笔从戎，守卫高原', '', 'http://army.81.cn/content/2016-03/27/content_6978539.htm', '2016-03-27 09:33:54'),
(139, 7, 1, 1, '直升机', 'img/feed_index_106_a.jpg', 'img/feed_index_106_b.jpg', 'img/feed_index_106_c.jpg', '全球十大最贵军用直升机 没有最贵只有更贵', '', 'http://war.163.com/16/0327/11/BJ5NQTSF00014OVF.html', '2016-03-27 09:35:49'),
(140, 7, 2, 1, '海军', 'img/feed_index_107.jpg', '', '', '揭秘：中国空军击落日本海军“轰炸之王”始末【图】', '成都上空爆发了一次抗战史上令人难忘的空战。', 'http://www.chnlung.cn/hs/krzz/2016/0327/26509.html', '2016-03-27 09:38:04'),
(141, 7, 3, 0, '', '', '', '', '广西口岸首次进口散装食用盐', '同时与钦州市盐务局积极沟通，共同做好舱底和散漏污损食盐的后续清理及监管工作。', 'http://ngzb.gxnews.com.cn/html/2016-03/27/content_1247661.htm', '2016-03-27 09:38:26'),
(142, 7, 2, 1, '蒋介石', 'img/feed_index_108.jpg', '', '', '1949年10月1日蒋介石在忙什么？', '', 'http://www.chnlung.cn/ls/mgms/2016/0327/26512.html', '2016-03-27 09:39:42'),
(143, 7, 1, 0, '', 'img/feed_index_109_a.jpg', 'img/feed_index_109_b.jpg', 'img/feed_index_109_c.jpg', '中国游客再次“扬名海外”：日本心塞！', '', 'http://www.cnrexue.com/n/201603/130182.html', '2016-03-27 09:40:42'),
(144, 7, 1, 0, '', 'img/feed_index_110_a.jpg', 'img/feed_index_110_b.jpg', 'img/feed_index_110_c.jpg', '房价暴涨的真正原因：原来是美国在搞鬼', '', 'http://www.cnrexue.com/n/201603/130181.html', '2016-03-27 09:45:06'),
(145, 7, 2, 0, '', 'img/feed_index_111.jpg', '', '', '抗日史上不该忘记的四大名团：吉星文团卢沟桥抗击侵略军【图】', '', 'http://www.chnlung.cn/hs/krzz/2016/0327/26513.html', '2016-03-27 09:46:13'),
(146, 7, 2, 0, '', 'img/feed_index_112.jpg', '', '', '侵华日军令人发指的暴行：用中国人脑浆配药吃【图】', '并残酷折磨中国抗日女英雄赵一曼的日本战犯大野泰治吗。', 'http://www.chnlung.cn/hs/krzz/2016/0327/26510.html', '2016-03-27 09:47:12'),
(147, 7, 2, 0, '', 'img/feed_index_113.jpg', '', '', '1942年抗日女谍任黛黛惨死内幕：下体赤裸还插了一把日本倭刀【图', '', 'http://www.chnlung.cn/hs/krzz/2016/0327/26511.html', '2016-03-27 09:48:03'),
(148, 7, 2, 0, '', 'img/feed_index_114.jpg', '', '', '“大嘴”特朗普再放厥词：从沙特撤军、日韩自己建核武库', '', 'http://www.thepaper.cn/baidu.jsp?contid=1449135', '2016-03-27 09:51:57'),
(149, 7, 3, 0, '', '', '', '', '俄空军过去24小时击毙超百名IS份子', '俄罗斯军方在过去24小时中击毙超100名“伊斯兰国”激进份子。', 'http://finance.sina.com.cn/money/forex/datafx/2016-03-27/doc-ifxqssxu8343439.shtml', '2016-03-27 09:52:35'),
(150, 7, 1, 1, '苏联', 'img/feed_index_115_a.jpg', 'img/feed_index_115_b.jpg', 'img/feed_index_115_c.jpg', '深度：乌克兰与中国有多铁？奉上苏联核航母顶尖机密', '', 'http://mil.news.sina.com.cn/jssd/2016-03-27/doc-ifxqswxk9700975.shtml', '2016-03-27 09:56:45'),
(151, 8, 2, 1, '魅族', 'img/feed_index_118.jpg', '', '', '国产iPhone 6s又多了一个！魅族PRO 6曝光！ ', '从外观上看，这款新机继承了魅族机器超窄边框、腰圆Home键的设计风格。', 'http://android.tgbus.com/shouji/news/201603/541813.shtml', '2016-03-27 10:07:52'),
(152, 8, 2, 1, 'APP', 'img/feed_index_119.jpg', '', '', '美国iPhone用户平年平均每人花费35美元购买App', '当中的25美元用在购买游戏上，占比71%。', 'http://tech.ifeng.com/a/20160327/41586187_0.shtml', '2016-03-27 10:09:02'),
(153, 8, 1, 1, '苹果公司', 'img/feed_index_120_a.jpg', 'img/feed_index_120_b.jpg', 'img/feed_index_120_c.jpg', '有他们iPhone变万能 丧心病狂', '', 'http://m.cnmo.com/smart/542317.html', '2016-03-27 10:13:39'),
(154, 8, 1, 0, '', 'img/feed_index_121_a.jpg', 'img/feed_index_121_b.jpg', 'img/feed_index_121_c.jpg', '60年后 你在孙子眼中就是这样的 无言以对', '', 'http://m.mydrivers.com/newsview/475693.html', '2016-03-27 10:18:55'),
(155, 8, 2, 1, '苹果公司', 'img/feed_index_122.jpg', '', '', '劲爆！新一代iPhone大曝光：5.8寸/iPhone 4造型', '1、将会使用AMOLED材质屏幕，同时屏幕尺寸将突破5.5寸，达到5.8寸。', 'http://news.cnfol.com/it/20160327/22472065.shtml', '2016-03-27 10:20:24'),
(156, 8, 1, 1, '数码', 'img/feed_index_123_a.jpg', 'img/feed_index_123_b.jpg', 'img/feed_index_123_c.jpg', '1999元起高关注老旗舰机推荐', '', 'http://mobile.163.com/16/0327/16/BJ67JSHA001117A8.html', '2016-03-27 10:22:33'),
(157, 8, 1, 0, '', 'img/feed_index_124_a.jpg', 'img/feed_index_124_b.jpg', 'img/feed_index_124_c.jpg', 'LG旗舰G5国行低配版确认：骁龙652/2K屏', '', 'http://mobile.163.com/16/0327/16/BJ685DDT001117A8.html', '2016-03-27 10:25:45'),
(158, 8, 2, 1, '拍照', 'img/feed_index_125.jpg', '', '', '给食物拍照，还能增强食欲？', '', 'http://epaper.ssrb.com.cn/html/2016-03/27/content_8_2.htm', '2016-03-27 10:28:11'),
(159, 8, 2, 1, '达人', 'img/feed_index_126.jpg', '', '', '时尚达人必备 具备优质音效手机导购', '', 'http://tech.sina.com.cn/mobile/n/g/2016-03-27/doc-ifxqswxn6431472.shtml', '2016-03-27 10:29:20'),
(160, 8, 2, 1, '三星', 'img/feed_index_127.jpg', '', '', '什么智能手机最可能被盗？你绝对想不到！', '', 'http://www.gywb.cn/content/2016-03/26/content_4737311.htm', '2016-03-27 10:30:24'),
(161, 8, 3, 1, '数码', '', '', '', 'Java使用telnet连接远程计算机执行命令', '选择telnet的java包问题，包有很多，比如appache，ganymed，javaexp...', 'http://www.linuxidc.com/Linux/2016-03/129529.htm', '2016-03-27 10:31:13'),
(162, 8, 2, 1, '苹果公司', 'img/feed_index_128.jpg', '', '', 'iPhone 7 Pro是否会效仿iPad Pro定价策略？ ', '', 'http://www.feng.com/iPhone/news/2016-03-27/IPhone-7-Pro-will-follow-the-Pro-pricing-strategy_642712.shtml', '2016-03-27 10:32:33'),
(163, 8, 2, 1, '周光平', 'img/feed_index_129.jpg', '', '', '小米再曝全新产品 电饭煲除外还有惊喜！ ', '', 'http://www.techweb.com.cn/ihomeappliances/2016-03-27/2304518.shtml', '2016-03-27 10:33:52'),
(164, 8, 2, 1, '虚拟现实', 'img/feed_index_130.jpg', '', '', '虚拟现实将如何影响PC市场？性能不断进化', '似乎是在一夜之间，虚拟现实已经来到了现实世界，并成为了PC的未来。', 'http://digi.tech.qq.com/a/20160327/008765.htm', '2016-03-27 10:35:11'),
(165, 8, 3, 0, '', '', '', '', 'Hadoop+Hbase集群数据迁移问题', '比较适合大数据量或者跨版本集群之间的数据迁移服务。', 'http://www.linuxidc.com/Linux/2016-03/129533.htm', '2016-03-27 10:35:38'),
(166, 8, 2, 0, '', 'img/feed_index_131.jpg', '', '', 'Bash的基本功能', '5.3正确输出和错误输出同时保存。', 'http://www.linuxidc.com/Linux/2016-03/129531.htm', '2016-03-27 10:36:29'),
(167, 8, 2, 0, '', 'img/feed_index_132.jpg', '', '', '几行代码，程序猿秒变大艺术家！', '', 'http://www.ithome.com/html/it/214367.htm', '2016-03-27 10:39:12'),
(168, 8, 1, 0, '', 'img/feed_index_133_a.jpg', 'img/feed_index_133_b.jpg', 'img/feed_index_133_c.jpg', 'CentOS6.5下安装Memcached完整示例', '', 'http://www.linuxidc.com/Linux/2016-03/129532.htm', '2016-03-27 10:41:30'),
(169, 8, 2, 1, 'windows', 'img/feed_index_134.jpg', '', '', 'Win10移动版UWP《照片》更新：打印功能移除', '', 'http://www.ithome.com/html/win10/214370.htm', '2016-03-27 10:43:27'),
(170, 8, 3, 0, '', '', '', '', '用上这种 3D 捕捉技术，连自己的记忆也能“看见”了', '当需要回忆某件事或场景时，人们就拿着遥控器，像查看录影带一样找到相应那个片段，各种细节、一举一...', 'http://www.ifanr.com/baidu/post.php?id=638504&utm_source=baidu_news_client&utm_medium=rss&utm_campaign=baidu', '2016-03-27 10:44:03'),
(171, 9, 3, 1, 'VC', '', '', '', '“创业跑”打造 创投领域“运动趴”', '昨日在深圳中心公园，超过800名创业者、投资人以及运动爱好者汇聚一起，“跑”出火花四溅。', 'http://news.sina.com.cn/o/2016-03-27/doc-ifxqsxic3355739.shtml', '2016-03-27 10:50:30'),
(172, 9, 2, 1, 'O2O', 'img/feed_index_135.jpg', '', '', '今天打Uber，你收到Uber的招聘测试题没？', '', 'http://www.leiphone.com/news/201603/ckGDL2c0LFmPGquO.html', '2016-03-27 10:51:40'),
(173, 9, 1, 1, 'IDG', 'img/feed_index_136_a.jpg', 'img/feed_index_136_b.jpg', 'img/feed_index_136_c.jpg', 'IDG发布2016TMT战略： 大量资本将投向三大方向 智能硬件、消费升级、泛娱乐投资', '', 'http://pe.pedaily.cn/201603/20160327394978.shtml', '2016-03-27 10:54:47'),
(174, 9, 1, 1, '汽车资讯', 'img/feed_index_137_a.jpg', 'img/feed_index_137_b.jpg', 'img/feed_index_137_c.jpg', '瓜子二手车频遭投诉，口碑已崩盘？ ', '', 'http://www.techsir.com/a/201603/29990.html', '2016-03-27 10:57:18'),
(175, 9, 1, 1, '朋友圈', 'img/feed_index_138_a.jpg', 'img/feed_index_138_b.jpg', 'img/feed_index_138_c.jpg', '什么？不是所有广告商都可以参加papi酱广告竞标', '', 'http://www.huxiu.com/article/143339/1.html?f=index_feed_article', '2016-03-27 10:59:17'),
(176, 9, 2, 0, '', 'img/feed_index_139.jpg', '', '', '宜宾一两月大婴儿口鼻出血死亡 家属疑与接种脊髓灰质炎疫苗有关', '', 'http://www.jiemian.com/article/588213.html', '2016-03-27 11:01:48'),
(177, 9, 2, 1, '网易科技', 'img/feed_index_140.jpg', '', '', '刘晓松:多米计划登陆新三板', '', 'http://tech.163.com/16/0326/21/BJ47QT6T000915BF.html', '2016-03-27 11:03:35'),
(178, 9, 3, 1, '电子商务', '', '', '', '海南将从六方面突破电子商务发展', '海南省商务厅副巡视员何学波在海南省电子商务发展论坛上表示。', 'http://m.cankaoxiaoxi.com/baidunews-eco/science/20160326/1110830.shtml', '2016-03-27 11:04:31'),
(179, 9, 3, 0, '', '', '', '', '美媒：中国调整网购税让进口美妆品更便宜', '对中国消费者来说，今后购买进口美妆产品——如欧莱雅旗下品牌兰蔻和韩国爱茉莉太平洋化妆品公司的眼...', 'http://m.cankaoxiaoxi.com/baidunews-eco/finance/20160327/1111163.shtml', '2016-03-27 11:05:01'),
(180, 9, 1, 1, '网易科技', 'img/feed_index_141_a.jpg', 'img/feed_index_141_b.jpg', 'img/feed_index_141_c.jpg', '网心科技陈磊：双创最大困扰是啥', '', 'http://3g.21cn.com/zy/it/itnews/zhnb/2016/0327/17/30827779.shtml', '2016-03-27 11:07:46'),
(181, 9, 2, 1, '阿里巴巴', 'img/feed_index_142.jpg', '', '', '周末要闻回顾：湖畔大学开学 鸿海收购夏普案敲定 ', 'TechWeb带您回顾一下周末这两天的重要资讯。', 'http://www.techweb.com.cn/internet/2016-03-27/2304527.shtml', '2016-03-27 11:08:48'),
(182, 9, 2, 1, '汤敏', 'img/feed_index_143.jpg', '', '', '汤敏：用“互联网+”提供产业工人在线教育', '', 'http://economy.caixin.com/2016-03-27/100925152.html?utm_source=baidu&utm_medium=caixin.media.baidu.com&utm_campaign=Hezuo', '2016-03-27 11:10:42'),
(183, 9, 3, 1, '房产O2O', '', '', '', '广东省服装产业依靠“互联网+”等新模式迎来发展机遇', '埃沃服装总监李维表示，大众定制正在广东服装业萌芽发展，与其相配套的智能制造也进入了服装企业技术...', 'http://news.ifeng.com/a/20160327/48229369_0.shtml', '2016-03-27 11:11:13'),
(184, 9, 1, 0, '', 'img/feed_index_144_a.jpg', 'img/feed_index_144_b.jpg', 'img/feed_index_144_c.jpg', '[社会] 小札马云雷军谈人工智能未来趋势(双语)', '', 'http://learning.sohu.com/20160327/n442344732.shtml', '2016-03-27 11:12:32'),
(185, 9, 2, 1, 'BATM', 'img/feed_index_145.jpg', '', '', '李彦宏：没有竞争就没有创新 天天觉得自己公司会死说不定会越做越大', '百度公司创始人、董事长兼首席执行官李彦宏认为，共享经济的定义其实和共产主义的定义差不多，不是强...', 'http://news.pedaily.cn/201603/20160327394973.shtml', '2016-03-27 11:15:24'),
(186, 9, 2, 1, '杨元庆', 'img/feed_index_146.jpg', '', '', '杨元庆：联想也要做共享经济', '', 'http://tech.qq.com/a/20160327/013450.htm', '2016-03-27 11:17:55'),
(187, 9, 1, 1, '微信', 'img/feed_index_147_a.jpg', 'img/feed_index_147_b.jpg', 'img/feed_index_147_c.jpg', '大河网三门峡网友联谊分享会3月26日举行！ “明珠三门峡”微信上线啦！', '', 'http://news.ifeng.com/a/20160327/48232132_0.shtml', '2016-03-27 11:21:05'),
(188, 9, 1, 1, 'O2O', 'img/feed_index_148_a.jpg', 'img/feed_index_148_b.jpg', 'img/feed_index_148_c.jpg', '奶茶妹妹被爆投资UBER是怎么回事？', '', 'http://fun.youth.cn/2016/0327/4115633.shtml', '2016-03-27 11:23:40'),
(189, 9, 1, 1, '俞敏洪', 'img/feed_index_149_a.jpg', 'img/feed_index_149_b.jpg', 'img/feed_index_149_c.jpg', '俞敏洪丨我们来谈谈情商的问题', '', 'http://www.gupowang.com/news/3788.html', '2016-03-27 11:27:16'),
(190, 9, 2, 1, '张宏江', 'img/feed_index_150.jpg', '', '', '金山张宏江：今年将发展政务云与医疗云', '', 'http://sinanews.sina.cn/sharenews.shtml?id=fxqswxn6445055-comos-tech-cms&fromsinago=1&page_start=1&page_end=100', '2016-03-27 11:29:39'),
(191, 10, 3, 1, '八大行星', '', '', '', '金星与土星的相位', '金星与土星呈120度。', 'http://www.lnka.cn/article/topic787.html', '2016-03-27 11:32:42'),
(192, 10, 1, 0, '', 'img/feed_index_151_a.jpg', 'img/feed_index_151_b.jpg', 'img/feed_index_151_c.jpg', '微课堂：《面对出轨的男人，女人如何正确挽回？》', '', 'http://fashion.sohu.com/20160327/n442404918.shtml', '2016-03-27 11:35:30'),
(193, 10, 2, 0, '', 'img/feed_index_152.jpg', '', '', '为何有些人容易做恶梦', '西方将梦作为心理科学的研究对象，中国命理学、风水学上也有关于梦的理解和解释。', 'http://www.lnka.cn/article/topic14578.html', '2016-03-27 11:37:26'),
(194, 10, 1, 0, '', 'img/feed_index_153_a.jpg', 'img/feed_index_153_b.jpg', 'img/feed_index_153_c.jpg', '出生月份决定你是否会得癌症 真的好可怕！', '', 'http://gx.people.com.cn/n2/2016/0327/c368255-28022272.html', '2016-03-27 11:39:07'),
(195, 10, 2, 0, '', 'img/feed_index_154.jpg', '', '', '网贴“27岁女孩被父母逼婚后跳楼”追踪', '', 'data-displayurl="http://news.ifeng.com/a/20160327/48232117_0.shtml"', '2016-03-27 11:40:08'),
(196, 10, 1, 0, '', 'img/feed_index_155_a.jpg', 'img/feed_index_155_b.jpg', 'img/feed_index_155_c.jpg', '刷爆国外朋友圈的漫画，99%的家庭被戳中痛点！', '', 'http://learning.sohu.com/20160327/n442407753.shtml', '2016-03-27 11:42:00'),
(197, 10, 2, 1, '夫妻', 'img/feed_index_156.jpg', '', '', '夫妻长期分居，这段婚姻预示着会破灭吗？', '', 'http://fashion.sohu.com/20160327/n442404683.shtml', '2016-03-27 11:43:15'),
(198, 10, 1, 0, '', 'img/feed_index_157_a.jpg', 'img/feed_index_157_b.jpg', 'img/feed_index_157_c.jpg', '长沙石燕湖开展亲子拓展训练营增亲情', '', 'http://www.hn.chinanews.com.cn/news/0327/2016/262080.html', '2016-03-27 11:45:02'),
(199, 10, 2, 0, '', 'img/feed_index_158.jpg', '', '', '揭秘男人不会拒绝你的五个时刻', '', 'http://love.ny1988.com/2016/0327/134682.shtml', '2016-03-27 11:46:02'),
(200, 10, 2, 0, '', 'img/feed_index_159.jpg', '', '', '揭秘聪明女人经营婚姻的5个技巧', '', 'http://love.ny1988.com/2016/0327/134683.shtml', '2016-03-27 11:46:50'),
(201, 10, 1, 1, '凤凰头条', 'img/feed_index_160_a.jpg', 'img/feed_index_160_b.jpg', 'img/feed_index_160_c.jpg', '[FUN来了]我醒了和我起了中间 大概差七八个小时', '', 'http://i.ifeng.com/news?aid=107647902', '2016-03-27 11:48:51'),
(202, 10, 2, 0, '', 'img/feed_index_161.jpg', '', '', '女性暴露“床上功夫”的6大私密部位', '', 'http://love.ny1988.com/2016/0327/134659.shtml', '2016-03-27 11:50:07'),
(203, 10, 2, 1, '塔罗', 'img/feed_index_162.jpg', '', '', '塔罗占卜丈夫出轨后你有啥反应', '', 'http://www.lnka.cn/article/topic2682.html', '2016-03-27 11:51:01'),
(204, 10, 3, 0, '', '', '', '', '紫微斗数富贵格局——二曜同临格', '紫微命盘中，日月同宫守命不如在对宫拱照，主人一生福禄丰厚，财帛充盈，安享富贵。', 'http://www.lnka.cn/article/topic8480.html', '2016-03-27 11:51:24'),
(205, 10, 3, 0, '', '', '', '', '由八字看什么女人靠不住', '常听到身边的男性朋友说，现在的女人靠不住，那怎么可以推断一个女人在情感运上是否执着呢。', 'http://www.lnka.cn/article/topic3724.html', '2016-03-27 11:51:52'),
(206, 10, 3, 0, '', '', '', '', '风水师送你十大生财吉祥物', '放在大门入屋斜角之角落，此处地方藏风聚气，亦是财位，放上一对金元宝以加强招财进宝之气。', 'http://www.lnka.cn/article/topic426.html', '2016-03-27 11:52:12'),
(207, 10, 2, 0, '', 'img/feed_index_163.jpg', '', '', '测测看在感情中你充当什么角色', '', 'http://www.lnka.cn/article/topic12308.html', '2016-03-27 11:53:33'),
(208, 10, 2, 1, '星座', 'img/feed_index_164.jpg', '', '', '哪些星座最容易成为有钱人', '有些人在人生路上很坎坷，总是感觉缺少钱花，但是总有那么些好命的人，一生都不愁没钱花，想知道哪些...', 'http://www.lnka.cn/article/topic16515.html', '2016-03-27 11:54:52'),
(209, 10, 2, 0, '', 'img/feed_index_165.jpg', '', '', '宝宝春季感冒频发，护理三点需注意', '春季是宝宝感冒频发的季节，宝宝年龄小，体质弱，很容易成为病菌侵袭的对象。', 'http://baobao.sohu.com/20160327/n442324552.shtml', '2016-03-27 11:55:59'),
(210, 10, 2, 0, '', 'img/feed_index_166.jpg', '', '', '伊人入梦,不知苍穹何意,风卷雾来,红尘擦肩', '', 'http://3g.k.sohu.com/t/n124607283', '2016-03-27 11:58:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gundong`
--
ALTER TABLE `gundong`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lunbo`
--
ALTER TABLE `lunbo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsblock`
--
ALTER TABLE `newsblock`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `gundong`
--
ALTER TABLE `gundong`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `lunbo`
--
ALTER TABLE `lunbo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `newsblock`
--
ALTER TABLE `newsblock`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=211;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
