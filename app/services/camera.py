from picamera2 import Picamera2
from pyzbar.pyzbar import decode
import cv2
import numpy as np
import time
from icecream import ic 

# from picamera2 import Picamera2Error

def qr_code_reader():
# Inicjalizacja kamery
    # picam2.stop()
    picam2 = Picamera2()
    config = picam2.create_preview_configuration(main={"size": (640, 480)})
    picam2.configure(config)
    picam2.start()

    start_time = time.time()
    duration = 30

    try:
        while True:
            # Pobierz klatkę z kamery
            if time.time() - start_time > duration:
                print("Czas działania minął. Zatrzymuję program.")
                break
            frame = picam2.capture_array()

            # Konwersja do obrazu w skali szarości
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # Odczyt kodów QR
            codes = decode(gray)
            for code in codes:
                qr_data = code.data.decode('utf-8')
                print(f"Odczytano kod QR: {qr_data}")
                return qr_data
  
    # except Picamera2Error as e:
        # print(f"Camera error: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
    finally:
        # Ensure the camera stops and resources are cleaned up
        ic("zwolienie kamery")
        picam2.stop()
        cv2.destroyAllWindows()
