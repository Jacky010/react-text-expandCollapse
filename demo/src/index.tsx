import * as React from "react";
import {createRoot} from 'react-dom/client';
import TextExpand from '../../src/index';
// import TextExpand from 'react-text-expandCollapse/src/index';
// import 'react-text-expandCollapse/lib/index.min.css';

// 示例文字
const str: string = '金杯里装的名酒，每斗要价十千；玉盘中盛的精美菜肴，收费万钱。胸中郁闷啊，我停杯投箸吃不下；拔剑环顾四周，我心里委实茫然。想渡黄河，冰雪堵塞了这条大川；要登太行，莽莽的风雪早已封山。像姜尚垂钓溪，闲待东山再起；伊尹乘舟梦日，受聘在商汤身边。何等艰难！何等艰难！歧路纷杂，真正的大道究竟在哪边？相信总有一天，能乘长风破万里浪；高高挂起云帆，在沧海中勇往直前！'


const App = () => {
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
