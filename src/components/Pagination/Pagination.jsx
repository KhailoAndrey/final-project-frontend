import React from "react";
import { Container , CustomPagination } from "./Pagination.styled";



const AppPagination = ({ setPage, totalPageCount, page })=> {
   
    return(
        <Container>
            <div>
                <CustomPagination 
                onChange={(e, value) => setPage(value)}
                count={totalPageCount}
          page={page}
           variant="outlined" />
            </div>

        </Container>
    )
}

export default AppPagination;