import { useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [category, setCategory] = useState("forests");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // ✅ store image here

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      // ✅ Step 1: Upload image to Cloudinary
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );

        const uploadRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );

        imageUrl = uploadRes.data.secure_url; // ✅ Cloudinary URL
      }

      // ✅ Step 2: Save to MongoDB via API
      const res = await axios.post(`/api/${category}/add`, {
        name,
        description,
        image: imageUrl,
      });

      if (res.status === 201) {
        alert(`${category} added successfully!`);
        setName("");
        setDescription("");
        setFile(null);
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Error adding item. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Category */}
        <label className="block mb-2 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="forests">Forests</option>
          <option value="mountains">Mountains</option>
          <option value="rivers">Rivers</option>
          <option value="temples">Temples</option>
          <option value="monuments">Monuments</option>
        </select>

        {/* Name */}
        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        {/* Description */}
        <label className="block mb-2 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        {/* File Upload */}
        <label className="block mb-2 font-medium">Image</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border p-2 rounded mb-4"
          accept="image/*"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Add {category}
        </button>
      </form>
    </div>
  );
}
