import { ILibro } from "src/interfaces/ILibros";
import React, { FC } from "react";
import { ProductosCard } from "./ProductosCard";

interface Props {
    libros:ILibro[];
}

export const ProductosCardList:FC<Props> = ({libros}) => {
    return (
      <section className="flex flex-row flex-wrap">
        {
          libros.map( (libro) => (
            <article key={libro.isbn} className="basis-1/3 p-2">
              <libroCard key={libro.isbn} libro = {libro }/>
            </article>
          ))
        }
      </section>
    )
  }
  