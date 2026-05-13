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
             <p className="text-xl font-display">Start time:</p>
            <select className="mb-10 mt-3 p-2 w-full outline outline-blue-900 hover:bg-blue-900 hover:text-white duration-200 font-display font-bold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700" value={seconds} onChange={handleSelect} disabled={started} aria-label="Select a start time">
                <option value="10">10 seconds</option>
                <option value="30">30 seconds</option>
                <option value="60">1 minute</option>
                <option value="300">5 minutes</option>
                <option value="600">10 minutes</option>
                <option value="900">15 minutes</option>
                <option value="1800">30 minutes</option>
                <option value="3600">1 hour</option>
            </select>
            <p className="m-5 text-center text-8xl font-display font-light">{hrs}:{mins}:{secs}</p>
            {seconds === 0 ? <p className="text-red-500 text-center font-display font-bold text-4xl">Time's up!</p> : null}
            <div className="mt-20 p-2 text-center">
                <button className="p-5 outline outline-blue-900 font-display font-bold cursor-pointer hover:bg-blue-900 hover:text-white duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700" onClick={handleStartPause}>
                    {started ? "Pause Timer" : "Start Timer"}
                </button>
                <button className="ml-10 p-5 outline outline-blue-900 font-display font-bold cursor-pointer hover:bg-blue-900 hover:text-white duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700" value={time} onClick={handleReset}>
                    Reset Timer
                </button>
            </div>
        </div>
    )
}

export default Timer