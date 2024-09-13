'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { toast } from 'react-hot-toast';

// Define Zod schema for validation
const parentSchema = z.object({
  name: z.string().nonempty("Name is required"),
  address: z.string().nonempty("Address is required"),
  cell: z.string().regex(/^\d{10}$/, "Cell number must be a 10-digit number"),
  email: z.string().email("Invalid email format"),
  age: z.string().nonempty("Age is required"),
  option: z.string().nonempty("Option is required"),
});

type Child = {
  name: string;
  age: string;
  dob: string;
  medicalConditions: string;
};

export default function ParentForm() {
  const router = useRouter();
  const [parentInfo, setParentInfo] = useState({
    name: '',
    address: '',
    cell: '',
    email: '',
    age: '',
    option: '',
  });

  const [children, setChildren] = useState<Child[]>([
    { name: '', age: '', dob: '', medicalConditions: '' },
  ]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleParentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setParentInfo({
      ...parentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChildChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newChildren = [...children];
    newChildren[index][name as keyof Child] = value;
    setChildren(newChildren);
  };

  const addChild = () => {
    setChildren([...children, { name: '', age: '', dob: '', medicalConditions: '' }]);
  };

  const removeChild = (index: number) => {
    const newChildren = children.filter((_, i) => i !== index);
    setChildren(newChildren);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate the form data using Zod
      parentSchema.parse(parentInfo);

      const formData = {
        parentInfo,
        children,
      };

      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        router.push('/')
      } else {
        toast.error('Error sending message. Please Try again');
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
    <div className="max-w-2xl mx-auto p-4 pt-[90px]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-xl font-bold">Parent Information</h1>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Parent Name</label>
          <input
            type="text"
            name="name"
            value={parentInfo.name}
            onChange={handleParentChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={parentInfo.address}
            onChange={handleParentChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Cell Number</label>
          <input
            type="text"
            name="cell"
            value={parentInfo.cell}
            onChange={handleParentChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.cell && <p className="text-red-500 text-sm">{errors.cell}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={parentInfo.email}
            onChange={handleParentChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Parent Age</label>
          <input
            type="number"
            name="age"
            value={parentInfo.age}
            onChange={handleParentChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Select Option</label>
          <select
            name="option"
            value={parentInfo.option}
            onChange={handleParentChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Select Option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
          {errors.option && <p className="text-red-500 text-sm">{errors.option}</p>}
        </div>

        <h2 className="text-xl font-bold mt-6">Children Information</h2>

        {children.map((child, index) => (
          <div key={index} className="space-y-4 border p-4 rounded-lg mb-4 relative">
            <h3 className="text-lg font-semibold">Child {index + 1}</h3>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Child Name</label>
              <input
                type="text"
                name="name"
                value={child.name}
                onChange={(e) => handleChildChange(index, e)}
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Child Age</label>
              <input
                type="number"
                name="age"
                value={child.age}
                onChange={(e) => handleChildChange(index, e)}
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={child.dob}
                onChange={(e) => handleChildChange(index, e)}
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Known Medical Conditions</label>
              <input
                type="text"
                name="medicalConditions"
                value={child.medicalConditions}
                onChange={(e) => handleChildChange(index, e)}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {children.length > 1 && (
              <button
                type="button"
                onClick={() => removeChild(index)}
                className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addChild}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Add Another Child
        </button>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
