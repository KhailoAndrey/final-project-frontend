import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <Header />
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default Layout;
