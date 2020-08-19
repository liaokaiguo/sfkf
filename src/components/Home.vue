<template>
  <div class="container">
    <template>
      <el-backtop target=".container">
        <i class="el-icon-top" title="回到顶部"></i>
      </el-backtop>
    </template>
    <Header />
    <div class="publicityImg">
<!--      <img src="@/assets/test.png" />-->
    </div>
    <div class="message">
      <ul>
        <li style="background-color: #32111111">
          <div class="list_content">
            <span>12</span>
            <br/>
            <span>注册人数</span>
          </div>

        </li>
        <li>
          <div class="list_content">
            <span>23</span>
            <br/>
            <span>提交次数</span>
          </div>
        </li>
        <li style="background-color: #32111111">
          <div class="list_content">
            <span>100</span>
            <br/>
            <span>访问量</span>
          </div>
        </li>
        <li>
          <div class="list_content">
            <span>30</span>
            <br/>
            <span>数据量</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="detailIntroduction">
      <div style="width: 500px;padding-left: 5vw">
        <p style="font-size: 40px;color: white;text-align: left">数据开放平台是什么</p>
      </div>
      <div class="card_contain">
        <el-card class="box_card">
          123
        </el-card>
        <el-card class="box_card">
          123
        </el-card>
        <el-card class="box_card">
          123
        </el-card>
      </div>
    </div>
    <div class="bottom">
      <div style="font-size: 25px">算法开放平台</div>
      <p>Copyright中电科36所版权所有</p>
      <p>如果您有任何疑问，不要犹豫请联系我们。沟通电话：010-89126080、 010-89115213沟通邮箱：2345@jd.com</p>
    </div>
  </div>
</template>

<script>
  import Header from "./Header"
    export default {
      name: "Home",
      components:{
        Header,
      }
    }
</script>

<style scoped>
  .container{
    height: 100vh;
    overflow-x: hidden;
  }
  .publicityImg{
    position: relative;
    margin-top: -9vh;
    height: 85vh;
    z-index: -1;
    width: 100%;
    background: url("../assets/test.png") no-repeat;
    background-size: 100% 100%;
    /*background-color: aqua;*/
  }
  .message{
    /*position: absolute;*/
    /*top: 85vh;*/
    height: 30vh;
    width: 100%;
    /*background-color: aqua;*/

  }
  .message ul{
    position: relative;
    display: block;
    height: 35vh;
    width: 90%;
    margin: -5vh 5vw;
    padding: 0px;
    background-color: white;
    z-index: 5;
    box-shadow:0px 0px 20px #ccc;
  }
  .message ul li{
    height: 100%;
    display: inline-block;
    width: 25%;
    float: left;
  }
  .message ul li .list_content{
    margin-top: 25px;
    font-size: 20px;
  }
  .detailIntroduction{
    display: block;
    padding-top: 5vh;
    padding-bottom: 5vh;
    /*padding-left: 10%;*/
    /*float: left;*/
    /*position: absolute;*/
    /*top:110vh;*/
    width: 100%;
    background-color: rgb(3, 10, 40);
  }
  .detailIntroduction .card_contain .box_card{
    display: inline-block;
    width: 30%;
    height: 40vh;
  }
  .bottom{
    padding: 3vh 0 2vh 0;
    border-top: 1px solid white;
    background-color: #353535;
    color: white;
  }
</style>
