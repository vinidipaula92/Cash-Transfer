import { useContext, useEffect, useState } from 'react';
import myContext from '../context/MyContext';
import Header from '../components/Header';
import CardDebited from '../components/CardDebited';
import Loading from '../components/Loading';
import CardUser from '../components/CardUser';
import moment from 'moment';
import CardCredited from '../components/CardCredited';

export default function BalanceAndStatement() {
  const { user, handleInfoUser, handleStatement, loading, statement } =
    useContext(myContext);

  const [show, setShow] = useState(false);

  useEffect(() => {
    handleInfoUser();
    handleStatement();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex justify-center">
            <h4 className="flex justify-center py-6">
              <p>
                Extrato retirado no dia:{' '}
                {moment(
                  Date(statement.lastTransactionDate).toLocaleString('pt-BR', {
                    timeZone: 'UTC',
                  }),
                ).format('DD/MM/YYYY HH:mm:ss')}
              </p>
            </h4>
          </div>
          <div className="flex justify-center py-6">
            <div className="flex justify-center py-6">
              <button
                type="button"
                class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShow(!show)}
              >
                Filtrar
                {/* <!-- Heroicon name: mini/chevron-down --> */}
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
            <div
              class={
                show
                  ? 'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                  : 'hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
              }
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <button
                  href="#"
                  class="flex justify-center text-gray-700 px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Débitos
                </button>
                <button
                  href="#"
                  class="text-gray-700 flex justify-center px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Créditos
                </button>
              </div>
            </div>
          </div>
          <CardUser name={user.name} balance={user.userInfo} />
          {statement.debitedTransactions.map((debited, index) => (
            <CardDebited key={index} debited={debited} />
          ))}
          {statement.creditedTransactions.map((credited, index) => (
            <CardCredited key={index} credited={credited} />
          ))}
        </div>
      )}
    </div>
  );
}
