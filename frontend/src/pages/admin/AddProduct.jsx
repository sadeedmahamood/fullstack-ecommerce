// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   createProduct,
//   getCategories,
// } from "../../services/productService";

// function AddProduct() {

//   const navigate = useNavigate();

//   const token = localStorage.getItem("access");

//   const [categories, setCategories] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     price: "",
//     stock: "",
//     image: null,
//     description: "",
//   });

//   const [preview, setPreview] = useState(null);

//   // FETCH CATEGORIES
//   useEffect(() => {

//     fetchCategories();

//   }, []);

//   const fetchCategories = async () => {

//     try {

//       const data = await getCategories();

//       setCategories(data);

//     } catch (error) {

//       console.error(error);

//     }

//   };

//   // HANDLE INPUTS
//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   };

//   // HANDLE IMAGE
//   const handleImageChange = (e) => {

//     const file = e.target.files[0];

//     if (!file) return;

//     setFormData({
//       ...formData,
//       image: file,
//     });

//     setPreview(URL.createObjectURL(file));

//   };

//   // SUBMIT FORM
//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       const form = new FormData();

//       // TEXT FIELDS
//       form.append("name", formData.name);

//       // IMPORTANT FIX
//       form.append("category_id", formData.category);

//       form.append("price", formData.price);

//       form.append("stock", formData.stock);

//       form.append("description", formData.description);

//       // IMAGE
//       if (formData.image) {

//         form.append("image", formData.image);

//       }

//       // DEBUG
//       console.log([...form]);

//       await createProduct(form, token);

//       alert("Product Added Successfully");

//       navigate("/admin/products");

//     } catch (error) {

//       console.error(error);

//       alert("Failed To Add Product");

//     }

//   };

//   return (

//     <section className="relative min-h-screen bg-black text-white overflow-hidden">

//       {/* RED GLOW */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

//       {/* CONTAINER */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 py-14">

//         {/* TOP */}
//         <div className="mb-14">

//           <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
//             Admin Panel
//           </p>

//           <h1 className="text-5xl md:text-6xl font-black mb-5">
//             Add Product
//           </h1>

//           <p className="text-gray-400 text-lg max-w-2xl">
//             Create and publish a new product for your ecommerce store.
//           </p>

//         </div>

//         {/* FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm space-y-8"
//         >

//           {/* PRODUCT NAME */}
//           <div>

//             <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//               Product Name
//             </label>

//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter product name"
//               className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//               required
//             />

//           </div>

//           {/* CATEGORY + PRICE */}
//           <div className="grid md:grid-cols-2 gap-6">

//             {/* CATEGORY */}
//             <div>

//               <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Category
//               </label>

//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//                 required
//               >

//                 <option value="">
//                   Select Category
//                 </option>

//                 {categories.map((category) => (

//                   <option
//                     key={category.id}
//                     value={category.id}
//                   >
//                     {category.name}
//                   </option>

//                 ))}

//               </select>

//             </div>

//             {/* PRICE */}
//             <div>

//               <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Price
//               </label>

//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="9999"
//                 className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//                 required
//               />

//             </div>

//           </div>

//           {/* STOCK + IMAGE */}
//           <div className="grid md:grid-cols-2 gap-6">

//             {/* STOCK */}
//             <div>

//               <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Stock
//               </label>

//               <input
//                 type="number"
//                 name="stock"
//                 value={formData.stock}
//                 onChange={handleChange}
//                 placeholder="20"
//                 className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//                 required
//               />

//             </div>

//             {/* IMAGE */}
//             <div>

//               <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Upload Image
//               </label>

//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//               />

//             </div>

//           </div>

//           {/* IMAGE PREVIEW */}
//           {preview && (

//             <div>

//               <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Image Preview
//               </p>

//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="w-full h-80 object-cover rounded-3xl border border-white/10"
//               />

//             </div>

//           )}

//           {/* DESCRIPTION */}
//           <div>

//             <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//               Description
//             </label>

//             <textarea
//               rows="6"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Write product description..."
//               className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300 resize-none"
//               required
//             ></textarea>

//           </div>

//           {/* BUTTON */}
//           <div className="pt-4">

//             <button
//               type="submit"
//               className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
//             >
//               Publish Product
//             </button>

//           </div>

//         </form>

//       </div>

