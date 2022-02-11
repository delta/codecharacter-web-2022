import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './BattleTV.module.css';
import { battleTvSelector, fetchBattleTv } from './battleTvSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function PaginatedItems() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const itemsPerPage = 4;

  // initialize the redux hook
  const dispatch = useAppDispatch();
  const { battletv, loading, hasErrors } = useAppSelector(battleTvSelector);

  // dispatch our thunk when component first mounts
  useEffect(() => {
    dispatch(fetchBattleTv());
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(battletv.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(battletv.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, battletv]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event);
    const newOffset = (event.selected * itemsPerPage) % battletv.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <>
        {loading || hasErrors ? (
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
