import car
from car import *
import plane
from plane import *

plane=Plane(10000,777,False,False)
#plane.callSteward(45)
trip = input("what's your destination? if you arrived at your destination enter done")

while trip != 'done':
    vehicle = input('tell us how do you want to travel! car or plane\n')
    if vehicle == 'car':
        print('first enter your car details: seats, gas capacity, how many passengers\n')
        c = Car(int(input()), int(input()))
        c.checkPassengers(int(input()))
        if input('do you want to add more passengers?') == 'yes':
            c.checkPassengers(int(input('how many?\n')))
        c.gas(int(input('whats your distance? ')),int(input('how much gas you need for a mile?')))
        print(f"is your window open? {c.openAndCloseWindow()}")
        trip = input("what's your destination? if you arrived at your destination enter done\n")
    elif vehicle == 'plane':
        print('first enter your plane details: seats, gas capacity, if take off? (True/False) is landing? (True/False)\n')
        #p = Plane(int(input()), int(input()), input(), input())
        p = plane
        p.checkPassengers(60)
        while(input("do you want to add more passengers?")) == 'yes':
            p.checkPassengers(int(input("how many passengers you want to add?")))
        print(f"is your window open? {p.openAndCloseWindow()}")
        if input('do you want to call the steward?') == 'yes':
            seatNumber = input('enter your seat number')
            p.callSteward(seatNumber)

        trip = input("what's your destination? if you arrived at your destination enter done\n")

    else:
        print(f"sorry, you can't travel with a {vehicle}")