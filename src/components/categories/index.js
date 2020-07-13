import React from 'react';
import { connect } from 'react-redux';
import { triggerActive } from '../../store/reducer';
import {Button, ButtonGroup} from '@material-ui/core';
// import Header from '../header/index';

const Categories = (props) => {
  return (
    <>
      <h3 className="h3h3">Categories</h3>
      <div className='categories'>
        <ButtonGroup orientation="vertical" size="large" variant="text" color="secondary" disableElevation>

          {props.catAndProReducer.categories.map(category => {
            return (
              <Button key={category.name} onClick={() => props.triggerActive(category.name)}>
                {category.name}
              </Button>
            );
          })}

        </ButtonGroup>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {catAndProReducer:state.catAndProReducer};
};

const mapDispatchToProps = {triggerActive};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);