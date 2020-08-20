import React from 'react';

import { AddFilm } from "../../index";

import './Films.scss';


export const Films = ({ films }) => films.map(f => <AddFilm {...f} />)