

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="sticky-header">
      <div className="w-full 2xl:w-4/5 xl:w-[90%] md:w-[95%] mx-auto flex items-center justify-between">
        <div className="logo flex items-center gap-2">
          <span className="text-black text-lg font-semibold uppercase">job </span>
          <span className="text-red-500 text-lg font-semibold uppercase">villa</span>
        </div>

        <div className="search-box w-[70%] md:w-1/2">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              id="search"
              type="search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl
              bg-gray-50 outline-none focus:ring-gray-400 focus:border-gray-400"
              placeholder="Search by name or city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
