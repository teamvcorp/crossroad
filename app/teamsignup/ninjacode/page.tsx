"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { toast } from "react-hot-toast";

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
    name: "",
    address: "",
    cell: "",
    email: "",
    age: "",
    option: "option1",
  });

  const [children, setChildren] = useState<Child[]>([
    { name: "", age: "", dob: "", medicalConditions: "" },
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
    setChildren([...children, { name: "", age: "", dob: "", medicalConditions: "" }]);
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

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        router.push("/");
      } else {
        toast.error("Error sending message. Please try again.");
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
    <div className="min-h-screen bg-blue-600 text-white flex items-center justify-center pt-[95px]">
      <div className="max-w-4xl w-full bg-white text-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold text-center text-blue-600">Parent Information</h1>

          {/* Parent Info Fields */}
          {[
            { label: "Parent Name", name: "name", type: "text", value: parentInfo.name },
            { label: "Address", name: "address", type: "text", value: parentInfo.address },
            { label: "Cell Number", name: "cell", type: "text", value: parentInfo.cell },
            { label: "Email", name: "email", type: "email", value: parentInfo.email },
            { label: "Parent Age", name: "age", type: "number", value: parentInfo.age },
          ].map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={handleParentChange}
                className="block w-full p-3 border border-gray-300 rounded-lg"
              />
              {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
            </div>
          ))}

          {/* Option Dropdown */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Select Option</label>
            <select
              name="option"
              value={parentInfo.option}
              onChange={handleParentChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="">-- Select Option --</option>
              {["Ninja Code", "Yotae", "Dance", "Gymnastics", "Homeschool Plus", "Taekwondo"].map(
                (option, index) => (
                  <option key={index} value={`option${index + 1}`}>
                    {option}
                  </option>
                )
              )}
            </select>
            {errors.option && <p className="text-red-500 text-sm">{errors.option}</p>}
          </div>

          {/* Children Info */}
          <h2 className="text-xl font-bold text-blue-600">Children Information</h2>
          {children.map((child, index) => (
            <div key={index} className="space-y-4 border p-4 rounded-lg mb-4 relative">
              <h3 className="text-lg font-semibold text-blue-600">Child {index + 1}</h3>
              {[
                { label: "Child Name", name: "name", type: "text", value: child.name },
                { label: "Child Age", name: "age", type: "number", value: child.age },
                { label: "Date of Birth", name: "dob", type: "date", value: child.dob },
                {
                  label: "Known Medical Conditions",
                  name: "medicalConditions",
                  type: "text",
                  value: child.medicalConditions,
                },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="block text-sm font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={field.value}
                    onChange={(e) => handleChildChange(index, e)}
                    className="block w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              ))}

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

          {/* Add Child Button */}
          <button
            type="button"
            onClick={addChild}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600"
          >
            Add Another Child
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
