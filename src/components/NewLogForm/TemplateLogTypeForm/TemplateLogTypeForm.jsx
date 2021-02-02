import React, {useState, useRef, useEffect} from 'react';
import './TemplateLogTypeForm.css';

// props needed = selectedExercise
export default function TemplateLotTypeForm(props) {

  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState({
      dateTime: '', 
      exerciseObj: {}, // the form will initially need the whole exercise object (to use the logType), when creating a new "log" I will only want to save the exercise._id
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
      notes: '',
  });
  
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
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
  }

  return (
    <>
            <form id="new-log" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-groupL">
                  <label> <strong>EXERCISE DATA</strong> </label>
                  <hr id="new-log"/>
              </div>
              <div className="form-groupR">
                <h5 id="purp">[ LogType: {props.exerciseSelection.logType} ]</h5>
              </div>


              <div className="form-groupL">
                  <label><strong><h5>DATE</h5></strong> </label>
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
                <label><strong><h5>WEIGHT</h5></strong></label>
              </div>
              <div className="form-groupR">
                  <input 
                    type="number"
                    step="1"
                    className="form-control" 
                    name="weight" 
                    value={parseInt(formData.weight)} 
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
                    type="number"
                    step="1"
                    className="form-control" 
                    name="reps" 
                    value={parseInt(formData.reps)} 
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
                    type="number"
                    step="1"
                    className="form-control" 
                    name="sets" 
                    value={parseInt(formData.sets)} 
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
                    type="text"
                    className="html-duration-picker form-control" 
                    data-duration="00:00:00"
                    name="restInt" 
                    value={formData.restInt} 
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
                    type="text"
                    className="html-duration-picker form-control" 
                    data-duration="00:00:00"
                    name="time" 
                    value={formData.time} 
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
                    type="number"
                    step="1"
                    className="form-control" 
                    name="numRds" 
                    value={parseInt(formData.numRds)} 
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
                    type="text"
                    className="html-duration-picker form-control" 
                    data-duration="00:00:00"
                    name="timeCap" 
                    value={formData.timeCap} 
                    onChange={handleChange}
                    id="new-log"
                    required
                    />
              </div>

              <div className="form-groupL">
                <label><strong><h5>DISTANCE</h5></strong></label>
                <p>Make sure you're using the same units you have on previous logs. </p>
              </div>
              <div className="form-groupR">
                  <input 
                    type="number"
                    step="1"
                    className="form-control" 
                    name="distance" 
                    value={parseInt(formData.distance)} 
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
                  name="complete" 
                  value={formData.complete} 
                  onChange={handleChange}
                  id="new-log"
                  required>
                  <option value="true">TRUE</option>
                  <option value="false" >FALSE</option>
                </select>
              </div>
            
              <div className="form-groupL">
                <label><strong><h5>CALCULATED AVG. SPEED</h5></strong></label>
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
                  <label><strong><h5>NOTES</h5></strong> </label>
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

              <button
                id="new-log"
                className="form-btn"
                type="submit"
                disabled={invalidForm}
                >
                ADD LOG
            </button>

          </form>
          
        </>
  )}