import React, {Component,StyleSheet} from 'react';
import ImgPoster from "./Birds-of-Prey-2020-Movie-Soundtrack-Trailer.jpg"


class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
        content:"",
    }
}
componentDidMount() {
  this.setState({
    content: this.props.content,
  })
}
  render(){
      let url = ImgPoster;
      return (
        <ul>
          <img 
          src={url} 
          width="400" 
          fetchFormat="auto" 
          crop="scale"/>

          <p> Đây là nội dung hiển thị của báo </p>
        </ul>
    );
      
    }
  }

  
  export default NewsItem;