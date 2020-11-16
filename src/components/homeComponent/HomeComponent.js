import React from 'react';

import './homeComponent.css';
import Aux from '../common/hocComponent/Auxiliary';
import OutputComponent from '../outputComponent/outputComponent';
import * as utils from '../common/utils';


import {robotService} from '../../services';



export default class HomeComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {comamnd:"",result:''};
    }
    
    execute=()=>{
            console.log('command',this.state.comamnd);
            var result = robotService.runCommand(this.state.comamnd);
            if(!utils.isNullOrWhiteSpace(result)){
                this.setState({
                    result:result
                });
            }         
    }


    storeCommand = (e)=>{
        this.setState({
            comamnd:e.target.value
        })            
    }



    render(){
        return(
            <Aux>
                <div className="row">
                    <label>Enter Commands:</label>
                </div>
                <div className="row d-flex">
                    <div>
                        <textarea onChange={this.storeCommand} className="commandBox" rows="5" columns="40"></textarea>
                        <button onClick={this.execute}  className="btn btn-success btnRun">
                            Run
                        </button>
                    </div>                    
                </div>  
                {                   
                    !utils.isNullOrWhiteSpace(this.state.result) ?
                   <OutputComponent result = {this.state.result}></OutputComponent> :''
                }    
            </Aux>
        )
    }
} 