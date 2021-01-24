import SearchView from './SearchView';

const Search = ({ setSearchValue, searchValue }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return <SearchView value={searchValue} onChange={handleChange} />;
};

export default Search;
