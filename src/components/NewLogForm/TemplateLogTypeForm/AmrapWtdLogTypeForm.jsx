import React, {useState, useRef, useEffect} from 'react';
import './TemplateLogTypeForm.css';

// props needed = selectedExercise
export default function AmrapWtdLogTypeForm(props) {

    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        dateTime: new Date(Date.now()).toISOString().slice(0,16),
        exerciseObj: props.exerciseSelection, // copy over exercise object
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

    useEffect(() => {
        let w = formData.weight;
        let r = formData.reps;
        if (w && r) formData.volCalc = w*r;
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
                <label><strong><h5>TIME CAP (minutes)</h5></strong></label>
                </div>
                <div className="form-groupR">
                    <input 
                    type="number"
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
                <label><strong><h5>CALCULATED VOLUME</h5></strong></label>
                </div>
                <div className="form-groupR"
                >
                <label id="calc"><strong><h5 id="purp">{formData.volCalc ? formData.volCalc : "Enter WEIGHT & REPS to calculate..."}</h5></strong></label>
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