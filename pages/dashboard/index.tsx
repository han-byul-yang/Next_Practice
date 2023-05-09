import useSWR from 'swr'

const Dashboard = () => {
  const fetching = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
  }

  const { data, error } = useSWR('dashboard', fetching)

  if (error) return <p>error occured</p>
  if (!data) return <p>no data</p>

  return (
    <>
      <div>dashboard</div>
      <div>{data.posts}</div>
      <div>{data.likes}</div>
      <div>{data.followers}</div>
      <div>{data.following}</div>
    </>
  )
}

export default Dashboard
