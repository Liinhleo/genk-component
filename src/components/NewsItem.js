import React, {Component} from 'react';

class NewsItem extends Component {
  render(){
      return (    
        <div>
          <h1>{this.props.title}</h1>
          <img 
          src={this.props.image} 
          width="400" />
          <p >{this.props.content}</p>
        </div>
    );
      
    }
  }

  export default NewsItem;
