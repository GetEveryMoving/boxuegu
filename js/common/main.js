/**
 * Created by ������ on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        //��������·������
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        nprogress:'lib/nprogress/nprogress',
        template:'lib/artTemplate-3.0.1/template',
        //�Լ����õ�·��
        courseAdd:'js/course/add',
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3:'js/course/add_step3',
        courseCategory:'js/course/category',
        courseCategoryAdd:'js/course/category_add',
        courseList:'js/course/list',
        courseTopic:'js/course/topic',
        homeRepass:'js/home/repass',
        homeSettings:'js/home/settings',
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',
        userList:'js/user/list',
        userProfile:'js/user/profile',
        common:'js/common/common',
        login:'js/home/login',
        index:'js/index'
    },

    shim:{
        bootstrap:{
            deps:["jquery"]
        }
    }
});
require(['nprogress'],function(nprogress){
    nprogress.start();
});
require(['jquery','bootstrap','common']);

(function(window){
    var pathname=window.location.pathname;
    /*
    * �жϵ�¼״̬
    * 1����¼ҳ
    * 1,1.û��SESSID�����ù�
    * 1,2.��SESSID,��ת����ҳ
    *
    * 2.����ҳ
    * 2,1.û��SESSID ,��ת����¼ҳ
    * 2,2.��SESSID,���ù�*/

    require(['jquery','jqueryCookie'],function($,undefined){
        var sessID = $.cookie('PHPSESSID');
        if(pathname === '/html/home/login.html' && sessID){
            location.href='/';
        }else if(pathname !=='/html/home/login.html' && !sessID){
            location.href='/html/home/login.html';
        }

        switch(pathname){
            case "/":
                require(['index']);
                break;
            case "/html/user/list.html":
                require(['userList']);
                break;
            case "/html/user/profile.html":
                require(['userProfile']);
                break;
            case "/html/teacher/add.html":
                require(['teacherAdd']);
                break;
            case "/html/teacher/list.html":
                require(['teacherList']);
                break;
           case "/html/home/login.html":
                require(['login']);
                break;
            case "/html/home/repass.html":
                require(['homeRepass']);
                break;
            case "/html/home/settings.html":
                require(['homeSettings']);
                break;
            case "/html/course/add.html":
                require(['courseAdd']);
                break;
            case "/html/course/add_step1.html":
                require(['courseAdd_step1']);
                break;
            case "/html/course/add_step2.html":
                require(['courseAdd_step2']);
                break;
            case "/html/course/add_step3.html":
                require(['courseAdd_step3']);
                break;
            case "/html/course/category.html":
                require(['courseCateory']);
                break;
            case "/html/course/category_add.html":
                require(['courseCateory_add']);
                break;
            case "/html/course/list.html":
                require(['courseList']);
                break;
            case "/html/course/topic.html":
                require(['courseTopic']);
                break;
        }
    })

})(window);

