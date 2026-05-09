function Weekday() {
    const days = ["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat"]
    const current_day = new Date().getDay()

    return (
        <div className="p-2 mb-2 text-center font-display bg-white">
            {days.map((day, index) => (
                <span key={index} className={index === current_day ? "font-bold" : "font-normal"}>
                    {day}
                </span>
            ))}
        </div>
    )
}

export default Weekday