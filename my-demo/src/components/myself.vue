<template>
    <div>    
        <div>
           <div class="index">
                    <ul>
                        <li>
                            <i class="el-icon-s-home"></i>Stephen sea博客
                        </li>
                    <li>
                        <router-link to="/home" >
                           关于我
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/myhope">
                        求职意向
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/mywork">
                        作品集
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/myskill">
                        技能掌握
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/myexp">
                        我的经历
                        </router-link>
                    </li>
                     <li>
                        <router-link to="/linkme">
                        联系我
                        </router-link>
                    </li>
                    </ul>
                    <router-view />
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
    margin: 0px;  
    padding: 0px;
}
.index ul{
  display: flex;
  height: 80px;
  line-height: 60px;
  background-color: #2c3e50;;
}

.index ul li {
    font-size: 16px;
    font-weight: bold;
    line-height: 70px;
    color: #ffffff;
  flex: 1;
  text-align: center;
}

.index ul li a{
  font-size: 16px;
  color: #999;
}
*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;font-family:Arial, "微软雅黑";}
a:link,a:active{text-decoration:none;}
a:visited{text-decoration:none;}
a:hover{color:#f00;text-decoration:none;}
a{text-decoration:none;-webkit-touch-callout:none;}
li{list-style:none;}
html{font-size:16px;}
a{color: #222;text-decoration: none}
.router-link-active{color:yellow !important;}

</style>