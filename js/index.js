/**
 * Created by hp on 2016/12/9.
 */
$("body").on("touchmove touchstart", function (e) {
    e.preventDefault();//ȡ����΢�Ų鿴ʱ��ˢ��״̬
});
var count=$(".page").length;
var index = 0;
touch.on("#container", "swipeup", function (e) {
    var page = $(e.target).closest(".page");
    index=$(".page").index(page);//��class="page"��Ԫ������page���������з���ֵ��û�з���-1
    if (index < (count-1)) {
        page.addClass("pageup").next(".page").removeClass("pagedown");
        page.find(".box").addClass("hide");
        page.next(".page").find(".box").removeClass("hide");
    }
})
touch.on("#container", "swipedown", function (e) {
    var page = $(e.target).closest(".page");
    index=$(".page").index(page);//��class="page"��Ԫ������page���������з���ֵ��û�з���-1
    if (index > 0) {
        page.addClass("pagedown").prev(".page").removeClass("pageup");
        page.find(".box").addClass("hide");
        page.prev(".page").find(".box").removeClass("hide");
    }
})