# DICTIONARIES

pokemon = {
    'Greninja': 'water/dark',
    'Arceus': 'normal',
    'Mew': 'psychic',
    'Pikachu': 'electric',
    'Charizard': 'fire/flying',
    'Genesect': 'bug/steel'
}

print(pokemon['Charizard'])  # fire/flying

pokemon['Rayquaza'] = 'dragon/flying'  # adds an entry

print('Charizard' in pokemon)  # True

del(pokemon['Mew'])

print(pokemon.keys())
print(pokemon.values())

# print(pokemon)
