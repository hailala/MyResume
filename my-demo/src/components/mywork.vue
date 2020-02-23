<template>
    <div>
        <div>
              <h3 class="index1">作品集</h3>
        </div> 
        <div>
            <el-carousel :interval="5000" arrow="always" height=600px>
                <el-carousel-item v-for="(activity, item) in activities" :key="item">
                <div>
                    <img :src="activity.timestamp" style="width:1000px;height:400px">
                </div>
                <div class="h-font">
                     <p>{{activity.content}}</p>
                </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         activities: [{
          content: '项目简介：纯HTML，CSS写的仿淘宝首页...',
          timestamp:  require('../assets/image/mydome1.png'),
        }, {
          content: '项目简介：使用Bootstrap框架写的撩课学堂首页界面...',
          timestamp:  require('../assets/image/mydome2.png'),
        }, {
          content: '项目简介：运用Ajax模拟发微博的数据传输功能...',
          timestamp: require('../assets/image/mydome3.png'),
        }, {
          content: '项目简介：贪吃蛇游戏，加深js的理解运用...',
          timestamp: require('../assets/image/mydome4.png'),
        }, {
          content: '项目简介：扫雷项目，js语法实现数据结构算法...',
          timestamp: require('../assets/image/mydome5.png'),
        }, {
          content: '项目简介：QQ音乐项目，使用Vue+ElementUI+Axios模拟QQ音乐的大部分功能...',
          timestamp: require('../assets/image/mydome6.png'),
        }
        ]
      };
           /*  items:[
                require('../assets/image/mydome1.png'),
                require('../assets/image/mydome2.png'),
                require('../assets/image/mydome3.png'),
                require('../assets/image/mydome4.png'),
                require('../assets/image/mydome5.png'),
                require('../assets/image/mydome6.png'),
            ] */
       
    }
}
</script>
<style scoped>
.h-font{
    font-family: "Microsoft YaHei"
}
.index1{
    border-top: 250px;
    font-size: 30px;
    color: #444444;
    text-align: center;
    border-bottom: 2px solid yellow;
    text-decoration: none;
    display: inline-block;
    _display: inline;
}
</style>