import React, {Component} from 'react';
import '../stylesheet/userThreadStyle.css';
class UserThreads extends Component{
    render(){
        return(
            <div className="userDetails m-2 rounded pr-3" onClick={ () => { this.props.handleUserName(this.props.userArr.id)} }  >
                <img src={this.props.userArr.icon} alt="icon"/>
                <p className = "text mr-auto">{this.props.userArr.name}</p>
                <small className = "text-muted">I use: {this.props.userArr.algo}</small>
            </div>
        );
    }

}

export default UserThreads;