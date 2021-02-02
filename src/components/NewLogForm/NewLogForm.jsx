import React, {useState, useRef, useEffect} from 'react';
import './NewLogForm.css';
import TemplateLogTypeForm from './TemplateLogTypeForm/TemplateLogTypeForm';


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
                    <option value={idx}>{exercise.name}</option>
                  ))};
              </select>
          </div>
        </form>

        { exerciseSelection && (
          <>
          {/* { exerciseSelection.logType === 'Std Lft' ? <StdLiftForm /> : ''};
          { exerciseSelection.logType === 'Body Wt' ? <BodyWtForm /> : ''};
          { exerciseSelection.logType === 'EMOM(std)' ? <EMOMstdForm /> : ''};
          { exerciseSelection.logType === 'EMOM(wtd)' ? <EMOMwtdForm /> : ''};
          { exerciseSelection.logType === 'AMRAP(std)' ? <AMRAPstdForm /> : ''};
          { exerciseSelection.logType === 'AMRAP(wtd)' ? <AMRAPwtdForm /> : ''};
          { exerciseSelection.logType === 'RepsForTime(std)' ? <RepsForTimestdForm /> : ''};
          { exerciseSelection.logType === 'RepsForTime(wtd)' ? <RepsForTimewtdForm /> : ''};
          { exerciseSelection.logType === 'Cardio' ? <CardioForm /> : ''};
          { exerciseSelection.logType === 'Simple' ? <SimpleForm /> : ''}; 

                went ahead and stubbed up all form inputs below...
          */}

            <TemplateLogTypeForm exerciseSelection={exerciseSelection} handleAddLog={props.handleAddLog}/>
          
          </>
        )}; 
      </div>
    </>
  )}