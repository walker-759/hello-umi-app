import React from 'react'
// 实现动态加载组件需要使用这个库
import dynamic from 'umi/dynamic';

// 延时 1s 渲染的组件。
const Users = dynamic({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(() => <div>I will render after 1s</div>);
      }, /* 1s */1000);
    });
  },
});
export default Users