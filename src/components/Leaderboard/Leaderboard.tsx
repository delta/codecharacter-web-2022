import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Leaderboard.module.css';
import { LeaderboardApi } from '@codecharacter-2022/client';
import { apiConfig } from '../../api/ApiConfig';

export interface rowInterface {
  user: {
    username: string;
    avatarId: string;
    name: string;
  };
  stats: {
    rating: number;
    wins: number;
    losses: number;
    ties: number;
  };
}

function PaginatedItems() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoaded(false);
    const leaderboardAPI = new LeaderboardApi(apiConfig);
    leaderboardAPI
      .getLeaderboard()
      .then(response => {
        response.sort((a, b) => {
          const parsedA = a.stats.rating;
          const parsedB = b.stats.rating;
          return parsedA > parsedB ? -1 : 1; // for descending sort inverse -1 and 1
        });
        setItems(response);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error);
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
            <div className={styles.top3}>
              <div className={styles.item}>
                <div className={styles.pos}>2</div>
                <img className={styles.pic} src={items[1].user.avatarId}></img>
                <div className={styles.name}>{items[1].user.name}</div>
                <div className={styles.score}>{items[1].stats.rating}</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pos}>1</div>
                <img className={styles.pic} src={items[0].user.avatarId}></img>
                <div className={styles.name}>{items[0].user.name}</div>
                <div className={styles.score}>{items[0].stats.rating}</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pos}>3</div>
                <img className={styles.pic} src={items[2].user.avatarId}></img>
                <div className={styles.name}>{items[2].user.name}</div>
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
                currentItems.map((row: rowInterface) => (
                  <div className={styles.item} key={row.user.username}>
                    <div className={styles.pos}>
                      {itemOffset + 1 + currentItems.indexOf(row)}
                    </div>
                    <img className={styles.pic} src={row.user.avatarId}></img>
                    <div className={styles.name}>{row.user.name}</div>
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
