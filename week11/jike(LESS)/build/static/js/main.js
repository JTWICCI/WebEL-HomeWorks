define(function(require,exports,module){require("jquery");var o=require("./slide_show");o.topPageSlide();var s=require("./infinite_scroll");s.jobs();s.firms();s.schools();s.media();var e=require("./switch_menus");e.miniCards();e.weeklessons();e.hotnav();e.hotvideos();var i=require("./decorations");i.searchbox();i.gotop();var a=require("./question_mark_show");a.showmark()});