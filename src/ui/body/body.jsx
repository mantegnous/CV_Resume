import React, { Component } from 'react';

const Boxtext = props => (
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card col s12 offset-m2 offset-l2 m8 l8">
                            <div className="col s12 valign-wrapper card-text">
                                <div className="col s1 m1 l1 zero-padding-left">
                                    <i className="small material-icons"> {props.iconName} </i>
                                </div>
                                <div className="col s11 l11 m11 zero-padding-left">
                                    <a name="profile">
                                        <span className="label-text"> {props.labelTitle} </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col offset-l1 offset-m1 offset-s1 l11 m11 s11">
                                <span className="margin-text">
                                    {props.boxText}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        );
export default Boxtext;