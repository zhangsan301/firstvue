// 在vue中,所有目录的index.js文件,都是可以被vue组件默认读取的。
// 但是，必须是main.js文件中，导入相应的目录才能自动读取。
import Vue from 'vue'
// 增加路由组件，组件名
import Router from "vue-router"
// 增加视图组件,视图组件地址。 .开头, 是从当前文件所属位置开始寻址。
// @开头,是从当前项目的根（src)开始寻址。建议使用@
//增加视图组件
import resume from "@/views/resume.vue"
import company from "@/views/company.vue"
import registry from "@/views/registry.vue"
import UserTable from "@/views/UserTable.vue"

//使用导入的路由组件
Vue.use(Router)

// 定义路由组件中的路由表,  定义路由表的时候,const名称不要乱写。
// 部分版本的vue-router会检索不到路由插件。
// const在vue中, 一般会泛指vue定义的变量命名。
const router = new Router({
    mode: "history", // 路由地址模式。 history可以去除地址上的/#/
    routes:[
        {
            path:'/resume',
            component: resume
        },
        {
            path:'/company',
            component:company
        },
        {
            path:'/register',
            component: registry
        },
        {
            path:'/users',
            component: UserTable
        }
    ]
});

// 对外声明, 当前index.js文件的一个别名。用于被其他的js(main.js)文件读取并使用
export default router;
