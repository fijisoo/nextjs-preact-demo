import React from 'react';
import styled from 'styled-components';
import Collapser from '../../components/Collapser/Collapser';

const QuestionsView = ({
  questionsData = [],
}) => {
  return (
    <QuestionsViewContainer>
      {questionsData.map(({ questionText }, index) => (
        <Collapser
          key={`question_${questionText.slice(0, 10)}_${index}`}
          collapserHeader={questionText}
          collapserContent={''}
        />
      ))}
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
