import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Aside from '../../components/Aside/Aside';
import ExerciseLogListPanel from '../../components/ExerciseLogListPanel/ExerciseLogListPanel';
import ExerciseLogDetailPanel from '../../components/ExerciseLogDetailPanel/ExerciseLogDetailPanel';
import ExerciseListPanel from '../../components/ExerciseListPanel/ExerciseListPanel';
import ExerciseDetailPanel from '../../components/ExerciseDetailPanel/ExerciseDetailPanel';
import NewLogForm from '../../components/NewLogForm/NewLogForm';
import NewExerciseForm from '../../components/NewExerciseForm/NewExerciseForm';
import VisitorHeader from '../../components/VisitorHeader/VisitorHeader';

import * as exerciseAPI from '../../utilities/exercises-api';
import * as logAPI from '../../utilities/logs-api';



export default function App() {
  const [user, setUser] = useState(getUser());
  const [exercises, setExercises] = useState([]);
  const [activeExercise, setActiveExercise] = useState({});
  const [logs, setLogs] = useState([]);


  const history = useHistory();

  useEffect(() => {
    history.push("/")
  }, [exercises, logs, history])

  // ----------- FUNCTIONS FOR EXERCISES --------------------
  useEffect(() => {
    async function getExercises(){
      const exercises = await exerciseAPI.getAll();
      setExercises(exercises);
    }
    getExercises();
  }, [])

  async function handleAddExercise(newExerciseData) {
    const newExercise = await exerciseAPI.create(newExerciseData);
    setExercises([...exercises, newExercise]);
  }

  // async function handleUpdateExercise(updatedExerciseData) {
  //   const updatedExercise = await exerciseAPI.update(updatedExerciseData);
  //   const newExerciseArray = exercises.map(exercise =>
  //     exercise._id === updatedExercise._id ? updatedExercise : exercise
  //   );
  //   setExercises(newExerciseArray);
  // }

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
              <Route exact path="/">
                <div className="list-and-detail">
                <ExerciseLogListPanel />
                <ExerciseLogDetailPanel />
                </div>
              </Route>
              <Route path="/exercises">
                <div className="list-and-detail">
                <ExerciseListPanel exercises={exercises} setExercises={setExercises} activeExercise={activeExercise} setActiveExercise={setActiveExercise}/>
                <ExerciseDetailPanel activeExercise={activeExercise}  />
                </div>
              </Route>
              <Route exact path="/new-log">
                <NewLogForm />
              </Route>
              <Route exact path="/new-exercise">
                <NewExerciseForm exercises={exercises} user={user} setExercises={setExercises} handleAddExercise={handleAddExercise}/>
              </Route>
              <Redirect to="/"/>
            </Switch>
            </main>
          </>
        :
          <>
          <VisitorHeader />
          <AuthPage setUser={setUser}/>
          </>
      }
    </div>
  );
}
