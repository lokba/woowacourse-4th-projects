import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 9rem;
  font-family: "Nanum Pen Script", cursive;
`;

export const Description = styled.p`
  line-height: 1.2;
  font-size: 2.5rem;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;

  opacity: 0.3;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem 10rem;

  > img {
    width: 10rem;
    height: 10rem;
  }
`;

export const RightBox = styled.div`
  width: 60%;
  padding: 3rem;
`;

export const Input = styled.input`
  width: 50rem;
  padding: 1rem;
  margin-left: 3rem;

  border: none;
  border-radius: 10px;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  height: calc(100% - 50px);
  overflow-y: scroll;
  padding: 2rem 3rem 3rem;
`;
