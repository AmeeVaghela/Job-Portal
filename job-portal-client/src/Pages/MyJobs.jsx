import React, { useEffect, useState } from 'react'

const MyJobs = () => {
    const email = "ami13@gmail.com"
    const [jobs, setJobs] = useState([]);
    const [searchText , setSearchText] = useState("");
    const [isLoading , setIsLoading] = useState(true);

    useEffect( () => {
        setIsLoading(true)
        fetch("http://localhost:3000/myJobs/ami13@gmail.com").then(res => res.json()).then( data => {
          setJobs(data)
        })
    } , [])
  return (
    <div>MyJobs : {jobs.length}</div>
  )
}

export default MyJobs