import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';


export const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top :68px; */
margin-bottom: 40px;
@media screen and (min-width: 768px){
margin-bottom: 56px;  
}
@media screen and (min-width: 768px){
margin-bottom: 60px;  
}
`;

export const CustomPagination = styled(Pagination)`


    .MuiPaginationItem-page.Mui-selected {
        background-color: var(--main-clr-blue); 
        color: white; 
         padding: 10px;
         border:none;
     
      }
      .MuiPaginationItem-page:not(.Mui-selected) {
        background-color:  transparent; 
        color: #111111; 
        border: 1px solid var(--main-clr-blue); 
        padding: 10px;
        
      }
      
    
`;
