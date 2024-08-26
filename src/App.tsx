import { useState } from 'react';
import { CharacterSheet } from './components/CharacterSheet';
import { PlayerMenu } from './components/PlayerMenu';
import { characterList, enemyList } from './library/Characters';

function App() {
  const [showModal, setShowModal] = useState(false);

  const characterSheetList = characterList.map(({ name, hp }) => {
    return <CharacterSheet key={name} name={name} hp={hp} />;
  });

  const characterSprites = characterList.map(({ name, img }) => (
    <Character key={name} name={name} src={img} />
  ));

  const enemySprites = enemyList.map(({ name, img }) => (
    <Character key={name} name={name} src={img} />
  ));

  return (
    <div className="h-screen flex justify-center items-center bg-black text-white p-4 uppercase">
      <div className="max-w-6xl border-white border-2 rounded-lg w-full h-full max-h-[600px] ml-2 flex overflow-auto">
        <div className="flex flex-col w-full">
          <div
            className="hidden sm:block sm:h-[100px] md:h-[150px] bg-contain"
            style={{
              backgroundImage: 'url(src/assets/bg-repeat.png)',
            }}
          ></div>
          <div className="flex justify-between py-2 h-full">
            <SpriteRenderer>{enemySprites}</SpriteRenderer>
            <SpriteRenderer>{characterSprites}</SpriteRenderer>
          </div>
          <div className="border-2 border-red-500">
            <PlayerMenu showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>

        <div className="flex items-end h-full">
          <div className="h-full w-[75px] p-1 pt-2">{characterSheetList}</div>
        </div>
        {showModal && <MenuModal />}
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

interface SpriteRendererProps {
  children: React.ReactNode;
}
export const SpriteRenderer = ({ children }: SpriteRendererProps) => {
  return <div className="flex flex-col flex-wrap justify-center space-y-3 px-10">{children}</div>;
};

export const MenuModal = () => {
  return <div className="absolute h-20 w-20 bg-white"></div>;
};
