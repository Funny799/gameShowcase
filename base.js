function showItems(i) {
    items.innerHTML = items.innerHTML +
        "  <tr id=\"item"+i+"\" style=\"color: #ffffff\" onmouseover=\"mouseover("+i+")\" onmouseout='mouseover(-1)'>\n" +
        "    <td valign=\"middle\"><a href=\"items/"+item[i].id+".html\">\n" +
        "      <img class=\"header\" src=\"items/"+item[i].id+"/header.jpg\" alt=\""+item[i].title+"-头图\">\n" +
        "    </a></td>\n" +
        "    <td width='100%' valign=\"middle\" style=\"background-color: #414860\">\n" +
        "      <table width=\"100%\">\n" +
        "        <tr><th align=\"left\"><div><a class=\"title\" href=\"items/"+item[i].id+".html\">\n" +
        "          "+item[i].title+"\n" +
        "        </a></div></th></tr>\n" +
        "        <tr><td><div class=\"description\" style=\"text-indent: 2em\">\n" +
        "          “"+item[i].description+"”<br>\n" +
        "        </div></td></tr>\n" +
        "        <tr><td align=\"right\"><div class=\"description\">\n" +
        "          评分——"+item[i].score+"/10\n" +
        "        </div></td></tr>\n" +
        "      </table>\n" +
        "    </td>\n" +
        "  </tr>\n"
}
function showAllItems(){
    let i;
    items.innerHTML = "";
    for (i=0;i<size;i++){
        showItems(i);
    }
}
function searchItem(search){
    let i;
    items.innerHTML = "";
    var flag = 0;
    for (i=0;i<size;i++){
        if (item[i].title.search(search)!==-1) {
            flag++;
            showItems(i);
        }
    }
    if (flag===0&&search!=="按标题模糊搜索"){
        window.alert('未找到标题含有'+search+'的游戏！');
        showAllItems();
    }
    if (flag===0&&search==="按标题模糊搜索"){
        showAllItems();
    }
}
function loadItemPages(itemid) {
    var pageid;
    switch (itemid){
        case item[0].id:pageid = 0;break;
        case item[1].id:pageid = 1;break;
        case item[2].id:pageid = 2;break;
        case item[3].id:pageid = 3;break;
        case item[4].id:pageid = 4;break;
        case item[5].id:pageid = 5;break;
    }
    ssimgs = ["<img src=\""+itemid+"/ss_0.jpg\" width=\"1080\" alt=\"截图\">",
        "<img src=\""+itemid+"/ss_1.jpg\" width=\"1080\" alt=\"截图\">",
        "<img src=\""+itemid+"/ss_2.jpg\" width=\"1080\" alt=\"截图\">",
        "<img src=\""+itemid+"/ss_3.jpg\" width=\"1080\" alt=\"截图\">",
        "<img src=\""+itemid+"/ss_4.jpg\" width=\"1080\" alt=\"截图\">",
        "<img src=\""+itemid+"/ss_5.jpg\" width=\"1080\" alt=\"截图\">",];
    ss.innerHTML = "<img src=\""+itemid+"/ss_0.jpg\" width=\"1080\" alt=\"截图\">";
    for (let i=0; i<ssimgs.length; i++){
        document.getElementById("ss"+i).innerHTML =
            "<a href=\"javascript:click("+i+")\"><img src=\""+itemid+"/ss_"+i+".jpg\" width=\"160\" alt=\"截图"+i+"\"></a>";
    }
    maindiv.style.backgroundImage = "url("+itemid+"/page_bg_raw.jpg)";
    main.innerText = main.innerText + item[pageid].title;
    index.innerHTML = "\n" +
        "    <a href=\"../index.html\"><div class=\"index\">首页</div></a><div class=\"index\">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</div>\n" +
        "    <a href=\""+item[pageid].id+".html\"><div class=\"index\">"+item[pageid].title+"</div></a>\n" +
        "  ";
    item_title.innerHTML = "<div class=\"title\">"+item[pageid].title+"</div>";
    item_cover.innerHTML = "<img src=\""+itemid+"/cover.jpg\" class=\"cover\" alt=\"封面\">";
    item_score.innerHTML = "<div class=\"description\">评分:"+item[pageid].score+"/10</div>";
    item_description.innerHTML = "<div class=\"description\" style=\"text-indent: 2em\">\n" +
        "        “"+item[pageid].description+"”\n" +
        "      </div>";
    item_achievement.innerHTML = "<div class=\"description\">\n" +
        "    成就进度："+item[pageid].achievement+"/"+item[pageid].achievement_total+"</div>\n" +
        "    <progress style=\"width: 100%\" value=\""+item[pageid].achievement+"\" max=\""+item[pageid].achievement_total+"\"></progress>";
    item_time.innerHTML = "<div class=\"description\">\n" +
        "    游戏时长<br>"+item[pageid].time+"小时\n" +
        "  </div>";
    ss0.style.backgroundColor = "#4c6b22" ;
}