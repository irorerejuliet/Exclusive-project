import React from 'react'
import { Link } from 'react-router-dom'

const CartDetails = () => {
  return (
    <div>
      <div className="flex gap-2 items-center my-20 text-sm">
        <Link to="/">Home</Link> /
        <Link to="/cart" className="font-medium">
          Cart
        </Link>
      </div>
      <div className="p-8 font-sans">
        {/* HEADER ROW */}
        <div className="grid grid-cols-4 font-semibold bg-gray-100 p-4 border-b">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {/* ITEM 1 */}
        <div className="grid grid-cols-4 items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <img src="/images/LCD Monitor.svg" alt="Monitor" className="w-16" />
            <span>LCD Monitor</span>
          </div>
          <div>$650</div>
          <div>
            <select className="border rounded p-2">
              <option>01</option>
            </select>
          </div>
          <div>$650</div>
        </div>

        {/* ITEM 2 */}
        <div className="grid grid-cols-4 items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <img src="/images/GamePad.svg" alt="Gamepad" className="w-16" />
            <span>H1 Gamepad</span>
          </div>
          <div>$550</div>
          <div>
            <select className="border rounded p-2">
              <option>02</option>
            </select>
          </div>
          <div>$1100</div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center gap-4 my-8">
          <button className="border border-gray-400 px-6 py-2 rounded">
            Return To Shop
          </button>
          <button className="border border-gray-200 px-6 py-2 rounded">
            Update Cart
          </button>
        </div>

        {/* COUPON */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mb-10">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border p-2 w-64 rounded"
            />
            <button className="bg-primary text-white px-6 py-2 rounded">
              Apply Coupon
            </button>
          </div>

          {/* CART TOTAL */}
          <div className="border w-80 p-6 rounded">
            <h3 className="text-xl mb-4 font-semibold">Cart Total</h3>
            <div className="flex justify-between py-3">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="border boredr-b"></div>
            <div className="flex justify-between py-3">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="border boredr-b"></div>
            <div className="flex justify-between py-2 font-semibold">
              <span>Total:</span>
              <span>$1750</span>
            </div>
            <button className="bg-primary text-white w-full py-3 rounded mt-4">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetails
