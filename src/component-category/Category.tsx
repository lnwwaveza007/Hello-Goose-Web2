import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import categoryData from '../assets/data/category';

interface CategoryProps {
  onCategoryClick: (category: string) => void;
}

const Category = ({ onCategoryClick }: CategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="m-7">
        {/* category-zone header! */}
        <div className="flex justify-between items-center relative">
          <div className="flex justify-between">
            <div className="flex justify-between items-center bg-[#dc9873] w-44 h-10 text-md md:w-44 md:relative md:left-[17em] md:z-20 lg:left-0 xl:left-0">
              <h1 className=" text-white text-2xl ml-2">Category</h1>
              <button onClick={toggleDropdown}>
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className={`mr-2  text-white ${isOpen ? "rotate-180" : ""} `}
                />
              </button>
            </div>
          </div>
          <hr className="border-[#dc9873] border w-10/12 ml-6 md:w-9/12 md:relative md:right-24 md:z-10 lg:left-2 lg:w-11/12" />
        </div>

        {/* category-zone */}
        {isOpen && (
          <div className="relative">
            <div className=" rounded-md bg-[#95c3ac] flex flex-col w-32 absolute left-12">
              <div className="dropdown-content text-center flex flex-col justify-center text-xl text-gray-600">
                {categoryData.map((category, index) => (
                  <button
                    key={index}
                    className="hover:bg-blue-300"
                    onClick={() => onCategoryClick(category.name)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
