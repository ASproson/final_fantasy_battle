interface Character {
  name: string;
  hp: number;
}

export const CharacterSheet = ({ name, hp }: Character) => {
  return (
    <div className="p-1 border-2 border-white rounded-lg">
      <p className="uppercase font-bold">{name}</p>
      <p className="uppercase font-bold">hp</p>
      <p className="text-right">{hp}</p>
    </div>
  );
};
