import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductCard from '../components/ProductCard'
import ProductSlider from '../components/ProductSlider'

export default function Home() {
  return (
    <>
      <ProductCard product={{id:'1',title:"Apple"}}/>
      <ProductSlider/>
    </>
  )
}
