import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import UserRegister from '../../pages/register'
import Login from '../../pages/login'
import Users from '../../pages/users'
import NewFeeback from '../../pages/new-feedback'
import Feedback from '../../pages/feedback'



const Router = ({ token, setToken}) => {

  const [authentication, setAuthentication] = useState(undefined)
  
  useEffect(() => {
    token === null && setAuthentication(false);
    token !== null && setAuthentication(true)
  }, [token]);
  console.log(authentication)
  return(
    <div style={{width:'100%'}} >
      {
      authentication === true ? 
        <Switch>
         <Route path='/users/feedback/:id/new'>
            <NewFeeback />
          </Route>

          <Route path='/users/feedback/:id'>
            <Feedback />
          </Route>

          <Route path='/users'>
            <Users token={token}/>
          </Route>

          <Route path='/register'>
            <UserRegister />
          </Route>

        <Route exact path='/'>
            <Login setAuthentication={setAuthentication} setToken={setToken}/>
        </Route>
        </Switch>
        :
          <Switch>
          <Route path='/users'>
            <h1>404</h1>
          </Route>

          <Route path='/register'>
            <UserRegister />
          </Route>

          <Route exact path='/'>
              <Login setAuthentication={setAuthentication} setToken={setToken}/>
          </Route>
          
          </Switch>
      }
    </div>
  )
}

export default Router;