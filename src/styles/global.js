import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}

body{
    background-color: ${({theme}) => theme.COLORS.BLUE};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
}
body, input, button, textarea{
     font-family: "Roboto", sans-serif;

}
a{
    text-decoration: none; 

}
button, a{
    cursor: pointer;
    transition: 0ms.2s;
} 
button:hover, a:hover{
   filter: brightness(0.9) ;
} 
`;