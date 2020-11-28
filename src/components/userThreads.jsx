import React, {Component} from 'react';
import '../stylesheet/userThreadStyle.css';
class UserThreads extends Component{
    // handleClick = () =>{
    //     console.log(this.props.userArr.id);
    // }
    render(){
        return(
            <div className="userDetails m-2 rounded pr-3" onClick={ () => { this.props.handleUserName(this.props.userArr.id)} }  >
                <img src="https://picsum.photos/200/300/?blur=2" alt=""/>
                <p className = "text mr-auto">{this.props.userArr.name}</p>
                <small className = "text-muted">I use: {this.props.userArr.algo}</small>
            </div>
        );
    }

}

export default UserThreads;