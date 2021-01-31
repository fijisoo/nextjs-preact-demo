import React from "react";
import styled from "styled-components";
import {
  CLetter,
  IconWrapper,
  QLetter,
  TLetter,
} from "../../components/Icon/Icon";

export default ({ handleLogout, navToggleEvent, activeTabs }) => {
  return (
    <NavViewWrapper>
      <NavActionTabs>
        <IconWrapperStyled
          children={<TLetter />}
          color={activeTabs.includes("showTags") ? "green" : "yellow"}
          onClick={navToggleEvent("showTags")}
        />
        <IconWrapperStyled
          children={<QLetter />}
          color={activeTabs.includes("postQuestion") ? "green" : "yellow"}
          onClick={navToggleEvent("postQuestion")}
        />
        <IconWrapperStyled
          children={<CLetter />}
          color={activeTabs.includes("showCategories") ? "green" : "yellow"}
          onClick={navToggleEvent("showCategories")}
        />
      </NavActionTabs>
      <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
    </NavViewWrapper>
  );
};

const NavViewWrapper = styled.nav`
  display: flex;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 7px;
  justify-content: space-between;
`;

const IconWrapperStyled = styled(IconWrapper)`
  cursor: pointer;
  margin-right: 9px;
`;

const NavActionTabs = styled.div`
  display: flex;
`;

const LogOutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  margin: 0;
  padding: 3px 11px;
  background: var(--yellow);
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;
