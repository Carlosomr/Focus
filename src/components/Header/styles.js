import styled from "styled-components";

export const Container = styled.header`
grid-area: header;

width: 100%;
height: 75px;

background: ${({theme}) => theme.COLORS.ORANGE};;
color: ${({theme}) => theme.COLORS.BLACK};;

display: flex;
justify-content: space-between;

padding: 0 20px;
`;
export const Profile = styled.div`
display: flex;
align-items: center;
> img{
    width: 56px;
    height: 56px;
    border-radius:50%;

}
> div{
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin-left: 16px;

span{
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE};
}
strong{
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.WHITE};
}
}

`;