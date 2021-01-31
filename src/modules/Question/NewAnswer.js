import React, {memo, useState} from "react";
import styled from "styled-components";
import { Cross, IconWrapper, OK } from "../../components/Icon/Icon";
import { fetcher } from "../../utils/fetchJson";
import getUserId from "../../utils/getUserId";
import PlaceholderInput from "../../components/Input/PlaceholderInput";

const NewAnswer = memo(({questionId, handleToolClick}) => {
    const userId = getUserId();
    const [newAnswerText, setNewAnswerText] = useState('');

    const handleSendEdit = async () => {
        const request = await fetcher(
            `/answers/`,
            { data: { answerText: newAnswerText, userId, questionId } }
        );
    };

    return (
        <AnswerViewWrapper>
            <IconWrapperStyled
                color={!!newAnswerText ? 'green' : 'red'}
                onClick={!!newAnswerText ? handleSendEdit : () => {
                    handleToolClick('addAnswer')
                }}
            >
                {!!newAnswerText ?  <StyledOK /> : <Cross/>}
            </IconWrapperStyled>
                <PlaceholderInputStyled
                    value={newAnswerText}
                    placeholder={"YOUR ANSWER"}
                    onChange={(e) => setNewAnswerText(e.currentTarget.value)}
                />
        </AnswerViewWrapper>
    );
});

export default NewAnswer;

const PlaceholderInputStyled = styled(PlaceholderInput)`
  background: transparent;
  min-height: 30px;
  height: initial;
`;

const IconWrapperStyled = styled(IconWrapper)`
  display: flex;
  margin-top: 5px;
  margin-left: 5px;
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
