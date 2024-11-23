'use client';

import { useState } from "react";

const HelpRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    description: "",
    bestTime: "morning",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/reach-out-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      console.log("Form submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        description: "",
        bestTime: "morning",
      });
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col items-center justify-center p-6 pt-[95px]">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-blue-800">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Need a Helping Hand?
        </h2>
        <p className="mb-6 text-center text-lg text-gray-700">
          If you or someone you know needs help with small or medium projects,
          we’re here for you! Complete the form below to get started.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Street Address"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="ZIP"
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief Description of Help Needed"
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows={4}
            required
          />
          <div className="mb-4">
            <label className="block mb-1 text-lg font-medium text-blue-700">
              Best Time to Reach You
            </label>
            <select
              name="bestTime"
              value={formData.bestTime}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpRequestForm;
