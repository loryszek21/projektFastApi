'use client'
import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [timeLeft, setTimeLeft] = useState(60); 
  const [width, setWidth] = useState(100); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval); // Zatrzymujemy interwał, gdy czas minie
          return 0;
        }
        return prevTime - 1; // Odejmuje 1 sekundę
      });

      // Obliczamy nową szerokość paska na podstawie pozostałego czasu
      setWidth((timeLeft / 60) * 100);
    }, 1000); // Interwał co 1 sekundę

    // Czyszczenie interval po zakończeniu
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60); // Oblicza minuty
  const seconds = timeLeft % 60; // Oblicza sekundy

  return (
    <div className="progresBarTheme w-2/3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
      <div
        id="progresBar"
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${width}%` }}
      >
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds} {/* Wyświetlanie minut i sekund */}
      </div>
    </div>
  );
}
