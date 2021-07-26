import React from "react";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false })
    }, 6000);
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