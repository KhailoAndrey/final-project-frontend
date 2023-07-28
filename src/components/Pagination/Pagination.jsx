import { Container, CustomPagination } from './Pagination.styled';

const AppPagination = ({
  setPage,
  totalPageCount,
  page,
  setRerender = null,
}) => {

  return (
    <Container>
      <div>
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
        />
      </div>
    </Container>
  );
};

export default AppPagination;
