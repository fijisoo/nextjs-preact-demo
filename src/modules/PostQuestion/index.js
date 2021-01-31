import React, { useState } from "react";
import { fetcher } from "../../utils/fetchJson";
import getUserId from "../../utils/getUserId";
import PostQuestionView from "./PostQuestionsView";

const PostQuestion = ({ mutateQuestions }) => {
  const userId = getUserId();
  const [questionValue, setQuestionContent] = useState("");
  const [options, setOptions] = useState([]);

  const setOptionsHandler = (name) => {
    options.includes(name)
      ? setOptions((prevState) => prevState.filter((e) => e !== name))
      : setOptions((prevState) => [...prevState, name]);
  };

  const handleQuestionInput = (event) => {
    setQuestionContent(event.currentTarget.value);
  };

  const sendQuestion = async () => {

    console.log(options.includes('hasAcceptedAnswer'), options.includes('pinned'))

    // TODO: position fix
    // TODO: tags shouldn't be require! fix
    await fetcher("/questions", {
      data: {
        tags: ['sample'],
        hasAcceptedAnswer: options.includes('hasAcceptedAnswer'),
        position: options.includes('pinned') ? 1 : -1,
        questionText: questionValue,
        userId: userId,
      },
    });
    mutateQuestions();
  };

  return (
    <PostQuestionView
      handleQuestionInput={handleQuestionInput}
      sendQuestion={() => sendQuestion()}
      questionValue={questionValue}
      options={options}
      setOptions={(name) => (_e) => setOptionsHandler(name)}
    />
  );
};

export default PostQuestion;
