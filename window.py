import random
from tkinter import *

def next_turn():
    pass

def check_winner():
    pass

def empty_spaces():
    pass

def new_game():
    pass

window = Tk()
window.title =("sbpip")
players = ['x','o']

player = random.choice(players)
buttons = [[0,0,0],
            [0,0,0],
            [0,0,0]]

label = Label(text = player + "turn", font = ('consolas',40))
label.pack(side='top')

reset_button = Button(text = 'restart', font = ('consolas', 40))





window.mainloop()