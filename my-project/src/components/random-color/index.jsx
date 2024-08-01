import { useEffect, useState } from "react";
import './styles.css';

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("black");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[typeOfColor])

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: color,
                textAlign: 'center',
                padding: '20px',
            }}
            className="container"
        >
            <button className="btn"
                onClick={
                    typeOfColor === "hex"
                        ? handleCreateRandomHexColor
                        : handleCreateRandomRgbColor
                }
            >
                Generate Random Color
            </button>
            <button className="btn" onClick={() => setTypeOfColor("hex")}>Generate HEX color</button>
            <button className="btn" onClick={() => setTypeOfColor("rgb")}>Generate RGB color</button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "50px",
                    marginTop: "50px",
                    flexDirection:'column'
                }}
            >
                <h3> {typeOfColor === 'rgb' ? 'RGB color' : 'HEX color'} </h3>
                <h2> {color} </h2>
            </div>
        </div>
    );
};

export default RandomColor;
