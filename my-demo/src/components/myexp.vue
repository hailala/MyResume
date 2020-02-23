<template>
    <div>
        <div class="index"></div>
        <div>
              <h3 class="index1">我的经历</h3>
        </div> 
        <div style="height: 300px;margin: 0 auto;width: 600px;">
            <el-steps direction="vertical" :active="3">
                <el-step title="高中 2014-2017" description="双峰县第一中学...">></el-step>
                <el-step title="大学 2017-现在" description="衡阳师范学院，校园经历：①任职：2017年9月至2018年6月担任班级班长；2018年9月至2019年6月担任院学生会体育部部长；
两年的学生干部任职使我的组织能力，表达能力等有了很大的提升。
②获奖：2018年荣获2017年至2018年院“优秀班委”；2018年湖南省篮球赛公开组比赛荣获省“第六名”…2019年五四评优荣获“校优秀志愿者”等。">></el-step>
                <el-step title="工作" description="暂无"></el-step>
            </el-steps>
        </div>
    </div>
    
</template>
<script>
export default {
}
</script>
<style scoped>
.index{
   height: 100%;
    background-image: url("../assets/img5.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;  
    min-width: 100%;  
    min-height: 100%;  
    height: auto;  
    width: auto;
    opacity:0.4;           
    z-index:-1;  
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
.block{
    color: yellow;
    margin: 0 auto;
    width: 600px;
}
</style>