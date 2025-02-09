import React from 'react';

const Comunicado: React.FC = () => {
    return (
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <img
          className="object-cover object-center w-full rounded-lg h-96"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
          alt="nature image"
        />
        <div className="block mt-2 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
          Image caption
        </div>
      </div>
    );
};

export default Comunicado;