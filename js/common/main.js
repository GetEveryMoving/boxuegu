/**
 * Created by ������ on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        //��������·������
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap',
        //�Լ����õ�·��
        userList:'js/user/list',
        userProfile:'js/user/profile',
        common:'js/common/common'
    },

    shim:{
        bootstrap:{
            deps:["jquery"]
        }
    }
});
require(['jquery','bootstrap','common']);

(function(window){
    var pathname=window.location.pathname;
    switch(pathname){
        case "/html/user/list.html":
            require(['userList']);
            break;
        case "/html/user/profile.html":
            require(['userProfile']);
            break;
    }
})(window);

