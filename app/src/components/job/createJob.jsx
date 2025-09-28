import React, { useState } from "react";
import axios from "axios";
export default function CreateJob() {
  const [formData, setFormData] = useState({
    role: "",
    skills: "",
    description: "",
    ctc: "",
    base: "",
    variable: "",
    extraAmount: "",
    lastDate: "",
    companyName: "",
    location: "",
    thumbnail: null,
  });
  
  
  const apiUrl = import.meta.env.VITE_ENABLE_MIRAGE === "true"  ? "/api": import.meta.env.VITE_API_URL; 
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleFileChange = (e) => {
  setFormData({ ...formData, thumbnail: e.target.files[0] });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let payload;

    if (import.meta.env.VITE_ENABLE_MIRAGE === "true") {
      // Mirage: send JSON instead of FormData
      payload = { ...formData };
      if (payload.thumbnail) payload.thumbnail = payload.thumbnail.name; // store file name only
    } else {
      // Real backend: send FormData
      payload = new FormData();
      for (const key in formData) payload.append(key, formData[key]);
    }

    const { data } = await axios.post(`${apiUrl}/createJob`, payload, {
      headers: {
        "Content-Type":
          import.meta.env.VITE_ENABLE_MIRAGE === "true"
            ? "application/json"
            : "multipart/form-data",
      },
    });

    console.log(data);
    alert(data.message);
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Create Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        
        <input
          type="text"
          name="skills"
          placeholder="Skills Required"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input type="number" name="ctc" placeholder="CTC" value={formData.ctc} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="base" placeholder="Base Salary" value={formData.base} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="variable" placeholder="Variable Salary" value={formData.variable} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="extraAmount" placeholder="Extra Amount" value={formData.extraAmount} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <input type="date" name="lastDate" value={formData.lastDate} onChange={handleChange} className="w-full p-2 border rounded" />

        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="w-full p-2 border rounded" required />
        
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
        
        <input type="file" name="thumbnail" accept="image/*" onChange={handleFileChange} className="w-full" />

        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Create Job
        </button>
      </form>
    </div>
  );
}