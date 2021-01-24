import React from 'react';
import SigngleTag from './../../components/SingleTag/SingleTag';
import styled from 'styled-components';

const TagsView = ({
  onToggleSwitch,
  handleTagClick,
  isTagsDisplayed,
  data2,
}) => {
  const handleTagSwitcher = () => {
    onToggleSwitch();
  };

  return (
    <TagsViewWrapper>
      <TagsHeader>
        <TagsSwitcher
          onClick={handleTagSwitcher}
          isTagsDisplayed={isTagsDisplayed}
        />
        Tagi
      </TagsHeader>
      <TagsContent isTagsDisplayed={isTagsDisplayed}>
        {!!data2 &&
          !!data2.length &&
          data2.map(({ tagName, count }) => (
            <SigngleTag
              key={tagName}
              onClick={handleTagClick}
              tagName={tagName}
            >
              <CounterIcon>{count}</CounterIcon>
            </SigngleTag>
          ))}
      </TagsContent>
    </TagsViewWrapper>
  );
};

const TagsHeader = styled.h3`
  display: flex;
  align-items: flex-start;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
`;

const TagsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: ${({ isTagsDisplayed }) => (isTagsDisplayed ? '400px' : '0px')};
  transition: all 0.3s ease;
  opacity: ${({ isTagsDisplayed }) => (isTagsDisplayed ? 1 : 0)};
  z-index: ${({ isTagsDisplayed }) => (isTagsDisplayed ? 1 : -99999)};
`;

const TagsSwitcher = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${({ isTagsDisplayed }) =>
    isTagsDisplayed ? '#00FF7F' : '#FF6347'};
`;

const CounterIcon = styled.span`
  display: flex;
  position: absolute;
  border-radius: 25px;
  border: 3px solid honeydew;
  background-color: aliceblue;
  transform: translateY(-25%) translateX(40%);
  font-size: 8px;
  padding: 4px;
  right: 0;
  top: 0;
`;

const TagsViewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  height: fit-content;
`;

export default TagsView;
