import './styles/error.scss'
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="Err404C">
      <div className='Err404H'>
        <img src='/images/logo.png' />
        <h1>Página no encontrada</h1>
      </div>
      <p>No se pudo encontrar el recurso solicitado</p>
      <div className='Err404B'>
        <img src='/images/notFound.jpg' />
        <Link href="/">Volver al inicio</Link>
      </div>
    </div>
  );
}