import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header.tsx';

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
