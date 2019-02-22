import React,{Component}from 'react'
import axios from 'axios'
class wt extends Component {

   state = {
        data: '',
        zipcode: 84210
    }

   componentDidMount = () => this.fetchUser(this.state.zipcode)

   fetchUser = (zipcode) => {
       axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},th&units=metric&APPID=6e22eda0422b463a1a0c4e624e7af0e2`)
           .then(response => {
               this.setState({data: response.data})
               console.log(response.data)
           })
   }

   render() {
       const {data} = this.state
       if (data)
           return ( <div>{data.name} - {data.sys.country}  </div> )
       return (<div>.</div>);
   }
}

export default wt