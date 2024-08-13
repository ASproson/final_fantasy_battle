import { CharacterSheet } from './components/CharacterSheet';
import { PlayerMenu } from './components/PlayerMenu';
import { characterList } from './library/Characters';

function App() {
  const characterSheetList = characterList.map(({ name, hp }) => {
    return <CharacterSheet key={name} name={name} hp={hp} />;
  });

  const characterSprites = characterList.map(({ name, img }) => {
    return <Character key={name} name={name} src={img} />;
  });

  return (
    <div className="h-screen flex justify-center items-center bg-black text-white p-4">
      <div className="max-w-6xl border-white border-2 rounded-lg min-w-[570px] w-full h-full max-h-[700px] ml-2 flex">
        <div className="flex flex-col w-full">
          <div
            className="h-[100px]"
            style={{
              backgroundImage: 'url(src/assets/battle-bg.png)',
              backgroundSize: '100% auto',
              backgroundPosition: 'right 0px bottom 200px',
              backgroundAttachment: 'local',
            }}
          ></div>
          <div className="flex justify-between py-2 border-2 border-blue-500 min-h-[170px] h-3/5">
            <div className="flex flex-col justify-center">
              <div>enemy1</div>
              <div>enemy2</div>
              <div>enemy3</div>
            </div>
            <div className="flex flex-col justify-center space-y-3 border-2 border-red-500 pr-10">
              {characterSprites}
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
          <div className="h-full w-[75px] p-1 pt-2">{characterSheetList}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

interface CharacterProps {
  src: string;
  name: string;
}

export const Character = ({ src, name }: CharacterProps) => {
  return (
    <div>
      <img src={src} className="w-20" alt={name} />
    </div>
  );
};
