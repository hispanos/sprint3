import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
`;

export const MenuItem = styled.span`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-right: 20px;
    cursor: pointer;
`;

export const ImageLogo = styled.img`
    margin-right: 20px;
`;