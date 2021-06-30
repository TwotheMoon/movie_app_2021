import React from "react";

// function Food(props){ // props : 인수 안에 fav = 속성 담겨있음
//   return<h1>I like {props.fav}</h1>
// }

// OR


const foodILike = [
  {
    id:1,
    name: "kimchi",
    image:
    "http://tour.pc.go.kr/?r=home&c=4/25&uid=http://tour.pc.go.kr/files/2017/03/16/2c77e779b5a5caa8d129a105a34e677a093927.jpg",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
    "https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "Bibimbop",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
    rating: 4.8
  },
  {
    id:4,
    name: "udong",
    image:
    "https://ko.wikipedia.org/wiki/%EC%9A%B0%EB%8F%99#/media/%ED%8C%8C%EC%9D%BC:Garak-guksu.jpg",
    rating: 4.7
  }
];
          // Food 객체 생성
function Food({name, picture}){  // Food 컴포넌트 에 인수 = {foodILike.map(dish =>  <Food name={dish.name} picture={dish.image} /> ) }
  return (<div>                       
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
  </div>
  );
}

function App() {  // index.js "root"라는 엘리먼트에 적용
  return (
    <div>
       {foodILike.map(dish => (
       <Food key={dish.id} name={dish.name} picture={dish.image} />
    ))}
    </div>
  );
}

export default App;

// {/* < App /> 은 html 이 아니라 ✨component✨
// component 는 html 을 반환하는 함수
// jsx : JS를 확장한 문법, JS안의 html, JS의 모든 기능 포함 */ }