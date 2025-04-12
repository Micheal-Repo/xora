import {
  Hero,
  Header,
  Features,
  Pricing,
  Faq,
  Testimonials,
  Download,
  Footer,
} from "@/section"


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  )
}