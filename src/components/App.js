import React from 'react';
import './App.css';

import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyAFu26-EzYn3Ni723cyeoCrbnvqyl90onQ';

class App extends React.Component{

  state = {videos: [] };
  
  onInputSubmit = (input) => {
    Youtube.get('/search', {
      params:{
        q: input,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    }).then((response) => {
      this.setState({videos: response.data.items}); 
    });
  }

  render(){

    return(
      <div>
        <SearchBar onInputSubmit={this.onInputSubmit}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
