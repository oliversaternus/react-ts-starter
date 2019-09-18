import * as React from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Button from './components/Button';
import ErrorComponent from './components/Error';

class App extends React.Component<RouteComponentProps> {
    public render() {
        return (
            <Switch>
                <Route exact path="/button" component={Button}/>
                <Route component={ErrorComponent}/>
            </Switch>
        );
    }
}

export default withRouter(App);
