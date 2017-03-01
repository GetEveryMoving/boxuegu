/**
 * Created by 熊旭文 on 2017/2/26.
 */
define(['jquery','jqueryCookie',"nprogress"],function($,undefined,nprogress){

    /*
    * 展示用户的历史登录头像
    * 1，获取uerInfo这个cookie值
    * 2，把cookie字符串转化为对象
    * 3，设置登录页的img-src属性值，如果没有给一个默认头像的地址*/
    var userInfo =null;
    try{
        userInfo=  JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo ={};
    }
    $(".login .avatar img ").attr('src',userInfo.tc_avatar ? userInfo.tc_avatar:'/img/default.jpg');
    //$('.aside .profile img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar:'/img/default.jpg');

    /*
    * 1,先监听form表单的提交事件
    * 2，事件回调中return阻止默认的提交
    * 3，事件回调通过ajax的方式发送表单数据
    * 4，如果回调结果中的code为200，证明登录成功，跳转到首页*/
    $("#form-login").on("submit",function(){
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                if(data.code ===200){
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/';
                }
            }
        });
        return false;
    });
    nprogress.done();
});