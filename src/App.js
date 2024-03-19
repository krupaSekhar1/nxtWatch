import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Home from './components/Home'

// Replace your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    )
  }
}

export default App

/*<Switch>
        <Route exact path="/login" component={Login} />
      </Switch>*/
