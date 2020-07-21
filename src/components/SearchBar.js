import React from 'react';

class SearchBar extends React.Component{

    state = {input: ''}

    handleInput = (event) => {
        this.setState({input: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onInputSubmit(this.state.input);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input 
                        type="text"
                        placeholder="Search"
                        value={this.state.input}
                        onChange={this.handleInput}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;