import React from "react";

interface NoResultsProps {
  searchQuery: string;
}

const NoResults: React.FC<NoResultsProps> = ({ searchQuery }) => {
  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-3 md:p-4 rounded-lg shadow-md text-center z-50 max-w-xs md:max-w-md lg:max-w-lg w-full mx-auto text-sm md:text-base text-gray-600">
      Nenhum equipamento encontrado com esse nome ou modelo "
      <strong>{searchQuery}</strong>"
    </div>
  );
};

export default NoResults;
