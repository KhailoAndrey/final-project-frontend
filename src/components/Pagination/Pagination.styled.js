import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';


export const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
margin-bottom: 60px;
@media screen and (min-width: 768px){
margin-bottom: 112px;  
}
@media screen and (min-width: 1280px){
margin-bottom: 112px;  
}
`;

export const CustomPagination = styled(Pagination)`


    .MuiPaginationItem-page.Mui-selected {
        background-color: var(--main-clr-blue); 
        color: var(--white-bckg-clr); 
         padding: 10px;
         border:none;
     
      }
      .MuiPaginationItem-page:not(.Mui-selected) {
        background-color:  transparent; 
        color: var(--main-accent-text-clr); 
        border: 1px solid var(--main-clr-blue); 
        padding: 10px;
        
      }
      
    
`;
