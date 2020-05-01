import styled from 'styled-components';

import media from 'styled-media-query';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin: 15px;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  text-align: center;

  ${media.lessThan("large")`
    grid-template-columns: repeat(1, 1fr);
`}

  li {
      alig-items: center;
      justify-content: center;
      border: 1px solid black;
      width: 330px;
      height: 150px;
      background: yellow;
      border-radius: 10px;
      transition: background 0.3s;

      list-style-type: none;

      &:hover {
          background: #DCDCDC;
      }

      h1 {
          margin-top: 10px;
          color: blue;
      }
      
  }
  
`;

export const Content = styled.div`
    li {
        margin-top: 30px;
        border: none;
        display: flex;
        height: 0px;
        flex-direction: column;
        align-items: center;
        font-size: 16px;

        span {
            color: black;

        }

        tr {
            th {
                span {
                    margin: 20px;
                }
            }
        }

    
    }

`;

