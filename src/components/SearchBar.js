import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            text:'',


        }
    }

    onChangeHandeler = (e)=>{
        this.setState({text:e.target.value})
    }

    onSubmitHandeler = (e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.text)
    }

    render() { 
        return (
            <div className='ui container'>
                <div className='ui segment'>
                    <form className='ui form' onSubmit={(e)=>this.onSubmitHandeler(e)}>
                        <div style={{padding:"20px", paddingLeft:"0px"}}>
                            <label>Enter your search: </label>
                        </div>
                        <div className="ui">
                            <input 
                            style={{display:"block", width:"100%"}} 
                            type="text" 
                            placeholder="Search..."
                            value = {this.state.text}
                            onChange={(e)=>this.onChangeHandeler(e)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;
