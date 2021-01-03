import React, { Component } from "react";
import axios from "axios";
import "./styles.css";
export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeInputName = this.onChangeInputName.bind(this);
    this.onChangeInputlName = this.onChangeInputlName.bind(this);
    this.onChangeInputemail = this.onChangeInputemail.bind(this);
    this.onChangeInputmobile = this.onChangeInputmobile.bind(this);
    this.state = {
      img: "",
      first_name: "",
      last_name: "",
      email: "",
      mobile: ""
    };
  }
  onChangeInputName(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeInputlName(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeInputemail(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeInputmobile(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onFileChange(e) {
    this.setState({ img: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", this.state.img);
    formData.append("first_name", this.state.first_name);
    formData.append("last_name", this.state.last_name);
    formData.append("email", this.state.email);
    formData.append("mobile", this.state.mobile);
    axios
      .post("https://leewayhertz-api.herokuapp.com/", formData, {})
      .then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          this.setState({
            first_name: "",
            last_name: "",
            img: "",
            email: "",
            mobile: ""
          });
          alert("data is inserted successful");
        } else {
          console.log("something Went wrong!");
        }
      });
  }

  render() {
    return (
      <div className="wrapper">
        <form
          className="myForm"
          onSubmit={this.onSubmit}
          encType="multipart/form-data"
        >
          <div className="formInstructionsDiv formElement">
            <h2 className="formTitle">LeewayHertz</h2>
            <p className="instructionsText">Demo Form for LeewayHertz</p>
          </div>

          <div className="fillContentDiv formElement">
            <div className="names formContentElement">
              <input
                className="inputRequest "
                type="text"
                placeholder="First Name"
                name="first_name"
                value={this.state.first_name}
                onChange={(e) => this.onChangeInputName(e)}
                required
              />

              <input
                className="inputRequest "
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={this.state.last_name}
                onChange={(e) => this.onChangeInputlName(e)}
                required
              />
            </div>

            <label>
              <input
                className="inputRequest formContentElement"
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.onChangeInputemail(e)}
                required
              />
            </label>
            <label>
              <input
                className="inputRequest formContentElement"
                type="tel"
                placeholder="Phone number "
                name="mobile"
                value={this.state.mobile}
                onChange={(e) => this.onChangeInputmobile(e)}
                required
                maxLength="10"
              />
            </label>
            <label>
              <input
                className="inputRequest formContentElement"
                type="file"
                accept="image/*"
                name="img"
                onChange={(e) => this.onFileChange(e)}
              />
            </label>
          </div>
          <div className="submitButtonDiv formElement">
            <button className="submitButton">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
