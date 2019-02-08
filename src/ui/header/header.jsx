import React, { Component } from 'react';
import GithubCorner from "react-github-corner";
import {Link} from 'react-router-dom';
export default class BodyPage extends Component {

    componentDidMount() {

        let btn = document.querySelector('.button');
        let buttonWrapper = document.querySelectorAll('.button-wrapper');

        btn.addEventListener('click', ()=>{
            if(btn.classList.contains('animation')) {
                btn.classList.remove('animation');
            } else {
                btn.classList.add('animation');
            }

            for (let i = 0; i < buttonWrapper.length; i++ ) {
                if(buttonWrapper[i].classList.contains('animation')){
                    buttonWrapper[i].classList.remove('animation');
                } else {
                    buttonWrapper[i].classList.add('animation');
                }
            }

        });
    }
    render() {
        return (
            <div>

                <GithubCorner
                    href="https://github.com/mantegnous"
                    bannerColor="#fff"
                    octoColor="#000"
                    width={80}
                    height={80}
                    direction="right"
                />

                <div className="row zero-margin-row">
                    <div className="col offset-l4 offset-m2 hide-on-small-only">
                        <div className="col l3 m6 menu-header">
                            <div className="menu-icon-dimension">
                        <div className="col l2 m2 zero-padding-right zero-padding-left">
                            <Link to="/profile" data-target="slide-out" className="sidenav-trigger menu-icon">
                                <i className="material-icons">person</i></Link>
                        </div>
                        <div className="col s1 l2 m2 zero-padding-right zero-padding-left">
                            <Link to="/work" data-target="slide-out" className="sidenav-trigger menu-icon">
                                <i className="material-icons">work</i></Link>
                        </div>
                        <div className="col s1 l2 m2 zero-padding-right zero-padding-left">
                            <Link to="/education" data-target="slide-out" className="sidenav-trigger menu-icon">
                                <i className="material-icons">school</i></Link>
                        </div>
                        <div className="col s1 l2 m2 zero-padding-right zero-padding-left">
                            <Link to="/skill" data-target="slide-out" className="sidenav-trigger menu-icon">
                                <i className="material-icons">language</i></Link>
                        </div>
                        <div className="col s1 l2 m2 zero-padding-right zero-padding-left">
                            <Link to="/techskill" data-target="slide-out" className="sidenav-trigger menu-icon">
                                <i className="material-icons">computer</i></Link>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col l12 m12 s12 zero-padding-right main-content zero-padding-left">
                    </div>
                </div>
                <div className="circle-person">
                    <div className="main-wrapper">
                        <div className="button">
                            <i className="small white-text material-icons" title="Social">add</i>
                        </div>
                        <div className="main-wrapper-inside">
                            <img src={require('../../assets/img/suit.jpg')}></img>
                        </div>
                        <div className="button-wrapper first">
                            <div className="button-inside first">
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="button-wrapper second">
                            <div className="button-inside second">
                                <i className="fab fa-google-plus-g"></i>
                            </div>
                        </div>
                        <div className="button-wrapper third">
                            <div className="button-inside third">
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="personal-info center">Pinco Pallino</div>
                    </div>
                    <div className="col s12 m12 l12">
                        <div className="center personal-info-subtext">Frontend Developer</div>
                    </div>
                </div>
            </div>
        );
    }
}