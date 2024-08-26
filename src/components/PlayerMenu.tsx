import { Dispatch, SetStateAction } from 'react';

const BUTTONS = [
  { title: 'FIGHT' },
  { title: 'MAGIC' },
  { title: 'DRINK' },
  { title: 'ITEM' },
  { title: 'RUN' },
];

interface PlayerMenuProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

/**
 *
 * @returns Menu buttons
 * @todo onClicks pull button specific modal with actions to take
 */
export const PlayerMenu = ({ showModal, setShowModal }: PlayerMenuProps) => {
  return (
    <>
      <div className="flex justify-around font-bold space-x-6 text-lg p-4 h-full relative">
        {BUTTONS.map(({ title }) => (
          <button
            key={title}
            onClick={() => setShowModal(!showModal)}
            className="text-slate-400 hover:text-slate-100 transition ease-in-out"
          >
            {title}
          </button>
        ))}
      </div>
    </>
  );
};
