
let bus = new Vue()


// 头部
Vue.component('header-box',{
    methods:{
    },
    template:`
        <header class="header">
            <header-top></header-top>
            <header-bottom></header-bottom>
        </header>
    `
})
// 头部上半部分
Vue.component('header-top',{
    template:`
        <section class="header_one">
            <div class="header_one_content wrapper">
                <a href="javascript:;"><img src="./imgs/logo.jpg" alt=""></a>
                <div class="header_one_content_user">
                    <a href="javascript:;"><img class="header_one_content_user_img" src="./imgs/tx_1.jpg" alt=""></a>
                    <a href=""><span class="header_one_content_user_name">罗密欧</span></a>
                </div>
            </div>
        </section>
    `
})
// 头部下半部分
Vue.component('header-bottom',{
    data(){
        return {
            currentIndex:null,
            list:[
                {
                    text:"基本信息"
                },
                {
                    text:"课程管理"
                },
                {
                    text:"我的问答"
                }
            ],
            cut:{
                boxone:true,
                boxtwo:false
            },
            cuts:{
                boxone:false,
                boxtwo:true
            }
        }
    },
    methods:{
        change(index){
            this.currentIndex = index
        },
        toggle(){
            bus.$emit('showCut',this.cut)
        },
        toggles(){
            bus.$emit('showCuts',this.cuts)
        }
    },
    template:`
        <section class="header_two wrapper">
            <ul class="clearfix">
                <li class="header_two_list" @click = "toggle"><a class="header_two_list_a list_a_one" href="javascript:;" v-cloak>My Center</a></li>
                <li class="header_two_list" @click = "toggles" v-for="(item , index) in list" :key = "index" v-on:click="change(index)" :class = '{ changes:currentIndex == index }'><a class="header_two_list_a" href="javascript:;">{{ item.text }}</a></li>
                <li class="header_two_list"><a class="header_two_list_a" href="javascript:;" v-cloak>我的收入</a></li>
            </ul>
            <div class="header_two_course">
                <span class="header_two_course_span"><i class="header_two_course_span_icon">+</i>添加课程</span>
            </div>
        </section>
    `
})


// 中间区域

// 个人中心
Vue.component('main-box',{
    template:`
        <main class="main main_one wrapper">
            <main-left></main-left>
            <main-right></main-right>
        </main>
    `
})

// 中间部分左半边
Vue.component('main-left',{
    template:`
    <section class="main_left">
        <main-left-one></main-left-one>
        <main-left-two></main-left-two>
        <main-left-three></main-left-three>
    </section>
    `
})
// 中间部分左半边第一块
Vue.component('main-left-one',{
    template:`
    <div class="main_left_one main_left_div">
        <a href="javascript:;"><img class="main_left_one_img" src="./imgs/tx_1.jpg" alt=""></a>
        <div class="main_left_one_text">
            <p class="main_left_one_text_pone">
                <span class="main_left_one_text_name">罗密欧</span>
                <i class="main_left_one_text_people"></i>
            </p>
            <p class="main_left_one_text_ptwo">
                <span>信息完整度</span>
                <span class="bule_article"></span>
                <span class="bule_text">高</span>
            </p>
            <span class="main_left_one_text_span">
                <i class="fa fa-mobile fa-2x main_left_one_text_span_i main_left_one_text_span_icon"></i>
                <i class="fa fa-id-card-o fa-lg main_left_one_text_span_i"></i>
                <i class="fa fa-envelope-o fa-lg main_left_one_text_span_i"></i>
            </span>
        </div>
    </div>
    `
})
// 中间部分左半边第二块
Vue.component('main-left-two',{
    template:`
    <div class="main_left_two main_left_div">
        <div class="main_left_two_left">申请提现</div>
        <div class="main_left_two_right">
            <p class="main_left_two_right_balance">账户余额</p>
            <p class="main_left_two_right_text"><span class="main_left_two_right_num">248</span><span>元</span></p>
        </div>
    </div>
    `
})
// 中间部分左半边第三块
Vue.component('main-left-three',{
    template:`
    <div class="main_left_three">
        <div>
            <span class="main_left_three_img"><i class="fa fa-address-card-o fa-5x main_left_three_img_icon"></i></span>
            <p class="main_left_three_p">实名认证 <span class="main_left_three_span">【未认证】</span></p>
        </div>
        <div>
            <span class="main_left_three_img"><i class="fa fa-file-text fa-5x main_left_three_img_icon"></i></span>
            <p class="main_left_three_p">资质认证<span class="main_left_three_span">【未认证】</span></p>
        </div>
    </div>
    `
})


