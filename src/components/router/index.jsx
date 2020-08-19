import React from 'react'
import { Switch, Route} from 'react-router-dom'
import UserRegister from '../../pages/register'
import Login from '../../pages/login'
import Users from '../../pages/users'
import NewFeeback from '../../pages/new-feedback'
import Feedback from '../../pages/feedback'

const Router = () => {
  return(
    <Switch>
      <Route path='/users/feedback/:id/new'>
          <NewFeeback />
      </Route>

      <Route path='/users/feedback/:id'>
        <Feedback />
      </Route>

      <Route path='/users'>
        <Users />
      </Route>

      <Route path='/register'>
        <UserRegister />
      </Route>

      <Route exact path='/'>
          <Login />
      </Route>
    </Switch>
  )
}

export default Router
