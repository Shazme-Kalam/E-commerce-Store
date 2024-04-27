export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const id = action.payload.id
      const temp = state.cart.some((item) => item.id === id)
      console.log("temp..", temp)
      // action.payload.qty += 1
      if(temp) {
        const arr = [...state.cart]
        const arr2 = arr.map((itm) => {
          if (itm.id === id) itm.qty +=1
          return itm
        })
        return { ...state, cart: [...arr2] };
      }

      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_ITEM_CART":
      // console.log("im in remove")
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INC_QTY":
     
    const incId = action.payload.id;
      const incCart = state.cart.map((item) => {
        if (item.id === incId) {
          return { ...item, qty: item.qty + 1 }; 
        }
        return item;
      });
      return { ...state, cart: incCart };
    case "DEC_QTY":
      const decId = action.payload.id;
      const decCart = state.cart.map((item) => {
        if (item.id === decId && item.qty > 1) {
          return { ...item, qty: item.qty - 1 }; 
        }
        return item;
      });
      return { ...state, cart: decCart };

    default:
      return state;
  }
};
