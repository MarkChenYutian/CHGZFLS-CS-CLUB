//标题序号计数器
var hCount = [0, 0, 0, 0, 0, 0];
//设置计数器
function setHCount(number) {
    //当前计数器加一
    hCount[number - 1]++;
    for (var i = number, length = hCount.length; i < length; i++) {
        //子目录计数器全部置零
        hCount[i] = 0;
    }
}
//重命名目录名称
function setHTagValue(item, number) {
    //获取标题名
    var text = $(item).get(0).innerHTML;
}
function renameHTag(item) {
    var tag = $(item).get(0).localName;
    if (tag === "h1") {
        setHCount(1);
      //console\.log("捕获到标签:%s", tag);
        setHTagValue(item, 1);
    }
    if (tag === "h2") {
        setHCount(2);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 2);
    }
    if (tag === "h3") {
        setHCount(3);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 3);
    }
    if (tag === "h4") {
        setHCount(4);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 4);
    }
    if (tag === "h5") {
        setHCount(5);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 5);
    }
    if (tag === "h6") {
        setHCount(6);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 6)
    }
}

function showOrCloseCategory() {
    var id = document.getElementById("category");
    var book_body=document.getElementById("book_body");
    //如果展开了
    if (id.style.display == 'block') {
        //console.log("开始展开");
        id.style.display='none';
        id.style.width="0%";
        book_body.style.width="100%";
        book_body.style.paddingleft=0;
    }
    //如果被折叠了
    else if (id.style.display =='none') {
        //console.log("开始折叠");
        id.style.display = 'block';
        book_body.style.width="90%";
        id.style.width="20%"
    }
}