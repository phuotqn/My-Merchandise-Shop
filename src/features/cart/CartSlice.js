import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  cartItems: [],
  cartTotalItems: 0,
  cartTotalSums: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemPosition = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemPosition >= 0) {
        state.cartItems[itemPosition].cartQuantity += 1;
        toast.success(`Add ${action.payload.title} to your Cart`, {
          position: 'top-left',
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`Add ${action.payload.title} to your Cart`, {
          position: 'top-left',
        });
      }
    },
    decreaseItem(state, action) {
      const itemPosition = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemPosition].cartQuantity > 1) {
        state.cartItems[itemPosition].cartQuantity -= 1;
        toast.warning(`Remove ${action.payload.title} from your Cart`, {
          position: 'top-left',
        });
      } else if (state.cartItems[itemPosition].cartQuantity === 1) {
        const removedItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        toast.error(`Remove ${action.payload.title} from your Cart`, {
          position: 'top-left',
        });
        state.cartItems = removedItem;
      }
    },
    removeItem(state, action) {
      const removedItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      toast.error(`Remove ${action.payload.title} from your Cart`, {
        position: 'top-left',
      });
      state.cartItems = removedItem;
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, items) => {
          const { price, cartQuantity } = items;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalItems = quantity;
      state.cartTotalSums = total;
    },
  },
});
export const { addToCart, removeItem, decreaseItem, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
