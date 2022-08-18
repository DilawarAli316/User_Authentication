import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'
import LoginScreen from 'views/Login'
import UserNotes from 'views/UserNotes'

import RegisteredScreen from './views/Registered'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/user-notes' component={UserNotes} exact />

          <Route path='/registered' component={RegisteredScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Redirect from='/' to='/login' />
        </Switch>
      </BrowserRouter>
    </>
  )
}
