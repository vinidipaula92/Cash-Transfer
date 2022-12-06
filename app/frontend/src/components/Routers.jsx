import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TransferCash from './TransferCash';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<TransferCash />} />
    </Routes>
  );
}
