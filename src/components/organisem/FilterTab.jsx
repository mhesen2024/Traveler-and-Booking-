import React from 'react';

const FilterTabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex bg-white rounded-md overflow-hidden w-full max-w-4xl  mt-4 ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`flex-1 py-2 px-4 ${activeTab === index ? 'text-blue-600 font-bold' : 'text-gray-600'} text-center`}
          onClick={() => onTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const SortByDropdown = ({ options, selectedOption, onOptionSelect }) => {
  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedOption}
        onChange={(e) => onOptionSelect(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const SearchResults = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('Recommended');

  const tabs = ['Our top picks', 'Hotel and apartments', 'Residence', 'Resort', 'Shared Space'];
  const sortOptions = ['Recommended', 'Price', 'Rating'];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="text-xl font-bold text-start sm:text-left mb-4 sm:mb-0">
          Melbourne: 2,582 search results found
        </div>
        <div className="w-full sm:w-auto">
          <SortByDropdown 
            options={sortOptions} 
            selectedOption={selectedOption} 
            onOptionSelect={setSelectedOption} 
          />
        </div>
      </div>
      <FilterTabs 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabClick={setActiveTab} 
      />
      {/* Content related to the selected tab goes here */}
    </div>
  );
};

export default SearchResults;
