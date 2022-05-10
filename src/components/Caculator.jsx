function Calculator( {trackerData, setTrackerData, handleSubmit, setIsReportShowed} ) {

   function handleDateChange(e) {
        e.preventDefault(); 
        setTrackerData(prevData => {
            return {
                ...prevData,
                recentDate: e.target.value
            };
        });
        setIsReportShowed(false);
    };

    function decrementCycle(e) {
        e.preventDefault();
        setTrackerData(prevData => {
            return {
                ...prevData,
                cycle: prevData.cycle - 1
            }
        });
        setIsReportShowed(false);
    };

    function incrementCycle(e) {
        e.preventDefault();
        setTrackerData(prevData => {
            return {
                ...prevData,
                cycle: prevData.cycle + 1
            }
        });
        setIsReportShowed(false);
    };

    function decrementPeriod(e) {
        e.preventDefault();
        setTrackerData(prevData => {
            return {
                ...prevData,
                period: prevData.period - 1
            }
        });
        setIsReportShowed(false);
    };

    function incrementPeriod(e) {
        e.preventDefault();
        setTrackerData(prevData => {
            return {
                ...prevData,
                period: prevData.period + 1
            }
        });
        setIsReportShowed(false);
    };
    

    return (
        <form className="tracker__form">   
            <label htmlFor="recentDate" className="tracker__question">
                When did your recent period start? *
            </label>
            <p className="tip">You could also select a future date for prediction.</p>
            <input                          
                type="date" 
                name="recentDate" 
                onChange={handleDateChange}
                className="date__input"
                required
            />

            <p className="tracker__question">How long is your menstrual cycle?</p>
            <p className="tip">Range: 15 ~ 40 days.</p>
            <div className="counter">
                <button 
                    className="decrement__button" 
                    onClick={decrementCycle}
                    disabled={trackerData.cycle === 15}
                >
                </button>
                <p className="counter__display">{trackerData.cycle}</p>
                <button 
                    className="increment__button" 
                    onClick={incrementCycle}
                    disabled={trackerData.cycle === 45}
                >
                </button>
            </div>

            <p className="tracker__question">How many days do your periods last?</p>
            <p className="tip">Range: 2 ~ 10 days.</p>
            <div className="counter">
                <button 
                    className="decrement__button" 
                    onClick={decrementPeriod}
                    disabled={trackerData.period === 2}
                >
                </button>
                <p className="counter__display">{trackerData.period}</p>
                <button 
                    className="increment__button" 
                    onClick={incrementPeriod}
                    disabled={trackerData.period === 10}
                >
                </button>
            </div>            

            <button onClick={handleSubmit} className="track__submit" disabled={!trackerData.recentDate}>
                Track My Period
            </button>
        </form>
    );
}

export default Calculator;
