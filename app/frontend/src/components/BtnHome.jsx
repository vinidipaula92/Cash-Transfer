import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/MyContext';

export default function BtnHome() {
  const { handleLogout } = useContext(myContext);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-end items-center">
      <button
        type="button"
        className="bg-indigo-500 text-white rounded-md p-2"
        onClick={handleHome}
      >
        Home
      </button>
      <button
        type="button"
        className="bg-indigo-500 text-white rounded-md p-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
