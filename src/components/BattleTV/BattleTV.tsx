import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './BattleTV.module.css';

type Item = {
  myUsername: string;
  myCoinused: number;
  myDestruction: number;
  enemyDestruction: number;
  enemyCoinused: number;
  enemyUsername: string;
};
interface Props {
  itemsPerPage: number;
  currentItems: Array<Item>;
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

const rows: Array<Item> = [
  createData('Akash1', 6921, 5, 10, 3413, 'Enemyakash'),
  createData('Akash2', 49212, 20, 15, 4634, 'Enemyakash'),
  createData('Akash3', 393, 25, 30, 4334, 'Enemyakash'),
  createData('Akash4', 39322, 40, 35, 1447, 'Enemyakash'),
  createData('Akash5', 2923, 45, 50, 3238, 'Enemyakash'),
  createData('Akash6', 1915, 60, 55, 3223, 'Enemyakash'),
  createData('Akash7', 69164, 5, 10, 3462, 'Enemyakash'),
  createData('Akash8afgd', 49641, 20, 15, 4257, 'Enemyakash'),
  createData('Akash9', 3649, 25, 30, 4325, 'Enemyakash'),
  createData('Akash10', 39864, 40, 35, 14257, 'Enemyakash'),
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
                  row.myDestruction > row.enemyDestruction
                    ? '#00bc6244'
                    : '#BC170044',
              }}
            >
              <div className={styles.pic}>
                <img src="https://randomuser.me/api/portraits/women/81.jpg"></img>
              </div>
              <div className={[styles.username, styles.left].join(' ')}>
                {row.myUsername}
              </div>
              <div className={styles.coinused}>{row.myCoinused}</div>
              <div className={styles.destruction}>{row.myDestruction}</div>
              <div className={styles.vs}>VS</div>
              <div className={styles.destruction}>{row.enemyDestruction}</div>
              <div className={styles.coinused}>{row.enemyCoinused}</div>
              <div className={[styles.username, styles.right].join(' ')}>
                {row.enemyUsername}
              </div>
              <div className={styles.pic}>
                <img src="https://randomuser.me/api/portraits/women/81.jpg"></img>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }: Props) {
  const [currentItems, setCurrentItems] = useState<Array<Item>>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(rows.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(rows.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
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
      <PaginatedItems itemsPerPage={6} currentItems={[]} />
    </div>
  );
}
