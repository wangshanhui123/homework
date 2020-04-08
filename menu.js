$(document).ready(function(){
    // s1,s2,s3,s4,s5,s6为拼接html标签定义变量
    var s1 = '<div class="row new-word"><div class="col-xs-8"><div class="word-box"><div class="new-title-box"><span>';
    var s2 = '</span></div><div class="row"><div class="col-xs-5"><span class="font-box">'
    var s3 = '</span></div><div class="col-xs-7"><span class="font-box">'
    var s4 = '</span></div></div></div></div><div class="col-xs-4"><a href="#" class="nav-a"><img src="';
    var s5 = '" class="img-responsive new-photo" alt="Responsive image"></a></div</div>';
    var s6='';
    // 定义newtext数组接收新闻内容的各项数据
    var newtext = new Array();
    
    $.ajax({
        url: "data.json",
        type: "GET",
        dataType: "json",
        success: function(data){
            newtext = data.result;
            // 渲染新闻内容
            for(var i=0; i<newtext.length;i++){
                s6=s1+newtext[i].title+s2+newtext[i].time.substring(1,5)+'发布'+s3+newtext[i].author+s4+newtext[i].img+s5;
                $(".new-all").append(s6);
            }
        },
        error: function(){
            alert("获取数据失败");
        }
        
    })
})