import React, {useState, useRef, useEffect} from 'react';
import './TemplateLogTypeForm.css';

// props needed = selectedExercise
export default function CardioLogTypeForm(props) {

    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        dateTime: null, 
        exerciseObj: props.exerciseSelection, // the form will initially need the whole exercise object (to use the logType), when creating a new "log" I will only want to save the exercise._id
        weight: null,
        reps: null,
        sets: null, 
        restInt: null,
        volCalc: null,
        totReps: null,
        time: null,
        numRds: null,
        repsPerRd: null,
        timeCap: null,
        distance: null,
        avgSpeed: null,
        complete: 'true', 
        notes: null,
    });

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    }, [formData]);

    useEffect(() => {
        let d = formData.distance;
        let t = formData.time;
        if (d && t) formData.avgSpeed = d/t;
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
                <label><strong><h5>DISTANCE</h5></strong></label>
                <p>Use the same distance metric (d) for each log of this exercise (ex: miles, km, laps, ect.) </p>
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
                <label><strong><h5>TIME (minutes)</h5></strong></label>
                </div>
                <div className="form-groupR">
                    <input 
                    type="number"
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
                <label><strong><h5>CALCULATED AVG. SPEED</h5></strong></label>
                </div>
                <div className="form-groupR"
                // will need to set calculate these as hooks or in useEffect functions above...
                >
                <label id="calc"><strong><h5 id="purp">{formData.avgSpeed ? `${formData.avgSpeed.toFixed(2)} (d)/min -- OR -- ${(formData.avgSpeed*60).toFixed(2)} (d)/hr` : "Enter DISTANCE & TIME to calculate..."}</h5></strong></label>
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