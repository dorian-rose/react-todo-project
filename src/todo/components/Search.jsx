import React from "react";

export const Search = () => {
  const handleSubmit = () => {
    //get all with search term
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          className="w-10/12 m-auto block border border-1 border-lines rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
          type="text"
          placeholder="Buscar"
        />
      </form>
    </section>
  );
};
