import React, {useState, useRef, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './EditExerciseForm.css';
import Popup from 'reactjs-popup';
import { set } from 'mongoose';



export default function EditExerciseForm({ activeExercise, handleUpdateExercise, setOpen }) {
    const location = useLocation();

    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        name: activeExercise.name,
        category: activeExercise.category, 
        logType: activeExercise.logType,
        description: activeExercise.description,
        demoLink: activeExercise.demoLink, 
        creatorEmail: activeExercise.creatorEmail,
        creator: activeExercise.creator,
    });
    
    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpdateExercise(formData);
    }
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleCancel = (e) => {
        e.preventDefault()
        Popup.open=false;
    }

    // ice box: allow update of all form components if no logs have been created yet... otherwise only allow select properties to be updated
    // ice box: allow for users to create a new exercise by copying an existing one... opens new exercise form with copied content already 
    // reminder -- if i update a property of an exercise that is pulled into a log... I'll want to make sure it get's updated on the log instance as well 
            // or perhaps, just avoid doing this.. only reference the exercise._id in the log model
    return (
        <div className="new-form">
            <h1 className="update-form">Update Exercise</h1> 
            <div className="scrollable">
            <form className="update-form" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
    

                    <div className="form-groupL">
                        <label> <strong>Exercise Name</strong> </label>
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
                    </div>


                    <div className="form-groupL">
                        <label><strong>Category</strong> </label>
                    </div>
                    <div className="form-groupR">
                        <select 
                            className="form-control" 
                            id="ee"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required>
                            <option value="Weights">Weights</option>
                            <option value="Kettlebells">Kettlebells</option>
                            <option value="Body Weight">Body Weight</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Cardio">Cardio</option>
                            <option value="Interval">Interval</option>
                            <option value="Stretching/Mobility">Stretching/Mobility</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-groupL">
                        <label><strong>Log Type</strong></label>
                        <p className="update-exercise">Note: "Log Type" cannot be changed as it will impact existing logged exercises.</p> 
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
                    </div>


                    <div className="form-groupL">
                        <label><strong>Description</strong> </label>
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
                    </div>


                    <div className="form-groupL">
                        <label><strong>Demo URL</strong> </label>
                        { activeExercise.demoLink ? 
                            <p className="update-exercise">Feel free to add a link to a website/video for this exercise.</p>
                        :
                            <p className="update-exercise">Feel free to update your link to your chosen website/video for this exercise.</p>
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
                    </div>
                

                    <button
                        className="form-btn"
                        type="submit"
                        disabled={invalidForm}
                        >
                        UPDATE EXERCISE
                    </button>

            </form>
            </div>
            <Link onClick={handleCancel}> <h5>CANCEL</h5></Link>
        </div>
    );
}