/**
 * Created by hp on 2016/12/9.
 */
$("body").on("touchmove touchstart", function (e) {
    e.preventDefault();//取消用微信查看时的刷新状态
});
var count=$(".page").length;
var index = 0;
touch.on("#container", "swipeup", function (e) {
    var page = $(e.target).closest(".page");
    index=$(".page").index(page);//在class="page"的元素里找page的索引，有返回值，没有返回-1
    if (index < (count-1)) {
        page.addClass("pageup").next(".page").removeClass("pagedown");
        page.find(".box").addClass("hide");
        page.next(".page").find(".box").removeClass("hide");
    }
})
touch.on("#container", "swipedown", function (e) {
    var page = $(e.target).closest(".page");
    index=$(".page").index(page);//在class="page"的元素里找page的索引，有返回值，没有返回-1
    if (index > 0) {
        page.addClass("pagedown").prev(".page").removeClass("pageup");
        page.find(".box").addClass("hide");
        page.prev(".page").find(".box").removeClass("hide");
    }
})