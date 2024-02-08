import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Home from './components/Home'
import JobsList from './components/JobsList'
import './App.css'

const App = () => (
  <div className="flex-container">
    <Header />
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={JobsList} />
      <NotFound component={NotFound} />
    </Switch>
  </div>
)
export default App
