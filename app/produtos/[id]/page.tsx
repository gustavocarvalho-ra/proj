"use client"

// import { GetStaticProps, GetStaticPaths } from "next";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

import { produc } from "../../types/prod"
// import test from "../../data/pro.json"
import pro from "../../data/pro.json"


interface Props {
  produto: produc | null;
  params: {
    id: string
  };
};

const ProdutoDetalhes: React.FC<Props> = ({ params }) => {
  const { id } = params;

  const produto = pro?.find(item => item.id.toString() === id);

  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <div>
      <h1>{produto.name}</h1>
      <h1>{produto.price}</h1>
      <h1>{produto.id}</h1>
      <h1>{produto.type}</h1>
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = test.map(produto => ({
//     params: { id: produto.id.toString() }
//   }));

//   return {
//     paths,
//     fallback: false
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context.params?.id as string;
//   const produto = test.find(p => p.id.toString() === id) || null;

//   return {
//     props: {
//       produto
//     }
//   };
// };

export default ProdutoDetalhes;