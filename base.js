//每个item的id
const id = [570940,335300,374320,1245620,1091500,239140];
//每个游戏项item的标题
const title = ["DARK SOULS™: REMASTERED",
    "DARK SOULS™ II: Scholar of the First Sin",
    "DARK SOULS™ III",
    "艾尔登法环",
    "赛博朋克2077",
    "Dying Light"];
//每个游戏项item的描述
const description = ["《黑暗之魂》系列第一部，重制之后画质和流畅度提升，保留了原汁原味的设计，精巧设计的箱庭地图，让你有一种山穷水复疑无路，柳暗花明又一村的感觉。",
    "《黑暗之魂》系列第二部，并非由初代作者宫崎英高主导，游戏机制改动较大，敌人数量不合理，但是如蜜和绿袍女将会给你带来温暖。",
    "《黑暗之魂》系列第三部，作为系列终曲，该部画面手感对比前两作都有了极大提升，地图依旧是箱庭设计，场景转换自然，背景音乐十分动人，在游玩途中会有身临其境之感。",
    "宫崎英高主题乐园，魂类游戏集大成之作！主人公性能对比有极大提升，玩法自然也多了起来，法术战技很炫酷，开放地图区域很大但也保留了魂类游戏优秀的箱庭地图设计，剧情一如既然‘碎片化叙事’，令人浮想联翩。",
    "《巫师》系列开发商CDPR推出第一人称未来科技游戏，宣发工作十足，剧情节奏引人入胜，游戏性比较一般，更推荐其衍生作品《赛博朋克：边缘行者》。",
    "爽快的第一人称丧尸题材游戏，胆小勿入，优质的剧情，足量的流程，物美价廉。"];
//每个游戏项item的得分
const score = ["9.0", "7.5", "9.5", "9.0", "7.5","8.5"];
//每个游戏项item完成的成就
const achievement = [19,18,38,42,44,66];
//每个游戏项item所有的成就数
const achievement_total = [42,38,43,42,44,78];
//每个游戏项item的游戏时间
const time = [56,31.8,64,152.6,114.1,102.4];
//目前所有游戏项item的数量
const size = title.length;
function showItems(i) {
    items.innerHTML = items.innerHTML +
        "  <tr id=\"item"+i+"\" style=\"color: #ffffff\" onmouseover=\"mouseover("+i+")\" onmouseout='mouseover(-1)'>\n" +
        "    <td valign=\"middle\"><a href=\"items/"+id[i]+".html\">\n" +
        "      <img class=\"header\" src=\"items/"+id[i]+"/header.jpg\" alt=\""+title[i]+"-头图\">\n" +
        "    </a></td>\n" +
        "    <td width='100%' valign=\"middle\" style=\"background-color: #414860\">\n" +
        "      <table width=\"100%\">\n" +
        "        <tr><th align=\"left\"><div><a class=\"title\" href=\"items/"+id[i]+".html\">\n" +
        "          "+title[i]+"\n" +
        "        </a></div></th></tr>\n" +
        "        <tr><td><div class=\"description\" style=\"text-indent: 2em\">\n" +
        "          “"+description[i]+"”<br>\n" +
        "        </div></td></tr>\n" +
        "        <tr><td align=\"right\"><div class=\"description\">\n" +
        "          评分——"+score[i]+"/10\n" +
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
        if (title[i].search(search)!==-1) {
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
        case id[0]:pageid = 0;break;
        case id[1]:pageid = 1;break;
        case id[2]:pageid = 2;break;
        case id[3]:pageid = 3;break;
        case id[4]:pageid = 4;break;
        case id[5]:pageid = 5;break;
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
    main.innerText = main.innerText + title[pageid];
    index.innerHTML = "\n" +
        "    <a href=\"../index.html\"><div class=\"index\">首页</div></a><div class=\"index\">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</div>\n" +
        "    <a href=\""+id[pageid]+".html\"><div class=\"index\">"+title[pageid]+"</div></a>\n" +
        "  ";
    item_title.innerHTML = "<div class=\"title\">"+title[pageid]+"</div>";
    item_cover.innerHTML = "<img src=\""+itemid+"/cover.jpg\" class=\"cover\" alt=\"封面\">";
        item_score.innerHTML = "<div class=\"description\">评分:"+score[pageid]+"/10</div>";
    item_description.innerHTML = "<div class=\"description\" style=\"text-indent: 2em\">\n" +
        "        “"+description[pageid]+"”\n" +
        "      </div>";
    item_achievement.innerHTML = "<div class=\"description\">\n" +
        "    成就进度："+achievement[pageid]+"/"+achievement_total[pageid]+"</div>\n" +
        "    <progress style=\"width: 100%\" value=\""+achievement[pageid]+"\" max=\""+achievement_total[pageid]+"\"></progress>";
    item_time.innerHTML = "<div class=\"description\">\n" +
        "    游戏时长<br>"+time[pageid]+"小时\n" +
        "  </div>";
    ss0.style.backgroundColor = "#4c6b22" ;
}