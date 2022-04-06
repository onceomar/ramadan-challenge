# import tkinter
# from tkinter import *
import random

# import tkinter as tk


distance = input("distance in km: ")
time = input("time in hours: ")
speed = input("speed in km: ")

if distance == "?":
    distance = float(speed) * float(time)

elif time == "?":
    time = float(distance) / float(speed)

elif speed == "?":
    speed = float(distance) / float(time)

else:
    print("srry")

print("distance:", distance, "KM")
print("time:", time, "MINUTES")
print("speed:", speed, "KM/H")

# window = Tk()

# window.title('Okay')

# window.configure(bg='cyan')

# input_txt = tk.Text( frame = 3 ,height = 5,width = 20)
# window.mainloop()

while True:
    pass
