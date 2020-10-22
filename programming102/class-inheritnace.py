class Mob:
    def __init__(self, name, health = 10, attack_power = 2):
        self.name = name
        self.health = health
        self.attack_power = attack_power 

    def get_hit(self, power):
        self.health = self.health - power            

    def attack(self, enemy):           
        enemy.get_hit(self.attack_power)

class Hero(Mob):
    
    def __init__(self):
        self.name= "Sho nuf"
        self.health = 22
        self.attack_power = 5
        self.defence = 1
    
    def get_hit(self, power):
        print ("Hey y'all i'm getting hit.")

        super().get_hit(power- self.defence)
        
        if self.defence> power/2:
            print("HA ha Defence is high")


    def yell(self):
        print("I %s, say to thou villian. Prepare to die!" % self.name)
    

hero = Hero ()
bad_guy = Mob("BAd")
hero.yell ()
hero.attack_power(bad_guy)
print (bad_guy.health)