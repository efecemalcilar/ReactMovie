import React, { Component } from "react";

export default class SearchBar extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    //? PreventDefault fromun varsayılar davranışını durdurup Sayfanın refresh olmasını engellemek için kullanıyoruz. 
    
    //console.log("Search from submitted");
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <div className="row my-3">
            <div className="col-12">
              <input
              //value="Efe"
                type="text"
                className="form-control"
                placeholder="Searh a movie"
                //onChange = {(event) => console.log(event.target.value)}
                //onChange = {(event) => this.setState({search: event.target.value})}
                onChange = {this.props.searchMovieProp}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
