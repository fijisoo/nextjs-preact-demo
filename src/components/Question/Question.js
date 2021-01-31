import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlaceholderInput from "../Input/PlaceholderInput";
import {
  CircleWithDot,
  Cross,
  Dot,
  EmptyCircle,
  IconWrapper,
  OK,
} from "../Icon/Icon";
import { fetcher } from "../../utils/fetchJson";
import getUserId from "../../utils/getUserId";

export default ({
  text,
  onClick,
  editQuestionText,
  hasAnswer,
  mutateQuestions,
  onMouseEnter,
                  position,
  questionId,
  questionStatus,
  handleQuestionChange,
  toolsComponent,
}) => {
  const [initVal] = useState(() => text);
  const userId = getUserId();

  useEffect(() => {
    if (questionStatus === "isEditMode") {
      handleQuestionChange(text);
    }
  }, [questionStatus]);

  const colorSelector = (hasAnswer, questionStatus, isTextEquals) => {
    if (
      (questionStatus === "isEditMode" && isTextEquals) ||
      questionStatus === "withNoAnswer"
    ) {
      return "red";
    }
    if (
      questionStatus === "isAccepted" ||
      questionStatus === "isAcceptedActive" ||
      (questionStatus === "isEditMode" && hasAnswer)
    ) {
      return "green";
    }
    if (
      questionStatus === "isNotAccepted" ||
      (questionStatus === "isNotAcceptedActive" &&
        questionStatus === "isEditMode" &&
        !hasAnswer)
    ) {
      return "yellow";
    }
    return "yellow";
  };

  const iconSelector = (isTextEqual = true, selector) =>
    ({
      isEditMode: isTextEqual ? <Cross /> : <OK />,
      isAccepted: <EmptyCircle />,
      isAcceptedActive: <CircleWithDot />,
      isNotAccepted: null,
      isNotAcceptedActive: <Dot />,
      withNoAnswer: null,
    }[selector]);

  const questionColor = colorSelector(
    hasAnswer,
    questionStatus,
    editQuestionText === initVal
  );

  const handleSendEdit = async () => {
    mutateQuestions(
      await fetcher(
        `/questions/${questionId}`,
        { data: { questionText: editQuestionText, userId } },
        "put"
      )
    );
  };

  const handleDeleteQuestion = async () => {
    mutateQuestions(
        await fetcher(
            `/questions/${questionId}`,
            {},
            "delete"
        )
    );
  }

  return (
    <QuestionWrapper onMouseEnter={onMouseEnter} position={position}>
      {toolsComponent}
      <QuestionContainer onClick={questionStatus !== "isEditMode" ? onClick : () => {}}>
        <IconWrapperStyled
          color={questionColor}
          {...(questionStatus === "isEditMode" &&
            editQuestionText !== initVal && { onClick: handleSendEdit })}
          {...(questionStatus === "isEditMode" &&
            editQuestionText === initVal && { onClick: handleDeleteQuestion })}
        >
          {iconSelector(editQuestionText === initVal, questionStatus)}
        </IconWrapperStyled>
        {questionStatus === "isEditMode" ? (
          <PlaceholderInputStyled
            value={editQuestionText}
            onChange={(e) => handleQuestionChange(e.currentTarget.value)}
          />
        ) : (
          <QuestionText>{text}</QuestionText>
        )}
      </QuestionContainer>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: calc(100% - 15px);
  margin: 5px;
  height: 30px;
  border: ${props => props.position > 0 ? 2 : 1}px solid #000000;
  border-radius: 6px;
  &:hover > span {
    display: flex;
  }
`;

const IconWrapperStyled = styled(IconWrapper)`
  margin-left: 5px;
  cursor: pointer;
`;

const QuestionContainer = styled.div`
  display: flex;
  background: var(--question-background);
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 1;
`;

const PlaceholderInputStyled = styled(PlaceholderInput)`
  background: transparent;
`;

const QuestionText = styled.div`
  display: flex;
  width: 100%;
  margin-left: 4px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;
