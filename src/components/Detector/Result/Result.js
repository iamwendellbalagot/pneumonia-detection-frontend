import React from 'react';
import classes from './Result.css';
import Spinner from '../../Spinner/Spinner';
import Success from '../../Logo/Success/Success';
import Warning from '../../Logo/Warning/Warning';

const Result = (props) => {

    let infotext = <p className = {classes.infotext}>Click submit button to process the image.</p>
    let result = null
    let prob = null;
    let icon = null;
    
    if (props.result < 0.5){
        icon = <Success />
        result = <p style={{color:'lightgreen'}} className={classes.textresult}>Pneumonia not detected.</p>
    }
    else if (props.result >= 0.5) {
        icon = <Warning />
        result = <p style={{color:'salmon'}}className={classes.textresult}>Pneumonia detected.</p>
        prob = <p className={classes.prob}>Probability: {String((props.result *100).toFixed(2)) + '%' }</p>
    }


    return (
        <div className = {classes.Result}>
            
            <div className={classes.container}>
                {props.showSpinner? <Spinner />
                :<div>
                    {props.result?icon:null}
                    {props.result? result : infotext}
                    {prob? prob :null}
                </div>}
                
            </div>
        </div>
    );
};

export default Result;