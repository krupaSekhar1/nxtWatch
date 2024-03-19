import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  state = {isDark: false}
  themeChange = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }
  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }
  render() {
    const {isDark} = this.state
    let val
    if (isDark) {
      val = 'White'
    } else {
      val = 'dark'
    }
    return (
      <div className="c">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <div className="c1">
          <img
            className="profile"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <button data-testid="data-testid" onClick={this.themeChange}>
            {val}
          </button>
          <button onClick={this.onLogout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
