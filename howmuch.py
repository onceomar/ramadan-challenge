price = input("price:")
weight = input("weight(in kilo):") #for each 500 grams add 10 dollars
custom = input("custom:") #10% of price
taxes = input("taxes:") #35% of price

custom2 = price/100
taxes2 = price/100
custom3 = custom*10
taxes3 = custom*35

total = price + custom3 + taxes3

if weight > 0.5:
    total + 20

else:
    total + 10

    print (total)