import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import CategoryPage from "./pages/CategoryPage";

import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AddProduct from "./pages/admin/AddProduct";
import AdminOrders from "./pages/admin/AdminOrders";
import UpdateProduct from "./pages/admin/UpdateProduct";

// PROTECTED ROUTES
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import AdminCategory from "./pages/admin/AdminCategory";
import OrderSuccess from "./pages/OrderSuccess";
import EditProfile from "./pages/EditProfile";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* ========================= */}
        {/* PUBLIC ROUTES */}
        {/* ========================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        {/* ========================= */}
        {/* USER PROTECTED ROUTES */}
        {/* ========================= */}

        <Route
          path="/products"
          element={
            <UserRoute>
              <Products />
            </UserRoute>
          }
        />

        <Route
        path="/order-success"
        element={
          <UserRoute>
        <OrderSuccess/>
        </UserRoute>
        }
        />
        <Route
        path="/edit-profile"
        element={
          <UserRoute>
        <EditProfile/>
        </UserRoute>
        }
        />

        <Route
          path="/profile"
          element={
            <UserRoute>
              <Profile />
            </UserRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <UserRoute>
              <Cart />
            </UserRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <UserRoute>
              <Checkout />
            </UserRoute>
          }
        />

        <Route
          path="/category/:categoryName"
          element={
            <UserRoute>
              <CategoryPage />
            </UserRoute>
          }

          
        />

        {/* ========================= */}
        {/* ADMIN PROTECTED ROUTES */}
        {/* ========================= */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >

          <Route
            index
            element={<AdminDashboard />}
          />

          <Route
            path="products"
            element={<AdminProducts />}
          />

          <Route
            path="products/update/:id"
            element={<UpdateProduct />}
          />

          <Route
            path="products/create"
            element={<AddProduct />}
          />

          <Route
            path="orders"
            element={<AdminOrders />}
          />

          <Route
              path="categories"
              element={<AdminCategory />}
            />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;