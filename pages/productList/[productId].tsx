interface ProductProps {
  data: any
}

const Product = ({ data }: ProductProps) => {
  return (
    <div>
      {data.title} {data.price}
    </div>
  )
}

export default Product

export const getStaticProps = async (context: any) => {
  const { params } = context

  const fetchData = await fetch(`http://localhost:4000/products/${params.productId}`)
  const data = await fetchData.json()

  if (!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const fetchData = await fetch(`http://localhost:4000/products`)
  const data = await fetchData.json()

  const paths = data.map((param: any) => {
    return {
      params: { practiceId: `${param.id}` },
    }
  })

  return {
    paths: [
      {
        params: { productId: '1' },
      },
      {
        params: { productId: '2' },
      },
    ],
    fallback: 'blocking',
  }
}
