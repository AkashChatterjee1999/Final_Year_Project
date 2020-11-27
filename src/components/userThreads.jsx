import React, {Component} from 'react';
import '../stylesheet/userThreadStyle.css';
class UserThreads extends Component{
    // handleClick = () =>{
    //     console.log(this.props.userArr.id);
    // }
    render(){
        return(
            <div className="userDetails" onClick={ () => { this.props.handleUserName(this.props.userArr.id)} }  >
                <img src="https://picsum.photos/200/300/?blur=2" alt=""/>
                <h3>{this.props.userArr.name    }</h3>
                <h6>TimeStamp</h6>
            </div>
        );
    }

}

export default UserThreads;