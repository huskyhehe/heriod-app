import { useState } from 'react';
import Calculator from '../components/Caculator';
import Report from '../components/Report';
import '../css/tracker.css';


function Tracker() {

    const defaultData = {
        recentDate: "",
        cycle: 28,
        period: 5,
    }

    const [trackerData, setTrackerData] = useState(defaultData);
    const [predictedData, setPredictedData] = useState([]);

    const inputDate = new Date(trackerData.recentDate);
    const absoluteDate = new Date(inputDate.getTime() + inputDate.getTimezoneOffset() * 60000);

    const [isLoading, setIsLoading] = useState(false);
    const [isReportShowed, setIsReportShowed] = useState(false);
      
    const handleCalculatorSubmit = (e) => {
        e.preventDefault();  
        setIsLoading(true);
        const timeout = setTimeout(()=> {
            predictPeriod(absoluteDate);        
            setIsLoading(false);
            setIsReportShowed(true);
        }, 2000);
        return () => {     
            clearTimeout(timeout);
        }
    }

    function addDays(formerDate, n) {
        let result = new Date(formerDate);
        result.setDate(result.getDate() + n);
        return result;
    }

    function predictPeriod(initDate) { 
        const cycle = trackerData.cycle;
        const period = trackerData.period;
        let startDate1 = addDays(initDate, cycle);      
        let endDate1 = addDays(startDate1, period);
        let nextPeriod1 = [startDate1, endDate1];
        let nextPeriod2 = [addDays(startDate1, cycle), addDays(endDate1, cycle)];
        let nextPeriod3 = [addDays(startDate1, cycle*2), addDays(endDate1, cycle*2)];       
        setPredictedData(prevData => {
            return [nextPeriod1, nextPeriod2, nextPeriod3];
        });
    }   


    return (
        <main id="main">  
            <div className="tracker__wrapper">
                <div className="tracker__hero">
                    <h1>Period Tracker</h1>
                    <h3>Calculate your next 3 months' period date</h3>                
                </div>
                
                <Calculator 
                    trackerData={trackerData}
                    setTrackerData={setTrackerData}
                    handleSubmit={handleCalculatorSubmit}
                    setIsReportShowed={setIsReportShowed}
                />

                {isLoading && <i className="gg-spinner"></i>}
                
                {isReportShowed && 
                <Report 
                    formData={trackerData}
                    predictedData={predictedData}
                    absoluteDate={absoluteDate} 
                />
                }
            </div>
        </main>       
    );
}

export default Tracker;
