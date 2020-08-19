<template>
    <div style="background-color: rgba(204,204,204,0.18)">
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
      <div class="pathClass">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to = "{path:'/'}">竞赛</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content_title">
        <div class="title_img"></div>
        <div class="title_content">
          <h4 style="margin: 0px;text-align: left">活动列表</h4>
          <div>
            <el-steps :active="2" align-center>
              <el-step title="步骤1" >
                <template slot="icon">
                  <i class="class_i" />
                </template>
              </el-step>
              <el-step title="步骤2" ></el-step>
              <el-step title="步骤3" ></el-step>
<!--              <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>-->
            </el-steps>
          </div>
          <div>123</div>
          <div>123</div>
        </div>
        <div class="title_user"></div>
      </div>
      <div class="content_detail"></div>
    </div>
</template>

<script>
    export default {
      name: "CompetitionDetail",
      data(){
        return {
          navList:["首页","数据中心","排行榜","更多"],
        }
      },
    }
</script>

<style scoped>
  .header{
    background-color: #333b58;
    padding-top: 10px;
    height: 8vh;
    color: white;
  }
  .header img{
    display:inline;
    float: left;
    margin-left: 5vw;
    width: 7vw;
    height: 7vh;
    margin-right: 0vw;
  }
  .nav{
    display: inline-block;
    padding-top: 1vh;
    height: 6vh;
    /*margin-left: 3vw;*/
    width: 80vw;
    position: relative;
    /*background-color: aqua;*/

  }
  .nav ul{
    display: inline-block;
    position: relative;
    float: left;
    /*height: 14vh;*/
    margin-top: 0px;
    padding-left: 0px;
    margin-bottom: 0px;
  }
  .nav ul li{
    display: inline-block;
    font-size: 18px;
    width: 10vw;
    cursor: pointer;
  }
  .nav ul li .nav_content{
    display: inline-block;
    height: 6vh;
    padding: 0px 15px;
  }
  .nav ul li :hover{
    color: red;
  }
  .nav .logoAndRegister{
    float: right;
    margin-right: 5vw;
  }
  .nav .logoAndRegister .logo{
    display: inline-block;
    width: 5vw;
    cursor: pointer;
  }
  .register{
    color: red!important;
    border: 1px solid red;
  }

  .pathClass{
    margin-left: 5vw;
    margin-top: 2vh;
    height: 6vh;
    font-size: 20% !important;
  }
  .content_title{
    margin-left: 5vw;
    margin-bottom: 4vh;
    width: 90vw;
    height: 40vh;
    padding-left: 2vw;
    background-color: white;
  }
  .title_img{
    display: inline-block;
    width: 23%;
    height: 76%;
    margin-top: 6vh;
    /*margin-left: 2.5%;*/
    float: left;
    background-color: aqua;
  }
  .title_content{
    display: inline-block;
    margin-left: 2.5%;
    margin-top: 6vh;
    width: 50%;
    height: 76%;
    float: left;
    /*background-color: blue;*/
  }
  .title_user{
    display: inline-block;
    float: left;
    margin-left: 2.5%;
    margin-top: -0.5%;
    height: 100%;
    width: 22%;
    box-shadow: 0px 0px 10px rgba(204, 204, 204,1);
    border-bottom: 2px solid red;
    background-color: #42b983;
  }
  .content_detail{
    margin-left: 5vw;
    width: 90vw;
    min-height: 60vh;
    background-color: red;
  }
</style>
