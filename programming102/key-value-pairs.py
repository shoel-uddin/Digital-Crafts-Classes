movie = {
    "name":"Star Wars",
    "episode": 4,
    "year": "1977",
    "villains": ["Vader", "Tarkin"],
    "heros":["Luke", "Leia", "Han"]

}

print(movie)

print(movie["year"])
print(movie["heros"])

bad_guys= movie ["villains"]
print (bad_guys)
print (bad_guys [1])
bad_guys.append("Jabba")
print (bad_guys)

if "year" in movie:
    print ("yes this has a year")

movie["ships"] = ["Falcon", "Star Destroyer", "Death Star"]
print(movie)

movie["heros"].append("Chewbacca")
print (movie["heros"])


for key in movie:
    print (key)
    print (key, movie[key])