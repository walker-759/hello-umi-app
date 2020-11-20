// 这就是入口文件了  在这里面配置 插件 增加一些全局默认reducer一些东西

// 在这里可以配置使用immer  也可以在.umirc里面配置
// import useImmer from 'dva-immer'
export const dva = {
    config:{
        onError(e){
            e.preventDefault()
            console.error(e.message);
        },
        // 在这里配置使用immer  
        // ...useImmer()
    },
    plugins:[
        // 日志相关的插件
        require('dva-logger')()
    ]
}