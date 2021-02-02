import React, {useState, useRef, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './UpdateLogForm.css';
import Popup from 'reactjs-popup';



export default function UpdateLogForm({ activeLog, handleUpdateLog, setUpdateLogForm }) {
    // const location = useLocation();

    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        _id: activeLog._id,
        name: activeLog.name,
        category: activeLog.category, 
        logType: activeLog.logType,
        description: activeLog.description,
        demoLink: activeLog.demoLink, 
        creatorEmail: activeLog.creatorEmail,
        creator: activeLog.creator,
    });
    
    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    }, [formData]);

    useEffect(() => {
        setFormData({
            _id: activeLog._id,
            name: activeLog.name,
            category: activeLog.category, 
            logType: activeLog.logType,
            description: activeLog.description,
            demoLink: activeLog.demoLink, 
            creatorEmail: activeLog.creatorEmail,
            creator: activeLog.creator,
        });

    }, [activeLog]);

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpdateLog(formData);
    }
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // hook updateLogForm to false...
    const handleCancel = (e) => {
        e.preventDefault()
        setUpdateLogForm(false);
    }

    // ice box: allow update of all form components if no logs have been created yet... otherwise only allow select properties to be updated
    // ice box: allow for users to create a new exercise by copying an existing one... opens new exercise form with copied content already 
    // reminder -- if i update a property of an exercise that is pulled into a log... I'll want to make sure it get's updated on the log instance as well 
            // or perhaps, just avoid doing this.. only reference the exercise._id in the log model
    return (

        <div className="new-form">
            <h1 className="update-form">UPDATE LOG</h1> 
            <div className="scrollable">
            <form className="update-form" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
    
                    <h1>Update Log to be completed later... </h1>
                    {/* <div className="form-groupL">
                        <label> <strong>LOG NAME</strong> </label>
                    </div>
                    <div className="form-groupR">
                        <input
                            className="form-control"
                            id="ee"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div> */}


                    {/* <div className="form-groupL">
                        <label><strong>CATEGORY</strong> </label>
                    </div>
                    <div className="form-groupR">
                        <select 
                            className="form-control" 
                            id="ee"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required>
                            <option value="Weights">WEIGHTS</option>
                            <option value="Kettlebells">KETTLEBELLS</option>
                            <option value="Body Weight">BODY WEIGHT</option>
                            <option value="Mixed">MIXED</option>
                            <option value="Cardio">CARDIO</option>
                            <option value="Interval">INTERVAL</option>
                            <option value="Stretching/Mobility">STRETCHING/MOBILITY</option>
                            <option value="Other">OTHER</option>
                        </select>
                    </div> */}

                    {/* <div className="form-groupL">
                        <label><strong>LOG TYPE</strong></label>
                        <p className="update-exercise">NOTE: "LOG TYPE" cannot be changed as it will impact existing logged exercises.</p> 
                    </div>
                    <div className="form-groupR">
                        <label>{activeExercise.logType}</label>
                        { activeExercise.logType === 'Std Lft' ? <p className="update-exercise">Tracks: weight, reps, sets, rest interval (optional), *calculates volume</p> : ''}
                        { activeExercise.logType === 'Body Wt' ? <p className="update-exercise">Tracks: reps, sets, rest interval (optional), *calculates volume</p> : ''}
                        { activeExercise.logType === 'EMOM(std)' ? <p className="update-exercise">Tracks: time, number of rounds, reps per round, *calculates volume</p> : ''}
                        { activeExercise.logType === 'EMOM(wtd)' ? <p className="update-exercise">Tracks: weight, time, number of rounds, reps per round, *calculates volume</p> : ''}
                        { activeExercise.logType === 'AMRAP(std)' ? <p className="update-exercise">Tracks: time cap, number of reps</p> : ''}
                        { activeExercise.logType === 'AMRAP(wtd)' ? <p className="update-exercise">Tracks: weight, time cap, number of rep</p> : ''}
                        { activeExercise.logType === 'RepsForTime(std)' ? <p className="update-exercise">Tracks: number of reps, time</p> : ''}
                        { activeExercise.logType === 'RepsForTime(wtd)' ? <p className="update-exercise">Tracks: weight, number of reps, time</p> : ''}
                        { activeExercise.logType === 'Cardio' ? <p className="update-exercise">Tracks: distance,  time, avg speed</p> : ''}
                        { activeExercise.logType === 'Simple' ? <p className="update-exercise">Tracks: completed(y/n)</p> : ''}
                    </div> */}


                    {/* <div className="form-groupL">
                        <label><strong>DESCRIPTION</strong> </label>
                        <p className="update-exercise">Feel free to update the description to add details, but we don't recommend changing the workout (especially if you already have logged some exercises). You want to be sure you're performing the same workout so your data is helpful and accurate.</p>
                    </div>
                    <div className="form-groupR">
                        <textarea 
                            className="form-control"
                            id="ee"
                            name="description"  
                            value={formData.description}
                            onChange={handleChange}
                            required
                            type="text" 
                            cols="30" 
                            rows="9">
                        </textarea>
                    </div> */}


                    {/* <div className="form-groupL">
                        <label><strong>DEMO URL</strong> </label>
                        { activeExercise.demoLink ? 
                            <p className="update-exercise">Feel free to update your link to your chosen website or video for this exercise.</p>
                        :
                            <p className="update-exercise">Feel free to add a link to a website or video for this exercise.</p>
                        }
                    </div>
                    <div className="form-groupR">   
                        <input
                            className="form-control"
                            id="ee"
                            name="demoLink"
                            value={formData.demoLink}
                            onChange={handleChange}
                        />
                    </div> */}
                

                    <button
                        className="form-btn update-exercise-btn"
                        type="submit"
                        disabled={invalidForm}
                        >
                        UPDATE LOG
                    </button>

            </form>
            <button className="cncl-form" onClick={handleCancel}> <h5>CANCEL</h5></button>

            </div>
        </div>
    );
}