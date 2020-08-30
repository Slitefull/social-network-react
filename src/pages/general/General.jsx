import React from 'react';

import { Films } from '../index';

import './General.scss';


export const General = ({ films }) => {
    return (
        <main className = "general">
            <div className = "general__header title">General</div>
            <Films films = { films }/>
        </main>
    )
}