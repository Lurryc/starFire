<template>
  <div class="container">
    <div class="carousel" @mouseover="closeInterval" @mouseout="openInterval">
      <ol class="indicators">
        <li :class="{active:isActive[1]}" class="left" @click="handleCarousel(0)"></li>
        <li :class="{active:isActive[0]}" class="left" @click="handleCarousel(1)"></li>
      </ol>
      <div class="inner" >
        <div :class="{active:isActive[0]}" class="item">
          <img alt="First slide" src="../assets/img/index/banner1.jpg" />
        </div>
        <div :class="{active:isActive[1]}" class="item">
          <img alt="Second slide" src="../assets/img/index/banner2.jpg"/>
        </div>
        <div>
          <img src="../assets/img/index/banner2.jpg" style="position:static;opacity:0"/>
        </div>
      </div>
    </div>

    <div class="service">
      <div class="row">
        <div class="col-md-3 col-xs-6 item">
          <router-link to="/active/surrounding" class="block center">
            <img src="../assets/img/index/service1.png" alt="" class="fill_width">
            <h4>配件周边</h4>
            <p>·&nbsp;&nbsp;开售提醒 参与抽奖&nbsp;&nbsp;·</p>
          </router-link>
        </div>
        <div class="col-md-3 col-xs-6 item">
          <router-link to="/active/hotproduct" class="block center">
            <img src="../assets/img/index/service2.png" alt="" class="fill_width">
            <h4>热门产品</h4>
            <p>·&nbsp;&nbsp;周一10:00 限量开抢&nbsp;&nbsp;·</p>
          </router-link>
        </div>
        <div class="col-md-3 col-xs-6 item">
          <router-link to="/active/outline" class="block center">
            <img src="../assets/img/index/service3.png" alt="" class="fill_width">
            <h4>线下聚会</h4>
            <p>·&nbsp;&nbsp;五湖四海 志趣相投&nbsp;&nbsp;·</p>
          </router-link>
        </div>
        <div class="col-md-3 col-xs-6 item">
          <router-link to="/active/travel" class="block center">
            <img src="../assets/img/index/service4.png" alt="" class="fill_width">
            <h4>旅行活动</h4>
            <p>·&nbsp;&nbsp;带上PRO 放下单反&nbsp;&nbsp;·</p>
          </router-link>
        </div>
      </div>
    </div>

    <div class="offical">
      <div class="row">
        <div class="title-area relative">
          <h3>官方精品</h3>
          <p>Offical</p>
          <router-link to="/product" class="gothis" title="电子产品">
            查看更多 <i class="fa fa-angle-right"></i>
          </router-link>
        </div>
        <div class="produce-box">
          <div class="col-md-6">
            <img src="../assets/img/index/offical.png" alt="" class="fill_width">
          </div>
          <div v-for="(item,index) in officalItems" class="list-box col-md-3 col-xs-6">
            <div class="imgs-dots">
              <div class="img-container fill_width center relative" >
                <div class="img-item top" v-for="(v,i) in item.img" :style="{opacity:i==item.currentIndex?1:0}" >
                  <img :src="require('../assets/img/index/'+v)" alt="">
                </div>
                <div style="visibility: hidden" class="hidden-img"> <img :src="require('../assets/img/index/'+item.img[0])" alt=""></div>
              </div>
              <ul class="dot-container center clear fill_width">
                <li v-for="(v,i) in item.img" :class="{on:i==item.currentIndex}" @click="changeOfficalImg(index,i)"></li>
              </ul>
            </div>
            <h4 class="title center">
              {{item.title}}
              <p class="hidden-sm hidden-md hidden-lg detail" v-show="item.detail">{{item.detail}}</p>
              <p class="price">{{item.price}}</p>
              <p class="detail hidden-sm hidden-md hidden-lg" v-show="!item.detail"></p>
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="apps">
      <div class="row">
        <div class="title-area relative">
          <h3>应用</h3>
          <p>Apps</p>
          <router-link to="/product" class="gothis" title="电子产品">
            了解更多 <i class="fa fa-angle-right"></i>
          </router-link>
        </div>
        <div class="app-items col-md-3 col-xs-6" v-for='item in appItems'>
          <router-link :to="item.href" class="block">
            <img :src="require('../assets/img/index/'+item.img)" class="fill_width">
          </router-link>
          <div class="info center">
            <p class="info-title">{{item.title}}</p>
            <p class="info-desc">{{item.desc}}</p>
            <router-link :to="item.href" class="learn-more">进一步了解<i class="fa fa-angle-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="science">
      <div class="row">
        <div class="title-area relative">
          <h3>科技动态</h3>
          <p>Science</p>
          <router-link to="/product" class="gothis" title="电子产品">
            查看更多 <i class="fa fa-angle-right"></i>
          </router-link>
        </div>
        <div class="news-list col-md-3 col-sm-6 col-xs-12" v-for="item in scienceItems">
          <div class="content">
            <router-link :to="item.href" class="block">
              <img :src="require('../assets/img/index/'+item.img)" alt="" class="fill_width">
            </router-link>
            <div class="science-body">
              <h4 class="title"><router-link :to="item.href">{{item.title}}</router-link></h4>
              <p class="desc">{{item.desc}}</p>
              <router-link :to="item.href" class="read-more">阅读更多<i class="fa fa-angular-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        data:function () {
          return {
            isActive:[true,false],
            carouselTimer:null,
            carouselIndex:0,
            officalItems:[
              {title:'坚果Pro',price:'1499.00',img:["offical1-1.jpg","offical1-2.jpg","offical1-3.jpg"],currentIndex:0},
              {title:'钢化玻璃手感膜',price:'49.00',img:["offical2-1.jpg","offical2-2.jpg","offical2-3.jpg"],currentIndex:0},
              {title:'矩形孔入耳式耳机',price:'1499.00',img:["offical3-1.jpg","offical3-2.jpg"],currentIndex:0},
              {title:'入耳式耳机',price:'149.00',img:["offical4-1.jpg","offical4-2.jpg"],currentIndex:0,detail:'卓越发音 三按键线控'},
              {title:'车载充电器',price:'199.00',img:["offical5-1.jpg","offical5-2.jpg"],currentIndex:0,detail:'铝合金机身 智能调节'},
              {title:'官方T恤',price:'149.00',img:["offical6-1.jpg","offical6-2.jpg","offical6-3.jpg"],currentIndex:0,detail:'100%进口 SUMPIMA棉'}
            ],
            appItems:[
              {title:'One',desc:'一个就够了',img:'thumb1.jpg',href:'/download/one'},
              {title:'LIVE',desc:'看你最喜爱的',img:'thumb2.jpg',href:'/download/live'},
              {title:'Ideas',desc:'人脑每天差生6000个念头，如何储存？',img:'thumb3.jpg',href:'/download/ideas'},
              {title:'OS',desc:'更新到最安全',img:'thumb4.jpg',href:'/download/os'}
            ],
            scienceItems:[
              {title:'1MORE“大师对话·中国声”主题发布会',img:'science1.jpg',href:'/news/information',desc:'价格更低：网站建设公司自行开发系统，一般的开发成本都会在千元以上，就算网站建设公.....'},
              {title:'无人机的下一个时代 将由“群”定义',img:'science2.jpg',href:'/news/offical',desc:'当你想到无人机的时候你会觉得它是什么样子的?一个单独的遥控玩具，有螺旋桨，还是一.....'},
              {title:'官方最新MX59-365头戴式耳机发布',img:'science3.jpg',href:'/news/pictures',desc:'5月26日消息，今天，传闻已久的华为荣耀9现身工信部，关于荣耀9什么时候发布以及.....'},
              {title:'科技爱你的方式',img:'science4.jpg',href:'/news/news',desc:'1948年之前的人们，从没想过，可以将刚刚过去的时光在眼前凝固。在你按下快门的一分.....'}
            ]
          }
        },
        mounted() {
            this.moveOn()
        },
        methods:{
            moveOn() {
                this.carouselTimer=setInterval(()=>{
                  if(this.carouselIndex==1){
                        this.carouselIndex=-1
                    }
                    this.carouselIndex++;
                    this.$set(this.isActive,this.carouselIndex,true);
                    for(var i=0;i<this.isActive.length;i++){
                        if(i!=this.carouselIndex) this.$set(this.isActive,i,false)
                    }
                },2500)
            },
            handleCarousel(index) {
              this.carouselIndex=index;
              this.$set(this.isActive,this.carouselIndex,true);
                    for(var i=0;i<this.isActive.length;i++){
                        if(i!=this.carouselIndex) this.$set(this.isActive,i,false)
                    }
            },
            closeInterval(){
              clearInterval(this.carouselTimer);
              this.timer=null
            },
            openInterval(){
              this.moveOn()
            },
            changeOfficalImg(index,val){
              this.$data.officalItems[index].currentIndex=val
            }
        }
    }
