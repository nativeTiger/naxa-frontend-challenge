import { useState } from "react";

const links = [
  {
    id: 1,
    name: "Data Visualization & Mapping",
  },
  {
    id: 2,
    name: "Surveying & Data Collection",
  },
  {
    id: 3,
    name: "Software & Apps Development",
  },
  {
    id: 4,
    name: "GIS & Geospatial Technologies",
  },
  {
    id: 5,
    name: "Frontier Technologies",
  },
  {
    id: 6,
    name: "Research & Training",
  },
];

export default function Header() {
  const [isShow, setIsShow] = useState(false);
  const handleIsShow = () => setIsShow((previousState) => !previousState);

  return (
    <header className="bg-gray-50 py-3  md:py-6 shadow-sm">
      <nav className="container mx-auto px-4 md:px-20">
        <div className="flex justify-end items-center">
          <button type="button" className="md:hidden" onClick={handleIsShow}>
            {isShow ? (
              <box-icon color="gray" size="md" name="x"></box-icon>
            ) : (
              <box-icon color="gray" size="md" name="menu"></box-icon>
            )}
          </button>
        </div>
        <ul
          className={`md:flex flex-col gap-y-2 md:items-center md:flex-row md:justify-between ${
            isShow ? "flex" : "hidden"
          }`}
        >
          {links.map((item, index) => (
            <li key={index} className="text-center">
              <a
                className=" text-gray-600 text-sm md:text-base font-medium duration-200 hover:text-gray-700"
                href={`#${item.id}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
