import { useEffect, useState } from "react";
import { Icon, Pages, Row } from "./styles";
import { pageSize } from "../../utils/constants";

interface PaginationData {
  length: number;
  changePage: (desiredPage: number) => void;
}

const Pagination = ({ length, changePage }: PaginationData) => {
  const [current, setCurrent] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);

  const [pagesArray, setPagesArray] = useState<number[]>([1, 2, 3]);

  const selectPage = (value: "next" | "back" | number) => {
    if (value == "next" && current != maxPage) {
      setPagesArray([]);
      for (let i = 1; i <= 3; i++) {
        if (current + i < maxPage)
          setPagesArray((pagesArray) => [...pagesArray, current + i]);
        else setPagesArray([maxPage - 2, maxPage - 1, maxPage]);
      }
      if (current < maxPage) {
        changePage(current + 1);
        setCurrent(current + 1);
      }
    }

    if (value == "back") {
      setPagesArray([]);
      for (let i = 3; i >= 1; i--) {
        if (current - 3 > 1) {
          setPagesArray((pagesArray) => [...pagesArray, current - i]);
        } else {
          setPagesArray([1, 2, 3]);
        }
      }
      if (current > 1) {
        changePage(current - 1);
        setCurrent(current - 1);
      }
    }

    if (typeof value == "number" && value != current) {
      setPagesArray([]);
      if (value == 1) setPagesArray([1, 2, 3]);
      else if (value == maxPage)
        setPagesArray([maxPage - 2, maxPage - 1, maxPage]);
      else setPagesArray([value - 1, value, value + 1]);
      changePage(value);
      setCurrent(value);
    }
  };

  useEffect(() => {
    setPagesArray([]);
    setMaxPage(Math.ceil(length / pageSize));
    for (let i = 1; i <= 3 && i <= maxPage; i++) {
      setPagesArray((pagesArray) => [...pagesArray, i]);
    }
    setCurrent(1);
  }, [length, maxPage]);

  return (
    <Row>
      <Icon
        className={`${current == 1 && `disabled`}`}
        onClick={() => {
          selectPage("back");
        }}
      >
        {"◄"}
      </Icon>
      <Pages>
        {pagesArray?.map((page) => (
          <div
            key={page}
            className={`square ${page == current && `current`}`}
            onClick={() => {
              selectPage(page);
            }}
          >
            {page}
          </div>
        ))}
      </Pages>
      <Icon
        className={`${current == maxPage && `disabled`}`}
        onClick={() => {
          selectPage("next");
        }}
      >
        {"►"}
      </Icon>
    </Row>
  );
};

export default Pagination;
