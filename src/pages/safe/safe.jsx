import React from 'react';
import { school_safe } from "../../assets";
import {
    Link
} from "react-router-dom";

export default function Safe() {
    return (
        <div className="home" style={{
            backgroundImage: `url(${school_safe})`,
            height: "100vh",
            backgroundSize: "cover"
        }}>
            <Link to="/shelf">Next Shelf</Link>
        </div >
    );
}