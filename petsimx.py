import mouse
import time

x = 795
y = 549

x2 = 642
y2 = 738

while True:
    mouse.move(x,y, absolute=True, duration=0.1)
    mouse.click(button='left')
    time.sleep(0.2)
    mouse.move(x2,y2, absolute=True, duration=0.1)
    mouse.click(button='left')
    time.sleep(0.5)
