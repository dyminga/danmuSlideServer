$(function () {
      // body...
      var winWidth,winHeight;
      if (window.innerWidth)
            winWidth = window.innerWidth;
      else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
      // 获取窗口高度
      if (window.innerHeight)
            winHeight = window.innerHeight;
      else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
      var canfocus = true;
      // body...
      $("#fream").css("height",winHeight);
      $("#danmuconfig").css("width",winWidth);
      $("#fream").focus();
      function foo (argument) {
            if (canfocus)$("#fream").focus();
            setTimeout(foo,1500);
      };
      foo();

      $("#alphabar").change(function (argument) {
            // body...
            $("#alphatext").html($(this).val()+"%");
            $("#danmu").data("opacity",($(this).val())/100.0);
      })
      $(document).mousemove(function (e) {
            if(e.pageY>40){
                  $("#fream").focus();
                  $("#danmuconfig").fadeOut();
                  canfocus = true;
            }else{
                  $("#danmuconfig").fadeIn();
                  canfocus = false;
            }
      });
      
      var a_danmu={ "text":"2333333" , "color":"green" ,"size":"1","position":"0","time":60 ,"isnew":" "};
      var mydanmuss={ 1:[ { "text":"hahahaha" , "color":"red" ,"size":"0","position":"0"},
      { "text":"233333" , "color":"red" ,"size":"0","position":"2"} ],
      3:[ { "text":"poi" , "color":"red" ,"size":"1","position":"1"},
      { "text":"2333" , "color":"#FFFFFF" ,"size":"0","position":"0"} ],
      50:[ { "text":"XXX真好" , "color":"#FFFFFF" ,"size":"0","position":"2"}, ] };
      $("#danmu").danmu({
            left: 0,    //区域的起始位置x坐标
            top: 20 ,  //区域的起始位置y坐标
            height: winHeight-20, //区域的高度
            width: winWidth, //区域的宽度
            zindex :100, //div的css样式zindex
            speed:30000, //弹幕速度，飞过区域的毫秒数
            sumtime:900 , //弹幕运行总时间
            danmuss:mydanmuss, //danmuss对象，运行时的弹幕内容
            default_font_color:"#000000", //弹幕默认字体颜色
            font_size_small:24, //小号弹幕的字体大小,注意此属性值只能是整数
            font_size_big:32, //大号弹幕的字体大小
            opacity:"0.9", //弹幕默认透明度
            top_botton_danmu_time:6000 //顶端底端弹幕持续时间
      });
      $('#danmu').danmu('danmu_start');
      $('#danmu').danmu("add_danmu",a_danmu);
})