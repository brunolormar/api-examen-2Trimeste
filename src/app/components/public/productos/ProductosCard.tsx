import React, { FC } from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { ILibro } from "src/interfaces/ILibros";

interface Props {
    rows: ILibro[],
}

export const libroCard:FC<Props> = ({libro}) => {
    return (
      <Card className="py-4 in-h-72 max-h-72" >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h5 className="font-bold text-sm">{libro.title}</h5>
        </CardHeader>
        <CardBody className="overflow-visible h-48 py-2 flex flex-row flex-wrap justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl max-h-44"
            src={libro.thumbnailUrl}
          />
        </CardBody>
        <CardFooter className="pb-0 pt-2 h-10 flex-col items-start">
          <p className="tect-tiny uppercase font-bold">
            {libro.categoria.name}
          </p>
          
        </CardFooter>
      </Card>
    );
  }
  