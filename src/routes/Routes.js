import React, { useEffect, useState } from 'react'

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

//Components
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Home from '../containers/Home';
import Login from '../containers/Login';
import { useDispatch } from 'react-redux';
import {firebase} from '../firebase/firebaseConfig'
import { login } from '../redux/actions/Login';

const Routes = () => {

    const dispatch = useDispatch()
    const [isLooggedIn, setsIsLoogedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
            } else {
                setsIsLoogedIn(false)
            }
        })
    }, [dispatch])

    return (
        <Router>
            <Switch>
                <PublicRoute component={Login} exact path="/login" restricted={true} isAuthenticated={isLooggedIn} />
                <PrivateRoute component={Home} path="/" isAuthenticated={isLooggedIn} />
            </Switch>
        </Router>
    )
}

export default Routes
