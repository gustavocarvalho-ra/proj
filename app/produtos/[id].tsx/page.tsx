import { GetStaticProps, GetStaticPaths } from "next";
import Header from "@/app/components/Header";

import { produc } from "../../types/prod"
import test from "../../data/pro.json"


  interface Props {
    produto: produc | null;
  }
  
  const ProdutoDetalhes: React.FC<Props> = ({ produto }) => {
    if (!produto) return <div>Produto não encontrado</div>;

    return (
      <div>
        <h1>{produto.name}</h1>
        <h1>{produto.price}</h1>
        <h1>{produto.id}</h1>
      </div>
    );
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = test.map(produto => ({
    params: { id: produto.id }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const produto = test.find(p => p.id === id) || null;

  return {
    props: {
      produto
    }
  };
};

export default ProdutoDetalhes;