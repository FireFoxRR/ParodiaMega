import React, { Component } from "react";
//import {useState} from 'react'
import { storage } from "../firebase";
import Header from "./header.component";

import TutorialDataService from "../services/tutorial.service";
import { withRouter, Redirect } from "react-router";

  
export default withRouter (class AddTutorial extends Component {

  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);


    this.state = {
      title: "",
      description: "",
      published: false,

      submitted: false,
      file: "",
      name: "",
      fileurl: ""

    };
    
  }

  /* storage */
  

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveTutorial() {
    let data = {
      title: this.state.title,
      description: this.state.description,
      published: false,
      fileurl: this.state.fileurl
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      title: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  handleChange(e) {
    alert("e: " + e.target.files[0]);
    alert("e: " + e.target.files[0].name);

    this.setState({
        file: e.target.files[0],
        name: e.target.files[0].name
      });
  }

  handleUpload(e) {
    let myname = this.state.name;
    alert("uploading..." + myname);
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${this.state.name}`).put(this.state.file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(this.state.name)
        .getDownloadURL()
        .then((url) => {
          //this.setFile(null);
          this.setState({fileurl: url});
        });
    });
  }

  
  render() {
//    function App() {

    //const allInputs = {imgUrl: ''}
    //const [imageAsFile, setImageAsFile] = useState('')
    //const [imageAsUrl, setImageAsUrl] = useState(allInputs)
 
  
   


   // }
    return (
      <div className="submit-form">
            <Header/>

        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div> 
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
          
        )}
     
     <div className="App">

      <form onSubmit={this.handleUpload}>
        <input type="file" onChange={this.handleChange} />
        <button >upload to firebase</button>
      </form>
      {this.state.fileurl}
      <img src={this.state.fileurl} alt="" />
    </div>
     
      </div>
    );
  }
})
