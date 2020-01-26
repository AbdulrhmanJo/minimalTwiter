import React from 'react';
import { connect } from 'react-redux'
import { handleInitialDate } from '../actions/shared'
import Dashboard from './dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './newTweet'

class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(handleInitialDate())
  }

  render(){
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? null : <NewTweet/>}
      </div>
    );
  }
  
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
