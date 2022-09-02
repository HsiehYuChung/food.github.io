//獎品項目
var prize_list = [
  {
    name: "拉麵",
    //img: "https://cdn-icons-png.flaticon.com/512/1405/1405225.png"
    img: "https://i.pinimg.com/474x/1d/af/a5/1dafa5a3aafd616e4cfea3f87f07a105.jpg"
  },
  {
    name: "麥當勞",
    img: "https://i.pinimg.com/474x/89/3e/b9/893eb9b2ff54f3da0685196b86758f4e.jpg"
  },
  {
    name: "鍋貼",
    img: "http://pic.pimg.tw/tassmania/normal_4a125072b16f8.jpg"
  },
  {
    name: "便利商店",
    img: "https://s3.goodlife.tw/system/company/logos/13/small_original_7-11.jpg"
  },
  {
    name: "鍋燒意麵",
    img: "https://tokyo-kitchen.icook.network/uploads/recipe/cover/228874/3e95d20b36732cde.jpg"
  },
  {
    name: "牛肉麵",
    img: "https://joes.tw/wp-content/uploads/pixnet/6ca33a59664e944edba61142a21dcb9b.jpg"
  },
  {
    name: "炒飯",
    img: "https://pic.pimg.tw/etliaw/1628657551-3958863848-g_m.jpg"
  },
  {
    name: "韓式料理",
    img: "https://i.pinimg.com/474x/2e/c7/c9/2ec7c93588cac480290938f71eaafdfa.jpg"
  },
]

for(var i=0; i<=7; i++){
  $(".list ul").append("<li><p>"+prize_list[i].name+"</p><img src='"+prize_list[i].img+"'></li>");
}


// 假設iEnd是請求獲得的獎品結果
var iEnd = -1;

$(".turntable_btn").on("click", function(){

    var $this = $(this);

    iEnd = Math.floor(Math.random() * 8);
    console.log(iEnd);
    var prize = $(".list").find("li").eq(iEnd).find("p").html();
    // console.log(prize);
  
    rotating();
    //禁用
    $this.attr("disabled", "disabled");
  
    setTimeout(function(){
        // 恢復按鈕
        $this.removeAttr("disabled");
        $(".list ul").removeClass("go");
        $(".polyline").removeClass("go");
        $(".circle circle").removeClass("go");
        var prize = $(".list").find("li").eq(iEnd).find("p").html().replace("<br>","");
        // console.log(prize);
        alert('就決定吃：'+ prize +'了吧!!');
        
        window.open(' https://www.google.com.tw/maps/search/'+ prize +'');
    }, 4200);
    
});

function rotating()
{
        // console.log(iEnd);
    $(".list ul").addClass("go");
    $(".polyline").addClass("go");
    $(".circle circle").addClass("go");
    
    // var rotate = prize_list.attr("style");
    // var rotate_split_1 = rotate.split(":");
    // var rotate_split_2 = rotate_split_1[1].split("(");
    // var rotate_split_3 = rotate_split_2[1].split("deg");
    // //旋轉度
    // var rotate_deg = rotate_split_3[0];
    // // console.log(rotate_deg);

    switch (iEnd)
      {
      case 0:
        $(".polyline").css("transform","rotate(0deg)");
        $(".list ul").css("transform","rotate(0deg)");
        break;
      case 1:
        $(".polyline").css("transform","rotate(45deg)");
        $(".list ul").css("transform","rotate(45deg)");
        break;
      case 2:
        $(".polyline").css("transform","rotate(90deg)");
        $(".list ul").css("transform","rotate(90deg)");
        break;
      case 3:
        $(".polyline").css("transform","rotate(135deg)");
        $(".list ul").css("transform","rotate(135deg)");
        break;
      case 4:
        $(".polyline").css("transform","rotate(180deg)");
        $(".list ul").css("transform","rotate(180deg)");
        break;
      case 5:
        $(".polyline").css("transform","rotate(225deg)");
        $(".list ul").css("transform","rotate(225deg)");
        break;
      case 6:
        $(".polyline").css("transform","rotate(270deg)");
        $(".list ul").css("transform","rotate(270deg)");
        break;
      case 7:
        $(".polyline").css("transform","rotate(315deg)");
        $(".list ul").css("transform","rotate(315deg)");
        break;
      }
}