const BUTTONS = [
  { title: 'FIGHT' },
  { title: 'MAGIC' },
  { title: 'DRINK' },
  { title: 'ITEM' },
  { title: 'RUN' },
];

export const PlayerMenu = () => {
  return (
    <div className="flex flex-col items-start flex-wrap font-bold text-lg p-4 h-full">
      {BUTTONS.map(({ title }) => (
        <button key={title} className="text-slate-400 hover:text-slate-100 transition ease-in-out">
          {title}
        </button>
      ))}
    </div>
  );
};