// 中间部分右半边
Vue.component('main-right',{
    template:`
    <section class="main_right">
        <main-right-top></main-right-top>
        <main-right-bottom></main-right-bottom>
    </section>
    `
})
// 中间部分右半边上半部分
Vue.component('main-right-top',{
    template:`
        <div class="main_right_top">
            <div class="main_right_top_left main_right_top_div">
                <p class="main_right_top_title">我上传的课程</p>
                <p class="main_right_top_num">3<span class="main_right_top_text">个</span></p>
                <p class="main_right_top_details"><a href="javascript:;"><span>查看详情</span><i class="fa fa-angle-right fa-lg main_right_top_details_icon"></i></a></p>
            </div>
            <div class="main_right_top_right main_right_top_div">
                <p class="main_right_top_title">我的问答</p>
                <p class="main_right_top_num">3<span class="main_right_top_text">个</span></p>
                <p class="main_right_top_details"><a href="javascript:;"><span>查看详情</span><i class="fa fa-angle-right fa-lg main_right_top_details_icon"></i></a></p>
            </div>
        </div>
    `
})

// 中间部分右半边下半部分
Vue.component('main-right-bottom',{
    data(){
        return{
            lecturer:[
                {
                    img:"./imgs/tx_2.jpg",
                    name:"杨志"
                },
                {
                    img:"./imgs/tx_3.jpg",
                    name:"杨静静"
                },
                {
                    img:"./imgs/tx_4.jpg",
                    name:"吕子秋"
                },
                {
                    img:"./imgs/tx_1.jpg",
                    name:"阎强"
                },
                {
                    img:"./imgs/tx_5.jpg",
                    name:"郭小宜"
                }
            ]
        }
    },
    template:`
        <div class="main_right_bottom">
            <p class="main_right_bottom_text clearfix"><span>最新学员</span><span class="main_right_bottom_right">一周内新增25位学员</span></p>
            <ul class="main_right_bottom_box">
                <li class="main_right_bottom_list" v-for = "(item,index) in lecturer" :key = "index">
                    <a href="javascript:;"><img class="main_right_bottom_list_tx" :src="item.img" alt=""></a>
                    <p class="main_right_bottom_list_name"><a href="javascript:;">{{ item.name }}</a></p>
                </li>
            </ul>
        </div>
    `
})



// 基本信息

