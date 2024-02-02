import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-540px border border-gray-200 rounded-md my-4">
        <input
          className="w-full h-12 rounded-l-md px-2 bg-gray-100"
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
