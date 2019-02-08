import React, { Component } from 'react';
import Boxtext from "../../ui/body/body";
import ProgressBar from "../../components/progressBar/progressbar";

export default class Personalsk extends Component{
    render(){
        return(
            <Boxtext
                     iconName="language"
                     labelTitle="LANGUAGES"
                     boxText={
                         <div class="progress_bar">
                            <ProgressBar
                            element="Italian"
                            percentuage='100%'
                            />
                            <ProgressBar
                             element="English"
                             percentuage='60%'
                            />
                         </div>
                     }
            />
        );
    }
}