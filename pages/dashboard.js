import { useEffect, useState } from "react"

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)
    const fetchDashboardData = async () => {
        const response = await fetch('http://localhost:3200/dashboard');
        const data = await response.json()
        setDashboardData(data)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchDashboardData();
    },[])

    if(isLoading) return <h2>Loading...</h2>

  return (<>
  <h1>Dashboard</h1>
  <h4>Posts - {dashboardData.posts}</h4>
  <h4>Likes - {dashboardData.likes}</h4>
  <h4>Followers - {dashboardData.followers}</h4>
  <h4>Following - {dashboardData.following}</h4>

  </>
    

  )
}

export default Dashboard