export const characterList = [
  {
    name: 'AAAA',
    hp: 30,
  },
  {
    name: 'BBBB',
    hp: 25,
  },
  {
    name: 'CCCC',
    hp: 28,
  },
  {
    name: 'DDDD',
    hp: 33,
  },
];

function App() {
  const characters = characterList.map(({ name, hp }, idx) => {
    return <CharacterSheet key={idx} name={name} hp={hp} />;
  });

  return (
    <div className="h-screen flex justify-center items-center bg-black text-white p-4">
      <div className="max-w-6xl border-white border-2 rounded-lg min-w-[525px] w-full h-full ml-2">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div>enemy1</div>
            <div>enemy2</div>
            <div>enemy3</div>
          </div>
          <div className="flex flex-col justify-center">
            <div>char1</div>
            <div>char2</div>
            <div>char3</div>
            <div>char4</div>
          </div>
        </div>
      </div>
      <div className="flex items-end h-full">
        <div className="h-full w-[125px] p-1 pt-2">{characters}</div>
      </div>
    </div>
  );
}

export default App;

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
