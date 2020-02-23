<template>
    <div>
        <div class="index"></div>
        <div>
              <h3 class="index1">我的意向</h3>
          </div>
          <div>
              <div id="echarts" style="width: 600px;height:400px;margin:0 auto"></div>
          </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.init();
    },
    methods:{
        init(){
            var myChart = this.$echarts.init(document.getElementById('echarts'));
            var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['前端开发工程师', 'Java工程师', '软件测试师', '教师', '微信小程序开发']
                    },
                    series: [
                        {
                            name: '熟练程度',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 405, name: '软件测试师'},
                                {value: 1000, name: '前端开发工程师'},
                                {value: 534, name: 'Java工程师'},
                                {value: 135, name: '教师'},
                                {value: 800, name: '微信小程序开发'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };

                myChart.setOption(option);
        }
    }
}
</script>
<style scoped>
.index{
   height: 100%;
    background-image: url("../assets/img7.png");
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