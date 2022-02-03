import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './BattleTV.module.css';

type curentItems = {
  myUsername: string;
  myCoinused: number;
  myDestruction: number;
  enemyDestruction: number;
  enemyCoinused: number;
  enemyUsername: string;
};
interface Props {
  itemsPerPage: number;
  currentItems: Array<curentItems>;
}

function createData(
  myUsername: string,
  myCoinused: number,
  myDestruction: number,
  enemyDestruction: number,
  enemyCoinused: number,
  enemyUsername: string,
) {
  return {
    myUsername,
    myCoinused,
    myDestruction,
    enemyDestruction,
    enemyCoinused,
    enemyUsername,
  };
}

const rows = [
  createData('Akash1', 69, 5, 10, 34, 'Enemyakash'),
  createData('Akash2', 49, 20, 15, 4, 'Enemyakash'),
  createData('Akash3', 39, 25, 30, 43, 'Enemyakash'),
  createData('Akash4', 39, 40, 35, 14, 'Enemyakash'),
  createData('Akash5', 29, 45, 50, 32, 'Enemyakash'),
  createData('Akash6', 19, 60, 55, 32, 'Enemyakash'),
  createData('Akash7', 69, 5, 10, 34, 'Enemyakash'),
  createData('Akash8', 49, 20, 15, 4, 'Enemyakash'),
  createData('Akash9', 39, 25, 30, 43, 'Enemyakash'),
  createData('Akash10', 39, 40, 35, 14, 'Enemyakash'),
];

function Items({ currentItems }: Props) {
  return (
    <>
      {currentItems &&
        currentItems.map(row => (
          <div className={styles.item} key={row.myUsername}>
            <div
              className={styles.battlecard}
              style={{
                backgroundColor:
                  row.myDestruction < row.enemyDestruction
                    ? '#00bc62'
                    : '#BC1700',
              }}
            >
              <img
                className={styles.pic}
                src="https://randomuser.me/api/portraits/women/81.jpg"
              ></img>
              <div className={styles.username}>{row.myUsername}</div>
              <div className={styles.destruction}>{row.myDestruction}</div>
              <div className={styles.coinused}>{row.myCoinused}</div>
              <div className={styles.vs}>VS</div>
              <div className={styles.coinused}>{row.enemyCoinused}</div>
              <div className={styles.destruction}>{row.enemyDestruction}</div>
              <div className={styles.username}>{row.enemyUsername}</div>
              <img
                className={styles.pic}
                src="https://randomuser.me/api/portraits/women/81.jpg"
              ></img>
            </div>
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

export default function BattleTV(): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.title}>Battle TV</div>
      <div className={styles.item}>
        <div
          className={styles.battlecard}
          style={{
            backgroundColor: '#',
          }}
        >
          <img className={styles.pic} src="src/assets/fakeprofile.png"></img>
          <div className={styles.headingusername}>Username</div>
          <div className={styles.headingdestruction}>Destruction %</div>
          <div className={styles.headingcoinused}>Coinused</div>
          <div className={styles.heading}>VS</div>
          <div className={styles.headingcoinused}>Coinused</div>
          <div className={styles.headingdestruction}>Destruction %</div>
          <div className={styles.headingusername}>Username</div>
          <img className={styles.pic} src="src/assets/fakeprofile.png"></img>
        </div>
      </div>
      <PaginatedItems itemsPerPage={6} currentItems={[]} />
    </div>
  );
}
