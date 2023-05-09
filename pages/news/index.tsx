interface NewsProps {
  newsData: any
}

const News = ({ newsData }: NewsProps) => {
  return (
    <>
      <div>News letter hello</div>
      <ul>
        {newsData.map((news: any) => {
          return (
            <li key={news.id}>
              {news.id} {news.title} {news.category}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default News

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()

  return {
    props: {
      newsData: data,
    },
  }
}
