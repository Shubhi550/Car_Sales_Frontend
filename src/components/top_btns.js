import React  from 'react';
import './comp.css'; 
import 'font-awesome/css/font-awesome.min.css';

 function Top_btns() {
      
    return (
      <React.Fragment>
		{/* NAVBAR */}
      <div className='top_btns_bar'>
	  {/* SALES DETAILS */}
	<div className='top_btns_style'>
		<i class="fa fa-search" aria-hidden="true"></i>
		&nbsp;&nbsp;
	</div>
	<button className='top_btns_style' onClick={()=> window.open("/","_self")}>
          Sales Details
	    </button>
      &emsp;&emsp;  
	  {/* CUSTOMIZE DETAILS */}
	  <div className='top_btns_style'>
		<i class="fa fa-pencil" aria-hidden="true"></i>
		&nbsp;&nbsp;
	</div>
	<button className='top_btns_style' onClick={()=> window.open("/customize_sales","_self")}>
          Customize Sales
	    </button>
      &emsp;&emsp;  
      </div>  
      </React.Fragment>
    );  
}

export default Top_btns;
