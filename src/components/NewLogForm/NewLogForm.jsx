import React, {useState, useRef, useEffect} from 'react';
import './NewLogForm.css';
import TemplateLogTypeForm from './TemplateLogTypeForm/TemplateLogTypeForm';
import StdLftLogTypeForm from './TemplateLogTypeForm/StdLftLogTypeForm';
import BodyWtLogTypeForm from './TemplateLogTypeForm/BodyWtLogTypeForm';
import EmomStdLogTypeForm from './TemplateLogTypeForm/EmomStdLogTypeForm';
import EmomWtdLogTypeForm from './TemplateLogTypeForm/EmomWtdLogTypeForm';
import AmrapWtdLogTypeForm from './TemplateLogTypeForm/AmrapWtdLogTypeForm';
import AmrapStdLogTypeForm from './TemplateLogTypeForm/AmrapStdLogTypeForm';
import RftWtdLogTypeForm from './TemplateLogTypeForm/RftWtdLogTypeForm';
import RftStdLogTypeForm from './TemplateLogTypeForm/RftStdLogTypeForm';
import CardioLogTypeForm from './TemplateLogTypeForm/CardioLogTypeForm';
import SimpleLogTypeForm from './TemplateLogTypeForm/SimpleLogTypeForm';


export default function NewLogForm(props) {
  const [exerciseSelection, setExerciseSelection] = useState(null);

  return (
    <>
      <div className="new-form" id="new-log">
        <h1 id="new-log-title">CREATE A NEW LOG</h1> 
        <form id="new-log-start" autoComplete="off" >
          <div className="form-groupL">
              <label> <strong>SELECT AN EXERCISE</strong> </label>
          </div>
          <div className="form-groupR">
              <select 
                className="form-control" 
                name="exerciseObj"
                onChange={ evt => setExerciseSelection(props.exercises[evt.target.value]) }
                id="new-log"
                required>
                  <option value=""></option>
                  {props.exercises.map((exercise, idx) => (
                    <option value={idx} key={exercise._id} >{exercise.name} </option>
                  ))};
              </select>
          </div>
        </form>

        { exerciseSelection && (
          <>
            { exerciseSelection.logType === 'Std Lft' && (
              <>
                <StdLftLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}
            { exerciseSelection.logType === 'Body Wt' && (
              <>
                <BodyWtLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}
            { exerciseSelection.logType === 'EMOM(std)' && (
              <>
                <EmomStdLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}

            
            { exerciseSelection.logType === 'EMOM(wtd)' && (
              <>
                <EmomWtdLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}

            { exerciseSelection.logType === 'AMRAP(wtd)' && (
              <>
                <AmrapWtdLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}

            { exerciseSelection.logType === 'AMRAP(std)' && (
              <>
                <AmrapStdLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}

            { exerciseSelection.logType === 'RepsForTime(wtd)' && (
              <>
                <RftWtdLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}
            { exerciseSelection.logType === 'RepsForTime(std)' && (
              <>
                <RftStdLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}

            { exerciseSelection.logType === 'Cardio' && (
              <>
                <CardioLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}

            
            { exerciseSelection.logType === 'Simple' && (
              <>
                <SimpleLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
              </>
            )}

          </>
        )}
      </div>
    </>
  )}