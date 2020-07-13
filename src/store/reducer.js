const initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, img:'https://via.placeholder.com/150' },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, img:'https://via.placeholder.com/150' },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, img:'https://via.placeholder.com/150' },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, img:'https://via.placeholder.com/150' },
      { name: 'Apples', category: 'food', price: .99, inStock: 500, img:'https://via.placeholder.com/150' },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, img:'https://via.placeholder.com/150' },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90, img:'https://via.placeholder.com/150' },
    ],
    activeCategory: '',
    productList:[]
  };
  export default (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
    case 'CATEGORY':
      const activeCategory = payload;      
      return { ...state, activeCategory };
    case 'LIST':
      state.productList.push(payload);      
      return { ...state, productList:state.productList };
    case 'REMOVE': 
      
      state.productList.splice(payload,1);
      return { ...state, productList:state.productList };
  
    default:
      return state;
    }
  };
  
  

  export const triggerActive = (category) => {
    return {
      type: 'CATEGORY',
      payload: category,
    };
  };

  export const triggerList = (productName) => {
    return {
      type: 'LIST',
      payload: productName,
    };
  };

  export const triggerRemove = (productName) => {
    return {
      type: 'REMOVE',
      payload: productName,
    };
  };