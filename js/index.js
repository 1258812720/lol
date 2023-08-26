/** 主界面脚本
 * @author 刘海斌
 * @editor all
 */
const main = $(".news_wrapper");
// 页面初始化
// 响应式数据
function ref(obj, c) {
    if (obj) {
        return new Proxy(obj, {
            set(tar, key, val) {
                tar[Number(key)] = val;
                if (c && typeof c === 'function') {
                    c(tar, Number(key));
                }
            },
            get(t, k) {
                return t[k];
            }
        });
    }
}

// 封装的tab组件库
$.fn.extend({
    /**
     * 
     * @param {*} config  {init, col:Array-> [{txt:string,value:number}],select:function }
     */
    createTabBtn: function (config) {
        let _t = $(this);
        let path_index = 0;
        if (config.init && typeof config.init === 'function') {
            config.init(_t);
        }
        if (_t && config.col) {
            config.col.forEach((val, i) => {
                let btn = $(`<div class='tab-button ${i === 0 ? 'selected' : ''}' select-id="${val.value}">
                    ${val.txt}
                 </div>`);
                if (config.select && typeof config.select === 'function') {
                    btn.on("click", function () {
                        if ($(this).index() === path_index) {
                            return;
                        } else {
                            config.select(val.value, _t);
                            btn.addClass("selected")
                                .siblings().removeClass("selected");
                            path_index = $(this).index()
                        }

                    })
                }
                _t.append(btn);
            });
        }
        return _t;
    }
});
const news_data = ref([], (data, idx) => {
    let p = main.eq(idx);
    let lists = data[idx].data.result;
    lists.forEach((a, b) => {
        let date = new Date(a['sCreated']);
        let _node = $(`<li>  
        <span class="s_title">${a['sTitle']}</span>
        <label>${date.getMonth() + 1}-${date.getDate()}</label>
          </li>`);
        p.append(_node);
    })
});
// 全局请求处理函数 jsonp
function _jsonp(data) {
    try {
        news_data.push(data);
    } catch (err) { }
}
$(document).ready(function () {
    window.__proto__.message = function (msg) {
        let div = $(`
        <div class="el-message"></div>
        `);
        let inner_div = $(`<div class="__inner_message">
            ${msg ? msg : '暂无消息'}
        </div>`);
        let emoji = $("<img src='img/emoji.jpg' />");
        inner_div.click(e => {
            e.stopPropagation();
        });
        div.append(inner_div);
        inner_div.append(emoji);
        div.on("click", () => {
            inner_div.removeClass("show")
                .addClass("hide");
            div.fadeOut(300);
            setTimeout(() => {
                div.remove();
            }, 340)
        });
        div.css({
            opacity: 1
        });
        $("body").append(div);
        if (inner_div.is(":visible")) {
            inner_div.addClass("show");
        }
    }

    /**
     * 
     * @param {测试} data 
     * @param {*} nodes 
     * @returns 
     */
    $("#click").click(() => {
        message();
    });

    // 渲染属性到img
    function set_attr(data, nodes) {
        if (!data || !nodes) {
            return
        }
        for (const k in page) {
            nodes.each((n, e) => {
                let name = e.className;
                if (name && name === k) {
                    const img = page[k];
                    e.src = img;
                }
            })
        }
    }

    set_attr(page, $("img"));
    const menu = $(".menu_list");
    var first = true;
    const content = $(".menu-wrapper").eq(0)
    list.menu.forEach(item => {
        let li = $(`<li class='menu_items'> 
            <span class="menu_dazi"> ${item.txt.toLocaleUpperCase()} </span>
            <span class="menu_xiaozi">${item.txt_en.toLocaleUpperCase()}</span>
        </li>`);
        menu.append(li);
    });
    menu.on("mouseenter", () => {
        content.parent(".menu_content").css({
            display: "block"
        }).addClass("fade-in");
        if (first) {
            first = !first;
            menu_init();
        }
    });
    content.on("mouseleave", () => {
        content.parent(".menu_content").removeClass("fade-in").css({
            display: "none"
        });
    });

    // 菜单栏
    function menu_init() {
        list.menu2.forEach(item => {
            let ul = null;
            if (item && item.length > 0) {
                ul = $("<ul class='menu-ul'></ul>");
                item.forEach(child => {
                    let li = $(`<li class="menu-child">
                        ${child.icon ? '<i class="menu-icon " style="--icon-x:' + child.icon[0] + 'px;--icon-y:' + child.icon[1] + 'px;"></i>' : ''}
                        <span> ${child.txt} </span>
                    </li>`);
                    ul.append(li)
                });
            }
            if (ul) {
                content.append(ul)
            }
        });
    }
    const content02 = {
        init() {
            this.swiper()
                .tab()
                .scroll((data) => {
                    // console.log(data);
                }).tool();
        },
        his_index: 0,
        tool() {
            $("#back-top").click(() => {
                $("html,body").animate({
                    scrollTop: 0
                }, 430)
            });
            // 热门活动
            let contents = $(".tab-list-activity-wrapper");
            let height = contents.height();
            // 创建tab按钮组
            $(".tab-list-activity").createTabBtn({
                col: tab_config.activity,
                slide: undefined,
                init() {
                    let slider = $("<div class='slider' style='height:" + height * tab_config.data.length + "px;width:100%'></div>");
                    contents.append(slider);
                    tab_config.data.forEach((it, i) => {
                        let wrap = $(`<div class='tab-list-activity-content'>
                        </div>`);
                        if (it && it instanceof Array) {
                            it.forEach((b, a) => {
                                let card = $(`<div class='tab-list-card'> 
                                                <div class='tab-list-card-image'>
                                                    <img src="${b.src}"/>
                                                    <div class="tab-list-card-text">
                                                        <span class="title"> ${b.txt} </span>
                                                        <span class="desc"> ${b.desc} </span>
                                                    </div>
                                                </div>
                                                <a type='theme' class="title">${b.txt}
                                                </a>
                                                <label class="duration">${b.last_day > 0 ? b.last_day + '天后结束' : '长期活动'}  </label>
                                                ${b.is_new ? '<i class="is-new"></i>' : ''}
                                            </div>`);
                                wrap.append(card);
                            });
                        } else {
                            throw new Error('输入格式不正确')
                        }
                        slider.append(wrap);
                    });
                },
                select(e) {
                    let dis = e * height;
                    $(".slider:first-child").css({
                        transition: 'all .48s ease',
                        transform: `translate3d(0px,-${dis}px,0px)`
                    })
                }
            });
            this.heros();
            return this;
        },
        select_hero: undefined,
        heros() {
            const hero_config = {
                all: [],
                support: [],
                mage: [],
                fighter: [],
                tank: [],
                assassin: [],
                marksman: []
            }
            function render_list() {
                // 渲染tabs
                $(".tab-list-hero").createTabBtn({
                    col: hero_type,
                    slide: undefined,
                    inner: null,
                    init() {
                        this.inner = $('.hero-inner-list');
                        this.h('all');
                        new Swiper("#hero-list", {
                            direction: 'vertical',
                            freeMode: true, slidesPerView: 4,
                            observer: true,
                            observeSlideChildren: true,
                            grid: {
                                fill: 'row',
                                rows: 13,
                            },
                        });
                    },
                    h(name) {
                        this.inner.empty();
                        if (name) {
                            let show_data = hero_config[name];
                            if (show_data && show_data.length > 0) {
                                let vm = $(document.createDocumentFragment());
                                show_data.forEach(d => {
                                    let node = $(`<li class="hero-inner-list-item swiper-slide">
                                        <img src='https://game.gtimg.cn/images/lol/act/img/champion/${d.alias}.png'/>
                                        <span>${d.name}</span>
                                        <div class="play-style">
                                            <div class="play-performance"><div></div></div>
                                        </div>
                                        </li>`);
                                    node.on("click", function () {
                                        let auo = $("<audio autoplay type='audio/ogg' src='" + d.selectAudio + "'></audio>");
                                        let child = node.children('.play-style').children('.play-performance');
                                        auo.on("ended", function () {
                                            $(this).remove();
                                            child.removeClass('played')
                                        });
                                        auo.on('error', function () {
                                            $(this).remove();
                                        });
                                        auo.on('playing', function () {
                                            child.addClass('played')
                                        })
                                        $(this).append(auo);
                                    });
                                    vm.append(node);
                                });
                                this.inner.append(vm);
                            }
                        }
                    },
                    select(e) {
                        this.h(e);
                    }
                });
            }
            $.ajax({
                methods: "GET",
                url: url_hero_list,
                success(res) {
                    let toJson = JSON.parse(res);
                    hero_config.all = toJson.hero;
                    toJson.hero.forEach((a) => {
                        let types = a.roles.join(',');
                        for (const c in hero_config) {
                            if (types.includes(c)) {
                                hero_config[c].push(a);
                            }
                        }
                    });
                    if (Object.keys(toJson) !== 0) {
                        render_list();
                    }
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        scroll(f) {
            // 判断页面的高度是否溢出
            let doc_height = document.body.offsetHeight;
            let win_height = window.innerHeight;
            if (doc_height > win_height) {
                let NodeList = $(".animate-fade");
                let max = NodeList.length;
                // 开启滚动监听
                $(window).on("scroll", render);
                function render() {
                    let h = document.documentElement.scrollTop;
                    if (f && typeof f === 'function') {
                        f(h);
                    }
                    if ($(".fade-in").length < max) {
                        NodeList.each((d, el) => {
                            let offsetTop = $(el).offset().top;
                            if (offsetTop < win_height + h) {
                                $(el).addClass("b-fade-in");
                            }
                        });
                    }
                }
                render()
            }
            return this;
        },
        tab() {
            // 绑定为响应式数据
            main.eq(0).fadeIn(100);
            $(".part-tab-title").on("mouseover", function () {
                $(this).addClass("tab-selected")
                    .siblings(".part-tab-title").removeClass("tab-selected");
                let index = $(this).index();
                if (main.eq(index).children("li").length <= 0) {
                    request(index);
                }
                main.eq(index).fadeIn(100).siblings().fadeOut(0)
            });
            function request(index) {
                let script = $("<script src=" + new_uri[index] + "></script>");
                $("body").append(script);
                setTimeout(() => {
                    script.remove();
                }, 200);
            }
            request(0);
            return this;
        },
        swiper() {
            const tabs = list.swiper.tab,
                data = list.swiper.data;
            let d = $(".tab-btn");
            tabs.forEach(i => {
                var span = $("<span class='tab-btns'> " + [i] + " </span>");
                d.append(span);
            });
            const wrapper = $(".swiper-wrapper").eq(0);
            data.forEach(i => {
                var items = $(`<div class='swiper-items'>
                <img data='${i}' alt=" " />
                </div>`);
                wrapper.append(items);
            });
            const children = d.children("span");
            var demo = new SimSwiper("#hero-swiper", {
                autoplay: 3500,
                loop: true,
                touch: false,
                lazy: {
                    prop: "data"
                },
                change(ev) {
                    children.eq(ev.index).addClass("btn-select").siblings("span")
                        .removeClass("btn-select")
                },
                duration: 300,
            });
            children.on("mouseover", function () {
                demo.stop();
                demo.index = $(this).index();
                demo.slide_to();
                $(this).addClass("btn-select")
            });
            children.on("mouseout", function () {
                demo.boot();
            });
            return this;
        }
    }
    content02.init();
});