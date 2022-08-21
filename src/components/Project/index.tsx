import * as S from "./styled";

import { ProjectType } from "types/domain";

const Project = ({
  name,
  description,
  imageUrl,
  pageUrl,
  members,
}: ProjectType) => {
  return (
    <S.Box>
      <S.Image imageUrl={imageUrl} />
      <S.ContentBox>
        <S.Header>
          <S.Title>{name}</S.Title>
          <S.Link href={pageUrl} target="_blank">
            바로가기
          </S.Link>
        </S.Header>
        <S.Description>{description}</S.Description>
        <S.MemberContainer>
          {members.map((member, index) => (
            <S.Member key={index}>{member}</S.Member>
          ))}
        </S.MemberContainer>
      </S.ContentBox>
    </S.Box>
  );
};

export default Project;
