import IconWrapper from "@/components/common/IconWrapper";
import Search from "@/assets/sidebar/Search.svg";

const SearchInput = () => (
  <div className="bg-gray-800 flex justify-between items-center px-4 py-3.5 mx-6 rounded-md mb-9.5">
    <input
      className="placeholder-gray-600 focus:outline-none w-full text-gray-0"
      placeholder="مدل مورد نظر خودتونو تایپ کنید"
    />
    <IconWrapper alt="Search" src={Search} />
  </div>
);

export default SearchInput;
