import car
from car import *

class Plane(Car):
    dictPassenger={}
    """Plane class describes a plane, extends car"""
    def __init__(self,seats,capacity,takeOff,landing):
        super().__init__(seats, capacity)
        self.takeOff=takeOff#תכונה שחייבים לשלוח
        self.landing=landing#תכונה שחייבים לשלוח
        #menu is a dictionary of the menu that we propose
        self.menu={"jack daniels":15,
              "famous grouse":15,
              "jack daniels single barrel":25,
              "gentelman jack":18,
              "macallan 30":1000,
              "highland park 25":450,
              "Old Fashioned cocktail":100,
              "negroni cocktail":65,
              "espresso martini cocktail":40,
              "cocktail":15,
              "chocolate ball":45,
              "french silk pie":40,
              "ice cream":10,
              "lemon meringue pie":15,
              "fresh doughnut":5}
        #dictionary that contains for every passenger what can he buy
        self.buildDict()
        #a list of all the products this passenger can order
        self.productsInRange = []

    def openAndCloseWindow(self):
        """open and close the window"""
        if self.takeOff or self.landing:
            self.windows = True
        else:
            super().openAndCloseWindow()
        return self.windows

    def callSteward(self, mySeat):
       """calling the steward and ordering something"""
       #show the passenger our menu
       f = open('Menu', 'r')
       print(f.read())
       #the passenger enters how much money he wants to spend
       maxPrice = int(input('how much money you want to spend?'))
       # self.productsInRange = {x:y for x,y in self.menu.items() if maxPrice >= y}
       # print(self.productsInRange)
       self.dictPassenger[mySeat] = self.productsInRange
       total = 0
       orderItem = input('what do you want to order? if you want to end the order write end')
       while orderItem != 'end':
           self.productsInRange = {x:y for x,y in self.menu.items() if maxPrice >= y}
           print(self.productsInRange)
           for i in self.productsInRange:
                if orderItem == i:
                    if maxPrice > self.productsInRange[i]:
                        if maxPrice - self.productsInRange[i] > 0:
                            maxPrice =- self.productsInRange[i]
                            total += self.productsInRange[i]
                            print("item added")
                            break
                    else:
                        print("you dont have enough money")
                        break
           orderItem = input()
       print(f'you have to pay:{total} $. have a safe trip')

    def generator(self):
        for i in range(self.seats):
            yield i

    def buildDict(self):
        c = Car(self.capacity, self.seats)
        a=self.generator()
        for i in range(c.passengers):
            j=next(a)
            self.dictPassenger[j] = self.productsInRange