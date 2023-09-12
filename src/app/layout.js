import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Roboto_Serif } from 'next/font/google'


const roboto = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200","300", "400"],
});

export const metadata = {
  title: 'Found Pets',
  description: 'Made with love 🐶',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <title>Found Pets 🐶</title>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>  
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
