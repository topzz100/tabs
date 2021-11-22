import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const[value, setValue] = useState(0)

  const fetchJobs = async() => {
    const result = await fetch(url)
    const res = await result.json()
    setJobs(res)
    setLoading(false)
    
  }
  useEffect( () => {
   fetchJobs()
  }, [])

  if(loading){
    return <h1 className = "section loading">loading.....</h1>
  }
  
  const{company, title, dates, duties} = jobs[value]
  return <>
    <section className = "section">
      <div className = "title">
        <h2>Experience</h2>
        <div className = "underline"/>
      </div>
      <div className = "jobs-center">
        <div className = "btn-container">
          {jobs.map((job, index) => {
            return <button key = {job.id} onClick = {() => {setValue(index)}} className = {`job-btn ${index ===value && 'active-btn'}`}>{job.company}</button>
          })}
        </div>
        <div className = "job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className = "job-date">{dates}</p>
          
            {duties.map((duty, index) => {
              return <div className = "job-desc" key = {index}><FaAngleDoubleRight className = "job-icon"/><p>{duty}</p></div>
            })}
        
        </div>
      </div>
       <button type="button" className="btn">
        more info
      </button>

     
    
    </section>
  </>

}

export default App
