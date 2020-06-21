import React from 'react';
import './General.scss';
import Films from "./Films/Films";

const General = () => {
    return (
        <main className="general">
            <div className="general__header title">General</div>
            <Films/>
        </main>
    );
}

export default General;
