import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import Construction from '../pages/Construction';
import Contact from '../pages/Contact';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transfer" element={<User />} />
      <Route path="/construction" element={<Construction />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
