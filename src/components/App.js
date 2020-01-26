import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialDate } from '../actions/shared'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from './dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './newTweet'
import TweetPage from './tweetPage'
import Nav from './nav'

class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(handleInitialDate())
  }

  render(){
   
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav/>
            {this.props.loading 
              ? null 
              : <div>
                  <Route path='/' exact component={Dashboard}/>
                  <Route path='/tweet/:id' component={TweetPage}/>
                  <Route path='/new' component={NewTweet}/>
                </div>}
          </div>
        </Fragment>
      </Router>
     
    );
  }
  
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
