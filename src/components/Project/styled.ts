import styled from "styled-components";

export const Box = styled.div`
  width: 20rem;

  @media ${({ theme }) => theme.devices.laptop()} {
    width: 19rem;
  }

  @media ${({ theme }) => theme.devices.tabletM(100)} {
    width: 18rem;
  }

  @media ${({ theme }) => theme.devices.mobileL(30)} {
    width: 17rem;
  }

  @media ${({ theme }) => theme.devices.mobileL(10)} {
    width: 17rem;
  }

  @media ${({ theme }) => theme.devices.mobileL()} {
    width: 14rem;
  }

  @media ${({ theme }) => theme.devices.mobileS(20)} {
    width: 100%;
  }

  height: fit-content;
  transition: transform 0.3s;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white_100};
  box-shadow: ${({ theme }) => theme.shadows.basic};
  z-index: 100;

  :hover {
    transform: scale(1.07);
  }
`;

type HeaderProps = {
  imageUrl: string;
};

export const Image = styled.div<HeaderProps>`
  height: 5rem;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center center;
  background-repeat: repeat-x;
  background-size: 5rem;
  border-radius: 10px;

  @media ${({ theme }) => theme.devices.tabletM(100)} {
    background-size: 4.5rem;
  }
`;

export const ContentBox = styled.div`
  padding: 2rem 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;

  @media ${({ theme }) => theme.devices.mobileL()} {
    font-size: 2rem;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;

  background-color: ${({ theme }) => theme.colors.pink_100};
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white_100};

  @media ${({ theme }) => theme.devices.mobileL()} {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 1.5rem;

  font-size: 1.5rem;
  line-height: 1.4;
`;

export const MemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const Member = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;

  background-color: ${({ theme }) => theme.colors.pink_50};
  border-radius: 100%;
  font-size: 1.2rem;
`;
