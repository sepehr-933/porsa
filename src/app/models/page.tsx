import SearchInput from "@/components/common/SearchInput";
import Filters from "@/components/app/models/Filters";
import ModelChips from "@/components/app/models/ModelChips";
import ModelCard from "@/components/app/models/ModelCard";

export default function Models() {
  return (
    <div className="pt-15">
      <h2 className="text-xxl font-bold text-gray-0 mx-8 mb-5.5">
        همه آنچه برای هوش مصنوعی نیاز دارید، در یک پلتفرم!
      </h2>
      <SearchInput />
      <Filters />
      <ModelChips />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mx-5">
        {[...new Array(10).keys()].map((i) => (
          <ModelCard key={i} />
        ))}
      </div>
    </div>
  );
}
