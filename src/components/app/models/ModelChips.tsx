const ModelChips = () => {
  return (
    <div className="flex gap-1.75 flex-wrap mx-5 mb-10">
      {[...new Array(10)].map((_, i) => (
        <span className="bg-gray-700 rounded-full px-2 py-1" key={i}>
          <p className="w-max text-gray-0 text-sm">مدل استدلال</p>
        </span>
      ))}
    </div>
  );
};

export default ModelChips;
