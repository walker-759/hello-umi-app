import React from 'react';
// import styles from './index.css';
// 引入antd  组件
import { Button } from 'antd'
// 引入样式
import 'antd/dist/antd.css'
// 引入国际化
// IntlProvider包裹项目  
// FormattedDate 使用国际化的地方  日期国际化
// 
// 其实这个和gui项目里面有些类似。回头看看是不是一个包
// 主要就是吧国际化来源放在一个文件里面 然后在什么语言环境下去使用不同的语言包
// 那么点击某些按钮就切换语言环境就好了

// FormattedMessage
import { IntlProvider, FormattedDate, } from 'react-intl'
import { FormattedMessage } from 'umi-plugin-locale'

export default function () {
  return (

    <>
      {/* 包裹项目传入语言环境 */}
      {/* 使用日期国际化，不同时间 日期格式不同 */}
      {/* 这个版本试用在umirc里面没有配置国际化的时候  使用IntlProvider  包裹项目，， */}
      {/* 但是一旦umirc里面配置locale国际化了，这里就不要再用IntlProvider了 */}
      {/* <IntlProvider locale="zh">
        <Button>测试</Button>
        <FormattedDate value={Date.now()} />
        <FormattedMessage id="hello" />
      </IntlProvider> */}


      {/* umirc里面配置国际化之后 项目里面直接使用   */}
      {/* <Button>测试</Button>
      <FormattedDate value={Date.now()} />
      <FormattedMessage id="hello" /> */}
    </>
  );
}
