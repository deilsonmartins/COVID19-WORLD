import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    color:#000;
    font-size:24px;
    padding:0.01em 16px;
    margin-top:16px;
    margin-bottom:16px;
    padding-top:32px;
    padding-bottom:32px;
    text-align:center;

    p {
        margin-top: 20px;
    }
`;

export const Container = styled.div`
    a {
        background: #000;
        color: #fff;
        border: none;
        padding: 8px 16px;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        margin-left: 30px;
        border-radius: 10px;
        transition: background 0.5s;
        

        &:hover {
            background-color: gray;
        }
    }

`