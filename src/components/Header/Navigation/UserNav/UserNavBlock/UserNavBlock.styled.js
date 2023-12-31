import styled from 'styled-components';

export const UserBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 12px;
margin-right: 0;
&:hover{
    scale: 1.1;
}

@media screen and (min-width: 768px) {
    padding: 0 16px;
}

@media screen and (min-width: 1280px) {
    margin-left: 24px;
}
`

export const UserIcon = styled.div`
width: 28px;
height: 28px;
display: block;
cursor: pointer;
`
export const UserName = styled.span`
display: ${({ showName }) => (showName ? 'block' : 'none')};
color: var(--main-clr-yellow);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.64px;

@media screen and (min-width: 768px) {
display: block;
}

@media screen and (min-width: 1280px) {}
`