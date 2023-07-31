import svg from '../../../images/Icons/symbol-defs.svg';

export const IconSvgClose = () => {
  return (
    <svg width={24} height={24}>
      <use
        href={`${svg}#icon-close-eye`}
        style={{
          stroke: 'var(--main-clr-blue)',
        }}
        width={24}
        height={24}
      />
    </svg>
  );
};

export const IconSvgOpen = () => {
  return (
    <svg width={24} height={24}>
      <use
        href={`${svg}#icon-eye`}
        style={{
          stroke: 'var(--main-clr-blue)',
        }}
        width={24}
        height={24}
      />
    </svg>
  );
};

export const IconSvgSuccess = () => {
  return (
    <svg width={24} height={24}>
      <use
        href={`${svg}#icon-check`}
        style={{
          stroke: 'var(--menu-clr-green)',
        }}
        width={24}
        height={24}
      />
    </svg>
  );
};