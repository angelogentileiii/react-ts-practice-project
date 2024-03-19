import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header.tsx';
import SessionContextProvider from '../components/store/sessions-context.tsx';

export default function Root() {
  return (
    <SessionContextProvider>
      <Header />
      <Outlet />
    </SessionContextProvider>
  );
}
