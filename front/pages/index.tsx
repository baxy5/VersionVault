import { Roboto } from '@next/font/google'

import { Layout, Hero, Content } from "../components/index"

const roboto = Roboto({
  subsets: ['latin'],
  weight: "300",
  style: "normal"
})

// TODO: Theme switcher

export default function Home() {
  return (
    <div className={`${roboto.className}`} >
      <Layout>
        <Hero />
        <Content />
      </Layout>
    </div >
  )
}
