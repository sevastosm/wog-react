import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

const Routes = () => {
    return (
        <>
            {routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}
        </>
    )
}

export default function App() {
    return (
        <Switch>
            <Routes />
        </Switch>
    )
}
