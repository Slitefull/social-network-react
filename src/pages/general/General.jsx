import React from 'react';

import { Films } from '../index';

import './General.scss';


export const General = ({ store }) => {
    const state = store.getState();

    return (
        <main className = "general">
            <div className = "general__header title">General</div>
            <Films films = { state.generalPage.films }/>
        </main>
    )
}