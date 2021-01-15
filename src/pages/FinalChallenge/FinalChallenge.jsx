import React from 'react';

import SecretPage  from '../../components/SecretPage/SecretPage';
import Password  from '../../components/Password/Password';
import './FinalChallenge.css';



class FinalChallenge extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      password : '',
      secretVisible : false,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogOff = this.handleLogOff.bind(this);
  }

  checkPassword(password){
    if(password === '84 101 32 105 117 98 101 115 99 44 32 80 117 114 99 105 99 97 32 33'){
      return true;
    }
    return false;
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      secretVisible : this.checkPassword(this.state.password),
    });
  }
  
  handleLogOff(e){
    e.preventDefault();
    this.setState({
      secretVisible : false,
    });
  }

  render(){
    const secretVisible = this.state.secretVisible;
    let pageToDisplay;
    if(secretVisible){
      pageToDisplay = <SecretPage onTakeMeBackClicked={this.handleLogOff}/>;
    }
    else{
     pageToDisplay = <Password password={this.state.password} onChange={this.handleChange} onSubmit={this.handleSubmit} />; 
    }
    return (
      <div>
        {pageToDisplay}
      </div>
    );
  }
}

export default FinalChallenge;