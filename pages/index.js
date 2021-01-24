import React, { useEffect, useState } from 'react';
import Tags from './../src/modules/Tags';
import Questions from "../src/modules/Questions";
import Search from "../src/modules/Search";
import styled from 'styled-components';

import data2 from '../public/mock.data.js';
import tags from '../public/mock.tags.js';
import useUser from "../src/services/users/useUser";

const Landing = () => {
    const [questionsData, setquestionsFound] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const [tagsData, setTagsData] = useState([]);
    const [isTagsDisplayed, setTagsDisplay] = useState(true);
    // const { user } = useUser({ redirectTo: '/login' })

    const searchByTagName = (database, value) => {
        const acumulator = database.filter((el) => el.questionText && el.questionText.includes(value));
        setquestionsFound(acumulator);
    };

    const handleToggleSwitch = () => {
        setTagsDisplay((prevState) => !prevState);
    };

    useEffect(() => {
        searchByTagName(data, searchValue);
    }, [searchValue]);

    // if (!user || user.isLoggedIn === false) {
    //     return <div>loading...</div>
    // }

    return (
        <TemplateWrapper>
            {/*<LeftSection isTagsDisplayed={isTagsDisplayed}>*/}
            {/*    <Tags*/}
            {/*        data2={tagsData.tags}*/}
            {/*        handleTagClick={console.log}*/}
            {/*        onToggleSwitch={handleToggleSwitch}*/}
            {/*        isTagsDisplayed={isTagsDisplayed}*/}
            {/*    />*/}
            {/*</LeftSection>*/}
            <WallSection>
                {/*<Search searchValue={searchValue} setSearchValue={setSearchValue} />*/}
                <Questions questionsData={data} />
            </WallSection>
        </TemplateWrapper>
    );
};

const TemplateWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
`;

const LeftSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const WallSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export default Landing;
