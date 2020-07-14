import React from 'react';
import { connect } from 'react-redux';
import { triggerList ,triggerRemove} from '../../store/reducer';

import './header.scss';

 function Header(props){
  return (
    <header id='header'>
      <h1 >Our Store</h1>
      {console.log('array:',props.catAndProReducer)}
  <span id='cart'>Cart  ({ props.catAndProReducer.productList.length})</span>
  
    </header>
  );
} 

const mapStateToProps = (state) => {
  return { catAndProReducer: state.catAndProReducer };
};

const mapDispatchToProps = {triggerList};

export default connect(mapStateToProps,mapDispatchToProps)(Header);