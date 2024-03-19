import React, { useState, useEffect } from 'react';
import './CursorBall.css'; // Import CSS file for styling

function CursorBall() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div className="cursor cursor-transparent" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
            <div className="cursor cursor-red" style={{ left: cursorPosition.x + 20, top: cursorPosition.y + 20 }}></div>
        </div>
    );
}

export default CursorBall;
