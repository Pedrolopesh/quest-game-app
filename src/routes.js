import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Preview from './pages/Preview';
import Quest from './pages/Quest';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/Preview" component={Preview}/>
            <Route path="/Quest" component={Quest}/>
        </BrowserRouter>
    )
}
export default Routes;