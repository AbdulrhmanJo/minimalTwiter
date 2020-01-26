import React, { Component } from 'react'


class NewTweet extends Component {
    state = {
        text:'',
    }

    handleChange = (e) => {
        const text = e.target.value
        this.setState({
            text,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state

        // TODO: add tweet to the time line
        console.log('new Tweet: ', text);

        this.setState({
            text:''
        })
        
    }
    render(){
        const { text } = this.state
        const tweetLeft = 140 - text.length

        return (
            <div>
                <h3 className="center">Compose new Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea 
                    placeholder="what's happening?"
                    value={text}
                    onChange={this.handleChange}
                    maxLength={140}
                    className="textarea"
                    />
                    {tweetLeft <= 40 && (
                        <div className="tweet-length">
                            {tweetLeft}
                        </div>
                    )}
                    <button 
                    className="btn" 
                    type="submit"
                    disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default NewTweet