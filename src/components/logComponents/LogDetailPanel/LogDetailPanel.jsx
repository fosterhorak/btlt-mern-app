import { useState, useEffect } from 'react';
import './LogDetailPanel.css';
import LogDetailTop from './LogDetailTop/LogDetailTop';
import LogDetailBottom from './LogDetailBottom/LogDetailBottom';
import UpdateLogForm from './UpdateLogForm/UpdateLogForm';




export default function LogLogDetailPanel({
  activeLog, logs, exercises,
  handleUpdateLog, 
  updateLogForm, setUpdateLogForm,
  handleDeleteLog, 
  deleteLogForm, setDeleteLogForm

}) {


  const [targetExercise, setTargetExercise] = useState({});

  useEffect(() => {
    console.log(`useEffect on log detail panel is running...`);

    if (activeLog._id) {
      const target = exercises.find(e => e._id === activeLog.exerciseID);
      console.log(`target: ${target}`);
      console.log(`target.name: ${target.name}`);
      setTargetExercise(target);           
    };

  }, [exercises, activeLog])

// If the UpdateLogForm is up, and I click on a new log, I want to see the UpdateLogForm for the new active log...

    return (
      <>
        { activeLog._id ? 
          <div className="detail-container">
            
            { updateLogForm ? 
              <UpdateLogForm 
                handleUpdateLog={handleUpdateLog} 
                activeLog={activeLog} 
                setUpdateLogForm={setUpdateLogForm} 
                targetExercise={targetExercise} 
                /> 
            :
              <>
              <LogDetailTop 
                activeLog={activeLog} logs={logs} exercises={exercises}
                updateLogForm={updateLogForm} setUpdateLogForm={setUpdateLogForm}
                handleDeleteLog={handleDeleteLog}
                deleteLogForm={deleteLogForm} setDeleteLogForm={setDeleteLogForm}
                targetExercise={targetExercise} 
                />
              
              <hr id="b"/>

              <LogDetailBottom />
              </>
            }
          </div>

        : ''}
      </>
    );
  }