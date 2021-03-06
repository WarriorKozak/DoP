import React, { Component } from 'react';
import Start from './components/pages/Start'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import QuestionY from './components/pages/young/Question/Question'
import Old from './components/pages/old/Old'
import Answers from './components/pages/old/Answers/Answers'
import './App.css'


class App extends Component {

  render(){
      return(
        <div className='App'>
          <Switch>
            <Route exact path='/' component={ Start } />
            <Route exact path='/old' component={ Old } />
            <Route path='/young' component={ QuestionY } />
            <Route path='/answers' component={ Answers } />
          </Switch>
        </div>
      )
    }
}

export default App;
