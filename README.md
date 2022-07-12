<h1 align="center">Welcome to react-text-expandCollapse 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> 文字展开收起组件


## Install

```sh
npm install
```

## Start

```sh
npm run dev
```

## Run Build

```sh
npm run build
```

## 使用

```sh
import TextExpand from 'react-text-expandCollapse/src/index';
```
（注：如果没有安装sass，请先安装sass。`npm install node-sass sass --save-dev`）

```sh
import TextExpand from 'react-text-expandCollapse/src/index'
```

```sh
import * as React from "react";
import {createRoot} from 'react-dom/client';
import TextExpand from 'react-text-expandCollapse/src/index';

// 示例文字
const str: string = '金杯里装的名酒，每斗要价十千；玉盘中盛的精美菜肴，收费万钱。胸中郁闷啊，我停杯投箸吃不下；拔剑环顾四周，我心里委实茫然。想渡黄河，冰雪堵塞了这条大川；要登太行，莽莽的风雪早已封山。像姜尚垂钓溪，闲待东山再起；伊尹乘舟梦日，受聘在商汤身边。何等艰难！何等艰难！歧路纷杂，真正的大道究竟在哪边？相信总有一天，能乘长风破万里浪；高高挂起云帆，在沧海中勇往直前！'


const App = () => {
    // 查看全部
    return (
        <div style={{width: 500, margin: '20px auto'}}>
            <TextExpand
                content={str}
                maxLen={100}
                contentRender={(text: string, handler: any) => {
                    return (
                        <>
                            <span>{text}</span>
                            {handler}
                        </>
                    )
                }}
            />
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

```


## API

| 参数 | 说明 | 类型 |
| --- | --- | --- | 
| content | 文本内容(必传) | String | 
| maxLen | 字最大显示长度(可选，默认值为：`300`) | Number |
| expandText | 展开按钮文字(可选，默认值为：`查看全部`) | String |
| collapseText | 收起按钮文字(可选，默认值为：`收起`) | String |
| contentRender | 自定义内容(必传) | (text: string, handler: React.ReactNode) => React.ReactNode |
| onExpand | 展开、收起后触发事件(可选)  | (expanded: boolean) => void |

## Author

👤 **jacky010**

* Github: [@jacky010](https://github.com/jacky010)

* 仓库地址：[react-text-expandCollapse](https://github.com/Jacky010/react-text-expandCollapse)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
