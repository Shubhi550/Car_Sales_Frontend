import React  from 'react';
import axios from 'axios'
import '../pages.css'

class Add_sales extends React.Component {
  constructor(){
    super();
    this.state = {value: null};
  
  }

  handle_sales_id(evt) {
    this.setState({
      sales_id_ui: evt.target.value
    });  
  }

  handle_date_of_purchase(evt) {
    this.setState({
      date_of_purchase_ui: evt.target.value
    });  
  }

  handle_customer_id(evt) {
    this.setState({
      customer_id_ui: evt.target.value
    });  
  }

  handle_fuel(evt) {
    this.setState({
        fuel_ui: evt.target.value
    })
  }

  handle_premium(evt) {
    this.setState({
        premium_ui: evt.target.value
    });  
  }

  handle_vehicle_segment(evt) {
    this.setState({
        vehicle_segment_ui: evt.target.value
    });  
  }

  handle_selling_price(evt) {
    if(evt.target.value >= 1000000) alert("Selling Price should not be allowed more than 1 million !!")
    let { value, min, max } = evt.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    this.setState({ value });
  }

  handle_power_steering(evt) {
    this.setState({
        power_steering_ui: evt.target.value
    });  
  }

  handle_airbags(evt) {
    this.setState({
        airbags_ui: evt.target.value
    });  
  }

  handle_sunroof(evt) {
    this.setState({
        sunroof_ui: evt.target.value
    });  
  }

  handle_matt_finish(evt) {
    this.setState({
        matt_finish_ui: evt.target.value
    });  
  }

  handle_music_system(evt) {
    this.setState({
        music_system_ui: evt.target.value
    });  
  }

  handle_customer_gender(evt) {
    this.setState({
        customer_gender_ui: evt.target.value
    });  
  }

  handle_customer_income_group(evt) {
    this.setState({
        customer_income_group_ui: evt.target.value
    });  
  }

  handle_customer_region(evt) {
    this.setState({
        customer_region_ui: evt.target.value
    });  
  }

  handle_customer_marital_status(evt) {
    this.setState({
        customer_marital_status_ui: evt.target.value
    });  
  }

  // POST REQUEST to post the submitted data of this page to backend
  async submit() {
  const add_sales_data = {
    "sales_id": this.state.sales_id_ui,
    "Date of Purchase": this.state.date_of_purchase_ui,
    "Customer_id": this.state.customer_id_ui,
    "Fuel": this.state.fuel_ui,
    "Premium": this.state.premium_ui,
    "VEHICLE_SEGMENT": this.state.vehicle_segment_ui,
    "SellingPrice": this.state.value,
    "Power_steering": this.state.power_steering_ui,
    "airbags": this.state.airbags_ui,
    "sunroof": this.state.sunroof_ui,
    "Matt_finish": this.state.matt_finish_ui,
    "music system": this.state.music_system_ui,
    "Customer_Gender": this.state.customer_gender_ui,
    "Customer_Income group": this.state.customer_income_group_ui,
    "Customer_Region": this.state.customer_region_ui,
    "Customer_Marital_status": this.state.customer_marital_status_ui
    }
    console.log("add_sales_data: ", add_sales_data)
    const response = await axios.post(`http://${process.env.REACT_APP_IP}:5000/add_sales`, add_sales_data)
    .then((response) => {
      console.log("res from add_data: ", response);
      alert(response.data)
    }, (error) => {
      console.log(error);
    });
  }
   
render() {
    return (
      <React.Fragment>
      <div>
        <br /> <br /> 
        <b> Add Sales Details </b> 
        <br /> <br /> 
        <hr />
        <br />
        <label style={{color:'black', fontSize:'13px'}}>Sales ID</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_sales_id(evt)}></input>
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Date of Purchase</label> &emsp;
        <input className="input_box" type='text' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_date_of_purchase(evt)}></input>
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer ID</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_id(evt)}></input> 
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Fuel</label> &emsp;
        <input className="input_box" type='text' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_fuel(evt)}></input> 
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Premium</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_premium(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Vehicle Segment</label> &emsp;
        <input className="input_box" type='text' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_vehicle_segment(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Selling Price</label> &emsp;
        <input className="input_box" type='number' value={this.state.value} min="900" max="1000000" style={{height:'20px',width:'200px'}} onChange={evt => this.handle_selling_price(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Power Steering</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_power_steering(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Airbags</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_airbags(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Sunroof</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_sunroof(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Matt Finish</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_matt_finish(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Music System</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_music_system(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer Gender</label> &emsp;
        <input className="input_box" type='text' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_gender(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer Income Group</label> &emsp;
        <input className="input_box" type='text' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_income_group(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer Region</label> &emsp;
        <input className="input_box" type='text' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_region(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer Marital Status</label> &emsp;
        <input className="input_box" type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_marital_status(evt)}></input>           
       
        <br /> <br /> <br />
        <button style={{color:'white' , fontSize:'13px', background:'green', height:'25px', width:'55px'}} onClick={()=> {this.submit()}}>
        Submit
		  </button>
        <br /> <br /> <br /> 
        <hr />
        <br /> 
        </div>
      </React.Fragment>
    );  
    }
  }
  
  export default Add_sales;