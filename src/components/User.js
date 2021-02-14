import axios from "axios";
import React, { Component } from "react";
import UserConsumer from "../context";
import {Link} from "react-router-dom"

class User extends Component {
  state = {
    isVisible: false,
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = async(dispatch,e) => {
    const { id } = this.props;
    //delete request
    await axios.delete(`http://localhost:3004/users/${id}`)
    dispatch({type:"DELETE_USER",payload:id});
  };

  render() {
    //destructing
    const { id,name, department, salary } = this.props;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4" >
              <div className="card" >
                <div className="card-header d-flex justify-content-between" style={isVisible ? {backgroundColor:"#80a3dd"} : null}>
                  <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                  <i
                    onClick={this.onDeleteUser.bind(this,dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="cart-text">Salary: {salary}</p>
                    <p className="cart-text">Department: {department}</p>
                    <Link to={`edit/${id}`} className="btn btn-warning">Update User</Link>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default User;
