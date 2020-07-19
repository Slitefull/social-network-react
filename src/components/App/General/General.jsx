import React from 'react';
import './General.scss';
import Films from "./Films/Films";

const General = props => {
    return (
        <main className="general">
            <div className="general__header title">General</div>
            <Films films={props.state.films}/>
        </main>
    );
}

export default General;