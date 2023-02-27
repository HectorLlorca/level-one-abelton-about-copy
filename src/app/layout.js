import Header from '@/components/header/header'
import '../styles/globals.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ['latin']
})


export default function RootLayout({ children }) {
  return (
    <html className={montserrat.className} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>


    </html>
  )
}
