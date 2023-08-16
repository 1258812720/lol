/** 主界面脚本
 * @author 刘海斌
 * @member 岑锦波
 * @editor all
 */
// 页面初始化

$(document).ready(function () {
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
                touch:false,
                lazy: {
                    prop: "data"
                },
                change(ev){
                    console.log(ev)
                    children.eq(ev.index).addClass("btn-select").siblings("span")
                    .removeClass("btn-select")
                },
                duration: 300,
            });
            children.on("mouseover",function(){
                demo.stop();
                demo.index=$(this).index();
                demo.slide_to();
                $(this).addClass("btn-select")
            });
            children.on("mouseout",function(){
                demo.boot();
            })
        }
    }
    content02.init();
});