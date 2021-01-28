
export default function ExerciseDetailPanel({activeExercise}) {

    return (
      <div className="detail-panel">

          <h1>ExerciseDetailPanel</h1> 
          <h3>{activeExercise.name}</h3>
          <h3>{activeExercise.category}</h3>
          <h3>{activeExercise.logType}</h3>
          <h3>{activeExercise.description}</h3>
          <h3>{activeExercise.demolink}</h3>
          <h3>{activeExercise.creatorID}</h3>
          

      </div>
    );
  }