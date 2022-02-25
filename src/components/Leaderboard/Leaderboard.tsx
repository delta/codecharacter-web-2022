import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import styles from './Leaderboard.module.css';
import {
  LeaderboardApi,
  MatchApi,
  CodeApi,
  MapApi,
  CreateMatchRequest,
} from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../api/ApiConfig';

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

export interface mapRequestInterface {
  mode: string;
  opponentId: string;
  mapRevisionId: string | undefined;
  codeRevisionId: string | undefined;
}

function PaginatedItems() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(false);
  let currentOpponentId: string;

  const handleClose = () => setShow(false);
  const handleShow = (opponentId: string) => {
    currentOpponentId = opponentId;
    setShow(true);
  };

  const itemsPerPage = 8;

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

  async function handleMatchStart() {
    enum MatchMode {
      Self = 'SELF',
      Manual = 'MANUAL',
      Auto = 'AUTO',
    }
    const codeAPI = new CodeApi(apiConfig);
    const mapAPI = new MapApi(apiConfig);
    const codeRevisionId = await codeAPI.getCodeRevisions().then(response => {
      response[response.length - 1].parentRevision;
    });
    const mapRevisionId = await mapAPI.getMapRevisions().then(response => {
      response[response.length - 1].parentRevision;
    });
    const matchRequest = {
      mode: MatchMode.Self,
      opponentId: currentOpponentId,
      codeRevisionId: codeRevisionId,
      mapRevisionId: mapRevisionId,
    };

    const matchAPI = new MatchApi(apiConfig);
    matchAPI.createMatch(matchRequest as CreateMatchRequest).catch(error => {
      if (error instanceof ApiError) console.log(error);
    });
    setShow(false);
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
            <div className={styles.list}>
              <Modal
                show={show}
                onHide={handleClose}
                className={styles.editorSettingsModal}
              >
                <Modal.Header className={styles.matchHeader} closeButton>
                  <Modal.Title>Start a new match</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.editorSettingsBody}>
                  Do you want to start a match ?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    className={styles.matchButton}
                    onClick={handleMatchStart}
                  >
                    Start match
                  </Button>
                </Modal.Footer>
              </Modal>
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
                  <div
                    className={styles.item}
                    key={row.user.username}
                    onClick={() => handleShow(row.user.username)}
                  >
                    <div className={styles.pos}>
                      {itemOffset + 1 + currentItems.indexOf(row)}
                    </div>
                    <img className={styles.pic} src={row.user.avatarId}></img>
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
