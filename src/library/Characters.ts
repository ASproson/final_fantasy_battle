interface CharacterClass {
  name: string;
  hp: number;
  img: string;
  attack: number;
  critChance: number;
}
class CharacterGenerator implements CharacterClass {
  constructor(
    public name: string,
    public hp: number,
    public img: string,
    public attack: number,
    public critChance: number
  ) {}
}

export const characterList = [
  new CharacterGenerator('AAAA', 30, '/src/assets/bl-belt.png', 10, 0.2),
  new CharacterGenerator('BBBB', 25, '/src/assets/bl-mage.png', 12, 0.3),
  new CharacterGenerator(
    'CCCC',
    28,
    '/src/assets/wh-mage-cleaned.png',
    8,
    0.25
  ),
  new CharacterGenerator(
    'DDDD',
    33,
    '/src/assets/fighter-cleaned.png',
    15,
    0.15
  ),
];
