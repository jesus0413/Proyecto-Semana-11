import React from 'react';
import Homepage from '../../Views/Homepage/Homepage';
import { Switch, Route,  } from 'react-router-dom';




export const DashboardRoutes = () => {


    return (

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/"/>
                    <Homepage/>
                  
                </Switch>
            </div>

    )
}
