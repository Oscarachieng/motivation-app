import React from 'react';

// import Profile from './components/Profile/Profile';
// import TopBar from './components/topbar/TopBar';


export default function App() {

  return (
    
    <div className="">
      {/* <TopBar /> */}
      <Routes>
      <Route path="/" element={<Staff />} />
      <Route path="/" element={<Student />} />
      
        <Route path="/" element={<Sidebar />} />
        {/* <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} /> */}
      </Routes>
     
    </div>
  );
}

