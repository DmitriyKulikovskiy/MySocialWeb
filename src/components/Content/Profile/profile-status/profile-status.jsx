import React from "react";

class ProfileStatus extends React.Component {
    state = {
        statusChange: false,
        status: this.props.status
    }

    activeStatusChange = () => {
         this.setState( {
             statusChange: true
            }
        );        
    }

    deActivateStatusChange = () => {
        this.setState( {
            statusChange: false
           }
       );      
       this.props.updateStatus(this.props.status);  
   }

   onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
   }

   componentDidUpdate(prevProps, prevState) {
       if(prevProps.status !== this.props.status) {
           this.setState({
               status: this.props.status
           })
       }
   }

  render() {
        return (
            <div>
                { this.state.statusChange 
                    ? <span> <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateStatusChange} value={this.state.status} /> </span>
                    : <span  onClick={this.activeStatusChange}> {this.state.status} </span>}
             </div>
         );
    }
}

export default ProfileStatus;
