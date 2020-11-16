import React from 'react';

import Aux from '../common/hocComponent/Auxiliary';

import './outputComponent.css';
export default class OutputComponent extends React.Component{


    render(){
        return(
            <Aux>
                <div className="row">
                    <h3>Report:</h3>
                </div>
                <div className="row mt-4 outputDiv" >
                    {this.props.result}
                </div>
            </Aux>
        )
    }
}