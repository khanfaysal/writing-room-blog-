import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { context } from '../../App';



const PrivateRoute = ({ children, ...rest }) => {
    const {User, setUser} = useContext(context);

    return (
        <Route
            {...rest}
            render={({ location }) =>
             User.email ? (
                    children

                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
