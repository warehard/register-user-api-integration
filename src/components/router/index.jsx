import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserRegister from '../../pages/register'
import Login from '../../pages/login'
import Users from '../../pages/users'
import NewFeeback from '../../pages/new-feedback'
import Feedback from '../../pages/feedback'
import errorImage from '../../images/404.svg';
import './index.css';


const Router = ({ token, setToken }) => {

  const [authentication, setAuthentication] = useState(undefined)

  useEffect(() => {
    !token && setAuthentication(false);
    token && setAuthentication(true)
  }, [token]);



  return (
    <div className='route'>
      {
        authentication ?
          <Switch>

            <Route path='/users/feedbacks/:id/new'>
              <NewFeeback token={token}/>
            </Route>

            <Route path='/users/feedbacks/:id'>
              <Feedback token={token }/>
            </Route>

            <Route exact path='/users/'>
              
                <Users token={token} />
              
            </Route>
            
            <Route path='/users/:page'>
                <Users token={token}/>
            </Route>

            <Route path='/register'>
              
                <UserRegister />
              
            </Route>

            <Route exact path='/'>
              
                <Login setAuthentication={setAuthentication} setToken={setToken} authentication={authentication}/>
              
            </Route>
            
          </Switch>
          :
          <Switch>

            <Route path='/users'>
              
                <img className="Error401" src={errorImage} alt="404 Error" />
              
            </Route>

            <Route path='/register'>
              
                <UserRegister />
              
            </Route>

            <Route exact path='/'>
              
                <Login setAuthentication={setAuthentication} setToken={setToken} />
              
            </Route>

          </Switch>
      }

    </div>

  )
}

export default Router;