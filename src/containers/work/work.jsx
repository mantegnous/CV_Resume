import React, { Component } from 'react';
import Boxtext from "../../ui/body/body";
import TimelineEvent from "../../components/timeline/timeline";
/*import Timeline from "./timeline/index";*/

export default class Work extends Component{
    render(){
        return(
            <Boxtext className="hide-on-med-and-up"
                     iconName="work"
                     labelTitle="WORK EXPERENCE"
                     boxText={
                         <div className="timeline">
                             <TimelineEvent
                                 timelineTitle="ThinkOpen S.r.l"
                                 timelineSubtitle="Frontend Development"
                                 timelineIcon="code"
                                 timelineModal="Sviluppo web con React"

                             />
                             <TimelineEvent
                                 timelineTitle="Accenture Technology S.r.l"
                                 timelineSubtitle="Frontend Development"
                                 timelineIcon="code"
                                 timelineModal="Sviluppo web con Jquery"
                             />
                             <TimelineEvent
                                 timelineTitle="B.D.F S.p.A"
                                 timelineSubtitle="Operatore Helpdesk I°Livello"
                                 timelineIcon="headset_mic"
                                 timelineModal="Assistenza tecnica ai promotori di AllianzBank"
                             />
                         </div>
                     }
            />

        );
    }
}