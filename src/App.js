import React, {Component} from 'react';
import './App.css';
import NewsItem from "./components/NewsItem"
// import data from "./components/data/data.json"

class App extends Component {
  constructor(){
    super();
  }

  render(){
   
      return (
        <div className="App">

            <h1>Đây là tiêu đề báo</h1>
            <NewsItem />

        </div>
      );
    
  }
}

export default App;
