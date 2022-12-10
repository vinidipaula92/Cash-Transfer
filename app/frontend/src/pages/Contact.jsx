import { useState } from 'react';
import Header from '../components/Header';

export default function Contact() {
  const [field, setField] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  }

  const EMAIL_REGEX = /\w+@\w+\.\S+/g;
  const numberEight = 8;

  const emailTest = EMAIL_REGEX.test(field.email);
  const mensagemTest = field.mensagem.length >= numberEight;
  return (
    <div>
      <Header />
      <div className="overflow-hidden bg-indigo-100 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Fale conosco
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Envie sua mensagem para nós e dê sua opinião sobre o nosso serviço.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <form
            action="https://formsubmit.co/vinidipaula92@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://vinidipaula.vercel.app/"
            />
            <input type="hidden" name="_captcha" value="false" />
            <div className="bg-indigo-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nome completo
              </dt>
              <input
                className="mt-1 text-sm text-gray-900"
                type="text"
                name="nome"
                onChange={handleChange}
                value={field.nome}
              />
            </div>
            <div className="bg-indigo-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <input
                className="mt-1 text-sm text-gray-900"
                placeholder="example@example.com"
                type="email"
                name="email"
                onChange={handleChange}
                value={field.email}
              />
            </div>
            <div className="bg-indigo-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Mensagem</dt>
              <textarea
                className="mt-1 text-sm text-gray-900 box-content h-32"
                placeholder="Digite sua mensagem aqui"
                type="text"
                name="mensagem"
                onChange={handleChange}
                value={field.mensagem}
              ></textarea>
            </div>
            <div className="flex justify-center px-4 py-5">
              <button
                className={
                  emailTest && mensagemTest
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
                    : 'bg-indigo-600 text-white font-bold py-2 px-4 rounded'
                }
                type="submit"
                disabled={!emailTest || !mensagemTest}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
