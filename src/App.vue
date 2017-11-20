<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@font-face {
  font-family: FontAwesome;
  src: url(assets/fonts/FontAwesome-webfont.ttf),
       url(assets/fonts/FontAwesome-webfont.eot);
}
p,pre,ul,ol,li,dd,dt,h1,h2,h3,h4,h5,h6{
  padding:0px;
  margin:0px;
  list-style:none;
}
img{
  vertical-align:bottom;
}
body{
  margin:0px;
  font:12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif
}
input{
  outline:none;
}
a{
  transition:all .3s
}
a:hover{
  text-decoration: none;
  color: #89bceb;
}
.right{
  float: right;
}
.left{
  float: left;
}
.block{
  display: block;
}
.clear:after{
  content:'';
  display: block;
  clear: both;
}
.center{
  text-align: center;
}
.fill_width{
  width:100%
}
.fill_height{
  height:100%;
}
.relative{
  position:relative;
}
.top{
  top:0;
}
</style>
