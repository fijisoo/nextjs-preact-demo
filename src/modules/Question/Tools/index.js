import React from "react";
import styled from "styled-components";
import { fetcher } from "../../../utils/fetchJson";
import {
  Flag,
  IconWrapper,
  Plus,
  Tick,
  Wrench,
} from "../../../components/Icon/Icon";
import Cookies from "js-cookie";

const ToolElement = ({ onClick, name, activeTools, className, children }) => {
  return (
    <IconWrapper
      className={className}
      color={!activeTools.includes(name) ? "yellow" : "green"}
      onClick={() => onClick(name)}
    >
      {children}
    </IconWrapper>
  );
};

const Tools = ({
  onClick,
  activeTools,
  questionId,
  className,
  position,
  hasAcceptedAnswer,
}) => {
    const handleClick = async (name) => {
    const userId = Cookies.get("user-id");
    if (name === "setAccepted") {
      await fetcher(
        `/questions/${questionId}`,
        { data: { hasAcceptedAnswer: !hasAcceptedAnswer, userId } },
        "put"
      );
    }


    if (name === "pinQuestion") {
      await fetcher(
        `/questions/${questionId}`,
        { data: { position: position > 0 ? -1 : 1, userId } },
        "put"
      );
    }
    onClick(name);
  };

  return (
    <ToolsWrapper className={className}>
      <ToolElementStyled
        onClick={handleClick}
        activeTools={activeTools}
        name={"setAccepted"}
      >
        <Tick />
      </ToolElementStyled>
      <ToolElementStyled
        onClick={handleClick}
        activeTools={activeTools}
        name={"pinQuestion"}
      >
        <Flag />
      </ToolElementStyled>
      <ToolElementStyled
        onClick={handleClick}
        activeTools={activeTools}
        name={"addAnswer"}
      >
        <Plus />
      </ToolElementStyled>
      <ToolElementStyled
        onClick={handleClick}
        activeTools={activeTools}
        name={"edit"}
      >
        <Wrench />
      </ToolElementStyled>
    </ToolsWrapper>
  );
};

export default Tools;

const ToolsWrapper = styled.span`
  display: none;
  position: absolute;
  cursor: pointer;
`;

const ToolElementStyled = styled(ToolElement)`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  &:hover {
    transform: translateY(-15%);
  }
`;
