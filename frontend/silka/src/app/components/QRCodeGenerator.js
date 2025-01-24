'use client'
import { useEffect } from "react";
import QRCode from "qrcode";  
import ProgressBar from "./ProgressBar";
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function QRCodeGenerator() {
    // const [isLoading, setIsLoading] = useState(false);  // Stan do kontrolowania ładowania
    // const [progress, setProgress] = useState(0); 
    const [isProgressBarActive, setIsProgressBarActive] = useState(false);

    const generateQr = async (uuid) => {
        const qrDiv = document.getElementById("qrcode");
        qrDiv.innerHTML = ""; 
 
        const canvas = document.createElement("canvas");
    
        qrDiv.appendChild(canvas);  // Dodajemy canvas do kontenera

        // Generujemy QR Code w canvas
        await QRCode.toCanvas(canvas, uuid, {
            color: {
                dark: "#000000",  // Kolor ciemny
                light: "#ffffff", // Kolor tła
            },
            width: 300,         // Szerokość QR code
            height: 300,        // Wysokość QR code
            correctLevel: 3,    // Poziom korekcji błędów (3 to H)
        });
        console.log("Wygenerowano kod QR");
    };

    const getData = async () => {
        try { 
            const response = await fetch("http://192.168.100.54:8000/generate-qr");
            if (!response.ok) throw new Error(`Response status: ${response.status}`);
            const data = await response.json();
            console.log("UUID: ", data.uuid);
            generateQr(data.uuid);
            verify();
            setIsProgressBarActive(true);

        } catch (error) {
            console.error(error.message);
        }
    };

    const verify = async () => {
        try {
            const response = await fetch("http://192.168.100.54:8000/verify-qr");
            if (!response.ok) throw new Error(`Response status: ${response.status}`);
            const data = await response.json();
            console.log(data.info);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="centerdiv w-3/4 flex flex-col items-center pt-11">
            {/* <button onClick={getData} className="buttonGetData mb-4">TEST</button> */}
            <Button variant="outline" onClick={getData}>Wygeneruj swój kod QR do wejścia</Button>

            <div className="mt-4 w-full flex flex-col items-center">
                {/* Kontener dla QR Code */}
                <div id="qrcode" className=" max-w-xl mx-auto mb-4">
                    {/* Tutaj generowany będzie QR code */}
                </div>
                {/* Pasek postępu */}
                <div className="mt-4 w-full flex flex-col items-center">
                    <ProgressBar start={isProgressBarActive}/>
                </div>
            </div>
        </div>
    );
}
