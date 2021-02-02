import { useState, useEffect } from 'react';
import './LogListCard.css';


export default function LogListCard({ log, logs, exercises, activeLog, setActiveLog, setDeleteLogForm}) {
  
  // how to get target Exercise to get to exercise name and category... ???
  const [targetExercise, setTargetExercise] = useState({});

  useEffect(() => {
    console.log(`useEffect is running...`);
    console.log(`exercises: ${exercises}`);
    const target = exercises.find(e => e._id === log.exerciseID);
    console.log(`target: ${target}`);
    console.log(`target.name: ${target.name}`);

    setTargetExercise(target);
  }, [exercises, logs])

  
  async function handleClick() {
    setActiveLog(log);
    setDeleteLogForm(false);
  }


  return (
    <>
      <div onClick={handleClick} className={log === activeLog ? "log-card selected" : "log-card"}>
        
        <h1 className="card-title" > {targetExercise.name} #{log._id.slice(-4)}</h1>
        <h3 className="card-title" > [{targetExercise.category}] </h3>
        
        {/* I want to see Exercise Name, Category, and Date for all logs */}
        <h1 className="card-title" > ExerciseName #{log._id.slice(-4)}</h1>
        <h3 className="card-title" > Category </h3>
        <h3 className="b">DATE: {log.dateTime}</h3>

        
        {/* if log.logType is Std Lift, EMOM(wtd), or AMRAP(wtd) --> i want to see weight, volume */}
          { log.exerciseLogType === ('Std Lft' || 'EMOM(wtd)' || 'AMRAP(wtd)') && (
            <>
              <h3 className="b">WEIGHT: {log.exerciseData.weight}</h3>
              <h3 className="b">VOLUME: {log.exerciseData.volCalc}</h3>
            </>
          )}

        {/* if log.logType is Body Wt or EMOM(std) --> i want to see total reps */}
          { log.exerciseLogType === ('Body Wt' || 'EMOM(std)') && (
            <>
              <h3 className="b">TOTAL REPS: {log.exerciseData.totReps}</h3>
            </>
          )}

        {/* if log.logType is AMRAP(std) --> i want to see reps */}
          { log.exerciseLogType === ('AMRAP(std)') && (
            <>
              <h3 className="b">REPS: {log.exerciseData.reps}</h3>
            </>
          )}

        {/* if log.logType is RepsForTime(std) --> i want to see time */}
          { log.exerciseLogType === ('RepsForTime(std)') && (
            <>
              <h3 className="b">TIME: {log.exerciseData.time}</h3>
            </>
          )}

        {/* if log.logType is RepsForTime(wtd) --> i want to see weight, volume, time */}
          { log.exerciseLogType === ('RepsForTime(wtd)') && (
            <>
              <h3 className="b">WEIGHT: {log.exerciseData.weight}</h3>
              <h3 className="b">VOLUME: {log.exerciseData.volCalc}</h3>
              <h3 className="b">TIME: {log.exerciseData.time}</h3>
            </>
          )}

        {/* if log.logType is Cardio --> i want to see distance, avgSpeed */}
          { log.exerciseLogType === ('Cardio') && (
            <>
              <h3 className="b">DIST: {log.exerciseData.distance}</h3>
              <h3 className="b">AVG SPEED: {`${log.exerciseData.avgSpeed.toFixed(2)} (d)/min`}</h3>
            </>
          )}

        {/* if log.logType is Simple --> i want to see "complete" */}
          { log.exerciseLogType === ('Simple') && (
            <>
              <h3 className="b">COMPLETE?: {log.exerciseData.complete}</h3>
            </>
          )}          
      </div>
    </>
  );
}

