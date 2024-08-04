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
      <div className="max-w-6xl border-white border-2 rounded-lg min-w-[570px] w-full h-full max-h-[700px] ml-2 flex">
        <div className="flex flex-col w-full">
          <div className="h-[100px] border-2 border-red-500">background</div>
          <div className="flex justify-between py-2 border-2 border-blue-500 min-h-[170px] h-3/5">
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
          <div className="flex flex-1 justify-between border-2 border-red-500 ">
            <div className="border-2 border-yellow-500 w-[40%]">enemy menu</div>
            <div className="border-2 border-green-500 w-[60%]">
              <PlayerMenu />
            </div>
          </div>
        </div>

        <div className="flex items-end h-full">
          <div className="h-full w-[75px] p-1 pt-2">{characters}</div>
        </div>
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

export const PlayerMenu = () => {
  return (
    <div className="flex flex-col justify-center flex-wrap font-bold text-lg uppercase p-4 h-full">
      <p>Fight</p>
      <p>Magic</p>
      <p>Drink</p>
      <p>Item</p>
      <p>Run</p>
    </div>
  );
};
