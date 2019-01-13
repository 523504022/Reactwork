import React, { Component } from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'

import About from './views/about'
import Home from './views/home'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*定义路由链接*/}
              <NavLink className='list-group-item' to='/about'>About</NavLink>
              <NavLink className='list-group-item' to='/home'>Home</NavLink>
            </div>
          </div>

          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*在此定义所有在此显示的路由*/}
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