//     </section>

//   );

// }

// export default AddProduct;




// import {
//   useState,
//   useEffect,
//   useRef
// } from "react";

// import { useNavigate } from "react-router-dom";

// import {
//   createProduct,
//   getCategories,
// } from "../../services/productService";

// function AddProduct() {

//   const navigate = useNavigate();

//   const imageRef = useRef();

//   const token =
//     localStorage.getItem("access");

//   const [categories, setCategories] = useState([]);

//   const [formData, setFormData] = useState({

//     name: "",

//     category: "",

//     price: "",

//     stock: "",

//     image: null,

//     description: "",

//   });

//   const [preview, setPreview] =
//     useState(null);

//   // =========================
//   // FETCH CATEGORIES
//   // =========================

//   useEffect(() => {

//     fetchCategories();

//   }, []);

//   const fetchCategories = async () => {

//     try {

//       const data =
//         await getCategories();

//       setCategories(data);

//     } catch (error) {

//       console.error(error);

//     }

//   };

//   // =========================
//   // HANDLE INPUTS
//   // =========================

//   const handleChange = (e) => {

//     setFormData({

//       ...formData,

//       [e.target.name]:
//         e.target.value,

//     });

//   };

//   // =========================
//   // HANDLE IMAGE
//   // =========================

//   const handleImageChange = (e) => {

//     const file =
//       e.target.files[0];

//     console.log(file);

//     if (!file) return;

//     setFormData((prev) => ({

//       ...prev,

//       image: file,

//     }));

//     setPreview(
//       URL.createObjectURL(file)
//     );

//   };

//   // =========================
//   // SUBMIT FORM
//   // =========================

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       const form =
//         new FormData();

//       // TEXT FIELDS
//       form.append(
//         "name",
//         formData.name
//       );

//       form.append(
//         "category_id",
//         formData.category
//       );

//       form.append(
//         "price",
//         formData.price
//       );

//       form.append(
//         "stock",
//         formData.stock
//       );

//       form.append(
//         "description",
//         formData.description
//       );

//       // IMAGE
//       const imageFile =
//         imageRef.current.files[0];

//       if (imageFile) {

//         form.append(
//           "image",
//           imageFile
//         );

//       }

//       // DEBUG
//       console.log([...form]);

//       await createProduct(
//         form,
//         token
//       );

//       alert(
//         "Product Added Successfully"
//       );

//       navigate(
//         "/admin/products"
//       );

//     } catch (error) {

//       console.error(error);

//       alert(
//         "Failed To Add Product"
//       );

//     }

//   };

//   return (

//     <section className="relative min-h-screen bg-black text-white overflow-hidden">

//       {/* RED GLOW */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

//       {/* CONTAINER */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 py-14">

//         {/* TOP */}
//         <div className="mb-14">

//           <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
//             Admin Panel
//           </p>

//           <h1 className="text-5xl md:text-6xl font-black mb-5">
//             Add Product
//           </h1>

//           <p className="text-gray-400 text-lg max-w-2xl">
//             Create and publish a new product for your ecommerce store.
//           </p>

//         </div>

//         {/* FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm space-y-8"
//         >

//           {/* PRODUCT NAME */}
//           <div>

//             <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//               Product Name
//             </label>

//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter product name"
//               className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//               required
//             />

//           </div>

//           {/* CATEGORY + PRICE */}
//           <div className="grid md:grid-cols-2 gap-6">

//             {/* CATEGORY */}
//             <div>

//               <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Category
//               </label>

//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//                 required
//               >

//                 <option value="">
//                   Select Category
//                 </option>

//                 {categories.map((category) => (

//                   <option
//                     key={category.id}
//                     value={category.id}
//                   >
//                     {category.name}
//                   </option>

//                 ))}

//               </select>

//             </div>

//             {/* PRICE */}
//             <div>

//               <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Price
//               </label>

//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="9999"
//                 className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//                 required
//               />

//             </div>

//           </div>

//           {/* STOCK + IMAGE */}
//           <div className="grid md:grid-cols-2 gap-6">

//             {/* STOCK */}
//             <div>

//               <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Stock
//               </label>

//               <input
//                 type="number"
//                 name="stock"
//                 value={formData.stock}
//                 onChange={handleChange}
//                 placeholder="20"
//                 className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//                 required
//               />

