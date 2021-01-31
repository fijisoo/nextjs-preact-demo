import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAndCache } from "../../utils/fetchJson";
import Question from "../Question/Question";
import Tools from "../../modules/Question/Tools";
import AnswerView from "../../modules/Question/AnswerView";
import NewAnswer from "../../modules/Question/NewAnswer";

const Collapser = ({
  collapserHeader,
  questionId,
  hasAcceptedAnswer = false,
  position = -1,
  mutateQuestions,
  hasAnswer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [editQuestionText, setEditQuestionText] = useState("");
  const [activeTools, setActiveTools] = useState([
    ...(position > 0 ? ["pinQuestion"] : []),
    ...(hasAcceptedAnswer ? ["setAccepted"] : []),
  ]);
  const [questionStatus, setQuestionStatus] = useState("isNotAcceptedActive");

  //isEditMode / isAccepted / isAcceptedActive / isNotAccepted / isNotAcceptedActive / withNoAnswer
  useEffect(() => {
    const toggledEdit = activeTools.includes("edit");
    if (toggledEdit) {
      setQuestionStatus("isEditMode");
    }
    if (hasAcceptedAnswer && !toggledEdit) {
      setQuestionStatus("isAccepted");
    }
    if (hasAnswer && !hasAcceptedAnswer && !toggledEdit) {
      setQuestionStatus("isNotAccepted");
    }
    if (hasAcceptedAnswer && isOpen && !toggledEdit) {
      setQuestionStatus("isAcceptedActive");
    }
    if (hasAnswer && !hasAcceptedAnswer && isOpen && !toggledEdit) {
      setQuestionStatus("isNotAcceptedActive");
    }
    if (!hasAnswer && !hasAcceptedAnswer && !toggledEdit) {
      setQuestionStatus("withNoAnswer");
    }
  }, [hasAnswer, hasAcceptedAnswer, activeTools, isOpen]);

  const handlePrefetch = async () => {
    const data = await fetchAndCache(`/answers/all/${questionId}`);
    setAnswers(data.data);
  };

  const handleToolClick = (name) => {
    activeTools.includes(name)
      ? setActiveTools((prevState) => prevState.filter((e) => e !== name))
      : setActiveTools((prevState) => [...prevState, name]);
  };

  return (
    <CollapserWrapper>
      <Question
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
        handleQuestionChange={setEditQuestionText}
        editQuestionText={editQuestionText}
        questionId={questionId}
        position={position}
        mutateQuestions={mutateQuestions}
        toolsComponent={
          <ToolsStyled
            activeTools={activeTools}
            questionId={questionId}
            position={position}
            hasAcceptedAnswer={hasAcceptedAnswer}
            onClick={handleToolClick}
          />
        }
        onMouseEnter={handlePrefetch}
        questionStatus={questionStatus}
        hasAnswer={hasAnswer}
        text={collapserHeader}
      />
      <AnswersWrapper>
        {activeTools.includes("addAnswer") && (
          <NewAnswer
            handleToolClick={handleToolClick}
            questionId={questionId}
          />
        )}
        {isOpen &&
          answers?.map((el) => (
            <AnswerView
              text={el.answerText}
              isAccepted={el.isAccepted}
              answerId={el._id}
              questionId={questionId}
              handlePrefetch={handlePrefetch}
            />
          ))}
      </AnswersWrapper>
    </CollapserWrapper>
  );
};

const ToolsStyled = styled(Tools)`
  transform: translateY(-110%);
  left: 25px;
  z-index: 0;
  &:hover {
    z-index: 2;
    transform: translateY(-150%);
  }
`;

const CollapserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 95%;
  margin-right: 10px;
`;

export default Collapser;
