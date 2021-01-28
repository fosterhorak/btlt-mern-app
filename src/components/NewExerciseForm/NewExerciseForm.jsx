import React, {useState, useRef, useEffect} from 'react';


export default function NewExerciseForm(props) {
    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        category: 'Weights', 
        logType: 'Std Lft',
        description: '',
        demoLink: '', 
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
            <h1>Add a New Exercise</h1> 
            <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
            
            <div className="form-group">
                <label>Exercise Name</label>
                <input
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Category</label>
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

            <div className="form-group">
                <label>Log Type</label>
                <select 
                    className="form-control" 
                    name="category"
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
                <p>*Make sure to add a note that explains what these are (pop up?)*</p>
            </div>
            <div className="form-group">
                <label>Description</label>
                <p>Describe the workout in detail, so you can make sure you perform it the same way every time!</p>
                <textarea 
                    className="form-control"
                    name="description"  
                    value={formData.description}
                    onChange={handleChange}
                    required
                    type="text" 
                    cols="30" 
                    rows="10">
                </textarea>
            </div>

            <div className="form-group">
                <label>Demo URL</label>
                <p>If you'd like to, include a link to a website/video demo of how to perform this exercise.</p>

                <input
                    className="form-control"
                    name="demoLink"
                    value={formData.demoLink}
                    onChange={handleChange}
                />
            </div>


            </form>
        </div>
    );
}