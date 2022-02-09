import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Leaderboard.module.css';

function PaginatedItems() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoaded(false);
    fetch(
      `https://stoplight.io/mocks/rinish-api-testbed/codecharacter/14036190/leaderboard`,
    )
      .then(res => res.json())
      .then(data => {
        data.sort(
          (
            a: { stats: { rating: string } },
            b: { stats: { rating: string } },
          ) => {
            const parsedA = parseInt(a.stats.rating, 10);
            const parsedB = parseInt(b.stats.rating, 10);
            return parsedA > parsedB ? -1 : 1; // for descending sort inverse -1 and 1
          },
        );
        setItems(data);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event);
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <>
            {currentItems &&
              currentItems.map(row => (
                <div className={styles.item} key={row.user.username}>
                  <div className={styles.pos}>
                    {itemOffset + 1 + currentItems.indexOf(row)}
                  </div>
                  <img className={styles.pic} src={row.user.avatarId}></img>
                  <div className={styles.name}>{row.user.name}</div>
                  <div className={styles.score}>{row.stats.rating}</div>
                  <div className={styles.score}>{row.stats.wins} win</div>
                  <div className={styles.score}>{row.stats.ties} tied</div>
                  <div className={styles.score}>{row.stats.losses} lost</div>
                </div>
              ))}
          </>
        )}
      </>
      <nav className={styles.paginationouter}>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName="active"
        />
      </nav>
    </>
  );
}
export default function Leaderboard(): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <img className={styles.header__icon} src="src/assets/trophy.png" />
        <h1 className={styles.header__title}>
          <span>Leaderboard</span>
        </h1>
      </div>
      <div className={styles.center}>
        <div className={styles.ranklist}>
          <div className={styles.top3}>
            <div className={styles.item}>
              <div className={styles.pos}>2</div>
              <img
                className={styles.pic}
                src="https://randomuser.me/api/portraits/men/34.jpg"
              ></img>
              <div className={styles.name}>Edgar Soto</div>
              <div className={styles.score}>6453 rating</div>
            </div>
            <div className={styles.item}>
              <div className={styles.pos}>1</div>
              <img
                className={styles.pic}
                src="https://randomuser.me/api/portraits/men/31.jpg"
              ></img>
              <div className={styles.name}>Clifford James</div>
              <div className={styles.score}>6794 rating</div>
            </div>
            <div className={styles.item}>
              <div className={styles.pos}>3</div>
              <img
                className={styles.pic}
                src="https://randomuser.me/api/portraits/women/91.jpg"
              ></img>
              <div className={styles.name}>Nevaeh Silva</div>
              <div className={styles.score}>6034 rating</div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <img
                className={styles.pic}
                src="https://randomuser.me/api/portraits/men/34.jpg"
              ></img>
              <div className={styles.pos}>#</div>
              <div className={styles.name}>Username</div>
              <div className={styles.score}>Ratings</div>
              <div className={styles.score}>Won</div>
              <div className={styles.score}>Tied</div>
              <div className={styles.score}>Lost</div>
            </div>
            <PaginatedItems />
          </div>
        </div>
      </div>
    </div>
  );
}
