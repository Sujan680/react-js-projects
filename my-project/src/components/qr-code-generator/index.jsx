import { useState } from 'react';
import QRCode from 'react-qr-code';


export default function QRCodeGenerator() {
    const [qrCode, SetQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQRCode = () => {
        SetQrCode(input)
    }
    return (
        <div>
            <h1 style={{ padding : "10px"}}>QR Code Generator</h1>
            <div   style={{
                  
                }}>
                <input
                style={{
                  
                }}
                onChange={(e) => setInput(e.target.value)} type="text"
                name="qr-code"
                value={input}
                placeholder="Enter your value here" />
                <button
                
                 disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQRCode}>Generate</button>
            </div>
            <div>
                <QRCode
                    id='qr-code-value'
                    value= {qrCode}
                    size={400}
                />
            </div>
        </div>
    )
}