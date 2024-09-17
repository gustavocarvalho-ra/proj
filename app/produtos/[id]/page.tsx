"use client"

import { GetStaticProps } from "next";
import Header from "@/app/components/Header";
import { useParams, useSearchParams } from "next/navigation";
import pro from "../../data/pro.json"
import { products } from "../../types/products"

export default function Detalhes( {params}: any) {

  const searchParams = useSearchParams();
  const newParam = searchParams.get("item")

  interface Props {
    produtos: products[]
  }
  
  const products: React.FC<Props> = ({ produtos }) => {
    return (
      <div>
        <h1>Lista de produtos</h1>
      </div>
    )
  }
  let produtos = [...pro];

  return (
    <>
      <Header/>
      <h1>test link ##{newParam}</h1>
    </>
  );
}
