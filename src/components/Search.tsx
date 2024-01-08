import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex justify-center">
      <div className="flex border border-gray-200 rounded-md my-4">
        <div className="flex rounded-1-md bg-gray-100">
          <button className="rounded-l-md text-gray-400 ml-4 mr-16">
            소환사 검색
          </button>
          <span className="h-4 w-1px mx-1 bg-gray-700" />
        </div>
        <input
          className="w-540px h-12 px-2 bg-gray-100 focus:outline-none"
          type="text"
          placeholder="태양같은사나이#KR1"
        />
        <div className="bg-gray-100 w-12 h-12 flex flex-wrap justify-center content-center">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
