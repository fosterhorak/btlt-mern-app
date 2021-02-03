import './LogDetailBottom.css';

export default function LogDetailBottom() {

    // i want the form to update an existing Log to pop up and replace the two detail panels if the "update" button is selected
    // must incorporate a new hook -- "updateLog" -- into the existing ternary on this page...

    return (
        <>
        <div className="detail-log-graph-container">

            <div className="log-graph">
                <br/><br/><br/><br/>
                <h1>coming soon... </h1>
            </div>

            <div className="detail-log-graph-btns">
                <button className="gl-btns">RECENT LOGS</button>
                <button className="gl-btns">GRAPH</button>
            </div>
        </div>

        </>
    );
}