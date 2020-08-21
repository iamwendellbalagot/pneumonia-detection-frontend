import React, {Component} from 'react';
import classes from './Home.css';

//import FileBase64 from 'react-file-base64';
import axios from '../../axios';
import Navigation from '../../components/Navigation/Navigation';
import Detector from '../../components/Detector/Detector';
import Footer from '../../components/Footer/Footer';
import ValidSamples from '../../components/ValidSamples/ValidSamples';
import Modal from '../../components/Modal/Modal';

class Home extends Component {

    state = {
        payload: {
            'id': '123',
            'type': 'jpg',
            'box': [0, 0, 100, 100],
            'image': null
        },
        file: null,
        submit: false,
        result:null,
        showSpinner: false,
        showSample: false
    }

    componentDidUpdate(){
        console.log(this.state.result)
    }

    // Callback~
    getFiles(files) {
        this.setState({
            payload:{
                ...this.state.payload,
                image: files[0].base64.split(',')[1]
            },
            file:files
        })
    }

    showSampleHandler = ()=>{
        this.setState(prevState =>({
            showSample: !this.state.showSample
        }))
    }

    submitHandler = () =>{
        this.setState(prevState =>({
            showSpinner: true
        }))

        axios.post('/predict', this.state.payload)
            .then(res => {
                console.log('Success')

                setTimeout(() =>{
                    this.setState({showSpinner:false})
                },1000)

                if (res.data.prediction ===0){
                    this.setState(prevState => ({
                        submit: true,
                        result: 0.000111,
                        showSpinner:false
                    }))
                }else{
                    this.setState(prevState => ({
                        submit: true,
                        result: res.data.prediction,
                        showSpinner:false
                    }))
                }
                
            })
            .catch(err => {
                console.log(err)
        })
    }

   

    render(){

        
        return(
            <div className = {classes.Home}>
                <Navigation />
                <Detector 
                multiple={ true }
                onDone={ this.getFiles.bind(this) } 
                baseimage = {this.state.file}
                clicked = {this.submitHandler}
                result = {this.state.result} 
                showSpinner= {this.state.showSpinner} 
                showSample = {this.showSampleHandler}/>

                <Modal 
                show = {this.state.showSample} 
                clicked = {this.showSampleHandler}>
                    <ValidSamples />
                </Modal>
                
                
                <Footer />
            </div>
        );
    }
}

export default Home;