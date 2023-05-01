import Link from 'next/link'

interface IPracticeProps {
  data: any
}

const PracticeList = ({ data }: IPracticeProps) => {
  console.log(data)
  return data.map((todo: any, i: number) => {
    return (
      <Link key={i} href={`/practiceList/${i + 1}`}>
        {todo.title}
      </Link>
    )
  })
}

export default PracticeList

export const getStaticProps = async () => {
  const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await fetchData.json()

  return {
    props: {
      data,
    },
  }
}
