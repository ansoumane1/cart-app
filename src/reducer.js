import {
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };

    case REMOVE:
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    case INCREASE:
      const newCart2 = new Map(state.cart);
      const itemId = action.payload.id;
      const item = newCart2.get(itemId);
      const newItem = { ...item, amount: item.amount + 1 };
      newCart2.set(itemId, newItem);

      return { ...state, cart: newCart2 };

    case DECREASE:
      const newCart3 = new Map(state.cart);
      const itemId2 = action.payload.id;
      const item2 = newCart3.get(itemId2);
      const newItem2 = { ...item2, amount: item2.amount - 1 };
      if (newItem2.amount === 0) {
        newCart3.delete(itemId2);
      } else {
        newCart3.set(itemId2, newItem2);
      }
      return { ...state, cart: newCart3 };
    case LOADING:
      return { ...state, loading: true };
    case DISPLAY_ITEMS:
      return {
        ...state,
        cart: new Map(action.payload.cart.map((item) => [item.id, item])),
        loading: false,
      };
  }
}

export default reducer;
