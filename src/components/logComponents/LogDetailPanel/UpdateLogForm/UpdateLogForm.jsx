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

    // hook updateExerciseForm to false...
    const handleCancel = (e) => {
        e.preventDefault()
        setUpdateLogForm(false);
    }
    
    return (

        <div className="new-form" id="log">
            <h1 className="update-form">UPDATE LOG</h1> 
            <hr id="ul"/>
            <form id="new-log-start2" autoComplete="off" >
                <div className="form-groupL" id="title">
                    <label> <strong> <h3>{targetExercise.name}</h3></strong> </label>
                </div>
                <div className="form-groupR2">
                    #{activeLog._id.slice(-4)}                
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

            <button className="cncl-form2" onClick={handleCancel}> <h5>CANCEL</h5></button>

            </div>
        </div>
    );
}