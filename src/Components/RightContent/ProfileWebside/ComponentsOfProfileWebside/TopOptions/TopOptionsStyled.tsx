import styled from 'styled-components';

export const TopOptionsWrapper = styled.div`
    margin: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li{
        display: flex;
        float: left;
        margin: 0 20px;
        align-items: center;
    }
    img{
        width: 15px;
        height: 15px;
    }
    p{
        font-size: 15px;
        font-weight: 600;
        margin: 0 7px;
    }
    .close-cross-icon{
        width: 25px;
        height: 25px;
        margin-left: 50px;
    }
`;