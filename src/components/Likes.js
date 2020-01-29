import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './tweet'

class Likes extends Component {
    
    
    render(){
        
        const {userLikes} = this.props;
        return (
            <div>
                <h3 className="center">Your Likes</h3>
                <ul className="dashboard-list">
                {userLikes.map(id => (
                    <li key={id}>
                        <Tweet id={id}/>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

const mapState= ({authedUser, tweets}) => {
    const ids = Object.keys(tweets).sort((a,b) => tweets[b].timestamp - tweets[a].timestamp);

    const likesID=[];
    ids.forEach((id) => (
        tweets[id].likes.forEach((userId) => {
            if(userId === authedUser){
                likesID.push(id)
            }
        })
    ))
    
    return {
            userLikes: likesID
        }
}

export default connect(mapState)(Likes);