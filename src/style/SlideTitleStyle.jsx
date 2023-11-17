import styled, { css } from "styled-components";

export const SlideTitleComp = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    padding: 200px 0 100px 0;

    .title {
      h3 {
        text-align: center;
        font-weight: 400;
        padding: 10px;
        font-size: 1.5rem;

        span {
          font-weight: 600;
          font-size: 1.6rem;
          /* color: var(--DARKBLUE); */
        }
      }
    }
  }
`;
