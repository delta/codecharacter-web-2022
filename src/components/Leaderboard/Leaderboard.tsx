import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Leaderboard.module.css';
import {
  LeaderboardApi,
  MatchApi,
  LeaderboardEntry,
  MatchMode,
} from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../api/ApiConfig';

function PaginatedItems() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState(new Array<LeaderboardEntry>());
  const [currentItems, setCurrentItems] = useState(
    new Array<LeaderboardEntry>(),
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const itemsPerPage = 4;

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const fetchLeaderboard = () => {
    setIsLoaded(false);
    const leaderboardAPI = new LeaderboardApi(apiConfig);
    leaderboardAPI
      .getLeaderboard()
      .then(response => {
        setItems(response);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  async function handleMatchStart(opponentId: string) {
    const matchAPI = new MatchApi(apiConfig);
    matchAPI
      .createMatch({
        mode: MatchMode.Self,
        opponentId: opponentId,
        codeRevisionId: undefined,
        mapRevisionId: undefined,
      })
      .catch(error => {
        if (error instanceof ApiError) console.log(error);
      });
  }
  return (
    <>
      <>
        {!isLoaded ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-white" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.top3}>
              <div
                className={styles.item}
                onClick={() => handleMatchStart(items[1].user.username)}
              >
                <div className={styles.pos}>2</div>
                <img
                  className={styles.pic}
                  src={(items[1].user.avatarId ?? 0).toString()}
                ></img>
                <div className={styles.name}>{items[1].user.username}</div>
                <div className={styles.score}>{items[1].stats.rating}</div>
              </div>
              <div
                className={styles.item}
                onClick={() => handleMatchStart(items[0].user.username)}
              >
                <div className={styles.pos}>1</div>
                <img
                  className={styles.pic}
                  src={(items[0].user.avatarId ?? 0).toString()}
                ></img>
                <div className={styles.name}>{items[0].user.username}</div>
                <div className={styles.score}>{items[0].stats.rating}</div>
              </div>
              <div
                className={styles.item}
                onClick={() => handleMatchStart(items[1].user.username)}
              >
                <div className={styles.pos}>3</div>
                <img
                  className={styles.pic}
                  src={(items[1].user.avatarId ?? 0).toString()}
                ></img>
                <div className={styles.name}>{items[2].user.username}</div>
                <div className={styles.score}>{items[2].stats.rating}</div>
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
                <div className={styles.scoreParent}>
                  <div className={styles.score}>Ratings</div>
                  <div className={styles.score}>Won</div>
                  <div className={styles.score}>Tied</div>
                  <div className={styles.score}>Lost</div>
                </div>
              </div>
              {currentItems &&
                currentItems.map(row => (
                  <div
                    className={styles.item}
                    key={row.user.username}
                    onClick={() => handleMatchStart(row.user.username)}
                  >
                    <div className={styles.pos}>
                      {itemOffset + 1 + currentItems.indexOf(row)}
                    </div>
                    <img
                      className={styles.pic}
                      src={(row.user.avatarId ?? 0).toString()}
                    ></img>
                    <div className={styles.name}>{row.user.username}</div>
                    <div className={styles.scoreParent}>
                      <div className={styles.score}>{row.stats.rating}</div>
                      <div className={styles.score}>{row.stats.wins}</div>
                      <div className={styles.score}>{row.stats.ties}</div>
                      <div className={styles.score}>{row.stats.losses}</div>
                    </div>
                  </div>
                ))}
            </div>
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
        <button
          type="button"
          className="btn m-2 btn-outline-light"
          onClick={fetchLeaderboard}
        >
          Refresh
        </button>
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
          <PaginatedItems />
        </div>
      </div>
    </div>
  );
}
