import React, { Component } from 'react';
import './tasks.css' 



class FileUploader extends Component 
{   
    textFromFile = "none";
    fileName = "none";
    state = {
        // Initially, no file is selected
        selectedFile: null,
        errorMessage: 'No File Selected',
        
    };
    
    sendDataUp = (event) => {
        // Call the parent callback function 
        this.props.parentCallback( {name: this.fileName, text: this.textFromFile});
        // event.preventDefault();
    }

    // On file select
    onFileChange = event => {
        // no file is selected
        if(event.target.files.length === 0)
        {
            this.setState( { errorMessage: "INVALID ACTION: No File is Selected"} );
            document.getElementById('fileUploadButton').style.visibility = 'hidden';
            document.getElementById('fileNameh2').style.visibility = 'hidden';
            document.getElementById('dispalyValidationMessage').style.color = 'red';
            document.getElementById('dispalyValidationMessage').innerHTML =  "INVALID ACTION: No File is Selected";
        }
        else
        {
            // Update the state
            var curFile = event.target.files[0];
            this.setState({ selectedFile: curFile});
            
            document.getElementById('showFileDataContainer').style.visibility='visible';
            
            // passes initial checks (type .txt and file is uploaded)
            if( curFile.type === 'text/plain')
            {
                this.setState ({errorMessage: "File Is Permitted"});
                document.getElementById('dispalyValidationMessage').style.color = 'limeGreen';
                document.getElementById('fileNameh2').style.visibility = 'visible';
                document.getElementById('fileNameEcho').innerHTML = curFile.name;
                document.getElementById('fileUploadButton').style.visibility='visible';
                document.getElementById('dispalyValidationMessage').innerHTML = "File Is Permitted";                          
            }
            // fails initial checks
            else
            {
                // wrong file type
                if (curFile.type !== 'text/plain') 
                {
                    document.getElementById('dispalyValidationMessage').style.color = 'red';
                    document.getElementById('fileNameh2').style.visibility = 'hidden';
                    document.getElementById('fileUploadButton').style.visibility = 'hidden';
                    this.setState({errorMessage: "INVALID FILE TYPE: please upload a .txt file"});
                    document.getElementById('dispalyValidationMessage').innerHTML = "INVALID FILE TYPE: please upload a .txt file";
                }
                
            }
        }
 
    };
    // On file upload (click the upload button)
    onFileUpload = () => {
        // Create an object of formData
        // const formData = new FormData();
        // // Update the formData object
        // formData.append(
        //     //     "myFile",
        //     this.state.selectedFile,
        //     this.state.selectedFile.name
        //     );

        // sendDataUp);
        let fr = new FileReader()
        
        fr.readAsText(this.state.selectedFile)
        
        fr.onload = () => {
            this.textFromFile = fr.result;
            this.fileName = this.state.selectedFile.name;
            this.sendDataUp();
        }
        
        fr.onerror = () => {
            alert(fr.error)
        }
            
            
    };
 
    render() {
 
        return (
            <div id='fileUploadContainer'>
                <div id='fileUploadInput'>
                    <input id='manifestFileInput' type="file" accept='.txt' onChange={this.onFileChange} />
                </div>
                <div id='fileInformationContainer'>
                    <div id='showFileDataContainer'>
                        <h2 id='fileNameh2'>File Name: <span id='fileNameEcho'></span></h2>
                        <p id="dispalyValidationMessage"></p>
                    </div>
                    <button id='fileUploadButton' onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                
            </div>
        );
    }
}
 
export default FileUploader;