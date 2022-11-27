import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;

    background: transparent;
    border: none;
    cursor: pointer;
`



export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 65%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCreateAccount = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 120%;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleCreateAccount = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`


export const Warning  = styled.p`
    margin-top: 20px;
    width: 120%;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
` 

export const AlreadySignIn = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;
` 

export const LogInText =  styled.p`
    margin-left: 5px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #23DD7A;
`
