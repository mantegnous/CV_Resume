import React, { Component } from 'react';
import Boxtext from "../../ui/body/body";

export default class Techsk extends Component{
    render(){
        return(
            <Boxtext className="hide-on-med-and-up"
                     iconName="computer"
                     labelTitle="TECHNICAL SKILL"
                     boxText={
                         <div className="row">

                             <div className="col s13 m3">
                                 <div className="center card hoverable">
                                     <div className="card-image blue darken-1 white-text">
                                     <i className="img-skill fab fa-react"></i>
                                     </div>
                                     <div className="card-title">
                                         <span><p>REACT</p></span>
                                     </div>
                                     <div className="card-content center">
                                         <p></p>
                                     </div>
                                 </div>
                             </div>

                             <div className="col s13 m3">
                                 <div className="center card hoverable">
                                     <div className="card-image blue darken-1 white-text">
                                         <i className="img-skill fab fa-angular"></i>
                                     </div>
                                     <div className="card-title">
                                         <span><p>ANGULAR</p></span>
                                     </div>
                                     <div className="card-content center">
                                         <p></p>
                                     </div>
                                 </div>
                             </div>

                             <div className="col s13 m3">
                                 <div className="center card hoverable">
                                     <div className="card-image blue darken-1 white-text">
                                         <i className="img-skill fab fa-vuejs"></i>
                                     </div>
                                     <div className="card-title">
                                         <span><p>Vue.js</p></span>
                                     </div>
                                     <div className="card-content center">
                                         <p></p>
                                     </div>
                                 </div>
                             </div>

                             <div className="col s13 m3">
                                 <div className="center card hoverable">
                                     <div className="card-image blue darken-1 white-text">
                                         <i className="img-skill fab fa-js"></i>
                                     </div>
                                     <div className="card-title">
                                         <span><p>Javascript</p></span>
                                     </div>
                                     <div className="card-content center">
                                         <p></p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     }
            />
        );
    }
}