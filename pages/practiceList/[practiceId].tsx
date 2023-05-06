interface IPractice {
  data: any
}

const Practice = ({ data }: IPractice) => {
  return <div>{data.title}</div>
}

export default Practice

export const getStaticProps = async (context: any) => {
  const { params } = context

  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.practiceId}`)
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
  }
}

export const getStaticPaths = async () => {
  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await fetchData.json()

  const paths = data.map((param: any) => {
    return {
      params: { practiceId: `${param.id}` },
    }
  })

  return {
    paths,
    fallback: true,
  }
}
