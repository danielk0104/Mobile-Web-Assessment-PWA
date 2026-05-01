import { useState, useEffect } from "react"
import Header from "../components/Header"

function Timer() {
    const [seconds, setSeconds] = useState(10)

    const [started, setStarted] = useState(false)

    useEffect(function() {
        // If the timer is not started, don't set up the interval
        if (!started) {
            return
        }

        // Set an interval to decrease every second
        const interval = setInterval(function() {
            setSeconds(function(seconds) {
                // Check if the timer has reached 0
                if (seconds <= 0) {
                    // Clear the interval to stop the timer
                    clearInterval(interval)

                    // Stop at 0
                    return 0
                }

                return seconds - 1
            })
        }, 1000)

        return function() { clearInterval(interval) }
    }, [started])

    // Function to handle the start/pause button click
    const handleStartPause = () => {
        setStarted(!started)
    }

    // Reset the timer
    const handleReset = (e) => {
        const value = parseInt(e.target.value)
        setStarted(false)
        setSeconds(value)
    }

    const handleSelect = (e) => {
        const value = parseInt(e.target.value)
        setSeconds(value)
        setTime(value)
    }

    // Time formatting
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0')
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')

    // Save the time option
    const [time, setTime] = useState()

    return (
        <div className="container mx-auto p-4">
            <Header title="Timer" />
            <select value={seconds} onChange={handleSelect} disabled={started}>
                <option value="10">10 seconds</option>
                <option value="30">30 seconds</option>
                <option value="60">1 minute</option>
                <option value="300">5 minutes</option>
                <option value="600">10 minutes</option>
                <option value="900">15 minutes</option>
                <option value="1800">30 minutes</option>
                <option value="3600">1 hour</option>
            </select>
            <p>{hrs}:{mins}:{secs}</p>
            {seconds === 0 ? <p>Time's up!</p> : null}
            <div>
                <button onClick={handleStartPause}>
                    {started ? "Pause" : "Start"}
                </button>
                <button value={time} onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer