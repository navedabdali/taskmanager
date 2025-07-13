import { useEffect, useState } from 'react'

export default function useTasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching tasks:', err)
        setLoading(false)
      })
  }, [])

  return { tasks, loading, setTasks }
}
