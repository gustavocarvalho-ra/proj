"use client"

import Header from "@/app/components/Header";

import { produc } from "../../types/prod"
import pro from "../../data/pro.json"
import { Main } from "../styles";


interface Props {
  produto: produc | null;
  params: {
    id: string
  };
};

const ProdutoDetalhes: React.FC<Props> = ({ params }) => {
  const { id } = params;

  const produto = pro?.find(item => item.id.toString() === id);

  if (!produto) 
    return (
      <div>
        <h1>Produto não encontrado :(</h1>
      </div>
    )

  return (
    <>
      <Header />
      <Main>
        <h1>{produto.name}</h1>
        <h1>{produto.price}</h1>
        <h1>{produto.id}</h1>
        <h1>{produto.type}</h1>
      </Main>
    </>
  );
};

export default ProdutoDetalhes;