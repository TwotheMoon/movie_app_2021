import React from 'react';
import ReactDOM from "react-dom"; // virture dom : 빈 html 페이지가 랜더 되기전 React 가 
import App from "./App";          // Funtion App.js 를 통해 insert 된 명령어 Virture dom 불러오기


ReactDOM.render(<App />, document.getElementById('root'));   // 실제 index.html 에 App.js 연결
              // <App /> : React 의 컴포넌트 = html 을 반환하는 함수 