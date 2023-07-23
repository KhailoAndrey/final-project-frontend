import styled from 'styled-components';

export const BurgerBox = styled.div`
width: 24px;
height: 24px;
display: block;
margin-left: 8px;
cursor: pointer;

@media screen and (min-width: 768px) and (max-width: 1279px) {
margin-left: 22px;
}

@media screen and (min-width: 1280px) {
    display: none;
}
`