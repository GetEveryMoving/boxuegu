/**
 * Created by ������ on 2017/2/26.
 */
define(['jquery','jqueryCookie',"nprogress"],function($,undefined,nprogress){

    /*
    * չʾ�û�����ʷ��¼ͷ��
    * 1����ȡuerInfo���cookieֵ
    * 2����cookie�ַ���ת��Ϊ����
    * 3�����õ�¼ҳ��img-src����ֵ�����û�и�һ��Ĭ��ͷ��ĵ�ַ*/
    var userInfo =null;
    try{
        userInfo=  JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo ={};
    }
    $(".login .avatar img ").attr('src',userInfo.tc_avatar ? userInfo.tc_avatar:'/img/default.jpg');
    //$('.aside .profile img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar:'/img/default.jpg');

    /*
    * 1,�ȼ���form�����ύ�¼�
    * 2���¼��ص���return��ֹĬ�ϵ��ύ
    * 3���¼��ص�ͨ��ajax�ķ�ʽ���ͱ�����
    * 4������ص�����е�codeΪ200��֤����¼�ɹ�����ת����ҳ*/
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