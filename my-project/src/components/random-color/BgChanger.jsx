import { useState } from 'react';


const BgChanger = () => {
    const [bgColor, setBgColor] = useState('#0fffff'); // Default background color

    const changeBackground = () => {
        const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += hexValue[Math.floor(Math.random() * hexValue.length)];
        }
        setBgColor(randomColor);

        // const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "D", "E", "F"];
        // const randomColor = `#${Math.floor(Math.random()* (hexValue.length)).toString(16)}`;
        // setBgColor(randomColor);
    };

    return (
        <div 
         className="bg-changer" style=
         {{
             backgroundColor: bgColor,
             width: '100vw',
             height: '100vh'
          }}>
            <button onClick={changeBackground}>Change Background</button>
        </div>
    );
};

export default BgChanger;
