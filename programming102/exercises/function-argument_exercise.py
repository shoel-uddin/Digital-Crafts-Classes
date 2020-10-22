def num_multi (a, b):
    try:
        print (a * b)
    except TypeError:
        print ("Needs to be a number")

num_multi( 2, 4)
num_multi (3, 5)
num_multi ("a", "b")




# def movie(title, genre, year):
#     print (f"1. Title : {title}")
#     print (f"2. Genre : {genre}")
#     print (f"3. Year : {year}")

# movie ("Sho", "Yea", 2020)

#3
def movie (movie_item):
    title = movie_item[0]
    genre = movie_item[1]
    year = movie_item[2]

    print (f"1. Title : {title}")
    print (f"2. Genre : {genre}")
    print (f"3. Year : {year}")
