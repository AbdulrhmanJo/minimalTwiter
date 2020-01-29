import React, { Component } from 'react'

class ToggleMode extends Component {
    handleChange = event => {
        const html = document.documentElement;
        const theme = html.getAttribute('data-theme')
        
        if(!theme || theme === 'light'){
            document.documentElement.setAttribute('data-theme', 'dark');
        }else {
            document.documentElement.setAttribute('data-theme', 'light');

        }
        
        
    }
    render(){
        return(
            <button className="toggle-btn" onClick={this.handleChange}>Change mode</button>
        )
    }
}

export default ToggleMode