1. Replace the callback used by `http.get` in the `customPromise` function with a promise that resolves with the data returned.

1. In the `customPromise` function, handle the case where the call fails (status code isn't 200) with a `rejected` promise..

1. The `getOrders` function needs to return the data from the API. This can be done by consuming an `axios.get` call, which uses promises.  Handle the successful completion of the call to `http://localhost:8888/orders` by returning the data that is returned.

1. The `getAddressForOrder` function needs to get the order information for the specified `order` and then get the shipping `address` for that order and return it. To do this, use the successful completion of `http://localhost:8888/orders/1` to fetch the `/address` specified by the `shippingAddress` value, and then return that address.

1. The `getInvalidOrder` function needs to handle the case where the promise fails, instead of succeeding. Make a call to `http://localhost:8888/orders/-1` and `catch` the error that comes back from the API, and return it.

1. The `setStatus` function needs to set the `status` variable to `"done"` when the call to `http://localhost:8888/orders/{id}` has completed, regardless of if it succeeded or failed. Make use of the `finally` function after the call.

1. The `loadPartialMetadata` needs to make a make sure that it loads `itemCategories`, `orderStatuses`, and `userTypes`. However, for performance reasons, it does not want to do so sequentially. Use the `all` function of promises, and when it's successful, return a `concat`enated list of the results.

1. The `loadAllMetadata` function needs to handle the case where `addressTypes` fails while `itemCategories` and `orderStatuses` succeeds. Use the `allSettled` function of promises. When the call completes, return a list of the `status` property for each call.