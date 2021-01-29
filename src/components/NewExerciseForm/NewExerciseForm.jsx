import React, {useState, useRef, useEffect} from 'react';
import './NewExerciseForm.css';
import Popup from 'reactjs-popup';

export default function NewExerciseForm(props) {
    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        category: 'Weights', 
        logType: 'Std Lft',
        description: '',
        demoLink: '', 
        creatorEmail: `${props.user.email}`,
        creator: `${props.user._id}`,
    })
    
    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddExercise(formData);
    }
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="new-form">
            <h1>Add A New Exercise</h1> 
            <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
            
            <div className="form-groupL">
                <label> <strong>Exercise Name</strong> </label>
            </div>

            <div className="form-groupR">
                <input
                    className="form-control"
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
                    <option value="Stetching/Mobility">Stetching/Mobility</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="form-groupL">
                <label><strong>Log Type</strong></label>
                <p>Different "Log Types" will track different metrics.</p> 
                <Popup 
                    trigger={<button className="popup-btn">click for details</button>} 
                    position="right center"
                    closeOnDocumentClick>
                    <div className="popup">
                        <h2>Metrics tracked for each Log Type are shown below...</h2> 
                        <ul>
                            <li><strong>Std Lft:</strong>   weight, reps, sets, rest interval (optional), *calculates volume</li>
                            <li><strong> Body Wt:</strong>   reps, sets, rest interval (optional), *calculates volume</li>
                            <li><strong> EMOM(std):</strong>   time, number of rounds, reps per round, *calculates volume</li>
                            <li><strong> EMOM(wtd):</strong>   weight, time, number of rounds, reps per round, *calculates volume</li>
                            <li><strong> AMRAP(std):</strong>   time cap, number of reps</li>
                            <li><strong> AMRAP(wtd):</strong>   weight, time cap, number of rep</li>
                            <li><strong> RepsForTime(std):</strong>   number of reps, time</li>
                            <li><strong> RepsForTime(wtd):</strong>   weight, number of reps, time</li>
                            <li><strong> Cardio:</strong>  distance,  time, avg speed</li>
                            <li><strong> Simple:</strong>   completed(y/n)</li>
                        </ul>
                        <small className="close-popup-msg">[click away to close pop-up]</small>
                    </div>
                </Popup>                    
            </div>

            <div className="form-groupR">
                <select 
                    className="form-control" 
                    name="logType"
                    value={formData.logType}
                    onChange={handleChange}
                    required>
                    <option value="Std Lft">Std Lft</option>
                    <option value="Body Wt">Body Wt</option>
                    <option value="EMOM(std)">EMOM(std)</option>
                    <option value="EMOM(wtd)">EMOM(wtd)</option>
                    <option value="AMRAP(std)">AMRAP(std)</option>
                    <option value="AMRAP(wtd)">AMRAP(wtd)</option>
                    <option value="RepsForTime(std)">RepsForTime(std)</option>
                    <option value="RepsForTime(wtd)">RepsForTime(wtd)</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Simple">Simple</option>
                </select>
            </div>

            <div className="form-groupL">
                <label><strong>Description</strong> </label>
                <p>We recommend you add a description of your new exercise for reference (if need it in the future). This will also ensure you complete the exercise the same way every time.</p>

            </div>
            <div className="form-groupR">
                <textarea 
                    className="form-control"
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
                <p>If you'd like to, include a link to a website/video demo of how to perform this exercise.</p>

            </div>

            <div className="form-groupR">   
                <input
                    className="form-control"
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
                ADD EXERCISE
            </button>

            </form>
        </div>
    );
}