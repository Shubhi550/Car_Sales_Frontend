import React  from 'react';
import './comp.css'; 
import image  from '../components/images/Car_logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Top_nav extends React.Component {
   
render() {
      
    return (
      <React.Fragment>
      <div className='heading'>
      <Link to="/">
      <img src={image} height={50} width={70} />
      </Link>
      &nbsp;&nbsp;&nbsp;
      <b>C a r   S a l e s   E n t e r p r i s e</b>
      </div>
      </React.Fragment>
    );  
    }
  }
  
  export default Top_nav;
