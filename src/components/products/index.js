import React from 'react';
import { connect } from 'react-redux';


const Products = (props) => {
  return (
    <>
      <div className='products'>
        {props.catAndProReducer.products.filter(allProducts => allProducts.category === props.catAndProReducer.activeCategory )
          .map(product => {

            return (
              <div className='one-product' key={product.name}>
                <h3>{product.name}</h3>
                <img src={`${product.img}`} alt='img' />
                <p className='category'>Category : {product.category}</p>
                <p className='inStock'>In Stock : {product.inStock}</p>
                <p className='price'>Price : {product.price}</p>
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

export default connect(mapStateToProps)(Products);