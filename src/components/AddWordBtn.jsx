const AddWordBtn = ({ handleOpenModal }) => {
  return (
    <div>
      <button
        className="flex flex-row gap-2 rounded transition hover:scale-110 hover:bg-secondaryGreen/20"
        onClick={handleOpenModal}
      >
        Add word
        <svg aria-hidden="true" focusable="false" className="h-5 w-5">
          <use href="/icons/sprite.svg#icon-plus" />
        </svg>
      </button>
    </div>
  );
};

export default AddWordBtn;
