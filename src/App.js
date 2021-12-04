import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import Restaurants from './components/admin/Restaurants';
import AddRestaurant from  './components/admin/AddRestaurant';
import Customers from './components/admin/Customers';

function App() {
  return (
    <Switch>
        <Route path="/midika-admin" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/restaurants" exact component={Restaurants} />
        <Route path="/add-restaurant" exact component={AddRestaurant} />
        <Route path="/customers" exact component={Customers} />
        <Redirect to="/midika-admin" />
    </Switch>
  );
}

export default App;