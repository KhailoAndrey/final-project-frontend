import { ThreeDots } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

const Loader = () => {
  return (
    <WrapperLoader>
      <ThreeDots
        height="30"
        width="180"
        radius="10"
        color="var(--main-clr-blue)"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </WrapperLoader>
  );
};

export default Loader;
