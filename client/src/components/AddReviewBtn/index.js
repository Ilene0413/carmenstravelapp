import React from "react";
import { Collapse, Button } from 'react-bootstrap';
import dbAPI from "../../utils/dbAPI"
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class AddReviewBtn extends React.Component {
  state = {
    open: false,
    title: "",
    body: "",
    username: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  reviewPost = () => {
    //make an object that sends all information to database
    let review = {
      title: this.state.title,
      body: this.state.body,
      username: this.state.username
    }
    let city = this.props.currentCity;
    console.log("city= " + city);
    dbAPI.saveNote(city, review)
      .then(res => {
        this.setState({
          open: false,
          title: "",
          body: "",
          username: ""
        })

      })

  }


  render() {
    console.log(this.state)
    const { open } = this.state;
    return (
      <div>
        <Button variant="info"
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Add a Review
        </Button>
        {open && (
          <Collapse Dropup title="Right dropUp" in={this.state.open}>
            
              <div className="input-container">
                <div className="form-label">Review Title</div>
                <div className="form-group">
                  <input onChange={this.handleInputChange} name="title" value={this.state.title} className="form-control" />
                </div>
                <div className="form-label">Review</div>
              <div className="form-group">
                <input onChange={this.handleInputChange} name="body" value={this.state.body} className="form-control" />
              </div>
              <div className="form-label">Author</div>
              <div className="form-group">
                <input onChange={this.handleInputChange} name="username" value={this.state.username} className="form-control" />
              </div>
              <button className="btn btn-primary" onClick={this.reviewPost}>
                Submit
              </button>
            </div>
            
          </Collapse>
        )}

      </div>
    );
  }
}


export default AddReviewBtn;

