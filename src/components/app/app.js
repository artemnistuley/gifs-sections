import React from 'react';

import SectionOne from '../section-one';
import SectionTwo from '../section-two';

import './app.css';

export default function App() {
    return (
        <div className="app">
            <h1>Gifs Sections!</h1>
            <SectionOne />
            <SectionTwo />
        </div>
    );
}
