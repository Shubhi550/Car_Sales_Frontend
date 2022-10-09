import React from 'react';
import '../pages.css'
import Top_btns from '../../components/top_btns';
import Top_nav from '../../components/top_nav';
import Add_sales from './add_sales';
import Edit_sales from './edit_sales';

class Customize_sales extends React.Component {

  constructor(){
    super();
    this.state = {}
  }

render() {
  return (
    <React.Fragment>
      <Top_nav />
      <br /> <br />
      <Top_btns />
      <br /><br /><br />
         <p className="nav_details">&nbsp;&nbsp;&nbsp; Customize Sales</p>
         <br /><br />
         <div className="boxes">
        <div className="container_1"> <Add_sales /> </div> &emsp;&emsp;&emsp;
        <div className="container_2"> <Edit_sales /> </div>
       </div>

    </React.Fragment>
  );    

}}

export default Customize_sales;
