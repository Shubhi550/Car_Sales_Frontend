import React from 'react';
import axios from 'axios'
import MaterialTable from "material-table";
// material-table icons
import { forwardRef } from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
// components
import Top_btns from '../../components/top_btns';
import Top_nav from '../../components/top_nav';

class Sales_details extends React.Component {

  constructor(){
    super();
    this.state = {
      sales_data: []
    }
  }

  async componentDidMount() {   
    const res = await axios.get(`http://${process.env.REACT_APP_IP}:5000/sales_details`)
      .then((res) => {
        console.log("res:", res.data)
        const sales_table_data = res.data
        this.setState({ sales_table_data })
        const columns_names = [
          { title: "SALES ID", field: "sales_id" },
          { title: "DATE OF PURCHASE", field: "Date of Purchase" },
          { title: "CUSTOMER ID", field: "Customer_id" },
          { title: "FUEL", field: "Fuel" },
          { title: "PREMIUM", field: "Premium" },
          { title: "VEHICLE SEGMENT", field: "VEHICLE_SEGMENT" },
          { title: "SELLING PRICE", field: "SellingPrice" },
          { title: "POWER STEERING", field: "Power_steering" },
          { title: "AIRBAGS", field: "airbags" },
          { title: "SUNROOF", field: "sunroof" },
          { title: "MATT FINISH", field: "Matt_finish" },
          { title: "MUSIC SYSTEM", field: "music system" },
          { title: "CUSTOMER GENDER", field: "Customer_Gender" },
          { title: "CUSTOMER INCOME GROUP", field: "Customer_Income group" },
          { title: "CUSTOMER REGION", field: "Customer_Region" },
          { title: "CUSTOMER MARITAL STATUS", field: "Customer_Marital_status" }
        ];
        this.setState({ columns_names })
        console.log("column_names:", this.state.columns_names)
      }).catch(error => {
        console.error("Error: ",error);
      });
    }

render() {
  const tableIcons = {
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  };

  return (
    <React.Fragment>
      <Top_nav />
      <br /> <br />
      <Top_btns />
      <br /><br />
      <MaterialTable 
      icons={tableIcons}
      title="Sales Details" 
      columns={this.state.columns_names} 
      data={this.state.sales_table_data} 
      options={{
        filtering: true,
        exportButton: true,
        headerStyle: {
          backgroundColor: '#F5F5F5',
          color: '#000000'
        }
      }}
      />
    </React.Fragment>
  );    

}}

export default Sales_details;
