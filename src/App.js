import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            error:"", 
            selectedVideo: null,
        }
    }

    onChildSubmit= (data)=>{
        const KEY = "AIzaSyBW2jd0RMB3bSFZyPDa3zMDya1siYLGqCU"
        axios.get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                part: 'snippet', 
                type: 'video',
                maxResults: 5,
                key: KEY,
                q:data,
            }

        })
        .then(resp=>{
            this.setState({videos: resp.data.items, selectedVideo: null})
            
        })
        .catch(error=>{
            this.setState({videos: error.message})
        })
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo : video})
    }
    // resetHandeler = () => {
        
    // }

    render() { 
        return (
            <>
                <SearchBar onSubmit={this.onChildSubmit}/>

                {this.state.videos.length === 0 && <div className='ui container segment'>Waiting for your selection...</div>}


                <div className='ui container'>
                <div className='ui grid'>
                    <div className='ui row'>
                        {/* first condition */}
                    {this.state.selectedVideo && <><div className='eleven wide column'>
                         <VideoDetail video = {this.state.selectedVideo} /> 
                        </div>
                        <div className='five wide column'>
                            <VideoList 
                            videos={this.state.videos}
                            onSelect = {this.onVideoSelect}
                            />
                        </div></>}
                        {/* second condition */}
                    {!this.state.selectedVideo && <>
                        <div className='ui container'>
                            <VideoList 
                            videos={this.state.videos}
                            onSelect = {this.onVideoSelect}
                            />
                        </div></>}

                        </div>
                </div>
                </div>
            </>
        );
    }
}
 
export default App;