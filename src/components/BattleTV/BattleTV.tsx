import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getLogAction } from '../../store/rendererLogs/logSlice';
import { useNavigate } from 'react-router-dom';
import styles from './BattleTV.module.css';
import { battleTvSelector, fetchBattleTv } from './BattleTvSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getAvatarByID } from '../Avatar/Avatar';
import { Match, Verdict } from '@codecharacter-2022/client';
import { User, user } from '../../store/User/UserSlice';

function getIcon(loggedInUser: User, match: Match) {
  if (loggedInUser.username === match.user1.username) {
    // user is PLAYER1
    if (match.matchVerdict === Verdict.Player1) {
      return styles.battlecardwin;
    } else if (match.matchVerdict == Verdict.Player2) {
      return styles.battlecardlose;
    }
  } else {
    // user is PLAYER2
    if (match.matchVerdict === Verdict.Player1) {
      return styles.battlecardlose;
    } else if (match.matchVerdict == Verdict.Player2) {
      return styles.battlecardwin;
    }
  }
  return styles.battlecardtie;
}

function getUsersGame(loggedInUser: User, match: Match) {
  const games = [...match.games.values()];
  if (loggedInUser.username == match.user1.username) {
    return games[0];
  } else {
    return games[games.length - 1];
  }
}

function PaginatedItems() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState<Match[]>([]);
  const navigate = useNavigate();

  const itemsPerPage = 4;

  const { battletv, loading, hasbeenFetched, hasErrors } =
    useAppSelector(battleTvSelector);

  const loggedInUser = useAppSelector(user);

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

  function calculateScore(coinsUsed: number, destruction: number) {
    return (1500 - coinsUsed) / 15 + 2 * destruction;
  }

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
              currentItems.map((match: Match) => (
                <div className={styles.item} key={match.id}>
                  <div
                    className={
                      styles.battlecard + ' ' + getIcon(loggedInUser, match)
                    }
                  >
                    <div className={styles.pic}>
                      <img src={getAvatarByID(match.user1.avatarId).url}></img>
                    </div>
                    <div className={[styles.username, styles.left].join(' ')}>
                      {match.user1.username}
                    </div>
                    <div className={styles.coinused}>
                      {[...match.games.values()][0].coinsUsed}
                    </div>
                    <div className={styles.destruction}>
                      {[...match.games.values()][0].destruction.toFixed(2)}
                    </div>
                    <div className={styles.score}>
                      {calculateScore(
                        [...match.games.values()][0].coinsUsed,
                        [...match.games.values()][0].destruction,
                      )}
                    </div>
                    <div
                      className={styles.watchButton}
                      onClick={() => {
                        dispatch(
                          getLogAction({
                            id: getUsersGame(loggedInUser, match).id,
                            callback: () => {
                              navigate('/dashboard');
                            },
                          }),
                        );
                      }}
                    >
                      Watch
                    </div>
                    <div className={styles.score}>
                      {calculateScore(
                        [...match.games.values()][
                          [...match.games.values()].length === 1 ? 0 : 1
                        ].coinsUsed,
                        [...match.games.values()][
                          [...match.games.values()].length === 1 ? 0 : 1
                        ].destruction,
                      )}
                    </div>
                    <div className={styles.destruction}>
                      {[...match.games.values()][
                        [...match.games.values()].length === 1 ? 0 : 1
                      ].destruction.toFixed(2)}
                    </div>
                    <div className={styles.coinused}>
                      {
                        [...match.games.values()][
                          [...match.games.values()].length === 1 ? 0 : 1
                        ].coinsUsed
                      }
                    </div>
                    <div className={[styles.username, styles.right].join(' ')}>
                      {match.user2.username}
                    </div>
                    <div className={styles.pic}>
                      <img src={getAvatarByID(match.user2.avatarId).url}></img>
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
          <div className={styles.score}>Score</div>
          <div className={styles.vs}>VS</div>
          <div className={styles.score}>Score</div>
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
