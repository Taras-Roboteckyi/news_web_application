import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /*-----Reset styles-----*/

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
  }
  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  /*-------------Body--------------*/
  body {
    position: relative;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
        
    margin: 0;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    
  /*   ::-webkit-scrollbar {
    display: none;
    overflow :'unset';
} */
  }
 
`;