</script>

<style>
/*轮播图*/
  .carousel{
    cursor: pointer;
    margin-bottom:30px;
    position: relative;
  }
  .carousel>.indicators{
    position: absolute;
    z-index:10;
    bottom:7%;
    left: 50%;
  }
  .carousel>.indicators>li.active:hover{
    background-color: #ffffff;
  }
  .carousel>.indicators>li.active{
    width: 13px;
    height: 13px;
    background-color: #767676;
    margin-top: 0
  }
  .carousel>.indicators>li{
    margin-top: 2px;
    width: 9px;
    height: 9px;
    margin-left: 10px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    transition: background-color .6s;
  }
  .carousel .item.active{
    opacity:1;
  }
  .carousel .item{
    opacity:0;
    transition: all .5s;
  }
  .carousel img{
    border-radius: 10px;
    width: 100%;
    position: absolute;
    top: 0;
  }
/*服务部分*/
  .row{
      margin-right: 0;
      margin-left: 0;
  }
  .container>div>.row{
    border:1px solid #dddddd;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
  }
  .service{
    padding: 30px 0;
  }
  .service .item{
    padding-top: 24px;
    border-right: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
  .service .item:hover{
    box-shadow: inset 0 0 38px rgba(0,0,0,0.28)
  }
  .service .item h4{
    font-size: 15px;
    height: 30px;
    line-height: 40px;
    color: #595959;
    font-weight: 300;
  }
  .service .item p{
    color: #b2b2b2;
    font-size: 12px;
    line-height: 24px;
    height: 40px;
    font-weight: 300;
  }
/*官方精选部分*/
  .offical,.apps,.science{
    padding:30px 0;
  }
  .offical>.row,.apps>.row,.science>.row{
    padding-top: 15px;
  }
  .offical .title-area,.apps .title-area,.science .title-area{
    margin-left: 30px;
  margin-bottom: 10px;
  }
  .title-area>h3{
    color: #666;
  }
  .title-area>p{
    font-size: 13px;
    color: #848484;
  }
  .gothis:hover{
    color: #666;
    background:  #f5f5f5;
  }
  .gothis{
    position: absolute;
    right: 14px;
    bottom: 5px;
    font-size: 14px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 0 15px 0 19px;
    line-height: 34px;
    color: #666;
    background-color: #fafafa;
    transition: all .3s;
    cursor: pointer;
  }
  .gothis>i{
    margin-left: 5px
  }
  .fa-angle-right:before {
    content: "\f105";
  }
  .offical .list-box:hover{
    box-shadow: inset 0 0 38px rgba(0,0,0,0.08)
  }
  .offical .list-box{
    border-right: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
  }
  .offical .img-container{
    cursor: pointer;
  }
  .offical .img-item{
    position: absolute;
    left: 0;
    right: 0;
    transition: all .5s
  }
  .offical .imgs-dots:hover .img-item>img{
    transform: scale(1.1)
  }
  .offical .img-item>img,.offical .hidden-img>img{
    transition: all .6s ;
    width: 80%;
    margin: 20px auto;
  }
  .offical .imgs-dots>.dot-container{
    display: flex;
    justify-content: center;
  }
  .offical .imgs-dots>.dot-container>li{
    float: left;
    width: 14px;
    height: 14px;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    padding: 2px;
    transition: all .3s;
    margin: 0 5px;
    cursor: pointer;
  }
  .offical .imgs-dots>.dot-container>li.on{
    box-shadow: inset 0 0 0 1px #b2b2b2;
    border-color: #b2b2b2;
  }
  .offical h4.title{
    margin-top: 10%;
  }
  .offical h4.title>p.price{
    color: #c30a18;
    margin-top: 5%
  }
  .offical h4.title>p.detail{
    overflow: hidden;
    height:30px;
    padding-top: 7px;
    font-size: 12px;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #b2b2b2;
  }
  /*APP 部分*/
  .apps .app-items .info{
    padding: 10px 0;
    border-right: 1px solid rgba(0,0,0,0.14);
    position: relative;
  }
  .apps .app-items .info>.info-title{
    font-size: 16px;
    color: #424242;
    transition: all .3s;
  }
  .apps .app-items .info>.info-desc{
    overflow: hidden;
    font-size: 12px;
    color: #b2b2b2;
    transition: all .3s ;
  }
  .apps .app-items .info>.learn-more{
    color: #5079d9;
    width: 100%;
    height: 34px;
    background-color: #fff;
    font-size: 16px;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: all .3s;
  }
  .apps .app-items:hover .info>.learn-more:hover{
    color: #62a8ea;
  }
  .apps .app-items:hover .info>.learn-more{
    opacity: 1;
  }
  .apps .app-items .info>.learn-more>i{transition:all .3s}
  .apps .app-items:hover .info>.learn-more>i{
      margin-left: 8px
  }
  /*科技动态部分*/
  .science .news-list:hover{
     box-shadow: inset 0 0 38px rgba(0,0,0,0.1);
  }
  .science .news-list:hover img{
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2);
    transition:all .3s;
  }
  .science .news-list:hover a.read-more{
    color: #89bceb;
    text-decoration: underline;
    transition: all .3s;
  }
  .science .news-list{
    padding: 30px;
    border-right: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    transition:all .3s;
  }
  .science h4{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 28px;
    margin-bottom: 20px;
    min-height: 38px;
    vertical-align: middle;
  }
  .science p{
    font-size: 12px;
    color: #b2b2b2;
    margin-bottom: 10px;
  }
/*响应式*/
@media screen and (min-width:992px) and (max-width:1200px){
  .offical .produce-box>:not(.list-box)>img{
    height: 340px;
  }
  .offical .list-box{
    min-height: 340px;
  }
}
@media screen and  (min-width:1200px){
  .offical .list-box{
    min-height: 380px;
  }
}
@media screen and (max-width: 767px){
  .title-area>h3{
    font-size: 18px;
  }
  .offical h4.title{
    font-size: 15px;
    font-weight: 700;
  }
}
/*响应式该写*/
.apps .col-md-3,.apps .col-xs-6{
  padding: 0;
}

</style>
