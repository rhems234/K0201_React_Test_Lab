import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import ConfirmDialog from './ch04/ConfirmDialog';
// import WeekendSchedule from './ch04/WeekendSchedule';
// import MyTest1 from './ch04/MyTest1';
// import Tick from './ch04/Tick';
// import CommentList from './ch05/CommentList';
import TestAfter from './ch07-2-useMemo/TestAfter';
import TestBefore from './ch07-2-useMemo/TestBefore';
import BeforeUseCallback from './ch07-3useCallback/BeforeUseCallback';
import AfterUseCallback from './ch07-3useCallback/AfterUserCallback';
import TextInputTest from './ch07/TextInputTest';
import Accommodate from './ch07/Accommodate';
import Toggle from './ch08/Toggle';
import ConfirmButton from './ch08/ConfirmButton';
import LandingPage from './ch09/LandingPage';
import AttendanceBook from './ch10/AttendanceBook';
import NameForm from './ch11/NameForm';
import FileImageTest from './ch11/FileImagetest';
import TestNullValue from './ch11/TestNullValue';
import SiginUp from './ch11/SiginUp';
import WelcomeDialog from './ch13/WelcomeDialog';
import ProfileCard from './ch13/ProfileCard';
import Main from './ch14/Main';
import MainPage from './ch15/MainPage';
import Sample from './ch15/Sample';
import Blocks from './ch15/Blocks';
import CallbackTest2 from './ch17/callBackTest2';
import ItemList from './ch17/ItemList';
import Categories from './ch17/Components/Categories';
import App from './App';

//const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(

// 생명주기를 테스트를 하는 코드에서 , React.StrictMode 제거하고 실행하는게 가독성면에서 좋습니다.
// 수행이 2번씩 일어남.

// const[category, setCategory] = useState('food')
// const onSelect = useCallback(category => setCategory(category), [])

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <Categories category={category} onSelect={onSelect}/>
    <ItemList category={category}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// setTimeout(() => {
//   ReactDOM.render(<input value={null}/>, document.getElementById('root'))
// },1000)

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
