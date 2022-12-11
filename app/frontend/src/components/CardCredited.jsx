export default function CardCredited(props) {
  const { credited } = props;
  return (
    <div className="m-24 flex justify-center">
      <div className="box-border w-96 p-6 border-4">
        <h1 className="flex justify-center text-3xl font-semibold">
          Olá, {credited.description}
        </h1>
        <h2 className="flex justify-center text-3xl font-semibold">
          Seu saldo é de R$ {credited.value}
        </h2>
      </div>
    </div>
  );
}
