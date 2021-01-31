import React from "react";
import styled from "styled-components";
import { Flag, IconWrapper, OK, Tick } from "../../components/Icon/Icon";
import PlaceholderInput from "../../components/Input/PlaceholderInput";

const PostQuestionView = ({
  handleQuestionInput,
  sendQuestion,
  questionValue,
  options,
  setOptions,
}) => {
  return (
    <PostQuestionWrapper>
      <PostQuestionEvents>
        <LeftSection>
          <IconWrapperStyled
            children={<Tick />}
            color={options.includes("hasAcceptedAnswer") ? "green" : "yellow"}
            onClick={setOptions("hasAcceptedAnswer")}
          />
          <IconWrapperStyled
            children={<Flag />}
            color={options.includes("pinned") ? "green" : "yellow"}
            onClick={setOptions("pinned")}
          />
        </LeftSection>
        <IconWrapperStyled children={<OK />} onClick={sendQuestion} />
      </PostQuestionEvents>
      <PlaceholderInputStyled
        onChange={handleQuestionInput}
        placeholder="QUESTION:"
        value={questionValue}
      />
    </PostQuestionWrapper>
  );
};

const PostQuestionWrapper = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 100%;
  margin-top: 12px;
  background: var(--form-input-background);
  box-sizing: border-box;
  padding: 9px 11px;
`;

const PlaceholderInputStyled = styled(PlaceholderInput)`
  position: absolute;
  bottom: 11px;
`;

const IconWrapperStyled = styled(IconWrapper)`
  display: flex;
  cursor: pointer;
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  & > span {
    margin-right: 6px;
  }
`;

const PostQuestionEvents = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default PostQuestionView;
