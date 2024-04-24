import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f15156;
  height: 100vh;
  width: 100vw;
  padding-left: 7.0625rem;
`;

export const LeftSideOfHome = styled.div`
  img {
    margin-top: 12rem;
  }

  h1 {
    font-size: 4.5rem;
    font-style: normal;
    color: #ffffff;

    margin-top: 7.25rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: #ffffff;

    margin-top: 8.5625rem;
  }
`;

export const RightSideOfHome = styled.div`
  img {
    margin-top: 8.0625rem;
    margin-left: 10.8125rem;
  }

  p {
    font-size: 1rem;
    color: #ffffff;
  }
`;

export const SearchFriendParameters = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10rem;
  margin-top: 10rem;

  p {
    margin-right: 0.7rem;
  }
`;
