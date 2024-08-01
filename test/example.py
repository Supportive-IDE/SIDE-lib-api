def oneToN(n):
    for n in range(1,n+1):
        print('n', end='')

def isWeekend(day):
    return day == "say" or "sun"
        
print(oneToN(5))
print("It's the weekend:", isWeekend("mon"))