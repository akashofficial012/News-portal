"use client"
import React, { useState } from 'react'

export default function page() {
    const [country, setCountry] = useState("");
  return (
   <section className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-md shadow-md ">
  <h2 className="text-lg font-semibold text-gray-700 capitalize">Account settings</h2>
  <form>
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
      <div>
        <label className="text-gray-700 " >Name</label>
        <input  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
      </div>
      <div>

    <div className="block w-full">
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-600 w-full">
        Country
      </label>
      <select
        id="countries"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
      >
        <option value="" disabled>
          Choose a country
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>

      </div>
      <div>
        <label className="text-gray-700 " htmlFor="password">Email</label>
        <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
      </div>
      <div>
        <label className="text-gray-700 " htmlFor="passwordConfirmation">Password </label>
        <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
      </div>
    </div>
    <div className="flex justify-end mt-6">
      <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
    </div>
  </form>
</section>

  )
}
