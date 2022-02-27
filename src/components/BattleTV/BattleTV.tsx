import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getLogAction } from '../../store/rendererLogs/logSlice';
import { useNavigate } from 'react-router-dom';
import styles from './BattleTV.module.css';
import { battleTvSelector, fetchBattleTv } from './BattleTvSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getAvatarByID } from '../Avatar/Avatar';

export interface rowInterface {
  id: string;
  games: [
    {
      gameVerdict: 'PLAYER1' | 'PLAYER2' | 'TIE';
      coinsUsed: number;
      destruction: number;
    },
  ];
  user1: {
    avatarId: number;
    name: string;
  };
  user2: {
    avatarId: number;
    name: string;
  };
}

function PaginatedItems() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const navigate = useNavigate();

  const itemsPerPage = 4;

  const { battletv, loading, hasbeenFetched, hasErrors } =
    useAppSelector(battleTvSelector);

  // initialize the redux hook
  const dispatch = useAppDispatch();

  if (!hasbeenFetched) {
    dispatch(fetchBattleTv());
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(battletv.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(battletv.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, battletv]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % battletv.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <>
        {loading || hasErrors ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-white" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {currentItems &&
              currentItems.map((row: rowInterface) => (
                <div className={styles.item} key={row.id}>
                  <div
                    className={
                      styles.battlecard +
                      ' ' +
                      (row.games[0].gameVerdict === 'PLAYER1'
                        ? styles.battlecardwin
                        : row.games[0].gameVerdict === 'TIE'
                        ? styles.battlecardtie
                        : styles.battlecardlose)
                    }
                  >
                    <div className={styles.pic}>
                      <img src={getAvatarByID(row.user1.avatarId).url}></img>
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
                    <div
                      className={styles.watchButton}
                      onClick={() => {
                        dispatch(getLogAction(row.id));
                        navigate('/dashboard');
                      }}
                    >
                      Watch
                    </div>
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
                      <img src={getAvatarByID(row.user2.avatarId).url}></img>
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
          <div className={styles.coinused}>Coins Used</div>
          <div className={styles.destruction}>Destruction %</div>
          <div className={styles.vs}>VS</div>
          <div className={styles.destruction}>Destruction %</div>
          <div className={styles.coinused}>Coins Used</div>
          <div className={styles.username}></div>
          <div className={styles.pic}></div>
        </div>
      </div>
      <PaginatedItems />
    </div>
  );
}
