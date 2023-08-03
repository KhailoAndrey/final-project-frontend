import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import LoaderPaws from 'components/Loader/LoaderPaws';
import { Section } from './Layout.styled';
import ToTopButton from 'helpers/ScrollBtn/ToTopBtn';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<LoaderPaws />}>
        <Header />
        <Section>
          <Outlet />
        </Section>
        <ToTopButton/>
      </Suspense>
    </>
  );
};

export default Layout;
