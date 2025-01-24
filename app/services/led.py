from gpiozero import LED
from gpiozero import Buzzer
from time import sleep
def correctQr():
    led = LED(20)
    buzzer = Buzzer(17)
    buzzer.close()

  
    buzzer = Buzzer(17)
    buzzer.on()
    for _ in range(5):
        led.on()
        sleep(1)
        led.off()
        sleep(1)
    buzzer.off()


def wrongQR():
    led = LED(21)
    for _ in range(5):
            led.on()
            sleep(1)
            led.off()
            sleep(1)

# def  buzzerOn():
#     #  buzzer.close()
#      buzzer = Buzzer(17)
#      buzzer.on()
#      sleep(10)
#      buzzer.off()

        