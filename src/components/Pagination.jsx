// import clsx from "clsx";

import clsx from "clsx";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const handleFirstPage = () => onPageChange(1);
  const handlePrev = () => onPageChange(page - 1);
  const handleNext = () => onPageChange(page + 1);
  const handleLastPage = () => onPageChange(totalPages);

  // === 🧠 Генерация страниц ===
  const generatePages = () => {
    const pages = [];

    // Мало страниц — просто все выводим
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Если мы близко к началу
    if (page <= 4) return [1, 2, 3, 4, 5, "...", totalPages];

    // Если мы близко к концу
    if (page >= totalPages - 3)
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];

    // Иначе — в середине
    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  };

  const pages = generatePages();

  return (
    <div className="flex flex-row gap-[10px]">
      {/* Первая страница ...........................................................................*/}
      <button
        type="button"
        onClick={handleFirstPage}
        disabled={page === 1}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 disabled:opacity-40"
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
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 disabled:opacity-40"
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
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 disabled:opacity-40"
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
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-lightSecondGray/10 disabled:opacity-40"
      >
        <svg aria-hidden="true" className="h-4 w-4 rotate-180 stroke-black">
          <use href="/public/icons/sprite.svg#icon-two-arr" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
