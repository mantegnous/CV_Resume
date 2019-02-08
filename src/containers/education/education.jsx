import React, { Component } from 'react';
import Boxtext from "../../ui/body/body";
import TimelineEvent from "../../components/timeline/timeline";
import Timeline from "../../components/timeline/timeline";

export default class Education extends Component{
  render(){
        return(
            <Boxtext
             iconName="school"
             labelTitle="EDUCATION"
      boxText={
          <div className="timeline">
                     <TimelineEvent
                         timelineTitle="D-Training Bootcamp"
                         timelineSubtitle="Assago MilanoFiori Forum"
                         timelineIcon="business"
                     />
                     <TimelineEvent
                         timelineTitle="I.T.I.S E. Fermi"
                         timelineSubtitle="Vibo Valentia(VV)"
                         timelineIcon="business"
                     />
                     <TimelineEvent
                         timelineTitle="High School"
                         timelineSubtitle="Briatico(VV)"
                         timelineIcon="business"
                     />
                 </div>
                     }
            />

        );
    }
}