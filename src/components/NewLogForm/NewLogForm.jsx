import React, {useState, useRef, useEffect} from 'react';
import './NewLogForm.css';
import Popup from 'reactjs-popup';



//props to pass in: handleAddLog; 

export default function NewLogForm(props) {
    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        dateTime: '', 
        exercise: '', // the form will initially need the whole exercise object (logType), when creating a new "log" it will only save the exercise._id
        exerciseData: {
          weight: '',
          reps: '',
          sets: '', 
          restInt: '',
          volCalc: '',
          totReps: '',
          time: '',
          numRds: '',
          timeCap: '',
          distance: '',
          avgSpeed: '',
          complete: 'true', 
        },
        notes: '',
    })
    const [newLogExercise, setNewLogExercise] = useState('');
    
    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    }, [formData]);

    useEffect(() => {
      setNewLogExercise(formData.exercise);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAddLog(formData);
    }
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        //setNewLogExercise(formData.exercise);
    }

    return (
      <>
      <div className="new-form" id="new-log">
        <h1 id="new-log-title">CREATE A NEW LOG</h1> 
        <form id="new-log" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        
        <div className="form-groupL">
            <label><strong>DATE</strong> </label>
        </div>
        <div className="form-groupR">
            <input 
              type="datetime-local"
              className="form-control" 
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              id="new-log"
              required
              />
        </div>

        
        <div className="form-groupL">
            <label> <strong>EXERCISE</strong> </label>
        </div>
        <div className="form-groupR">
            <select 
                className="form-control" 
                name="exercise"
                value={formData.exercise}
                onChange={handleChange}
                id="new-log"
                required>
                <option value=""></option>
                {props.exercises.map(exercise =>
                
                //PROBLEM - only shows first exercise in list when selection is made... handleChange messed up??
                  <option value={exercise}>{exercise.name}</option>
                )};
            </select>
        </div>
        <div className="form-groupL">
            <label> <strong>EXERCISE DATA</strong> </label>
            <hr id="new-log"/>
        </div>
        <div className="form-groupR">
          <br/>
        </div>


        { newLogExercise ? 
          //TESTING - for development purposes only
          // will need to dynamically change what form inputs are shown based on the exercise selected (logType property)
          // will also want to dynamically change what form inputs are "required"
          // i think the easiest way would be to...
              // create components for each logType lead by a ternary (newLogExercise.logType === "LogTypeA" ? <LogTypeAForm /> : '')
              // then add another ternaries within the component to control the "required" input property (newLogExercise.logType === "LogTypeA" ? required : '')
          <>
          <div><h2>An Exercise has been selected</h2></div>
          <div> 
            <h2>Exercise = {newLogExercise['name']}</h2>
            <h2>LogType = {newLogExercise.logType} </h2>
          </div>

          {/* { newLogExercise.logType === 'Std Lft' ? <StdLiftForm /> : ''};
          { newLogExercise.logType === 'Body Wt' ? <BodyWtForm /> : ''};
          { newLogExercise.logType === 'EMOM(std)' ? <EMOMstdForm /> : ''};
          { newLogExercise.logType === 'EMOM(wtd)' ? <EMOMwtdForm /> : ''};
          { newLogExercise.logType === 'AMRAP(std)' ? <AMRAPstdForm /> : ''};
          { newLogExercise.logType === 'AMRAP(wtd)' ? <AMRAPwtdForm /> : ''};
          { newLogExercise.logType === 'RepsForTime(std)' ? <RepsForTimestdForm /> : ''};
          { newLogExercise.logType === 'RepsForTime(wtd)' ? <RepsForTimewtdForm /> : ''};
          { newLogExercise.logType === 'Cardio' ? <CardioForm /> : ''};
          { newLogExercise.logType === 'Simple' ? <SimpleForm /> : ''}; 
          
          
          
          went ahead and stubbed up all form inputs below...
          */}
        
          <div className="form-groupL">
            <label><strong><h5>WEIGHT</h5></strong></label>
          </div>
          <div className="form-groupR">
              <input 
                //PROBLEM - can't enter number... problem with the way I set up the input or with the handleChange fnc??
                type="number"
                step="0.25"
                className="form-control" 
                name="exerciseData.weight" //"exerciseData["weight"]" ???
                value={formData.exerciseData.weight} //"exerciseData["weight"]" ???
                onChange={handleChange}
                id="new-log"
                required
                />
          </div>

          <div className="form-groupL">
            <label><strong><h5>REPS</h5></strong></label>
          </div>
          <div className="form-groupR">
              <input 
                //PROBLEM - can't enter number... problem with the way I set up the input or with the handleChange fnc??
                type="number"
                step="1"
                className="form-control" 
                name="exerciseData.reps" //"exerciseData["reps"]" ???
                value={formData.exerciseData.reps} //"exerciseData["reps"]" ???
                onChange={handleChange}
                id="new-log"
                required
                />
          </div>

          <div className="form-groupL">
            <label><strong><h5>SETS</h5></strong></label>
          </div>
          <div className="form-groupR">
              <input
                //PROBLEM - can't enter number... problem with the way I set up the input or with the handleChange fnc?? 
                type="number"
                step="1"
                className="form-control" 
                name="exerciseData.sets" //"exerciseData["sets"]" ???
                value={formData.exerciseData.sets} //"exerciseData["sets"]" ???
                onChange={handleChange}
                id="new-log"
                required
                />
          </div>

          <div className="form-groupL">
            <label><strong><h5>REST INTERVAL</h5></strong></label>
          </div>
          <div className="form-groupR">
              <input
                //PROBLEM - don't know how to do time duration... tried to download a script in public index.html header 
                type="text"
                className="html-duration-picker form-control" 
                data-duration="00:00:00"
                name="exerciseData.restInt" //"exerciseData["restInt"]" ???
                value={formData.exerciseData.restInt} //"exerciseData["restInt"]" ???
                onChange={handleChange}
                id="new-log"
                required
                />
          </div>

          <div className="form-groupL">
            <label><strong><h5>TIME</h5></strong></label>
          </div>
          <div className="form-groupR">
              <input
                //PROBLEM - don't know how to do time duration... tried to download a script in public index.html header 
                type="text"
                className="html-duration-picker form-control" 
                data-duration="00:00:00"
                name="exerciseData.time" //"exerciseData["time"]" ???
                value={formData.exerciseData.time} //"exerciseData["time"]" ???
                onChange={handleChange}
                id="new-log"
                required
                />
          </div>

          <div className="form-groupL">
            <label><strong><h5>NUMBER OF ROUNDS</h5></strong></label>
          </div>
          <div className="form-groupR">
              <input
                //PROBLEM - can't enter number... problem with the way I set up the input or with the handleChange fnc?? 
                type="number"
                step="1"
                className="form-control" 
                name="exerciseData.numRds" //"exerciseData["numRds"]" ???
                value={formData.exerciseData.numRds} //"exerciseData["numRds"]" ???
                onChange={handleChange}
                id="new-log"
                required
                />
          </div>

          <div className="form-groupL">
            <label><strong><h5>TIME CAP</h5></strong></label>
          </div>
          <div className="form-groupR">
              <input
                //PROBLEM - don't know how to do time duration... tried to download a script in public index.html header 
                type="text"
                className="html-duration-picker form-control" 
                data-duration="00:00:00"
                name="exerciseData.timeCap" //"exerciseData["timeCap"]" ???
                value={formData.exerciseData.timeCap} //"exerciseData["timeCap"]" ???
                onChange={handleChange}
                id="new-log"
                required
                />
          </div>

          <div className="form-groupL">
            <label><strong><h5>DISTANCE</h5></strong></label>
          </div>
          <div className="form-groupR">
              <input
                //PROBLEM - can't enter number... problem with the way I set up the input or with the handleChange fnc?? 
                type="number"
                step="0.1"
                className="form-control" 
                name="exerciseData.distance" //"exerciseData["distance"]" ???
                value={formData.exerciseData.distance} //"exerciseData["distance"]" ???
                onChange={handleChange}
                id="new-log"
                required
                />
          </div>

          <div className="form-groupL">
            <label><strong><h5>COMPLETED</h5></strong></label>
          </div>
          <div className="form-groupR">
            <select 
              className="form-control" 
              name="exerciseData.complete" //"exerciseData["complete"]" ???
              value={formData.exerciseData.complete} //"exerciseData["complete"]" ???
              onChange={handleChange}
              id="new-log"
              required>
              <option value="true">TRUE</option>
              <option value="false" >FALSE</option>
            </select>
          </div>
        
          <div className="form-groupL">
            <label><strong><h5>CALCULATED AVERAGE SPEED</h5></strong></label>
          </div>
          <div className="form-groupR"
          // will need to set calculate these as hooks or in useEffect functions above...
          >
            <label id="calc"><strong><h5 id="purp">AVG SPEED</h5></strong></label>
          </div>

          <div className="form-groupL">
            <label><strong><h5>CALCULATED TOTAL REPS</h5></strong></label>
          </div>
          <div className="form-groupR"
          // will need to set calculate these as hooks or in useEffect functions above...
          >
            <label id="calc"><strong><h5 id="purp">TOTAL REPS</h5></strong></label>
          </div>

          <div className="form-groupL">
            <label><strong><h5>CALCULATED VOLUME</h5></strong></label>
          </div>
          <div className="form-groupR"
          // will need to set calculate these as hooks or in useEffect functions above...
          >
            <label id="calc"><strong><h5 id="purp">VOLUME</h5></strong></label>
          </div>
        


          <div className="form-groupL">
              <label><strong> <h5>NOTES</h5></strong> </label>
              <p>Add some notes to refer to about how this exercise went. It might be helpful later.</p>
          </div>
          <div className="form-groupR">
              <textarea 
                  className="form-control"
                  name="notes"  
                  value={formData.notes}
                  onChange={handleChange}
                  required
                  id="new-log"
                  type="text" 
                  cols="30" 
                  rows="9">
              </textarea>
          </div>


          </>
        : 
          <>
          <div><h2>No Exercise Selected Yet</h2></div>
          <div><h2>No Exercise Selected Yet</h2></div>
          </>
        }


        <button
            id="new-log"
            className="form-btn"
            type="submit"
            disabled={invalidForm}
            >
            ADD LOG
        </button>

        </form>
      </div>
      </>
  );
  }