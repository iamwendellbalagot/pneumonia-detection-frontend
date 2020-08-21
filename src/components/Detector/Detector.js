import React from 'react';
import classes from './Detector.css';

import Card from './Card/Card';
import Filebase from '../FileBase64/FileBase64';
import Xray from './Xray/Xray';
import Result from './Result/Result';

const Detector = (props) => {

    let buttonState = <button className = {classes.disabledButton} onClick={props.clicked} disabled = {true}>Submit</button>
    if (props.baseimage){
        buttonState = <button className = {classes.enabledButton} onClick={props.clicked} disabled = {false}>Submit</button>
    }
    return (
        <div className = {classes.Detector}>
            <h2>PNEUMONIA DETECTION</h2>
            <section>
                <div className = {classes.container1}>
                    {/* <label>{props.baseimage? props.baseimage[0].name.substring(0,20) : null}</label> */}
                    {props.baseimage? <Xray baseimage = {props.baseimage[0].base64}/> 
                    :<Card />}
                    <Filebase 
                    multiple = {props.multiple}
                    onDone = {props.onDone} />
                    <p onClick = {props.showSample}>Click here to view sample images</p>
                </div>

                <div className = {classes.container2}>
                    <Result 
                    result={props.result}
                    showSpinner = {props.showSpinner} />
                    {buttonState}
                </div>
                
            </section>
        </div>
    );
};

export default Detector;