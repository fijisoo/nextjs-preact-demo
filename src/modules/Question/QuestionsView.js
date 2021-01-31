import React from "react";
import styled from "styled-components";
import Collapser from "../../components/Collapser/Collapser";

const QuestionsView = ({ questionsData, mutateQuestions }) => {

  const sortedQuestions = questionsData && !!questionsData.length && questionsData.sort(((a, b) => a.position - b.position)).reverse();

  return (
    <QuestionsViewContainer>
      {sortedQuestions &&
        !!sortedQuestions.length &&
        sortedQuestions.map(
          (
            { questionText, hasAnswer, _id, hasAcceptedAnswer, position },
            index
          ) => {
            return (
              <Collapser
                key={`question_${questionText.slice(0, 10)}_${index}`}
                collapserHeader={questionText}
                mutateQuestions={mutateQuestions}
                questionId={_id}
                position={position}
                hasAnswer={hasAnswer}
                hasAcceptedAnswer={hasAcceptedAnswer}
              />
            );
          }
        )}
    </QuestionsViewContainer>
  );
};

const QuestionsViewContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  width: 100%;
`;

export default QuestionsView;
