#   Tip         #   Kısaltma        #               Örnek                   #
#----------------------------------------------------------------------------
#   Integar     #   int and input   #   3, 10                               #
#   Float       #   float           #   1.5, 7.0                            #
#   String      #   str             #   "sin", "a"                          #
#   Boolean     #   bool            #   true, false                         #
#   List        #   list            #   [1,2,true, 'a', 1]                  #
#   Set         #   set             #   {1,2,true}                          #
#   Disctionary #   dict            #   {"github":"@ssskuudere, "age":12}   #
#   Tuple       #   tup             #   (1, 2, true)                        #

def chat():
    a = int(input ("Your Age enter:"))
    if a >13:
        print("hi")
        b = input("Your Nickname enter:")
        c = input("Your Password enter:")
        print("your age", a)
        print("Your Nickname", b)
        print("Your Password", c)
    elif a ==13:
        print("hi")
        b = input("Your Nickname enter:")
        c = input("Your Password enter:")
        print("your age", a)
        print("Your Nickname", b)
        print("Your Password", c)
    else:
        print("Exited.")
        print("Byee.")
chat()