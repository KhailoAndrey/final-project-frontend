import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import { Section } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </>
  );
};

export default Layout;
