/**
 * Created by ������ on 2017/2/26.
 */
define(["jquery","jqueryCookie"],function($,undefined){
   //ajax����loading
    $(document).ajaxStart(function(){
        $(".overlay").show();
    }).ajaxStop(function(){
        $(".overlay").hide();
    });
    // ��ർ�������б�
    $(".navs a").click(function(){
        //console.log(123);
        $(this).next().slideToggle();
    });

    /*
    * ����ҳ��·����λ��ർ��
    * 1����ȡ��ǰҳ���pathname
    * 2��Ȼ���ȡ���е�a��remove��active���class��
    * Ȼ����ʹ��pathname��ȡ��Ӧ��ѡ�е�a��������� active class����*/
    var pathname=window.location.pathname;
    $(".navs a ").removeClass('active').filter('[href ="'+pathname+'"]').addClass("active").parents('ul').show();



    //�˳�����
    $("#logout").on('click',function(){
        $.post('/v6/logout',function(data){
            if(data.code ==200){
                location.href='/html/home/login.html';
            }
        });
    });
        //��ȡ����cookie�û���Ϣ��ͬʱ���ݴ���
    var userInfo =null;
    try{
        userInfo= JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo ={};
    }

    //Ȼ��չʾ����ർ��
    $('.aside .profile h4').html(userInfo.tc_name ? userInfo.tc_name:'�������������');
    $('.aside .profile img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar:'/img/default.jpg');
});