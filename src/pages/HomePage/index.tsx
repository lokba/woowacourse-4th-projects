import { useEffect, useState } from "react";

import * as S from "./styled";

import Project from "components/Project";

import { ProjectType } from "types/domain";
import { PROJECT_LIST } from "./dummy";

const shuffle = (array: ProjectType[]) =>
  JSON.parse(JSON.stringify(array.sort(() => Math.random() - 0.5)));

const HomePage = () => {
  const [projectList, setProjectList] = useState(PROJECT_LIST);
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setProjectList(shuffle(PROJECT_LIST));
  }, []);

  return (
    <S.Box>
      <S.LeftBox>
        <S.Content>
          <S.Title>
            우아한테크코스 4기
            <br />
            프로젝트 모음집
          </S.Title>
          <S.Description>
            Level 3도 고생하셨습니다~
            <br />
            여러분들의 값진 결과물입니다.
          </S.Description>
        </S.Content>
        <S.Background>
          <S.ImageBox>
            {projectList.map(({ imageUrl, name }) => (
              <img key={name} src={imageUrl} alt="로고" />
            ))}
          </S.ImageBox>
        </S.Background>
      </S.LeftBox>
      <S.RightBox>
        <S.Input
          value={inputValue}
          onChange={handleChangeInputValue}
          placeholder="검색하고 싶은 프로젝트를 입력하세요."
        />
        <S.ProjectList>
          {projectList
            .filter(({ name }) => name.includes(inputValue))
            .map(({ name, description, imageUrl, pageUrl, members }) => (
              <Project
                key={name}
                name={name}
                description={description}
                imageUrl={imageUrl}
                pageUrl={pageUrl}
                members={members}
              />
            ))}
        </S.ProjectList>
      </S.RightBox>
    </S.Box>
  );
};

export default HomePage;
