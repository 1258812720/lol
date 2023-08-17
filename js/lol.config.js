/**
 * 数据配置脚本
 */
const page = {
    "top_bg": "https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_fc06683d2f6ff1b5535fdbbd533ef1ba/0",
    "top_bg1": "https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_dd8dbf05bf73072a5fba4120bda9c192/0",
    "txt_logo": "https://game.gtimg.cn/images/lol/v3/logo-public.png"
}
const sprite = "https://game.gtimg.cn/images/lol/v3/topfoot-spr.png";// 精灵图
// 新闻信息接口
const new_uri = 
    ["https://apps.game.qq.com/cmc/zmMcnTargetContentList?r0=jsonp&page=1&num=7&target=24&source=web_pc&r1=_jsonp",
"https://apps.game.qq.com/cmc/zmMcnTargetContentList?r0=jsonp&page=1&num=7&target=27&source=web_pc&r1=_jsonp",
"https://apps.game.qq.com/cmc/zmMcnTargetContentList?r0=jsonp&page=1&num=7&target=25&source=web_pc&r1=_jsonp",
"https://apps.game.qq.com/cmc/zmMcnTargetContentList?r0=jsonp&page=1&num=7&target=24&source=web_pc&r1=_jsonp",
"https://apps.game.qq.com/cmc/zmMcnTargetContentList?r0=jsonp&page=1&num=7&target=23&source=web_pc&r1=_jsonp"];
const list = {
    menu: [
        {
            txt: "游戏资料",
            txt_en: "game info"
        },
        {
            txt: "商城/合作",
            txt_en: "STORe"
        },{
            txt:"社区互动",
            txt_en:"COMMUNITY"
        },{
            txt:"赛事官网",
            txt_en:"ESPORTS"
        },{
            txt:"自助系统",
            txt_en:"SYSTEM"
        }
    ],
    menu2: [
        [
            {
                txt: "游戏下载",
                icon: [-347, -84]
            },
            {
                txt: "新手只因"
            }
        ], [
            {
                txt: "点券充值",
                icon: [-381, -65]
            }
        ]
    ],
    swiper: {
        tab: ["十二周年战斗之夜", "斗魂觉醒", "神话级棋盘限时获取", "巅峰夺宝", "七夕限定悠米手办上线"],
        data: ["https://ossweb-img.qq.com/upload/adw/image/977/20230808/76c29ef3289f10f3e43625ddc9eadba3.jpeg",
            "https://ossweb-img.qq.com/upload/adw/image/977/20230804/153df95b4f999a6d1538da2209e98a52.jpeg",
            "https://ossweb-img.qq.com/upload/adw/image/977/20230720/8db5db7da2a22b1347aa8474162a5610.jpeg",
            "https://ossweb-img.qq.com/upload/adw/image/977/20230725/442b3db768eb10ab18775e131686100a.jpeg",
            "https://ossweb-img.qq.com/upload/adw/image/977/20230810/2a72e0911d83a1ff2a9c05b1191e9e36.jpeg"
        ]
    }
}