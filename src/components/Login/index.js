import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', show: true, showErrorMsg:false,errorMsg:''}
  onName = event => {
    this.setState({username: event.target.value})
  }
  onPassword = event => {
    this.setState({password: event.target.value})
  }
  onShow = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }
  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }
  submitData= async event=>{
    event.preventDefault();
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }
  render() {
    const {username, password, show,showErrorMsg,errorMsg} = this.state
    let pass
    if (show) {
      pass = 'password'
    } else {
      pass = 'text'
    }
    return (
      <div className="div">
        <form onSubmit={this.submitData}>
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <label htmlFor="userName">UserName</label>
          <input
            onChange={this.onName}
            id="userName"
            placeholder="Enter Username"
            value={username}
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={this.onPassword}
            type={pass}
            id="password"
            placeholder="Enter Password"
            value={password}
          />
          <div className="div1">
            <input type="checkbox" id="show" onChange={this.onShow} />
            <label htmlFor="show">Show Password</label>
          </div>
          <button type="submit">Login</button>
          {showErrorMsg?<p>{errorMsg}</p>:""}
        </form>
      </div>
    )
  }
}

export default Login
