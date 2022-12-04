import { createSelector } from 'reselect'
import { useSelector } from 'react-redux';

const orders = (state: any) => state.orders
export const amount = createSelector(orders, order => order.amount)


// export const ordersSelector = () => useSelector((state: any) => state)
// const selectTaxPercent = state => state.shop.taxPercent

// const selectSubtotal = createSelector(selectShopItems, items =>
//   items.reduce((subtotal, item) => subtotal + item.value, 0)
// )

// const selectTax = createSelector(
//   selectSubtotal,
//   selectTaxPercent,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )

// const selectTotal = createSelector(
//   selectSubtotal,
//   selectTax,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )

// const exampleState = {
//   shop: {
//     taxPercent: 8,
//     items: [
//       { name: 'apple', value: 1.2 },
//       { name: 'orange', value: 0.95 }
//     ]
//   }
// }

export const a = 5