// 第二个中间部分
Vue.component('mian-box-two',{
    data(){
        return{
            one:true,
            two:false,
            datas:{
                name:"刘子熙",
                cellPhone:1590578034,
                email:"xuepin@admin.com",
                idCard:110324199003024357,
                weixin:13810194417,
                QQ:367722645
            },
        }
    },
    
    template:`
        <main class="main main_two wrapper">
            <mian-two-left></mian-two-left>
            <main-two-right-one v-on:movechange="move" v-show="one"></main-two-right-one>
            <main-two-right-er v-on:movechanges="moves" v-show="two"></main-two-right-er>
        </main>
    `,
    methods:{
        move(aaa,){
            this.one = aaa
            this.two = !aaa
            
        },
        moves(bbb,ccc){
            this.two = bbb
            this.one = !bbb
            this.datas = ccc
        }
    },
})
// 第二个中间左半部分
Vue.component('mian-two-left',{
    data(){
        return{

        }
    },
    
    template:`
        <section class="main_two_left">
            <div class="main_two_left_top_box">
                <img class="main_two_left_top_box_img" src="./imgs/tx_1.jpg" alt="">
                <p class="main_two_left_top_box_text">编辑</p>
            </div>
            <div class="main_two_left_bottom_box">
                <p class="main_two_left_bottom_box_p main_two_left_bottom_color">
                    <a href="javascript:;">
                        <i class="fa fa-user fa-2x main_two_left_bottom_box_p_icon main_two_left_bottom_icon_one"></i>
                        <span>我的信息</span>
                    </a>
                </p>
                <p class="main_two_left_bottom_box_p">
                    <a href="javascript:;">
                        <i class="fa fa-check-square fa-2x main_two_left_bottom_box_p_icon"></i>
                        <span>认证信息</span>
                    </a>
                    
                </p>
                <p class="main_two_left_bottom_box_p">
                    <a href="javascript:;">
                        <i class="fa fa-cog fa-2x main_two_left_bottom_box_p_icon"></i>
                        <span>密码管理</span>
                    </a>
                    
                </p>
            </div>
        </section>
    `
})
// 第二个中间右半第一部分
Vue.component('main-two-right-one',{
    data(){
        return {
            medolDatas:this.$parent.datas,
            aaa:false,
        }
    },
    methods:{
        changes(){
            let that = this
            this.$emit('movechange',that.aaa)
        },
        
        
    },
    template:`
        <section class="main_two_right main_two_ringht_one">
            <ul>
                <li class="main_two_right_p clearfix">
                    <span class="main_two_right_text">姓名</span>
                    <span class="main_two_right_relative">{{ medolDatas.name }}</span>
                    <span class="main_two_right_p_one" v-on:click = "changes"><a href="javascript:;"><i class="fa fa-pencil fa-lg main_two_right_p_one_icon"></i> 编辑</a></span>
                </li>
                <li class="main_two_right_p">
                    <span class="main_two_right_text">出生日期</span>
                    <span class="main_two_right_relative">1990年3月2日</span>
                </li>
                <li class="main_two_right_p">
                    <span class="main_two_right_text">性别</span>
                    <span class="main_two_right_relative">男</span>
                </li>
                <li class="main_two_right_p">
                    <span class="main_two_right_text">手机号</span>
                    <span class="main_two_right_relative">{{ medolDatas.cellPhone }}</span>
                    <span class="main_two_right_p_num"><i class="fa fa-check main_two_right_p_num_icon"></i>已验证</span>
                </li>
                <li class="main_two_right_p">
                    <span class="main_two_right_text">邮箱</span>
                    <span class="main_two_right_relative" v-cloak>{{ medolDatas.email }}</span>
                </li>
                <li class="main_two_right_p">
                    <span class="main_two_right_text">身份证</span>
                    <span class="main_two_right_relative" v-cloak>{{ medolDatas.idCard }}</span>
                </li>
                <li class="main_two_right_p">
                    <span class="main_two_right_text">微信号</span>
                    <span class="main_two_right_relative" v-cloak>{{ medolDatas.weixin }}</span>
                </li>
                <li class="main_two_right_p">
                    <span class="main_two_right_text">QQ号</span>
                    <span class="main_two_right_relative" v-cloak>{{ medolDatas.QQ }}</span>
                </li>
            </ul>
        </section>
    `
})
// 第二个中间右半第二部分
Vue.component('main-two-right-er',{
    data(){
        return {
            medolDatas:this.$parent.datas,
            bbb:false,
        }

    },
    methods:{
        storage(){
            this.$emit('movechanges',this.bbb,this.medolDatas)
        },
        changes(){
            this.$emit('movechanges',this.bbb)
        },
    },
    template:`
        <section class="main_two_right main_two_ringht_er">
            <form>
                <ul>
                    <li class="main_two_right_div clearfix">
                        <span class="main_two_right_text">姓名</span>
                        <input class="main_two_right_p_input" type="text"  v-model="medolDatas.name">
                    </li>
                    <li class="main_two_right_div">
                        <span class="main_two_right_text">出生日期</span>
                        <input class="main_two_right_p_input" disabled type="text" placeholder="本项不可输入，填写完身份证信息后自动同步出生日期">
                    </li>
                    <li class="main_two_right_div">
                        <span class="main_two_right_text">性别</span>
                        <div class="main_two_right_p_div">
                            <input class="main_two_right_p_input" type="text" placeholder="男">
                            <i class="fa fa-angle-down fa-lg main_two_right_p_div_icon"></i>
                        </div>
                    </li>
                    <li class="main_two_right_div">
                        <span class="main_two_right_text">手机号</span>
                        <div class="main_two_right_p_div main_two_right_p_div_num">
                            <input class="main_two_right_p_input main_two_right_p_input_num" type="text"  v-model="medolDatas.cellPhone">
                            <span class="main_two_right_p_num main_two_right_p_num_two"><i class="fa fa-check main_two_right_p_num_icon"></i>已验证</span>
                            <div class="main_two_right_p_input_num_text">获取验证码</div>
                        </div>
                    </li>
                    <li class="main_two_right_div">
                        <span class="main_two_right_text">邮箱</span>
                        <input class="main_two_right_p_input" type="text" v-model = "medolDatas.email">
                    </li>
                    <li class="main_two_right_div">
                        <span class="main_two_right_text">身份证</span>
                        <input class="main_two_right_p_input" type="text" v-model = "medolDatas.idCard">
                    </li>
                    <li class="main_two_right_div">
                        <span class="main_two_right_text">微信号</span>
                        <input class="main_two_right_p_input" type="text" v-model = "medolDatas.weixin">
                    </li>
                    <li class="main_two_right_div">
                        <span class="main_two_right_text">QQ号</span>
                        <input class="main_two_right_p_input" type="text" v-model = "medolDatas.QQ">
                    </li>
                </ul>
            </form>
            <div class="main_two_right_div_end">
                <span class="main_two_right_div_end_button button_left" v-on:click = "storage">保存信息</span>
                <span class="main_two_right_div_end_button button_right" v-on:click = "changes">取消修改</span>
            </div>
        </section>
    `
})



// 底部
Vue.component('footer-box',{
    template:`
        <footer class="footer">
            <section class="wrapper">
                <p class="footer_one">中国领先大学生成长平台<i class="fa fa-copyright footer_one_icon"></i>2016 e学聘</p>
                <p class="footer_two">ICP备16500007号<i class="vertical_icon"></i><a class="footer_one_a" href="javascript:;">联系我们</a>exuepin@exuepin.com<i class="vertical_icon"></i><a class="footer_one_a" href="javascript:;">关于我们</a></p>
            </section>
        </footer>
    `
})

let vm = new Vue({
    el:"#box",
    data(){
        return{
            show:{
                boxone:true,
                boxtwo:false
            },
        }
    },
    methods:{
        
    },
    mounted(){
        var that = this;
        bus.$on('showCut',function(show){
            that.show = show
        })
        bus.$on('showCuts',function(show){
            that.show = show
        })
    }
})