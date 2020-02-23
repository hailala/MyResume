<template>
    <div>
          <div class="index">
              <h3 class="index1">关于我</h3>
          </div>
          <div>
              <el-avatar :size="180">
            <img src="../assets/img3.png">
          </el-avatar>
          </div>
          <div class="MyName">
            <p>
                我叫吴定海，毕业于衡阳师范学院，大学所学专业是计算机科学与技术，
                学过的专业课有：C++，数据结构，数据库，Java程序设计，软件工程，
                计算机网络，计算机组成原理，Linux操作系统等.
            </p>
            <p>
                我大二开始接触前端，对前端开发有着极高的，学过html,css,js,jq,ajax,node.js等语法知识，接触过Vue，Bootstrap等框架，有Vue+ElementUI开发经验，
            同时懂得微信小程序的开发...
            </p>
            <p>
                接下来我面临着实习就业，希望自己能够找到一份好的前端开发的工作...
            </p>
          </div>
     
    </div>
</template>
<style scoped>

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
.MyName p{
    display: inline-block;
    _display: inline;
    width: 800px;
    text-indent: 2em;
    letter-spacing: 2pt;
    font-family: 微软雅黑;
    font-size: 16px;
    text-align: justify;
    line-height: 27px;
}
</style>