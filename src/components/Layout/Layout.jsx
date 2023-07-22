import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import { Container, Section } from './Layout.styled';

const Layout = () => {
  return (
    <>

      <Suspense fallback={<Loader />}>
        <Section>
        <Container>
          <Header />
          <Outlet />
        </Container>
        </Section>
       
      </Suspense>

    </>
  );
};

export default Layout;
