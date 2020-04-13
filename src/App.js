import React, {Component} from 'react';
import './App.css';
import NewsItem from "./components/NewsItem"
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          data.map((item,index) => {
            return (
              <NewsItem
                key = {index}
                title={item.title}
                image={item.image}
                content={item.content} />
            );
          })
        }
      </div>
    );
  }
}
export default App;
