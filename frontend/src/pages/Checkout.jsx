import React, { useState } from 'react';
import { placeOrder } from '../api';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main container */}
      <div className="container mx-auto py-12 px-6">
        {/* Checkout header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <span className="text-gray-600">Secure Checkout</span>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Address & Payment section */}
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6">
            {/* Address Details */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="text-gray-700 font-semibold">John Doe</p>
                <p className="text-gray-700">123 Street, City, Country</p>
                <p className="text-gray-700">Phone: +123 456 789</p>
                <button className="mt-4 text-blue-600 hover:underline">Change Address</button>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="radio" name="paymentMethod" className="h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-gray-700">Credit/Debit Card</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="paymentMethod" className="h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-gray-700">Net Banking</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="paymentMethod" className="h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-gray-700">UPI</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="paymentMethod" className="h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-gray-700">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Place Order
              </button>
            </div>
          </div>

          {/* Order Summary section */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-gray-700">$150.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Shipping</span>
                <span className="text-gray-700">$10.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$160.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
