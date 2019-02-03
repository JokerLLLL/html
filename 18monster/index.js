/**
 * Created by Administrator on 2019/2/3.
 */

//用 js实现瀑布流

function waterFall(wrap,boxes) {
    //盒宽  offsetWidth 只获取到 boder + 内容的宽  20表示 margin的 宽
    //思想 获取盒宽
    var box_with = boxes[0].offsetWidth  + 20;

    //外部容器宽度
    //思想 容器宽度
    var windows_with = document.documentElement.clientWidth;

    //每行能放的列数
    var colsnumber  = Math.floor(windows_with/box_with);

    //设置容器宽度
    wrap.style.width = (colsnumber*box_with + 'px');

    //定义一个数组并储存第一列的高度
    var total_height_array = [];
    for(var i=0;i < boxes.length; i++) {
        if(i < colsnumber) {
            total_height_array[i] = boxes[i].offsetHeight + 20;
        } else{
            //获取当前高度最小值
            var min_height = Math.min.apply(null,total_height_array);
            //最小值索引
            var min_index = getIndex(min_height,total_height_array);
            //获取这个盒子的左边距
            var left_value = boxes[min_index].offsetLeft - 10;
            //定位 第i个盒子
            boxes[i].style.position = 'absolute';
            boxes[i].style.top = min_height + 'px' ;
            boxes[i].style.left = left_value + 'px';
            total_height_array[min_index] += boxes[i].offsetHeight + 20;

        }
    }
}

/**
 * 返回数组值出现的位置
 * @param $value
 * @param $array
 * @returns {string}
 */
function getIndex($value,$array){
    for($index in $array) {
        if($array[$index] === $value) {
            return $index;
        }
    }
}

//js 瀑布流
// window.onload = function () {
//     return;
//     var wrap = document.getElementById('wrap');
//     var boxes = wrap.getElementsByTagName('div');
//     waterFall(wrap,boxes);
// }

// jquery 瀑布流

var jquery_waterfall = function (wrap,boxes) {
    //列数
    var boxWidth =boxes.eq(0).width() + 40;
    var windowWith = $(window).width();
    var colsNum = Math.floor(windowWith/boxWidth);

    //容器宽度
    wrap.width(boxWidth*colsNum);

    //每列高度
    var heights_array = [];
    for($i = 0;$i < boxes.length;$i ++) {
        if($i < colsNum) {
            heights_array[$i] = boxes.eq($i).height() + 40;
        }else{
            //绝对定位
            console.log(heights_array);
            var min_height = Math.min.apply(null,heights_array);
            var min_index = getIndex(min_height,heights_array);
            var leftValue = boxes.eq(min_index).position().left;
            //对 i个 box 进行定位 //增加 1s 动画效果
            boxes.eq($i).css({
                'position':'absolute',
                'top':min_height,
                'left':leftValue,
                'opacity':0,
            }).stop().animate({
                opacity:1
            },1000);
            //维护最小值
            heights_array[min_index] += boxes.eq($i).height() + 40;
        }

    }

}

$(document).ready(function(){
    var wrap = $('#wrap');
    var boxes = $('#wrap').children('div');
    jquery_waterfall(wrap,boxes);
})




