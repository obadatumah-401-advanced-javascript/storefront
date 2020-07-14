import React from 'react';
import { connect ,dispatch} from 'react-redux';
import { triggerList,triggerRemove ,getAction,getRemoteData} from '../../store/reducer';
import {Button, ButtonGroup} from '@material-ui/core';


const Products = (props) => {
    // const fetchData = (e) => {
    //     e && e.preventDefault(); // if I have a form
    //     // props.get();
    //     console.log('dataaaaanew ----',props.get());
    // }

  return (
    <>
    {/* <button onClick={fetchData}>CLICK</button> */}
       <div class="productsList"> <ul>{props.catAndProReducer.productList.map((val,i)=>{
           return(
               <li>
                   <Button variant="text" color="secondary" key={val} onClick={() => props.triggerRemove(i)}> X </Button>
                   {val}
               </li>
           )

       })}</ul></div>
      <div className='products'>
        {props.catAndProReducer.products.filter(allProducts => allProducts.category === props.catAndProReducer.activeCategory )
          .map(product => {

            return (
                
              <div className='one-product' key={product.name}>
                <h3 className="pro">{product.name}</h3>
                <img src={`${product.img}`} alt='img' />
                <p className='category'>Category : {product.category}</p>
                <p className='inStock'>In Stock : {product.inStock}</p>
                <p className='price'>Price : {product.price}</p>
                <Button variant="contained" color="secondary" onClick={() => props.triggerList(product.name)}>Add To Cart</Button>
              </div>
            );
          })}

      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { catAndProReducer: state.catAndProReducer };
};

const mapDispatchToProps = {triggerList,triggerRemove};
// const mapDispatchToProps2 = (dispatch) => ({
//     get: ()=> dispatch(getRemoteData()),
//     // put: (id, data) => dispatch(actions.putRemoteData(id, data)),
// });

// const mapDispatchToProps2 = {triggerRemove};

export default connect(mapStateToProps,mapDispatchToProps)(Products);