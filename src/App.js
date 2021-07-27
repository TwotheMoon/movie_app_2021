import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movies);
    };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;

// {/* < App /> 은 html 이 아니라 ✨component✨
// component 는 html 을 반환하는 함수
// jsx : JS를 확장한 문법, JS안의 html, JS의 모든 기능 포함 */ }