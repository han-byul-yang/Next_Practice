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

  return {
    props: {
      data,
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { practiceId: '1' },
      },
      {
        params: { practiceId: '2' },
      },
      {
        params: { practiceId: '3' },
      },
    ],
    fallback: false,
  }
}
