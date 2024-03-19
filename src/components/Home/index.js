import {Component} from 'react'
import Header from '../Header'
import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bg">
          <div className="c3">
            <div>
              <Link to="/">Home</Link>
              <Link to="/">Trending</Link>
              <Link to="/">Gaming</Link>
              <Link to="/">Saved Videos</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
