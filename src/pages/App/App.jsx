import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Aside from '../../components/Aside/Aside';
import LogListPanel from '../../components/logComponents/LogListPanel/LogListPanel';
import LogDetailPanel from '../../components/logComponents/LogDetailPanel/LogDetailPanel';
import ExerciseListPanel from '../../components/exerciseComponents/ExerciseListPanel/ExerciseListPanel';
import ExerciseDetailPanel from '../../components/exerciseComponents/ExerciseDetailPanel/ExerciseDetailPanel';

import NewLogForm from '../../components/NewLogForm/NewLogForm';
import NewExerciseForm from '../../components/NewExerciseForm/NewExerciseForm';

import * as exerciseAPI from '../../utilities/exercises-api';
import * as logAPI from '../../utilities/logs-api';
import UpdateExerciseForm from '../../components/exerciseComponents/ExerciseDetailPanel/UpdateExerciseForm/UpdateExerciseForm';



export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [exercises, setExercises] = useState([]);
  const [activeExercise, setActiveExercise] = useState({});

  const [updateExerciseForm, setUpdateExerciseForm] = useState(false);
  
  // const [logs, setLogs] = useState([]);
  // const [activeLog, setActiveLog] = useState({});




  const history = useHistory();

  useEffect(() => {
    history.push("/")
  }, [exercises, history])

  // ----------- FUNCTIONS FOR EXERCISES --------------------
  useEffect(() => {
    async function getExercises(){
      const exercises = await exerciseAPI.getAll();
      setExercises(exercises);
    }
    if (user) getExercises();
    else setExercises([]);
  }, [user]);

  async function handleAddExercise(newExerciseData) {
    const newExercise = await exerciseAPI.create(newExerciseData);
    setExercises([...exercises, newExercise]);
  }

  async function handleUpdateExercise(updatedExerciseData) {
    console.log(`activeExercise.name is... : ${activeExercise}`);
    console.log(`setUpdateExerciseForm is set to... : ${updateExerciseForm}`);
    console.log(`updateExerciseData.name is : ${updatedExerciseData}`);

    const updatedExercise = await exerciseAPI.update(updatedExerciseData);
    const newExerciseArray = exercises.map(exercise =>
      exercise._id === updatedExercise._id ? updatedExercise : exercise
    );
    setExercises(newExerciseArray);
    setUpdateExerciseForm(false);
  }

  // async function handleDeleteExercise(exerciseID) {
  //   await exerciseAPI.deleteOne(exerciseID);
  //   setExercises(exercises.filter(exercise => exercise._id !== exerciseID));
  // }

  // ----------- FUNCTIONS FOR LOGS --------------------
  // useEffect(() => {
  //   async function getLogs(){
  //     const logs = await logAPI.getAll();
  //     setLogs(logs);
  //   }
  //   getLogs();
  // }, [])

  // async function handleAddLog(newLogData) {
  //   const newLog = await logAPI.create(newLogData);
  //   setLogs([...logs, newLog]);
  // }

  // async function handleUpdateLog(updatedLogData) {
  //   const updatedLog = await logAPI.update(updatedLogData);
  //   const newLogArray = logs.map(log =>
  //     log._id === updatedLog._id ? updatedLog : log
  //   );
  //   setLogs(newLogArray);
  // }

  // async function handleDeleteLog(logID) {
  //   await logAPI.deleteOne(logID);
  //   setLogs(logs.filter(log => log._id !== logID));
  // }


  return (
    <div className="App">
      { user ?
          <>
            <main>
            <Aside user={user} setUser={setUser} />
            <Switch>
              <Route exact path="/logs">
                <div className="list-and-detail">
                <LogListPanel />
                <LogDetailPanel />
                </div>
              </Route>
              <Route path="/exercises">
                <div className="list-and-detail">
                <ExerciseListPanel 
                  exercises={exercises} setExercises={setExercises} 
                  activeExercise={activeExercise} setActiveExercise={setActiveExercise}/>
                <ExerciseDetailPanel 
                  exercises={exercises} activeExercise={activeExercise}  
                  handleUpdateExercise={handleUpdateExercise} 
                  updateExerciseForm={updateExerciseForm} setUpdateExerciseForm={setUpdateExerciseForm} />
                </div>
              </Route>
              <Route exact path="/new-log">
                <NewLogForm />
              </Route>
              <Route exact path="/new-exercise">
                <NewExerciseForm exercises={exercises} user={user} setExercises={setExercises} handleAddExercise={handleAddExercise}/>
              </Route>
              <Redirect to="/logs"/>
            </Switch>
            </main>
          </>
        :
          <>
          <AuthPage setUser={setUser}/>
          </>
      }
    </div>
  );
}
