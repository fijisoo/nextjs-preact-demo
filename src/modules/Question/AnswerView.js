import React, { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { mutate } from "swr";
import {Cross, DoubleTick, IconWrapper, OK, ThumbDown, ThumbUp} from "../../components/Icon/Icon";
import { fetcher } from "../../utils/fetchJson";
import getUserId from "../../utils/getUserId";
import PlaceholderInput from "../../components/Input/PlaceholderInput";
import { useHandleOutsideClick } from "../../utils/useHandleOutsideClick";

const AnswerView = memo(({ text, isAccepted, answerId, questionId }) => {
  const userId = getUserId();
  const [answerStatus, setAnswerStatus] = useState(
    isAccepted ? "isAccepted" : "isNotAccepted"
  );
  const [isEditMode, setEditMode] = useState(false);
  const [editAnswerText, setEditAnswerText] = useState(text);
  const [isMouseOver, setMouseOver] = useState(false);
  const questionRef = useRef();
  const [clickedOutside, handleClickInside] = useHandleOutsideClick(
    questionRef,
    false,
    () => setEditMode((prevState) => !prevState)
  );

  useEffect(() => {
    if (isEditMode && !clickedOutside) {
      setAnswerStatus("isEditMode");
    }
    if (isAccepted && !isEditMode) {
      setAnswerStatus("isAccepted");
    }
    if (!isAccepted && !isEditMode) {
      setAnswerStatus("isNotAccepted");
    }
    return "isNotAccepted";
  }, [isAccepted, isEditMode, clickedOutside]);

  const colorSelector = (status, editTextEquals, isEditMode) => {
    if (status === "isAccepted") {
      return "green";
    }
    if (status === "isNotAccepted") {
      return "yellow";
    }
    if (editTextEquals && isEditMode) return "red";
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const handleSendEdit = (isTextEquals) => async () => {
    const request = !isTextEquals ? await fetcher(
      `/answers/${answerId}`,
      {
        data: { answerText: editAnswerText, userId, questionId }
      },
      "put"
    ) : await fetcher(
        `/answers/${answerId}`,
        {
          data: {questionId},
        },
        "delete"
    );

    //TODO is it working?
    if(isTextEquals) setEditAnswerText(text);

    mutate(`/answers/${answerId}`, request, false);
  };

  const handleSendIsAccepted = (isAccepted) => async () => {
    const request = await fetcher(
      `/answers/${answerId}`,
      {
        data: { answerText: text, isAccepted: !isAccepted, userId, questionId },
      },
      "put"
    );

    mutate(`/answers/${answerId}`, request, false);
  };

  const questionColor = colorSelector(
    answerStatus,
    editAnswerText === text,
    isEditMode
  );

  const iconSelector = (isTextEqual, selector, isMouseOver) =>
    ({
      isEditMode: isTextEqual ? <Cross /> : <StyledOK />,
      isAccepted: isMouseOver ? <ThumbDown /> : <DoubleTick />,
      isNotAccepted: isMouseOver ? <ThumbUp /> : null,
    }[selector]);

  return (
    <AnswerViewWrapper ref={questionRef}>
      <IconWrapperStyled
        color={questionColor}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={
          !clickedOutside && isEditMode
            ? handleSendEdit(editAnswerText === text)
            : handleSendIsAccepted(isAccepted)
        }
      >
        {iconSelector(editAnswerText === text, answerStatus, isMouseOver)}
      </IconWrapperStyled>
      {isEditMode && !clickedOutside ? (
        <PlaceholderInputStyled
          value={editAnswerText}
          onChange={(e) => setEditAnswerText(e.currentTarget.value)}
        />
      ) : (
        <TextWrapper
          onClick={() => {
            setEditMode((prevState) => !prevState);
            handleClickInside();
          }}
        >
          {text}
        </TextWrapper>
      )}
    </AnswerViewWrapper>
  );
});

export default AnswerView;

const TextWrapper = styled.span`
  display: flex;
  margin-left: 5px;
  padding-top: 8px;
`;

const PlaceholderInputStyled = styled(PlaceholderInput)`
  background: transparent;
  height: initial;
  min-height: 30px;
`;

const IconWrapperStyled = styled(IconWrapper)`
  display: flex;
  margin-top: 5px;
  margin-left: 5px;
  cursor: pointer;
`;

const StyledOK = styled(OK)`
  cursor: pointer;
`;

const AnswerViewWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid black;
  margin: 5px 0;
  min-height: 30px;
  align-items: flex-start;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  background: var(--answer-background);
`;
