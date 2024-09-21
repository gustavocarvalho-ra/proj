// import { GetStaticProps } from "next";
// import Header from "@/app/components/Header";
// import { useParams, useSearchParams } from "next/navigation";
// import pro from "../data/pro.json"
// import { products } from "../types/products"
// import Link from "next/link";

// import test from "../data/pro.json"
// import { produc } from "../types/prod"


// //   interface Props {
// //     produtos: products[]
// //   }
  
// //   const product: React.FC<Props> = ({ produtos }) => {
// //     return (
// //       <div>
// //         <h1>Lista de produtos</h1>
// //         <ul>
// //           {produtos.map(produto => (
// //             <li key={produto.id}>
// //               <Link href={`/produtos/${produto.id}`}>
// //                 <a>{produto.name}</a>
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     )
// //   }

// // export const getStaticProps: GetStaticProps = async () => {
// //   return {
// //     props: {
// //       pro
// //     }
// //   }
// // }

// interface Props {
//   produtos: produc[]
// }

// const product: React.FC<Props> = ({ produtos }) => {
//   return (
//     <div>
//       <h1>Lista de produtos</h1>
//       <ul>
//         {produtos.map(produto => (
//           <li key={produto.id}>
//             <Link href={`/produtos/${produto.id}`}>
//               <a>{produto.name}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export const getStaticProps: GetStaticProps = async () => {
// return {
//   props: {
//     test
//   }
// }
// }

// export default product;