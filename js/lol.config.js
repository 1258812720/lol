/**
 * 数据配置脚本
 */
const page = {
    "top_bg": "https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_e161f7f41c846d50de49af31fdfc0827/0",
    "top_bg1": "https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_9b9d40d9b483e5546e42d2d6b8605c28/0",
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
const url_hero_list = "https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?v=30";
const video_url = [
    "https://apps.game.qq.com/wmp/v3.1/?p0=3&p1=searchKeywordsList&page=1&pagesize=12&order=sIdxTime&type=iTag&id=1269&r0=jsonp&source=web_pc&r1=",
    "https://apps.game.qq.com/wmp/v3.1/?p0=3&p1=searchKeywordsList&page=1&pagesize=12&order=sIdxTime&type=iTag&id=1270&r0=jsonp&source=web_pc&r1=",
    "https://apps.game.qq.com/wmp/v3.1/?p0=3&p1=searchKeywordsList&page=1&pagesize=12&order=sIdxTime&type=iTag&id=1256&r0=jsonp&source=web_pc&r1=",
    "https://apps.game.qq.com/wmp/v3.1/?p0=3&p1=searchKeywordsList&page=1&pagesize=12&order=sIdxTime&type=iTag&id=1253&r0=jsonp&source=web_pc&r1=",
    "https://apps.game.qq.com/wmp/v3.1/?p0=3&p1=searchKeywordsList&page=1&pagesize=12&order=sIdxTime&type=iTag&id=1258&r0=jsonp&source=web_pc&r1=",
    "https://apps.game.qq.com/wmp/v3.1/?p0=3&p1=searchKeywordsList&page=1&pagesize=12&order=sIdxTime&type=iTag&id=1250&r0=jsonp&source=web_pc&r1="
];
const video_play_host="https://lol.qq.com/v/v2/detail.shtml?docid=";
const hero_type = [
    { txt: "所有英雄", value: 'all' },
    { txt: "战士", value: 'tank' },
    { txt: "法师", value: 'mage' },
    { txt: "刺客", value: 'assassin' },
    { txt: "坦克", value: 'tank' },
    { txt: "射手", value: 'marksman' },
    { txt: "辅助", value: 'support' }
];
const video_menu = [
    { txt: "推荐", value: 0 },
    { txt: "官方", value: 1 },
    { txt: "娱乐", value: 2 },
    { txt: "赛事", value: 3 },
    { txt: "云顶之弈", value: 4 },
    { txt: "教学", value: 5 }
]
const list = {
    menu: [
        {
            txt: "游戏资料",
            txt_en: "game info"
        },
        {
            txt: "商城/合作",
            txt_en: "STORe"
        }, {
            txt: "社区互动",
            txt_en: "COMMUNITY"
        }, {
            txt: "赛事官网",
            txt_en: "ESPORTS"
        }, {
            txt: "自助系统",
            txt_en: "SYSTEM"
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
const tab_config = {
    activity: [{
        txt: "正在进行",
        value: 0
    }, {
        txt: "商城特惠",
        value: 1
    }, {
        txt: "长期活动",
        value: 2
    }],
    data: [
        [{
            src: 'https://ossweb-img.qq.com/images/clientpop/act/lol_1692341340_uploadnewsImg.png',
            txt: '玉剑传说罗技联名礼盒限时开售',
            last_day: 8,
            is_new: true,
            desc: '购买即赠英雄联盟手游 玉剑传说系列皮肤\n2023-08-18 - 2023-10-07'
        },
        {
            src: 'https://ossweb-img.qq.com/images/clientpop/act/lol_1691027915_uploadnewsImg.jpg',
            txt: 'Hot Toys联名珍藏手办发售中！',
            last_day: 7,
            desc: '卡莎艾希相聚一堂，合力为荣耀而战！\n2023-08-03 - 2023-08-31'
        }, {
            src: 'https://ossweb-img.qq.com/images/clientpop/act/lol_1692065611_uploadnewsImg.jpg',
            txt: '七夕限定，就想粘你手办上线',
            last_day: 6,
            desc: '觅心猫猫悠米新款炫彩手办礼盒，甜蜜开售中！'
        }, {
            src: 'https://ossweb-img.qq.com/images/clientpop/act/lol_1686620592_uploadnewsImg.jpg',
            txt: '第9新赛季小小英雄',
            last_day: -1,
            is_new: false,
            desc: '鸡哥鸡哥救救我！收到，我来了！还有2位新伙伴 组队吗？'
        }], [{
            src: 'https://ossweb-img.qq.com/images/clientpop/act/lol_1692341340_uploadnewsImg.png',
            txt: '玉剑传说罗技联名礼盒限时开售',
            last_day: 8,
            is_new: false,
            desc: '购买即赠英雄联盟手游 玉剑传说系列皮肤\n2023-08-18 - 2023-10-07'
        },
        {
            src: 'https://ossweb-img.qq.com/images/clientpop/act/lol_1691027915_uploadnewsImg.jpg',
            txt: 'Hot Toys联名珍藏手办发售中！',
            last_day: 7,
            is_new: false,
            desc: '卡莎艾希相聚一堂，合力为荣耀而战！\n2023-08-03 - 2023-08-31'
        }], [
            {
                src: 'img/kunkun.png',
                txt: '肯德基&鸡哥联名',
                last_day: 7,
                is_new: false,
                desc: '因为能跟PD合作\r2023-08-03 - 2023-08-31'
            }
        ]
    ]
}
const download_config = {
    list: [
        {
            txt: '在线客服',
            postion: [-316, -12]
        }, {
            txt: '秩序殿堂',
            postion: [-219, -72]
        }, {
            txt: '游戏资料',
            postion: [-343, -12]
        }, {
            txt: '峡谷之巅',
            postion: [-193, -72]
        }, {
            txt: '云顶之弈',
            postion: [-280, -125]
        }, {
            txt: '攻略中心',
            postion: [-371, -12]
        }, {
            txt: 'LOL宇宙',
            postion: [-274, -46]
        }, {
            txt: '微信绑定',
            postion: [-193, -46]
        }
    ]
}