import React, { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_ENABLE_MIRAGE === "true"  ? "/api" : import.meta.env.VITE_API_URL;
console.log(apiUrl)
export default function ApplyJob() {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  board10: "",
  marks10: "",
  board12: "",
  marks12: "",
  graduation: "",
  gradMarks: "",
  mtech: "",
  mtechMarks: "",
  resume: null,
  privacy: false,
});


const handleChange = (e) => {
  const { name, value, type , checked , files } = e.target;

  setFormData((prev) => {
    if(type === "checkbox"){
      return { ...prev, [name]: checked }
    }else if(type === "file"){
      return { ...prev, [name]: files[0] || null }
    }else{
      return { ...prev, [name]: value }
    }
  })


}

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let payload

    if (import.meta.env.VITE_ENABLE_MIRAGE === "true") {

      payload = { ...formData }
      if(payload.resume) payload.resume = payload.resume.name

    }else{
      payload = new FormData();
      for(const key in formData) {
        if(formData[key] !== null && formData[key] !== "") {
          payload.append(key, formData[key])
        }
      }
    }
    console.log(apiUrl)
    const { data } = await axios.post(`${apiUrl}/applyJob`, payload, {
      headers: {
        "Content-Type":
          import.meta.env.VITE_ENABLE_MIRAGE === "true" ? "application/json" : "multipart/form-data",
      },
    })

    console.log("form submiited sucessfully", data);
    alert(data.message || " your  Application submitted successfully  Have a nice day !")

  } catch (error) {
    console.error("error occured your form submission " , error );
    alert("Something went wrong. Please try again. ");
  }
};



  return (
     
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">User Details Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
        </div>

     
        <h3 className="text-xl font-semibold">Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">10th Board</label>
            <input
              type="text"
              name="board10"
              value={formData.board10}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">10th Marks (%)</label>
            <input
              type="number"
              name="marks10"
              value={formData.marks10}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">12th Board</label>
            <input
              type="text"
              name="board12"
              value={formData.board12}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">12th Marks (%)</label>
            <input
              type="number"
              name="marks12"
              value={formData.marks12}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Graduation</label>
            <input
              type="text"
              name="graduation"
              value={formData.graduation}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Graduation Marks (%)</label>
            <input
              type="number"
              name="gradMarks"
              value={formData.gradMarks}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">M.Tech (Optional)</label>
            <input
              type="text"
              name="mtech"
              value={formData.mtech}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">M.Tech Marks (%)</label>
            <input
              type="number"
              name="mtechMarks"
              value={formData.mtechMarks}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
        </div>

    
        <div>
          <label className="block font-medium mb-1">Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            className="w-full"
            required
          />
        </div>

   
        <div className="flex items-center">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label className="text-gray-700">I agree to the company's privacy policy</label>
        </div>

       
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
