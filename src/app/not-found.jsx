import Header from "@/components/header/header";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="global">
     <img src='/images/logo.png'/>
      <h2>Página no encontrada</h2>
      <p>No se puedo encontrar el recurso solicitado</p>
      <img src='/images/notFound.jpg'/>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
}