//             </div>

//             {/* IMAGE */}
//             <div>

//               <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Upload Image
//               </label>

//               <input
//                 ref={imageRef}
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
//               />

//             </div>

//           </div>

//           {/* IMAGE PREVIEW */}
//           {preview && (

//             <div>

//               <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//                 Image Preview
//               </p>

//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="w-full h-80 object-cover rounded-3xl border border-white/10"
//               />

//             </div>

//           )}

//           {/* DESCRIPTION */}
//           <div>

//             <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
//               Description
//             </label>

//             <textarea
//               rows="6"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Write product description..."
//               className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300 resize-none"
//               required
//             ></textarea>

//           </div>

//           {/* BUTTON */}
//           <div className="pt-4">

//             <button
//               type="submit"
//               className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
//             >
//               Publish Product
//             </button>

//           </div>

//         </form>

//       </div>

//     </section>

//   );

// }

// export default AddProduct;



import {
  useState,
  useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  createProduct,
  getCategories,
} from "../../services/productService";

function AddProduct() {

  const navigate = useNavigate();

  const token =
    localStorage.getItem("access");

  const [categories, setCategories] =
    useState([]);

  const [preview, setPreview] =
    useState(null);

  const [formData, setFormData] =
    useState({

      name: "",

      category: "",

      price: "",

      stock: "",

      image: null,

      description: "",

    });

  // =========================
  // FETCH CATEGORIES
  // =========================

  useEffect(() => {

    fetchCategories();

  }, []);

  const fetchCategories = async () => {

    try {

      const data =
        await getCategories();

      setCategories(data);

    } catch (error) {

      console.error(error);

    }

  };

  // =========================
  // HANDLE INPUTS
  // =========================

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  // =========================
  // HANDLE IMAGE
  // =========================

  const handleImageChange = (e) => {

    const file =
      e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({

      ...prev,

      image: file,

    }));

    setPreview(
      URL.createObjectURL(file)
    );

  };

  // =========================
  // SUBMIT FORM
  // =========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const form =
        new FormData();

      form.append(
        "name",
        formData.name
      );

      form.append(
        "category_id",
        formData.category
      );

      form.append(
        "price",
        formData.price
      );

      form.append(
        "stock",
        formData.stock
      );

      form.append(
        "description",
        formData.description
      );

      // IMAGE
      if (formData.image) {

        form.append(
          "image",
          formData.image
        );

      }

      console.log([...form]);

      await createProduct(
        form,
        token
      );

      alert(
        "Product Added Successfully"
      );

      navigate(
        "/admin/products"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed To Add Product"
      );

    }

  };

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* CONTAINER */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-14">

        {/* TOP */}
        <div className="mb-14">

          <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
            Admin Panel
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-5">
            Add Product
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            Create and publish a new product for your ecommerce store.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm space-y-8"
        >

          {/* PRODUCT NAME */}
          <div>

            <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
              required
            />

          </div>

          {/* CATEGORY + PRICE */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* CATEGORY */}
            <div>

              <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
                required
              >

                <option value="">
                  Select Category
                </option>

                {categories.map((category) => (

                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>

                ))}

              </select>

            </div>

            {/* PRICE */}
            <div>

              <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="9999"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
                required
              />

            </div>

          </div>

          {/* STOCK + IMAGE */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* STOCK */}
            <div>

              <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
                Stock
              </label>

              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="20"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
                required
              />

            </div>

            {/* IMAGE */}
            <div>

              <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
                Upload Image
              </label>

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
              />

            </div>

          </div>

          {/* IMAGE PREVIEW */}
          {preview && (

            <div>

              <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-4">
                Image Preview
              </p>

              <img
                src={preview}
                alt="Preview"
                className="w-full h-80 object-cover rounded-3xl border border-white/10"
              />

            </div>

          )}

          {/* DESCRIPTION */}
          <div>

            <label className="block text-sm uppercase tracking-[3px] text-gray-400 mb-4">
              Description
            </label>

            <textarea
              rows="6"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write product description..."
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300 resize-none"
              required
            ></textarea>

          </div>

          {/* BUTTON */}
          <div className="pt-4">

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
            >
              Publish Product
            </button>

          </div>

        </form>

      </div>

    </section>

  );

}

export default AddProduct;