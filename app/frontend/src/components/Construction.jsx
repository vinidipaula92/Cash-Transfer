import { useNavigate } from 'react-router-dom';
import { construction } from '../assets/images';

export default function Construction() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="m-24 flex justify-center">
        <div className="box-border w-96 p-6 border-4">
          <h1 className="flex justify-center text-3xl font-semibold">
            Em construção
          </h1>
          <img src={construction} alt="Em construção" />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-indigo-500 text-white rounded-md px-20 py-2"
          onClick={() => navigate('/')}
        >
          Voltar para página inicial
        </button>
      </div>
    </div>
  );
}
