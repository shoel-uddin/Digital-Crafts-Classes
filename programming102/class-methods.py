class Mob:  #mobile unit (Mob)
    def __init__(self, name, health = 10, power = 2):
          self.name = name
          self.health = health
          self.power = power

    def get_hit(self, power):
        self.health = self.health - power
        print (f"I {self.name} was hit {power} points. Health : {self.health}")

    def attack(self, enemy):
        enemy.get_hit(self.power)

bad_guy = Mob ("EvilGuy", 10, 3)

hero = Mob ("Sir Rock", 30, 10)

print (hero.health)


bad_guy.attack(hero)

hero.attack(bad_guy)