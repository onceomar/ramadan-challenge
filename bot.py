from pyautogui import *
import pyautogui
import time
import keyboard
import random
import win32api,win32con

#Position1 x= 701  y= 691
#Position2 x= 610  y= 686
#Position3 x= 526  y= 683
#Position4 x= 446  y= 680

def click(x,y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
    time.sleep(0.1)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,0,0)

while keyboard.is_pressed("q") == False:
    if pyautogui.pixel(539,896) [0] == 0:
        click(539,896)

    if pyautogui.pixel(734,897) [0] == 0:
        click(734,897)

    if pyautogui.pixel(876,893) [0] == 0:
        click(876,893)

    if pyautogui.pixel(1039,888) [0] == 0:
        click(1039,888)
