import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Preview from './pages/Preview';
import Quest from './pages/Quest';
import Result from './pages/Result';

function Routes(){

    
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/Preview" component={Preview}/>
            <Route path="/Quest" component={Quest}/>
            <Route path="/Result" component={Result}/>
        </BrowserRouter>
    )
}
export default Routes;