import React, { useState } from "react";
import Questions from "../src/modules/Question";
import Search from "../src/modules/Search";
import styled from "styled-components";

import { useSearchQuestion } from "../src/services/QandA/useQuestions";
import PostQuestion from "../src/modules/PostQuestion";
import Navigation from "../src/modules/Nav";

const Landing = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeTabs, setActiveTabs] = useState(['postQuestion']);
  const { questions, mutateQuestions } = useSearchQuestion(searchValue);

  const navToggleEvent = (name) => {
    activeTabs.includes(name)
      ? setActiveTabs((prevState) => prevState.filter((e) => e !== name))
      : setActiveTabs((prevState) => [...prevState, name]);
  };

  return (
    <TemplateWrapper>
      <WallSection>
        <Navigation navToggleEvent={navToggleEvent} activeTabs={activeTabs} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        {activeTabs.includes("postQuestion") && (
          <PostQuestion mutateQuestions={mutateQuestions} />
        )}
        <Questions questionsData={questions} mutateQuestions={mutateQuestions}/>
      </WallSection>
    </TemplateWrapper>
  );
};

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
`;

const LeftSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const WallSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-top: 15px;
`;

export default Landing;
