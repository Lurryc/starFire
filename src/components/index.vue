<template>
<div>
  <div class="loadingPage" v-if='!isShowBody'>
    <span class="loadBtn">页面加载中,请稍后...</span>
  </div>
  <div v-else>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class='container'>
          <div class="navbar-header">
            <router-link to='/' class='navbar-brand mylogo'>
              <img src="../assets/img/index/logo.png" alt="科技之星" title="科技之星">
            </router-link>
            <a href="#menu" class="navbar-toggle" data-toggle="collapse">
            </a>
          </div>
          <div id="menu" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/" class="weight">首页</router-link></li>
              <li @mouseover="showList(0,4)" @mouseout="hideList(0)" class='dropDown'>
                <router-link to="/about" class="dropdown-toggle">关于公司<span></span></router-link>
                <ul class="dropdown-menu" :style="{height:listHeight[0]}">
                  <li>
                    <router-link to="/about">公司简介</router-link>
                    <router-link to="/feedback">线上反馈</router-link>
                    <router-link to="/about/join">加入我们</router-link>
                    <router-link to="/about/contact">联系我们</router-link>
                  </li>
                </ul>
              </li>
              <li @mouseover="showList(1,4)" @mouseout="hideList(1)" class='dropDown'>
                <router-link to="/product" class="dropdown-toggle">电子产品<span></span></router-link>
                <ul class="dropdown-menu" :style="{height:listHeight[1]}">
                  <li>
                    <router-link to="/product/hot">热门手机</router-link>
                    <router-link to="/product/sound">耳机音响</router-link>
                    <router-link to="/about/fitting">手机配件</router-link>
                    <router-link to="/about/surrounding">周边产品</router-link>
                  </li>
                </ul>
              </li>
              <li @mouseover="showList(2,4)" @mouseout="hideList(2)" class='dropDown'>
                <router-link to="/download" class="dropdown-toggle">应用下载<span></span></router-link>
                <ul class="dropdown-menu" :style="{height:listHeight[2]}">
                  <li>
                    <router-link to="/download/one">One</router-link>
                    <router-link to="/download/live">LIVE</router-link>
                    <router-link to="/download/ideas">Ideas</router-link>
                    <router-link to="/download/os">OS</router-link>
                  </li>
                </ul>
              </li>
              <li @mouseover="showList(3,4)" @mouseout="hideList(3)" class='dropDown'>
                <router-link to="/center" class="dropdown-toggle">新闻中心<span></span></router-link>
                <ul class="dropdown-menu" :style="{height:listHeight[3]}">
                  <li>
                    <router-link to="/news/news">新闻动态</router-link>
                    <router-link to="/news/offical">官网新闻</router-link>
                    <router-link to="/news/information">最新资讯</router-link>
                    <router-link to="/news/pictures">图片展示</router-link>
                  </li>
                </ul>
              </li>
              <li><router-link to="/about/join">加入我们</router-link></li>
              <li><router-link to="/about/contact">联系我们</router-link></li>
            </ul>
          </div>
      </div>
    </div>

    <div id="content">
      <!-- page content -->
      <router-view></router-view>
      <!-- page content -->
    </div>

    <footer>
      <div class="container">
        <div class="row">
          <div class="footnav-left col-md-8 col-xs-12">
            <div class="row">
              <div class="col-sm-2 col-xs-12 list">
                <div data-toggle="collapse" data-target="#foot-list-1" v-if="isShowDropDownBtn">关于公司
                  <i class="fa fa-chevron-down right"></i>
                </div>
                <router-link to="/about" class="head" v-else>关于公司</router-link>
                <ul :class="{collapse:true,in:!isShowDropDownBtn}" id="foot-list-1">
                  <li><router-link title="公司简介" to="/about">公司简介</router-link></li>
                  <li><router-link title="线上反馈" to="/about/feedback">线上反馈</router-link></li>
                  <li><router-link title="加入我们" to="/about/join">加入我们</router-link></li>
                  <li><router-link title="联系我们" to="/about/contact">联系我们</router-link></li>
                </ul>
              </div>
              <div class="col-sm-2 col-xs-12 list">
                <div data-toggle="collapse" data-target="#foot-list-2" v-if="isShowDropDownBtn">电子产品
                  <i class="fa fa-chevron-down right"></i>
                </div>
                <router-link to="/product" class="head" v-else>电子产品</router-link>
                <ul :class="{collapse:true,in:!isShowDropDownBtn}" id="foot-list-2">
                  <li><router-link title="热门手机" to="/product/hot">热门手机</router-link></li>
                  <li><router-link title="耳机音响" to="/product/sound">耳机音响</router-link></li>
                  <li><router-link title="手机配件" to="/product/fitting">手机配件</router-link></li>
                  <li><router-link title="周边产品" to="/product/surrounding">周边产品</router-link></li>
                </ul>
              </div>
              <div class="col-sm-2 col-xs-12 list">
                <div data-toggle="collapse" data-target="#foot-list-3" v-if="isShowDropDownBtn">应用下载
                  <i class="fa fa-chevron-down right"></i>
                </div>
                <router-link to="/download" class="head" v-else>应用下载</router-link>
                <ul :class="{collapse:true,in:!isShowDropDownBtn}" id="foot-list-3">
                  <li><router-link title="one" to="/download/one">one</router-link></li>
                  <li><router-link title="live" to="/download/live">live</router-link></li>
                  <li><router-link title="ideas" to="/download/ideas">ideas</router-link></li>
                  <li><router-link title="os" to="/download/os">os</router-link></li>
                </ul>
              </div>
              <div class="col-sm-2 col-xs-12 list">
                <div data-toggle="collapse" data-target="#foot-list-4" v-if="isShowDropDownBtn">新闻中心
                  <i class="fa fa-chevron-down right"></i>
                </div>
                <router-link to="/center" class="head" v-else>新闻中心</router-link>
                <ul :class="{collapse:true,in:!isShowDropDownBtn}" id="foot-list-4">
                  <li><router-link title="新闻动态" to="/news/news">新闻动态</router-link></li>
                  <li><router-link title="官网新闻" to="/news/offical">官网新闻</router-link></li>
                  <li><router-link title="最新资讯" to="/news/information">最新资讯</router-link></li>
                  <li><router-link title="图片展示" to="/news/pictures">图片展示</router-link></li>
                </ul>
              </div>
              <div class="col-sm-2 col-xs-12 list">
                <div data-toggle="collapse" data-target="#foot-list-5" v-if="isShowDropDownBtn">关注我们
                  <i class="fa fa-chevron-down right"></i>
                </div>
                <p class="head" v-else>关注我们</p>
                <ul :class="{collapse:true,in:!isShowDropDownBtn}" id="foot-list-5">
                  <li>
                    <a href="javascript:" title="客服QQ" to="/about" class="font-qq">
                      <i class="fa fa-qq"></i>客服QQ
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" title="新浪微博" to="/feedback" class="font-weibo">
                      <i class="fa fa-weibo"></i>新浪微博
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" title="官方微信" to="/about/join" class="font-weixin">
                      <i class="fa fa-weixin"></i>官方微信
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" title="官方邮箱" to="/about/contact" class="font-envelope">
                      <i class="fa fa-envelope"></i>官方邮箱
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12 contact-right">
            <p class="tel text-right">400-000-0000</p>
            <p class="free_time text-right">周一至周日 9:00-18:00（仅收市话费）</p>
            <router-link class="foot_message text-right block" to="/about/feedback">
              <i class="fa fa-question-circle"></i>在线留言
            </router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
