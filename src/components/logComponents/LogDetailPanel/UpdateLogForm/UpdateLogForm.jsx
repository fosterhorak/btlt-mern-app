import React, {useState, useRef, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './UpdateLogForm.css';
import Popup from 'reactjs-popup';
import StdLftLogUpdateForm from './UpdateLogFormTemplates/StdLftLogUpdateForm';
import BodyWtLogUpdateForm from './UpdateLogFormTemplates/BodyWtLogUpdateForm';
import EmomStdLogUpdateForm from './UpdateLogFormTemplates/EmomStdLogUpdateForm';
import EmomWtdLogUpdateForm from './UpdateLogFormTemplates/EmomWtdLogUpdateForm';
import AmrapWtdLogUpdateForm from './UpdateLogFormTemplates/AmrapWtdLogUpdateForm';
import AmrapStdLogUpdateForm from './UpdateLogFormTemplates/AmrapStdLogUpdateForm';
import RftWtdLogUpdateForm from './UpdateLogFormTemplates/RftWtdLogUpdateForm';
import RftStdLogUpdateForm from './UpdateLogFormTemplates/RftStdLogUpdateForm';
import CardioLogUpdateForm from './UpdateLogFormTemplates/CardioLogUpdateForm';
import SimpleLogUpdateForm from './UpdateLogFormTemplates/SimpleLogUpdateForm';



export default function UpdateLogForm({ activeLog, handleUpdateLog, setUpdateLogForm, targetExercise  }) {
    // const location = useLocation();

    // hook updateExerciseFrom to false...
    const handleCancel = (e) => {
        e.preventDefault()
        setUpdateLogForm(false);
    }
    // ice box: allow update of all form components if no logs have been created yet... otherwise only allow select properties to be updated
    // ice box: allow for users to create a new exercise by copying an existing one... opens new exercise form with copied content already 
    // reminder -- if i update a property of an exercise that is pulled into a log... I'll want to make sure it get's updated on the log instance as well 
            // or perhaps, just avoid doing this.. only reference the exercise._id in the log model
    return (

        <div className="new-form" id="log">
            <h1 className="update-form">UPDATE LOG</h1> 
            <form id="new-log-start" autoComplete="off" >
                <div className="form-groupL">
                    <label> <strong> <h3>{targetExercise.name} #({activeLog._id.slice(-4)})</h3></strong> </label>
                </div>
                <div className="form-groupR">
                    <label><strong>{targetExercise.category}</strong></label>
                </div>
            </form>
            
            <div className="scrollable">

            { activeLog._id && (
            <>
                { activeLog.exerciseLogType === 'Std Lft' && (
                <>
                    <StdLftLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}
                { activeLog.exerciseLogType === 'Body Wt' && (
                <>
                    <BodyWtLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}
                { activeLog.exerciseLogType === 'EMOM(std)' && (
                <>
                    <EmomStdLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}

                
                { activeLog.exerciseLogType === 'EMOM(wtd)' && (
                <>
                    <EmomWtdLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}

                { activeLog.exerciseLogType === 'AMRAP(wtd)' && (
                <>
                    <AmrapWtdLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}

                { activeLog.exerciseLogType === 'AMRAP(std)' && (
                <>
                    <AmrapStdLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}

                { activeLog.exerciseLogType === 'RepsForTime(wtd)' && (
                <>
                    <RftWtdLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}
                { activeLog.exerciseLogType === 'RepsForTime(std)' && (
                <>
                    <RftStdLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}

                { activeLog.exerciseLogType === 'Cardio' && (
                <>
                    <CardioLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}

                
                { activeLog.exerciseLogType === 'Simple' && (
                <>
                    <SimpleLogUpdateForm activeLog={activeLog} handleUpdateLog={handleUpdateLog}/>
                </>
                )}

            </>
            )}

            <button className="cncl-form" onClick={handleCancel}> <h5>CANCEL</h5></button>

            </div>
        </div>
    );
}