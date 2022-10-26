


export default function App() {
  return (
    <div className="">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/student" element={<Student />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
      </Routes>
    </div>
  );
}
