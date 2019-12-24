import * as React from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import StartComponent from './components/Start';

class App extends React.Component<RouteComponentProps> {
    public render() {
        return (
            <Switch>
                <Route exact path="/page" component={StartComponent} />
                <Route component={StartComponent} />
            </Switch>
        );
    }
}

export default withRouter(App);
