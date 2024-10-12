"use client"
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
    bestTime: "morning", // Default value
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

      // Optionally handle success (e.g., display a success message)
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
        bestTime: "morning", // Default value
      })
    } catch (error) {
      // Optionally handle error
      console.error("There was an error submitting the form:", error);
    } finally {

    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md pt-[90px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-500">NEED A HELPING HAND? SIGN UP HERE!</h2>
      <p className="mb-6 text-center text-gray-600">
        If you or someone you know needs help with small or medium projects, or simply need a hand, we’ve got you covered!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-1/2 px-3 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-1/2 px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-1/3 px-3 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="w-1/3 px-3 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP"
            className="w-1/3 px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief Description of Help Needed"
          className="w-full px-3 py-2 border rounded-lg"
          rows={4}
          required
        />
        <div className="mb-4">
          <label className="block mb-1">Best Time to Reach You</label>
          <select
            name="bestTime"
            value={formData.bestTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HelpRequestForm;