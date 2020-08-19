<template>
    <div class="header">
      <img src="@/assets/logo.jpeg"/>
      <nav class="nav">
        <ul>
          <li v-for="(item,index) in navList"
              :key="index"
              @click="navListClick(index)"
              :class="'ul_list_'+index">
            <span class="nav_content">{{item}}</span>
          </li>
        </ul>
        <div class="logoAndRegister">
          <span class="logo">登录</span>
          <span class="logo register">注册</span>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "Header",
      data(){
          return {
            navList:["首页","数据中心","排行榜","更多"],
          }
      },
      methods: {
        navListClick(index){
          //获取上一次点击的index
          let oldIndex = this.$store.state.navIndex;
          //将上一次点击的li对象上移除activeLi类
          if(oldIndex != null){
            let oldClickDom = document.getElementsByClassName("ul_list_"+oldIndex)[0].children[0];
            oldClickDom.classList.remove("activeLi");
          }
          //获取当前点击对象，并添加activeLi类
          let clickDom = document.getElementsByClassName("ul_list_"+index)[0];
          let children = clickDom.children[0];
          children.classList.add("activeLi");

          //将当前点击的index保存到状态管理器中
          localStorage.navIndex = index;
          this.$store.commit("setNavIndex",index);
        }
      },
      mounted(){
          //挂载时，设置li的激活标签
          let oldIndex = this.$store.state.navIndex;
          if(oldIndex == null){
            oldIndex = 0;
          }
          this.navListClick(oldIndex);
      }
    }
</script>

<style scoped>
  .header{
    position: relative;
    /*top:15px;*/
    padding-top: 1vh;
    height: 7vh;
    width: 100%;
    border-bottom: 2px solid rgba(132, 214, 234, 0.44);
    color: white;
  }
  .header img{
    display:inline-block;
    float: left;
    margin-left: 7vw;
    width: 7vw;
    height: 7vh;
    margin-right: 0vw;
  }
  .nav{
    display: inline-block;
    padding-top: 1vh;
    height: 6vh;
    margin-left: -3vw;
    width: 80vw;
    position: relative;
    /*background-color: aqua;*/

  }
  .nav ul{
    display: inline-block;
    position: relative;
    float: left;
    margin: 0px;
    padding-left: 0px;
  }
  .nav ul li{
    display: inline-block;
    font-size: 18px;
    width: 10vw;
    cursor: pointer;
    /*height: 14vh;*/

    /*border: 1px solid black;*/
    /*margin-right: 0px;*/
  }
  .nav ul li .nav_content{
    display: inline-block;
    /*border-bottom:3px solid #ff0000;*/
    height: 6vh;
    padding: 0px 15px;
  }
  .nav ul li :hover{
    color: red;
  }
  .activeLi{
    border-bottom:3px solid #ff0000;
  }
  .nav .logoAndRegister{
    float: right;
    margin-right: 5vw;
  }
  .nav .logoAndRegister .logo{
    display: inline-block;
    width: 5vw;
    /*color: blue;*/
    cursor: pointer;
  }
  .register{
    color: red!important;
    border: 1px solid red;
  }
</style>
