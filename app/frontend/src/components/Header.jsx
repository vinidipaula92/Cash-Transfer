import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/MyContext';
import { profile, logo } from '../assets/images';

export default function Header() {
  const { handleLogout, user } = useContext(myContext);

  const [userExists, setUserExists] = useState(false);

  const handleUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserExists(true);
    } else {
      setUserExists(false);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src={logo} alt="Your Company" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>

                  <Link
                    to="/transfer"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Transferência
                  </Link>

                  <Link
                    to="/construction"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Extrato
                  </Link>

                  <Link
                    to="/construction"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Saldo
                  </Link>

                  <Link
                    to="/construction"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Fale conosco
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  {/* <!-- Heroicon name: outline/bell --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profile}
                        alt="profile img"
                      />
                    </button>
                  </div>
                  {userExists ? (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                      <Link
                        to="/construction"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        type="button"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              to="/"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Home
            </Link>

            <Link
              to="/transfer"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Transferência
            </Link>

            <Link
              to="/construction"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Extrato
            </Link>

            <Link
              to="/construction"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Saldo
            </Link>

            <Link
              to="/construction"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Fale conosco
            </Link>
          </div>
          <div className="border-t border-gray-700 pt-4 pb-3">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={profile}
                  alt="profile img"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  {user.name}
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  {user.name.replace(/\s/g, '').toLowerCase()}@example.com
                </div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-indigo-100 shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Dashboard
          </h1>
        </div>
      </header>
    </div>
  );
}
