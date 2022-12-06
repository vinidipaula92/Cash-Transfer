import Routers from './components/Routers';
import MyProvider from './context/MyProvider';

export default function App() {
  return (
    <MyProvider>
      <Routers />
    </MyProvider>
  );
}
