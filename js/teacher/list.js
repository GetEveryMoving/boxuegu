/**
 * Created by ������ on 2017/2/26.
 */
define(['jquery','common',"nprogress","template"],function($,undefined,nprogress,template){
    nprogress.done();

    //��Ⱦ��ʦ�б�
    $.get('/v6/teacher',function(data){
        if(data.code ==200){
            var html = template('teacher-list-tpl',{list:data.result});
            $('#teacher-list-tbody').html(html);
        }
    });

    //ͨ���¼�ί�еķ�ʽ����̬���ɵ�a��ǩ�󶨵���¼���
    //Ȼ���ȡ��ʦ��ϸ��Ϣ��չʾ
    $("#teacher-list-tbody").on('click','.teacher-view',function(){
        $.get('/v6/teacher/view',{
            tc_id:$(this).parent().attr('data-id')
        },function(data){
            if(data.code == 200){
                console.log(123);
                var html= template('teacher-view-tpl',data.result);
                //console.log(html);
                $('#teacherModal').html(html);
            }
        })
    })
});