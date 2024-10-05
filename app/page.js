"use client";
import { useState } from "react";
import CompanyCard from "./components/CompanyCard";
import Navbar from "./components/Navbar";
import { jobList } from "./data";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredItems = jobList.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app bg-slate-50">
      <Navbar search={search} setSearch={setSearch} />
      <div className="w-full 2xl:w-4/5 xl:w-[90%] md:w-[95%] mx-auto my-5 px-3 pb-5">
        {filteredItems.length > 0 ? (
          <>
            <h3 className="text-black text-xl font-bold mb-3 capitalize">
              total jobs: {filteredItems.length}
            </h3>
            <div className="job-list grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
              {filteredItems.map((item, index) => (
                <CompanyCard item={item} key={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="message h-[80vh] flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
            <h4 className="text-xl text-gray-600 text-center mt-2">
              No apps found.
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}
