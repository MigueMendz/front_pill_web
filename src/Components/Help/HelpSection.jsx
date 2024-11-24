import React from 'react';

function HelpSection({ sections }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-medium text-teal-600 mb-2">
            {section.title}
          </h2>
          <p className="text-gray-700">{section.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HelpSection;
