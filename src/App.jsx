import { useState, useEffect } from 'react'

function App() {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const data = new Date()
      setHour(data.getHours())
      setMinute(data.getMinutes())
      setSecond(data.getSeconds())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formatTime = (time) => time.toString().padStart(2, '0')

  return (
    <div className={`w-screen h-screen bg-my-quartenary flex items-center justify-center`}>
      <p className={`text-[40px] text-my-terciary bg-my-primary px-8 py-8`} style={{ boxShadow: "0 0 0 10px #176A73, 1px 1px 0 0 #176A73, -1px -1px 0 0 #176A73, 1px -1px 0 0 #176A73, -1px 1px 0 0 #176A73" }}>
        {formatTime(hour)}:{formatTime(minute)}:{formatTime(second)}
      </p>
      <p className={`text-my-quartenary absolute text-[40px] translate-x-[0px] translate-y-[-4px]`}>
        {formatTime(hour)}:{formatTime(minute)}:{formatTime(second)}
      </p>
    </div>
  )
}

export default App
