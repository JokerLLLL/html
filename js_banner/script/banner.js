/**
 * Created by JokerL on 2018/12/18.
 */
var
    time = null,
    //dom
    main = document.getElementById('main'),
    banners = document.getElementsByClassName('banner-list'),
    dots = document.getElementsByClassName('dot'),
    prev = document.getElementById('prev'),
    mext = document.getElementById('next'),

    max_index = (banners.length - 1),
    index = 0;

//end var;

main.onmouseover = function () {
    //移除定时器
    endTimeImage();
}

main.onmouseout = function () {
    //设置定时器
    //自动播放图
    outTimeImage();
}

prev.onclick = function () {
    subIndex();
    changeImage(index);
}
next.onclick = function () {
    addIndex();
    changeImage(index);
}
// 点击导航切换
for(var $i=0,$len=dots.length;$i < $len;$i++){
    dots[$i].value = $i;
    dots[$i].onclick = function(){
        index = this.value;
        changeImage(index)
    }
}


function addIndex()
{
    if(index >= max_index) {
        index = 0;
    }else {
        index++
    }
}

function subIndex()
{
    if(index == 0) {
        index = max_index;
    }else {
        index--;
    }
}

function outTimeImage() {
    time = setInterval(function () {
        console.log('aaa');
        addIndex();
        changeImage(index);
    },1000)
}

function endTimeImage() {
    if(time) {
        clearInterval(time);
    }
}

function changeImage($index) {
    /* 隐藏其他图片和*/
    for(var $i = 0,$lengh = banners.length; $i < $lengh; $i++) {
        banners[$i].style.display = 'none';
        dots[$i].className = 'dot';
    }
    banners[$index].style.display = 'block';
    dots[$index].className = 'dot active';
}

//开始就调用
outTimeImage();



var menu_block = document.getElementById('sub-menu'),
inner_box = document.getElementsByClassName('inner-box'),
    menu_item = document.getElementsByClassName('menu-item'),
out = document.getElementById('out');

/**
 * 展示子信息
 * @param $index
 */
function showBlock($index){
    menu_block.style.display = 'block';
    for(var i = 0;i < inner_box.length;i++) {
        inner_box[i].style.display = 'none';
    }
    inner_box[$index].style.display = 'block';
}

/**
 *  隐藏子信息
 */
function moveBlock() {
    menu_block.style.display = 'none';
    for(var i = 0;i < inner_box.length;i++) {
        inner_box[i].style.display = 'none';
    }
}

// 绑定点击事件
for(let i = 0;i < menu_item.length;i++) {
    console.log(menu_item[i]);
    menu_item[i].onmouseover = function (event) {
        showBlock(i)
        console.log('xxx')
    }
}

// out.onmouseout = function () {
//     moveBlock();
// }

