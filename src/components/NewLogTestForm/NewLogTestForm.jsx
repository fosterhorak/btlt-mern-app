import React, {useState, useRef, useEffect} from 'react';
import './NewLogTestForm.css';


export default function NewLogTestForm(props) {
    const [activeExercise, setActiveExercise] = useState(null);
    const [number, setNumber] = useState(200);

    return (
      <>
        <h1>Logs</h1>
        <select 
                className="form-control" 
                name="exerciseObj"
                onChange={ evt => setActiveExercise(props.exercises[evt.target.value])}
                id="new-log"
                required>

                {props.exercises.map((exercise, idx) => (
                    <option value={idx}>{exercise.name}</option>

                ))};

        </select>
        { activeExercise && (
            <>
            {activeExercise.logType}
            </>
        )}
       

        <input
            type="number"
            step="1"
            className="form-control" 
            name="exerciseData.sets" //"exerciseData["sets"]" ???
            value={number} //"exerciseData["sets"]" ???
            onChange={evt => setNumber(parseInt(evt.target.value))}
            id="new-log"
            required
        />
        <input
                //PROBLEM - don't know how to do time duration... tried to download a script in public index.html header 
                type="text"
                className="html-duration-picker form-control" 
                data-duration="00:00:00"
                name="exerciseData.restInt" //"exerciseData["restInt"]" ???
                id="new-log"
                required

                // min icon with padding inside input
        />

      </>
  );
  }