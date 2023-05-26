import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from './ch04/ConfirmDialog';
import WeekendSchedule from './ch04/WeekendSchedule';
import MyTest1 from './ch04/MyTest1';
import Tick from './ch04/Tick';
import CommentList from './ch05/CommentList';

//const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(

ReactDOM.render(
  <React.StrictMode>
    <CommentList/>
  </React.StrictMode>,
  document.getElementById('root')
)
  //setInterval(콜백함수, 시간(ms)) -> 특정 시간마다, 첫번째 매개변수에서
  // 정의한 함수가 실행한다.
  // ReactDOM.render(그려지는 요소, 어디 밑에 그릴거야.)
// setInterval( () => {
//   ReactDOM.render(
//     <React.StrictMode>
//     {/* <App /> */}
//     {/* <WeekendSchedule/> */}
//     {/* <MyTest1 name='' number={7}>
//       child 영역입니다.
//     </MyTest1> */}
//     <CommentList/>
//   </React.StrictMode>,
//   document.getElementById('root')
//   );
// }, 1000
// );
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <tick/>
  // </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
