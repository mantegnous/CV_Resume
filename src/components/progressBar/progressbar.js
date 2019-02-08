import React, { Component } from 'react';

const ProgressBar = props => (
            <div className="progress_bar">
                <div className="row">
                    <div className="col m5 s5 l5">
                        <span>{props.element}</span>
                    </div>
                    <div className="col m5 s5 l5">
                        <div className="progress grey lighten-2">
                            <div className="determinate blue darken-1" style={{width:props.percentuage}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );

export default ProgressBar;
