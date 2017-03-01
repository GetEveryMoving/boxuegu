/**
 * Created by 熊旭文 on 2017/2/26.
 */
define(["jquery","jqueryCookie"],function($,undefined){
   //ajax请求loading
    $(document).ajaxStart(function(){
        $(".overlay").show();
    }).ajaxStop(function(){
        $(".overlay").hide();
    });
    // 左侧导航下拉列表
    $(".navs a").click(function(){
        //console.log(123);
        $(this).next().slideToggle();
    });

    /*
    * 根据页面路径定位左侧导航
    * 1，获取当前页面的pathname
    * 2，然后获取所有的a，remove掉active这个class，
    * 然后在使用pathname获取到应该选中的a，给它添加 active class即可*/
    var pathname=window.location.pathname;
    $(".navs a ").removeClass('active').filter('[href ="'+pathname+'"]').addClass("active").parents('ul').show();



    //退出功能
    $("#logout").on('click',function(){
        $.post('/v6/logout',function(data){
            if(data.code ==200){
                location.href='/html/home/login.html';
            }
        });
    });
        //获取本地cookie用户信息，同时做容错处理
    var userInfo =null;
    try{
        userInfo= JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo ={};
    }

    //然后展示到左侧导航
    $('.aside .profile h4').html(userInfo.tc_name ? userInfo.tc_name:'请设置你的名字');
    $('.aside .profile img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar:'/img/default.jpg');
});