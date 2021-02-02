import React, {useState, useRef, useEffect} from 'react';
import './TemplateLogUpdateForm.css';

// props needed = selectedExercise
export default function BodyWtUpdateTypeForm(props) {

    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        // copy over existing data that will not change
        // note - userId captured in controller
        _id: props.activeLog._id, //log._id
        exerciseID: props.activeLog.exerciseID, //log.exerciseID
        exerciseLogType: props.activeLog.exerciseLogType, //log.exerciseLogType
        // key/value pairs that aren't in the exerciseData object
        dateTime: props.activeLog.dateTime, // doesn't work??
        exerciseObj: props.activeLog, // the form will initially need the whole exercise object (to use the logType), when creating a new "log" I will only want to save the exercise._id
        notes: props.activeLog.notes,
        // key/value pairs that are in the exerciseData object
        weight: props.activeLog.exerciseData.weight,
        reps: props.activeLog.exerciseData.reps,
        sets: props.activeLog.exerciseData.sets, 
        restInt: props.activeLog.exerciseData.restInt,
        volCalc: props.activeLog.exerciseData.volCalc,
        totReps: props.activeLog.exerciseData.totReps,
        time: props.activeLog.exerciseData.time,
        numRds: props.activeLog.exerciseData.numRds,
        repsPerRd: props.activeLog.exerciseData.repsPerRd,
        timeCap: props.activeLog.exerciseData.timeCap,
        distance: props.activeLog.exerciseData.distance,
        avgSpeed: props.activeLog.exerciseData.avgSpeed,
        complete: props.activeLog.exerciseData.complete, 
    });

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    }, [formData]);

    useEffect(() => {
        let r = formData.reps;
        let s = formData.sets;
        if (r && s) formData.totReps = r*s;
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        props.handleUpdateLog(formData);
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
                <h5 id="purp">[ LogType: {props.activeLog.exercisLogType} ]</h5>
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
                <label><strong><h5>REST INTERVAL (minutes)</h5></strong></label>
                </div>
                <div className="form-groupR">
                    <input 
                    type="number"
                    className="html-duration-picker form-control" 
                    data-duration="00:00:00"
                    name="restInt" 
                    value={formData.restInt} 
                    onChange={handleChange}
                    id="new-log"
                    />
                </div>


                <div className="form-groupL">
                <label><strong><h5>CALCULATED VOLUME</h5></strong></label>
                </div>
                <div className="form-groupR"
                // will need to set calculate these as hooks or in useEffect functions above...
                >
                <label id="calc"><strong><h5 id="purp">{formData.totReps ? formData.totReps : "Enter REPS and SETS to calculate..."}</h5></strong></label>
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
                UPDATE LOG
            </button>

            </form>
            
        </>
    )
}