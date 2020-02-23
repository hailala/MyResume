<template>
 <div>
   <div style="  margin-top: 80px;">
      <video id="v1" autoplay loop muted>
          <source src="../assets/video2.mp4" type="video/mp4"  />
      </video>
      <div>
        <div>
            <el-avatar :size="200">
            <img src="../assets/img2.png">
          </el-avatar>
          <h1 class="h-font">Hello, I`m Stephen sea</h1>
          <h3 class="h-font1">一个正在努力的前端小白^_^</h3>
        </div>
        <div>
             <router-link to="/myself" style=" text-decoration:none; color:antiquewhite;" >
                  <span class="index1">关 于 我</span>
            </router-link>
            <router-link to="/mywork" style=" text-decoration:none; color:antiquewhite; ">
                  <span class="index2" >作 品 集</span>
            </router-link>
          
        </div>
    
      </div>
   </div>
 </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
text-decoration: none;
}
.index1{
  background: hsl(210, 94%, 47%);
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 48px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
}
.index2:hover{
   background: hsl(210, 94%, 47%);
}
.index2{
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 48px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
}
*{  
    margin: 0px;  
    padding: 0px;  
}  
video{  
    position: fixed;  
    right: 0px;  
    bottom: 0px;  
    min-width: 100%;  
    min-height: 100%;  
    height: auto;  
    width: auto;  
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/  
    /*filter:grayscale(100%); //背景灰度设置*/  
    z-index:-11
}  
source{  
    min-width: 100%;  
    min-height: 100%;  
    height: auto;  
    width: auto;  
} 
.h-font{
    font-family: cursive,'Lato', sans-serif;
    font-size: 70px;
    font-weight: 400;
    margin: 50px 0 30px;
    color:antiquewhite;
}
.h-font1{
    font-size: 20px;
    margin: 20px 0;
    color:antiquewhite;
}
</style>
