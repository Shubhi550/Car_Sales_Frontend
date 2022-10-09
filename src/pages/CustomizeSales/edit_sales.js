import React  from 'react';
import axios from 'axios'
import '../pages.css'

class Edit_sales extends React.Component {
  constructor(){
    super();
    this.state = {
        value: null,
        sales_id_ui: null,
        customer_id_ui: null
    };
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

  // POST REQUEST to filterthe sales data by sales_id or customer_id
  async filter() {
    const sales_customer_id = {
      "sales_id": this.state.sales_id_ui,
      "Customer_id": this.state.customer_id_ui
      }
      console.log("sales_cus_id: ", sales_customer_id)
      const response = await axios.post(`http://${process.env.REACT_APP_IP}:5000/filter_sales`, sales_customer_id)
      .then((response) => {
        if(response.data == null){
          alert("Sales ID or Customer ID not found !!")
        }
        else{
        console.log("res from filter_sales: ", response.data);
        const default_sales_id = response.data['sales_id']
        this.setState({ sales_id_ui: default_sales_id })
        const default_date_of_purchase = response.data['Date of Purchase']
        this.setState({ date_of_purchase_ui: default_date_of_purchase })
        const default_customer_id = response.data['Customer_id']
        this.setState({ customer_id_ui: default_customer_id})
        const default_fuel = response.data['Fuel']
        this.setState({ fuel_ui: default_fuel})
        const default_premium = response.data['Premium']
        this.setState({ premium_ui: default_premium })
        const default_vehicle_segment = response.data['VEHICLE_SEGMENT']
        this.setState({ vehicle_segment_ui: default_vehicle_segment})
        const default_sellingprice = response.data['SellingPrice']
        this.setState({ value: default_sellingprice })
        const default_power_steering = response.data['Power_steering']
        this.setState({ power_steering_ui: default_power_steering })
        const default_airbags = response.data['airbags']
        this.setState({ airbags_ui: default_airbags })
        const default_sunroof = response.data['sunroof']
        this.setState({ sunroof_ui: default_sunroof })
        const default_matt_finish = response.data['Matt_finish']
        this.setState({ matt_finish_ui: default_matt_finish })
        const default_music_system = response.data['music system']
        this.setState({ music_system_ui: default_music_system })
        const default_customer_gender = response.data['Customer_Gender']
        this.setState({ customer_gender_ui: default_customer_gender })
        const default_customer_income_group = response.data['Customer_Income group']
        this.setState({ customer_income_group_ui: default_customer_income_group })
        const default_customer_region = response.data['Customer_Region']
        this.setState({ customer_region_ui: default_customer_region })
        const default_customer_marital_status = response.data['Customer_Marital_status']
        this.setState({ customer_marital_status_ui: default_customer_marital_status})
        }
      }, (error) => {
        console.log(error);
      });
    }

  // POST REQUEST to post the submitted data of this page to backend
  async submit() {
  const edit_sales_data = {
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
    console.log("edit_sales_data: ", edit_sales_data)
    const response = await axios.post(`http://${process.env.REACT_APP_IP}:5000/edit_sales`, edit_sales_data)
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
        <b>
             Edit with &nbsp;
             <input className="input_box" type='number' placeholder='Sales ID' style={{height:'23px',width:'100px'}} onChange={evt => this.handle_sales_id(evt)}></input> &nbsp; or &nbsp;
             <input className="input_box" type='number' placeholder='Customer ID' style={{height:'23px',width:'100px'}} onChange={evt => this.handle_customer_id(evt)}></input> &nbsp; &nbsp;
             <button style={{color:'white' , fontSize:'13px', background:'green', height:'20px', width:'50px'}} onClick={()=> {this.filter()}}>
            Filter
		  </button>
         </b> 
        <br /> <br /> 
        <hr />
        <br />
        <label style={{color:'black', fontSize:'13px'}}>Sales ID</label> &emsp;
        <input className="input_box" readOnly={true} defaultValue={this.state.sales_id_ui} type='number' style={{height:'20px',width:'200px'}} onChange={evt => this.handle_sales_id(evt)}></input>
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Date of Purchase</label> &emsp;
        <input className="input_box" readOnly={true} type='text' defaultValue={this.state.date_of_purchase_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_date_of_purchase(evt)}></input>
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer ID</label> &emsp;
        <input className="input_box" type='number' readOnly={true} defaultValue={this.state.customer_id_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_id(evt)}></input> 
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Fuel</label> &emsp;
        <input className="input_box" type='text' defaultValue={this.state.fuel_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_fuel(evt)}></input> 
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Premium</label> &emsp;
        <input className="input_box" type='number' defaultValue={this.state.premium_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_premium(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Vehicle Segment</label> &emsp;
        <input className="input_box" type='text' defaultValue={this.state.vehicle_segment_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_vehicle_segment(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Selling Price</label> &emsp;
        <input className="input_box" type='number' value={this.state.value} min="900" max="1000000" style={{height:'20px',width:'200px'}} onChange={evt => this.handle_selling_price(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Power Steering</label> &emsp;
        <input className="input_box" type='number' defaultValue={this.state.power_steering_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_power_steering(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Airbags</label> &emsp;
        <input className="input_box" type='number' defaultValue={this.state.airbags_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_airbags(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Sunroof</label> &emsp;
        <input className="input_box" type='number' defaultValue={this.state.sunroof_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_sunroof(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Matt Finish</label> &emsp;
        <input className="input_box" type='number' defaultValue={this.state.matt_finish_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_matt_finish(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Music System</label> &emsp;
        <input className="input_box" type='number' defaultValue={this.state.music_system_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_music_system(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer Gender</label> &emsp;
        <input className="input_box" type='text' defaultValue={this.state.customer_gender_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_gender(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer Income Group</label> &emsp;
        <input className="input_box" type='text' defaultValue={this.state.customer_income_group_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_income_group(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer Region</label> &emsp;
        <input className="input_box" type='text' defaultValue={this.state.customer_region_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_region(evt)}></input>   
        <br /> <br />
        <label style={{color:'black', fontSize:'13px'}}>Customer Marital Status</label> &emsp;
        <input className="input_box" type='number' defaultValue={this.state.customer_marital_status_ui} style={{height:'20px',width:'200px'}} onChange={evt => this.handle_customer_marital_status(evt)}></input>           
       
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
  
  export default Edit_sales;