import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Leaderboard.module.css';

type curentItems = {
  rank: number;
  username: string;
  rating: number;
  won: number;
  lost: number;
  tied: number;
  fight: string;
};
interface Props {
  itemsPerPage: number;
  currentItems: Array<curentItems>;
}

function createData(
  rank: number,
  username: string,
  rating: number,
  won: number,
  lost: number,
  tied: number,
  fight: string,
) {
  return { rank, username, rating, won, lost, tied, fight };
}

const rows = [
  createData(4, 'Akash4', 122, 3, 1, 1, 'fightakash'),
  createData(5, 'Akash5', 122, 2, 1, 1, 'fightakash'),
  createData(6, 'Akash6', 122, 1, 1, 1, 'fightakash'),
  createData(7, 'Akash7', 122, 1, 1, 1, 'fightakash'),
  createData(8, 'Akash8', 122, 1, 1, 1, 'fightakash'),
  createData(9, 'Akash9', 122, 1, 1, 1, 'fightakash'),
  createData(10, 'Akash10', 122, 1, 1, 1, 'fightakash'),
  createData(11, 'Akash11', 122, 1, 1, 1, 'fightakash'),
  createData(12, 'Akash12', 122, 1, 1, 1, 'fightakash'),
  createData(13, 'Akash13', 122, 1, 1, 1, 'fightakash'),
  createData(14, 'Akash14', 122, 1, 1, 1, 'fightakash'),
  createData(15, 'Akash15', 122, 1, 1, 1, 'fightakash'),
  createData(16, 'Akash16', 122, 1, 1, 1, 'fightakash'),
  createData(17, 'Akash17', 122, 1, 1, 1, 'fightakash'),
];

function Items({ currentItems }: Props) {
  return (
    <>
      {currentItems &&
        currentItems.map(row => (
          <div className={styles.item} key={row.username}>
            <div className={styles.pos}>{row.rank}</div>
            <img
              className={styles.pic}
              src="https://randomuser.me/api/portraits/women/81.jpg"
            ></img>
            <div className={styles.name}>{row.username}</div>
            <div className={styles.score}>{row.rating}</div>
            <div className={styles.score}>{row.won} win</div>
            <div className={styles.score}>{row.tied} tied</div>
            <div className={styles.score}>{row.lost} lost</div>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }: Props) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(rows.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(rows.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % rows.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} itemsPerPage={0} />
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
            <PaginatedItems itemsPerPage={4} currentItems={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
