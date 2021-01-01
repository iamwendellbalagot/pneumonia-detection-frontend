import React, { Component } from 'react';
import classes from './FileBase64.css';

class FileBase64 extends Component {

    state = {
        files:[],
        bind: null
    }

     handleChange(e) {

         // get the files
         let files = e.target.files;

         // Process each file
         var allFiles = [];
         for (var i = 0; i < files.length; i++) {

             let file = files[i];

             // Make new FileReader
             let reader = new FileReader();

             // Convert the file to base64 text
             reader.readAsDataURL(file);

             // on reader load somthing...
             reader.onload = () => {

                 // Make a fileInfo Object
                 let fileInfo = {
                     name: file.name,
                     type: file.type,
                     size: Math.round(file.size / 1000) + ' kB',
                     base64: reader.result,
                     file: file,
                 };

                 // Push it to the state
                 allFiles.push(fileInfo);

                 // If all files have been proceed
                 if (allFiles.length === files.length) {
                     // Apply Callback function
                     if (this.props.multiple) this.props.onDone(allFiles);
                     else this.props.onDone(allFiles[0]);
                 }
             } // reader.onload
         } // for
     }

     handleBind = () => {
        this.setState({bind: this.handleChange.bind(this)});
     }

    render() {
        return (
            <div className = {classes.FileBase} onClick={this.handleBind} >
                <span>Choose a file</span>
                <input
                type="file"
                name = 'photo'
                // onChange={ this.handleChange.bind(this) }
                onChange = {this.state.bind}
                multiple={ this.props.multiple }
                 />
            </div>
        );
    }
}

export default FileBase64;
