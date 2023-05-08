import Link from 'next/link'

interface ProductListProps {
  data: any
}

const ProductList = ({ data }: ProductListProps) => {
  return data.map((product: any, i: number) => {
    return (
      <Link key={i} href={`/productList/${i + 1}`}>
        {product.title} {product.price}
      </Link>
    )
  })
}

export default ProductList

export const getStaticProps = async () => {
  const fetchData = await fetch('http://localhost:4000/products')
  const data = await fetchData.json()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
