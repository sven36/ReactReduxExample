import React from 'react'; 
import {Route,BrowserRouter} from 'react-router-dom';
import Home from '../views/Home/Home';
import Detail from '../views/Detail/Detail';
        /*<Route path="/detail/:id" component={Detail} />*/

const routes=(
    <BrowserRouter >
        <Route path="/" component={Home}/>
    </BrowserRouter>
);
export default routes;