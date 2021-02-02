import React, {useState, useRef, useEffect} from 'react';
import './TemplateLogTypeForm.css';

// props needed = selectedExercise
export default function SimpleLogTypeForm(props) {

    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        dateTime: '', 
        exerciseObj: props.exerciseSelection, // the form will initially need the whole exercise object (to use the logType), when creating a new "log" I will only want to save the exercise._id
        weight: '',
        reps: '',
        sets: '', 
        restInt: '',
        volCalc: '',
        totReps: '',
        time: '',
        numRds: '',
        repsPerRd: '',
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
        console.log(formData);
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
    )
}