import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './BattleTV.module.css';

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
      `https://stoplight.io/mocks/rinish-api-testbed/codecharacter/14036190/user/matches`,
    )
      .then(res => res.json())
      .then(data => {
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
                <div className={styles.item} key={row.id}>
                  <div
                    className={styles.battlecard}
                    style={{
                      backgroundColor:
                        row.games[0].gameVerdict === 'PLAYER1'
                          ? '#00bc6244'
                          : row.games[0].gameVerdict === 'TIE'
                          ? '#808080'
                          : '#BC170044',
                    }}
                  >
                    <div className={styles.pic}>
                      <img src={row.user1.avatarId}></img>
                    </div>
                    <div className={[styles.username, styles.left].join(' ')}>
                      {row.user1.name}
                    </div>
                    <div className={styles.coinused}>
                      {row.games[0].coinsUsed}
                    </div>
                    <div className={styles.destruction}>
                      {row.games[0].destruction}
                    </div>
                    <div className={styles.vs}>VS</div>
                    <div className={styles.destruction}>
                      {row.games[0].destruction}
                    </div>
                    <div className={styles.coinused}>
                      {row.games[0].coinsUsed}
                    </div>
                    <div className={[styles.username, styles.right].join(' ')}>
                      {row.user2.name}
                    </div>
                    <div className={styles.pic}>
                      <img src={row.user2.avatarId}></img>
                    </div>
                  </div>
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
export default function BattleTV(): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.title}>Battle TV</div>
      <div className={styles.item}>
        <div
          className={styles.battlecardHeader}
          style={{
            backgroundColor: '#',
          }}
        >
          <div className={styles.pic}></div>
          <div className={styles.username}></div>
          <div className={styles.coinused}>Coinused</div>
          <div className={styles.destruction}>Destruction %</div>
          <div className={styles.vs}>VS</div>
          <div className={styles.destruction}>Destruction %</div>
          <div className={styles.coinused}>Coinused</div>
          <div className={styles.username}></div>
          <div className={styles.pic}></div>
        </div>
      </div>
      <PaginatedItems />
    </div>
  );
}
