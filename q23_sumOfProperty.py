dic_list=[{"Sikha": [1,2,3], "Roshni": [3,4,5], "Kajal": [5,6,7]}] 
print(*dic_list, sep =', ')
dic= {"sikha" : [1,2,3], "Roshni": [3,4,5], "Kajal" : [5,6,7]}
list=[]
for i in dic:
    list.append(dic[i])
print(list)
for j in list:
    sum=0
    for k in j:
        sum=sum+k
    print(sum)
    

# OUTPUT:-
# {"sikha" : [1,2,3], "Roshni": [3,4,5], "Kajal" : [5,6,7]}
# [[1,2,3], [3,4,5], [5,6,7]]
# 6
# 12
# 18
