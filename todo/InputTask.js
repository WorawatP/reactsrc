import React, {Component}  from 'react';

class InputTask extends Component {

   state = {user:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <input type="hidden" name="id" value={this.props.id} /><br/>
               <input type="text" name="user" onChange={this.handleChange} /> <br/>
               <button onClick={() => this.props.addTask(this.state.user)}>Add</button>
           </div>
       )
   }
}

export default InputTask