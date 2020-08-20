import React from 'react';

import { Films } from "./Films/Films";

import './General.scss';


export const General = ({ state }) => (
    <main className = "general">
        <div className = "general__header title">General</div>
        <Films films = { state.films } />
    </main>
)