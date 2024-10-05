import React from "react";

const CompanyCard = ({item}) => {

  return (
    <div className="bg-white rounded overflow-hidden shadow p-2.5 ">
      <div className="p-3">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <ul className="text-gray-700 text-base">
          <li>
            <strong>Founded:</strong> {item.established}
          </li>
          <li>
            <strong>Industry:</strong> {item.industry}
          </li>
          <li>
            <strong>Location:</strong> {item.city}, {item.country}
          </li>
          <li>
            <strong>Employees:</strong> {item.employees}
          </li>
        </ul>
        <div className="mt-4">
          <a
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View Jobs on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
