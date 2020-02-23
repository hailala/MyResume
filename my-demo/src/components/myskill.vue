<template>
    <div>
        <div class="index"></div>
        <div>
              <h3 class="index1">技能掌握</h3>
          </div>
          <div style=" display: flex;margin-top:100px">
              <div style="width:100px;margin:0 auto">
                  <el-progress type="circle" :percentage="25" :stroke-width="15" :width="150" :height="200"></el-progress>
                  <span style="color:yellow;font-size:20px">H5</span>
              </div> 
            <div style="width:100px;margin:0 auto">
                <el-progress type="circle" :percentage="25" :stroke-width="15" :width="150" :height="200"></el-progress>
                  <span style="color:yellow;font-size:20px">C3</span>
              </div>
            <div style="width:100px;margin:0 auto">
                <el-progress type="circle" :percentage="50" :stroke-width="15" :width="150" :height="200"></el-progress>
                  <span style="color:yellow;font-size:20px">JQ</span>
              </div> 
            <div style="width:100px;margin:0 auto"> 
                <el-progress type="circle" :percentage="70" :stroke-width="15" :width="150" :height="200"></el-progress>
                  <span style="color:yellow;font-size:20px">JS</span>
              </div>
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
    background-image: url("../assets/img8.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;  
    min-width: 100%;  
    min-height: 100%;  
    height: auto;  
    width: auto;
    opacity:0.3;           
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
</style>