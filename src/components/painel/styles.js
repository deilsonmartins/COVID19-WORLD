import styled from 'styled-components';

import media from 'styled-media-query';

export const Wrapper = styled.div`

  h1 {
    text-align: center;
    a {
      text-decoration: none;
      color: black;
    }

    ${media.lessThan("medium")`
        font-size: 16px;
        
        
      `}

  }
  
  ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      justify-items: center;
      align-items: center;
      margin: 12%;
      

      ${media.lessThan("medium")`
        grid-template-columns: repeat(1, 1fr);
        
        
      `}

      li {
        display: flex;
        width: 250px;
        height: 150px;
        flex-direction: column;
        border: 3px solid black;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: red;
        transition: background 0.3s;

        font-size: 24px;

        &:hover {
          background: gray;
        }
      }
  }
`;
