import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import BodyPage from '../ui/header/header';
import Profile from '../containers/profile/profile';
import Work from '../containers/work/work';
import Education from '../containers/education/education';
import Personalsk from '../containers/personalSkill/personalSkill';
import Techsk from '../containers/technicalSkill/technicalSkill';

export default class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <BodyPage/>
                <Route path="/profile" component={Profile}/>
                <Route path="/work" component={Work}/>
                <Route path="/education" component={Education}/>
                <Route path="/skill" component={Personalsk}/>
                <Route path="/techskill" component={Techsk}/>
        </div>
        </Router>
    );
  }
}
