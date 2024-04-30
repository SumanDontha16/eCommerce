// export const addDecimals = num => (Math.random(num * 100) / 100).toFixed(2);

export const updateCart = (state) => {
    state.itemsPrice = Number(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2));  // Calculate items price
    state.shippingPrice = state.itemsPrice > 100 ? 0 : 10; // Calculate shipping price (If order is over £100 then free, else £10 shipping fee)
    state.taxPrice = Number((0.15 * state.itemsPrice).toFixed(2)); // Calculate tax price (15% of items price)
    state.totalPrice = (state.itemsPrice + state.shippingPrice + state.taxPrice).toFixed(2); // Calculate total price
    localStorage.setItem('cartItems', JSON.stringify(state));

    return state;
};