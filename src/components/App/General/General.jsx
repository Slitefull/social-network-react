import React from 'react';
import './General.scss';
import Film from "./Film/Film";

const General = () => {
    return (
        <main className="general">
            <div className="general__header title">
                General
            </div>
            <Film/>
            <Film/>
            <Film/>
        </main>
    );
}

export default General;
