import { Switch, Route, Redirect } from 'react-router-dom';
// import { routes } from './router/router'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {
  return (
    <div className="App">
      {/* <MyNavLink to="/login">Login</MyNavLink>
      <MyNavLink to="/home">Home</MyNavLink> */}
      <Switch>
        {/* {routes.map((path, component, exact:boolean = false, children = [], key) => {
          return <Route
            exact={exact}
            key={key}
            path={path}
            render={props => (
              <component {...props} children={children} />
            )}
          />
        })} */}
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
