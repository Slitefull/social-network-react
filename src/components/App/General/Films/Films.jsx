import React from 'react';

import { AddFilm } from "./AddFilm/AddFilm";

import './Films.scss';


export const Films = ({ films }) => films.map(f => <AddFilm {...f} />)