import React from 'react';
import { connect } from 'react-redux'
import { handleInitialDate } from '../actions/shared'
import Dashboard from './dashboard'

class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(handleInitialDate())
  }

  render(){
    return (
      <div>
        {this.props.loading ? null : <Dashboard/>}
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
