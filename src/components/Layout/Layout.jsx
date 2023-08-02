import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import LoaderPaws from 'components/Loader/LoaderPaws';
import { Section } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<LoaderPaws />}>
        <Header />
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </>
  );
};

export default Layout;
