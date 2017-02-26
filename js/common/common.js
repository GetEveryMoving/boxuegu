/**
 * Created by амаёЮФ on 2017/2/26.
 */
define(["jquery"],function($){
    $(".navs a").click(function(){
        console.log(123);
        $(this).next().slideToggle();
    });

   
});