import clsx from "clsx";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const handleFirstPage = () => onPageChange(1);
  const handlePrev = () => onPageChange(page - 1);
  const handleNext = () => onPageChange(page + 1);
  const handleLastPage = () => onPageChange(totalPages);

  // === 🧠 Генерация страниц ===
  const generatePages = () => {
    const pages = [];
    const safeTotal = Number(totalPages) || 0;
    const safePage = Number(page) || 1;

    if (safeTotal <= 7) {
      for (let i = 1; i <= safeTotal; i++) pages.push(i);
      return pages;
    }

    if (safePage <= 4) return [1, 2, 3, 4, 5, "...", safeTotal];

    if (safePage >= safeTotal - 3)
      return [
        1,
        "...",
        safeTotal - 4,
        safeTotal - 3,
        safeTotal - 2,
        safeTotal - 1,
        safeTotal,
      ];

    return [1, "...", safePage - 1, safePage, safePage + 1, "...", safeTotal];
  };

  const pages = generatePages();

  return (
    <div className="my-[20px] flex flex-row gap-[10px]">
      {/* Первая страница ...........................................................................*/}
      <button
        type="button"
        onClick={handleFirstPage}
        disabled={page === 1}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 transition hover:bg-primaryGreen/20 disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <svg aria-hidden="true" className="h-4 w-4 stroke-black">
          <use href="/public/icons/sprite.svg#icon-two-arr" />
        </svg>
      </button>

      {/* Назад   ...........................................................................*/}
      <button
        type="button"
        onClick={handlePrev}
        disabled={page === 1}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 transition hover:bg-primaryGreen/20 disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <svg aria-hidden="true" className="h-4 w-4 stroke-black">
          <use href="/public/icons/sprite.svg#icon-one-arr" />
        </svg>
      </button>

      {/* Кнопки страниц    ...........................................................................*/}
      {pages.map((p, i) =>
        p === "..." ? (
          <span
            key={`dots-${i}`}
            className="flex h-8 w-8 items-center justify-center text-[13px] font-semibold text-lightSecondGray"
          >
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 text-[13px] font-semibold transition",
              page === p
                ? "bg-primaryGreen text-white"
                : "text-lightSecondGray hover:bg-primaryGreen/20",
            )}
          >
            {p}
          </button>
        ),
      )}

      {/* Вперёд    ...........................................................................*/}
      <button
        type="button"
        onClick={handleNext}
        disabled={page === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 transition hover:bg-primaryGreen/20 disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <svg aria-hidden="true" className="h-4 w-4 rotate-180 stroke-black">
          <use href="/public/icons/sprite.svg#icon-one-arr" />
        </svg>
      </button>

      {/* В конец     ...........................................................................*/}
      <button
        type="button"
        onClick={handleLastPage}
        disabled={page === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 transition hover:bg-primaryGreen/20 disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <svg aria-hidden="true" className="h-4 w-4 rotate-180 stroke-black">
          <use href="/public/icons/sprite.svg#icon-two-arr" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
