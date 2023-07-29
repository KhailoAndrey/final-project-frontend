import { Container, CustomPagination } from './Pagination.styled';

const AppPagination = ({
  setPage,
  totalPageCount,
  page,
  setRerender = null,
}) => {
  const isMobile = window.innerWidth <= 767;
  return (
    <Container>
      <div>
        {isMobile ? (
          <CustomPagination
            onChange={(e, value) => {
              setPage(value);
              if (setRerender) {
                setRerender(true);
              }
            }}
            count={totalPageCount}
            page={page}
            variant="outlined"
            siblingCount={0}
            size="small"
          />
        ) : (
          <CustomPagination
            onChange={(e, value) => {
              setPage(value);
              if (setRerender) {
                setRerender(true);
              }
            }}
            count={totalPageCount}
            page={page}
            variant="outlined"
            siblingCount={1}
          />
        )}
      </div>
    </Container>
  );
};

export default AppPagination;
