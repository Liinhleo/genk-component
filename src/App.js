import React, {Component} from 'react';
import './App.css';
import NewsItem from "./components/NewsItem"
import ImgPoster from "./components/Birds-of-Prey-2020-Movie-Soundtrack-Trailer.jpg"
// import data from "./components/data/data.json"


class App extends Component {
  render(){
    const data={title: "Tiêu đề 1",image: ImgPoster,content: "Nội dung 1"};
      return (
        <div className="App">
          <NewsItem 
          title={data.title}
          image={data.image}
          content={data.content} />
        </div>
      );
  }
}

export default App;
