export default function CardUser(props) {
  const { name, balance } = props;
  return (
    <div className="m-24 flex justify-center">
      <div className="box-border w-96 p-6 border-4">
        <h1 className="flex justify-center text-3xl font-semibold">
          Olá, {name}
        </h1>
        <h2 className="flex justify-center text-3xl font-semibold">
          Seu saldo é de R$ {balance.balance}
        </h2>
      </div>
    </div>
  );
}
