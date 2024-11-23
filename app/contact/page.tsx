'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { z } from 'zod';

// Define Zod schema for validation
const contactSchema = z.object({
  name: z.string().nonempty("Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be a 10-digit number"),
  message: z.string().nonempty("Message is required"),
});

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate the form data using Zod
      contactSchema.parse(formData);

      const res = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        router.push('/');
      } else {
        toast.error('Error sending message. Try again');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          formattedErrors[err.path[0] as string] = err.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-blue-800">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md"
              rows={4}
              required
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
        <div className="mt-8 p-4 bg-blue-100 text-blue-900 rounded-md shadow-inner">
          <h2 className="text-xl font-semibold mb-2">The Von der Becke Academy Corp</h2>
          <p><strong>DBA Crossroad Family Center</strong></p>
          <p>Office: 503 Lake Ave N, Storm Lake, IA 50588</p>
          <p>Phone: 712-299-7124</p>
          <p className="text-sm mt-2">Tax ID: 40-1005883 | 501(c)(3)</p>
        </div>
      </div>
    </div>
  );
}
