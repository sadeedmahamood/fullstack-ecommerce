import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-black"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="w-72 border-r border-white/10 bg-white/5 backdrop-blur-xl p-8">

          {/* LOGO */}
          <h1 className="text-3xl font-bold mb-14">
            Admin Panel
          </h1>

          {/* NAVIGATION */}
          <nav className="space-y-5">

            <Link
              to="/admin"
              className="block px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-600 transition-all duration-300 shadow-lg "
            >
              Dashboard
            </Link>

            <Link
              to="/admin/products"
              className="block px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-600 transition-all duration-300 shadow-lg"
            >
              Products
            </Link>

            {/* <Link
              to="/admin/add-product"
              className="block px-5 py-4 rounded-2xl bg-white/5 border border-white/10  hover:bg-red-600 tansition-all duration-300 shadow-lg"
            >
              Add Product
            </Link>

            <Link
              to="/admin/orders"
              className="block px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-600 transition-all duration-300 shadow-lg"
            >
              Orders
            </Link> */}

          </nav>

        </aside>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-10">
          <Outlet />
        </main>

      </div>
    </section>
  );
}

export default AdminLayout;