<template><!-- template中,定义显示逻辑,称为显示模板 -->
    <div id="bjsxt">
        <h2>标题是: {{title}},修订版本是: {{version}}</h2>
         <!-- 模板中,可以定义任意的HTML标签语法。
              模板中,如果需要使用模型中定义的静态数据,可以通过脚本语法
              {{变量名}}获取, 脚本语法，触发VM，访问模型中的数据,并在
              视图中显示。
          --->
        <div>
            <span>我的名字是{{name}},</span>
            <span style="color:red">今年{{age}}岁,</span>
            <span>性别是{{gender}}。</span>
            <span>人生格言: <span v-html="info"></span></span><br>
            <!-- v-bind:key 在当前标签有效范围内,绑定一个变量。相当于定时临时变量
                 v-bind可以省略。 :key="xxx"
              -->
            <span>我的爱好是：</span>
            <span v-for="hobby in hobbies" v-bind:key="hobby">
                <span>{{hobby}}&nbsp;&nbsp;</span>
            </span>
            <br>
            <!--事件触发,调用的方法,如果没有参数,直接通过方法名调用,不需要要写括号()
                当前组件,定义的数据模型,可以直接修改。且数据改变,视图同步修改
                方法参数可以定义一个事件对象event。代表当前触发事件的对象是什么。
                事件参数，可以不传递，由vue自动提供。也可以使用内置变量$event传递
                如果方法有多个参数,且有事件对象参数,那么建议事件对象定义在最后。
                注意:Vue中,所有资源一旦定义,必须使用。否则报错。
            -->
            <el-button style="font-size: 12px" type="primary" round v-on:click="showInfo">我的愿望</el-button>
            <el-input-number v-model="age"  :min="1" :max="150">我的年龄是</el-input-number>
            <button v-on:click="age = age + 1">下一年我的年龄是?</button>
            <button v-on:click="age = age - 1">上一年我的年龄是?</button>
            <input type="button" value="测试1" v-on:click="showTagName">
            <button v-on:click="showTagName($event)">测试2</button>
            <button v-on:click="showTest('固定数据',$event)">测试多参数1-固定数据</button>
            <button v-on:click="showTest(name,$event)">测试多参数2-变量数据</button>
            <br>
            <button v-on:click="testPost">测试POST请求</button>
            <br>
            <span v-if="age >= 8 && age< 18 ">少年[8-18)</span>
            <span v-else-if="age >=18 && age< 25 ">青年[18-25)</span>
            <span v-else-if="age >=25 && age< 45 ">中年[25-45])</span>
            <span v-else-if="age >=45 && age< 65 ">壮年[45-65)</span>
            <span v-else>老年[65-∞)</span>
        </div>
    </div>
</template>

<script>
    //导入axios组件。可以实现远程服务请求。
    //import axios from "axios";
    //导入querystring组件,辅助实现JSON到表单字符串的转换。
    //import qstring from "querystring";
    // script中,定义JS逻辑,称为模型module
    export default {
        name: "HelloBjsxt",
        props:{ // 定义当前组件中的配置参数。可以在使用组件的时候,传入。
            //传入的方式是: <HelloBjsxt  title="xxxxx"></HelloBjsxt>
             title: String,
             version: Number
        },
        data(){ //提供当前页面的静态数据,方法返回结果为数据内容
            //返回的数据内容，是一个JSON对象。对象的属性名就是数据变量名
            //对象的属性值,就是变量值
            return{
               name:'张三',
               age: 20,
               gender:"男",
               info:"有房有车,赚得<span style='color:red'>多</span>,花的少,死的<span style='color:red'>早</span>,诚挚征婚",
                hobbies:[
                    "上班","加班","出差","熬夜"
                ]
           };
        },
        methods:{ // 定义方法函数。 定义方式:     方法名: function(xxx){}
            showInfo: function(){
                alert("什么时候能休息? ");
            },
            showTagName:function(event){
                 alert("点击事件由'"+event.target.tagName+"'标签触发")
            },
            showTest: function(message,event){
                alert("消息是:"+message+",触发标签是: "+event.target.tagName);
            },
            testPost:function(){
                //post请求,如果是请求头传递参数,post方法,只需要一个参数，就是URL
                //如果是请求体传递参数,则需要两个参数,第二个参数是请求体内容。
                //请求体传递参数,需要querystring组件辅助。进行JSON数据到表单数据的转换。
                //请求参数
                var params = {
                    "str1":"post1",
                    "str2":"post2"
                };
               //this.$axios.post("http://localhost:8081/test",this.$qstring.stringify(params))
                this.$axios.post("/api/test",this.$qstring.stringify(params))
                    .then(resp =>{
                           alert(resp.data.status+","+resp.data.str1+","+resp.data.str2);
                        });
                    //.catch()

            }
        },
 /*       mounted(){  //页面加载，立刻运行。相当于HTML中的onload事件
            //get请求。 get(字符串地址)
           axios.get("http://localhost:8081/test?str1=get1&str2=get2")
           // 远程服务返回后, 处理逻辑。成功结果
           // xxx => {}
           // xxx 定义返回结果数据变量名,返回结果是整体响应对象。
           // 包含数据: config 完整配置信息,data 响应体数据,request 请求内容,headers 响应头集合,status 响应状态码
           //   {内部定义具体处理逻辑}
               .then(resp=>{
                   console.log(resp);
                   alert(resp.data+","+resp.data.status+","+resp.data.str1+","+resp.data.str2);
               })
               // catch是处理错误结果。 语法和then一致
               .catch(error=>{
                   console.log(error);
               });
        }*/
    }
</script>

<style scoped>
    #app {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /*color: #2c3e50;*/
    }
</style>