</template>

<script>
    export default{
      data:function(){
        return{
          listHeight:[0,0,0,0],
          isShowBody:false,
          isShowDropDownBtn:false
        }
      },
      created() {
        var that=this;
        setTimeout(()=>{that.isShowBody=true;},1000)
        window.onload = window.onresize = function() {
          if(window.innerWidth<=767){
            that.isShowDropDownBtn = true
          }else{
            that.isShowDropDownBtn = false
          }
        };
      },
      methods:{
        hideList(index){
          this.$set(this.listHeight,index,0)
        },
        showList(index,count) {
          var height = 36*count+'px'
          this.$set(this.listHeight,index,height)
        }
      }
    }
</script>

<style scoped>

.loadingPage{
    height: 100%;
    width: 100%;
    background-color: #ededed;
    position: fixed;
    z-index: 1000000;
    overflow: hidden;
    text-align: center;
}
.loadBtn{
    display: inline-block;
    box-sizing: border-box;
    width: 300px;
    height: 65px;
    line-height: 65px;
    font-size: 16px;
    position: absolute;
    left: 50%;
    top: 25%;
    margin-left: -150px;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    color: #b9b0b0;
    background-color: #f9f9f9;
    background: url("../assets/img/loading.gif") no-repeat 25px 11px;
    box-shadow:2px 4px 4px rgba(0,0,0,.2);
}
/*网页的导航栏部分,固定定位*/
.navbar .mylogo{
  padding-top: 8px;
  padding-bottom: 8px;
}
.weight{
  font-weight: 700;
}
.navbar-collapse .dropdown-menu{
  display:block;
  overflow: hidden;
  height: 0;
  left:0;
  padding: 0;
  border: none;
  transition:height .5s;
}
.dropDown>.dropdown-menu a{
    padding:8px 15px;
}
.navbar-collapse .dropdown-toggle>span{
    display: inline-block;
    position: relative;
    left: 6px;
    bottom: 3px;
    width: 2px;
    height: 2px;
    background: #bdbdbd;
}
/*网站主体部分*/
#content{
  margin-top:80px
}
/*网站底部*/
footer{
  border-top: 1px solid #e6e6e6;
  padding: 100px 0 42px 0;
  background-color: #fafafa;
}
footer .list{padding:0}
footer .list>[data-toggle=collapse]{
  cursor: pointer;
  padding: 13px 12px 13px 15px;
  border-bottom: 1px solid #EBEBEB;
}
footer .footnav-left .head{
    text-align: center;
    display: block;
    font-size: 14px;
    color: #646464;
    text-shadow: none;
    padding: 0 0 14px;
}
.footnav-left .list li{
  text-align: center;
}
.footnav-left .list li:hover>a{
  color: #5079d9
}
.footnav-left .list li>a{
    display: inline-block;
    padding: 3px 0;
    font-size: 12px;
    color: #969696;
}
#foot-list-5 i.fa{
  margin-right: 5px;
}
#foot-list-5 .font-qq:hover{
  color: #5079d9;
}
#foot-list-5 .font-weibo:hover{
  color: #eb7350;
}
#foot-list-5 .font-weixin:hover{
  color: #609700;
}
#foot-list-5 .font-envelope:hover{
  color: #354b66;
}
.contact-right>.tel{
    margin-top: 22px;
    margin-bottom: 11px;
    font-size: 30px;
    color: #646464;
}
.contact-right>.free_time{
    color: #c3c3c3;
    font-size: 13px;
    margin-bottom: 11px;
}
.contact-right>.foot_message{
    float: right;
    width: 102px;
    height: 32px;
    line-height: 32px;
    background: linear-gradient(#fcfcfc, #f5f5f5);
    text-align: center;
    color: #5079d9;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    transition: all .3s;
}
.contact-right>.foot_message:hover{
  background-color: #eee;
}

@media screen and (max-width:767px) {
/*网站导航栏部分*/
  .navbar .mylogo{
    box-sizing: content-box;
    width:108px;
    position: absolute;
    left: 0;
    right: 0;
    margin:0 auto;
  }
  .navbar .navbar-toggle{
    width: 50px;
    height: 50px;
    margin:0;
    background:url("../assets/img/nav-toggle.png");
    padding: 5px;
    float: left;
    background-size: cover;
    border: none;
  }
  #menu{
    max-height: none;
  }
  .dropDown>.dropdown-menu a{
    color:#fff;
  }
  .dropDown>.dropdown-menu a:hover{
    background-color: #63E;
  }
  .dropDown>.dropdown-menu{
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
/*网站底部*/
  footer{padding:0 0 20px 0}
  .contact-right>.tel,.contact-right>.free_time{
    text-align: left;
  }
  .footnav-left .row .list li{
    padding: 13px 12px 13px 18px;
    text-align: left;
    border-bottom: 1px solid #EBEBEB;
    background-color: #f5f5f5;
  }
  .contact-right>.foot_message{
    float: left;
  }
}
</style>
