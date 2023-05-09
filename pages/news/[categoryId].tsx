interface CategoryProps {
  categoryId: string
  categoryData: any
}

const Category = ({ categoryId, categoryData }: CategoryProps) => {
  return (
    <>
      <div>newsletter categoryId {categoryId}</div>
      <ul>
        {categoryData.map((data: any) => {
          return (
            <li key={data.id}>
              {data.id} {data.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Category

export const getServerSideProps = async (context: any) => {
  const {
    params: { categoryId },
  } = context
  const response = await fetch(`http://localhost:4000/news?category=${categoryId}`)
  const data = await response.json()

  return {
    props: {
      categoryId,
      categoryData: data,
    },
  }
}
