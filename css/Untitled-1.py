c=0
for x in range(100):
    for y in range(100):
        if x != y:
            c+=1
            print(f'{x},{y}')
print(c)