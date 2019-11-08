// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import style1 from './css/index.scss'
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// // 虚拟 DOM 元素
// const domElement =
//     <div className="css_test">
//         <span>hello world</span>
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//         <ul>
//             <li>4</li>
//             <li>5</li>
//             <li>6</li>
//         </ul>
//         <table className={style1.scss_table}>
//             <th>col-1</th>
//             <th>col-2</th>
//             <th>col-3</th>
//             <tr>
//                 <td className={style1.scss_td}>a1</td>
//                 <td className={style1.scss_td}>b1</td>
//                 <td className={style1.scss_td}>c1</td>
//             </tr>
//             <tr>
//                 <td>a2</td>
//                 <td>b2</td>
//                 <td>c2</td>
//             </tr>
//             <tr>
//                 <td>a3</td>
//                 <td>b3</td>
//                 <td>c3</td>
//             </tr>
//         </table>
//     </div>;
// // ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(domElement, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import Jsdemo from './app/jsdemo';
import Jsdemob from './app/jsdemob';
import Jsdemoc from './app/jsdemoc';
import Nav from './app/nav';

import {BrowserRouter as Router , Route} from 'react-router-dom';

// ReactDOM.render(<Jsdemo/>, document.getElementById("root"));

ReactDOM.render(
    <Router>
        <div>
            <Nav />
            <Route exact path="/" component={Jsdemo} />
            <Route  path="/Jsdemob" component={Jsdemob} />
            <Route  path="/Jsdemoc" component={Jsdemoc} />
        </div>
    </Router>,
    document.getElementById("root")
);
