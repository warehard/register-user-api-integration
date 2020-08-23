import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserRegister from '../../pages/register'
import Login from '../../pages/login'
import Users from '../../pages/users'
import NewFeeback from '../../pages/new-feedback'
import Feedback from '../../pages/feedback'
import errorImage from '../../images/404.svg';


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

            <Route path='/users'>
              
                <Users token={token} />
              
            </Route>

            <Route path='/register'>
              <div>
                <UserRegister />
              </div>
            </Route>

            <Route exact path='/'>
              <div>
                <Login setAuthentication={setAuthentication} setToken={setToken} />
              </div>
            </Route>
          </Switch>
          :
          <Switch>
            <Route path='/users'>
              <div>
                <img src={errorImage} alt="404 Error" />
              </div>
            </Route>

            <Route path='/register'>
              <div>
                <UserRegister />
              </div>
            </Route>

            <Route exact path='/'>
              <div>
                <Login setAuthentication={setAuthentication} setToken={setToken} />
              </div>
            </Route>

          </Switch>
      }

    </div>

  )
}

export default Router;