class Car:
    """Car class describes a car"""

    def __init__(self,seats,capacity):
        self.windows = True  # תכונה שחייבים לשלוח
        self.passengers =0
        try:
            self.capacity=capacity#תכונה שחייבים לשלוח
        except:
            print("you can only enter numbers")
        try:
            self.seats = seats  # תכונה שחייבים לשלוח
        except:
            print("you can only enter numbers")


    def gas(self,distance,quantityKM):
        if distance*quantityKM<=int(self.capacity):
            return distance*quantityKM
        print("you'll have to stop in another gas station")
        return self.capacity

    def checkPassengers(self,curentPassengers):
        try:
            #self.passengers += curentPassengers
            if (self.passengers + curentPassengers) <= self.seats:
                self.passengers += curentPassengers
                return True
            else:
                print(f"you don't have enough room in the vehicle")
        except:
            print("you can only enter numbers")
        return False

    def openAndCloseWindow(self):
        if self.windows is False:
            self.windows = True
        else:
            self.windows = False
        return self.windows