import styled from "styled-components";

export const Box = styled.div`
  display: flex;

  height: 100vh;

  @media ${({ theme }) => theme.devices.tablet(70)} {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media ${({ theme }) => theme.devices.tablet(70)} {
    width: 100%;
    height: 40%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-family: "Nanum Pen Script", cursive;
  font-size: 9rem;

  @media ${({ theme }) => theme.devices.laptop(110)} {
    font-size: 7rem;
  }

  @media ${({ theme }) => theme.devices.tablet(70)} {
    font-size: 7rem;
  }
`;

export const Description = styled.p`
  line-height: 1.2;
  font-size: 2.5rem;

  @media ${({ theme }) => theme.devices.laptop(110)} {
    font-size: 2.3rem;
  }

  @media ${({ theme }) => theme.devices.tablet(70)} {
    font-size: 2rem;
  }
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
  height: 100%;
  overflow-y: none;

  > img {
    width: 10rem;
    height: 10rem;
  }

  @media ${({ theme }) => theme.devices.laptopL()} {
    gap: 2rem 7rem;

    > img {
      width: 10rem;
      height: 10rem;
    }
  }

  @media ${({ theme }) => theme.devices.laptop()} {
    gap: 2rem 7rem;

    > img {
      width: 9rem;
      height: 9rem;
    }
  }

  @media ${({ theme }) => theme.devices.tablet(100)} {
    gap: 2rem 7.5rem;

    > img {
      width: 7rem;
      height: 7rem;
    }
  }

  @media ${({ theme }) => theme.devices.tablet()} {
    gap: 2rem 7.2rem;

    > img {
      width: 7rem;
      height: 7rem;
    }
  }

  @media ${({ theme }) => theme.devices.tabletM(60)} {
    gap: 2rem 7rem;

    > img {
      width: 6rem;
      height: 6rem;
    }
  }

  @media ${({ theme }) => theme.devices.tabletM()} {
    gap: 2rem 5.5rem;

    > img {
      width: 5.5rem;
      height: 5.5rem;
    }
  }

  @media ${({ theme }) => theme.devices.mobileL(80)} {
    gap: 2rem 5rem;

    > img {
      width: 5rem;
      height: 5rem;
    }
  }

  @media ${({ theme }) => theme.devices.mobileL(30)} {
    gap: 2rem 4rem;

    > img {
      width: 5rem;
      height: 5rem;
    }
  }

  @media ${({ theme }) => theme.devices.mobileM()} {
    gap: 2rem 3.5rem;

    > img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const RightBox = styled.div`
  width: 60%;
  padding: 3rem;

  @media ${({ theme }) => theme.devices.tablet(70)} {
    width: 100%;
    height: 60%;
    padding-bottom: 0;
  }
`;

export const Input = styled.input`
  width: 40rem;
  padding: 1rem;
  margin-left: 3rem;
  margin-bottom: 2rem;

  border: none;
  border-radius: 10px;

  @media ${({ theme }) => theme.devices.mobileL()} {
    width: 30rem;
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.devices.mobileS()} {
    width: 25rem;
    font-size: 1rem;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  height: calc(100% - 50px);
  overflow-y: scroll;
  padding: 0 2rem 3rem 3rem;

  @media ${({ theme }) => theme.devices.tabletM()} {
    gap: 4rem;
  }

  @media ${({ theme }) => theme.devices.mobileL(30)} {
    gap: 3rem;
  }

  @media ${({ theme }) => theme.devices.mobileM()} {
    gap: 3rem 2rem;
  }
`;
