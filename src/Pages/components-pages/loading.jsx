import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-6 h-6 border-t-4 border-b-4 border-green-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
