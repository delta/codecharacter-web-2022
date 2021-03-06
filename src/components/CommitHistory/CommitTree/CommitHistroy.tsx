import { CodeRevision, GameMapRevision } from '@codecharacter-2022/client';
import React, { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './CommitHistory.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from '../HistoryMain/History.module.css';
import { useAppDispatch } from '../../../store/hooks';
import {
  codeCommitIDChanged,
  codeCommitNameChanged,
  isSelfMatchModalOpened,
  mapCommitIDChanged,
  mapCommitNameChanged,
} from '../../../store/SelfMatchMakeModal/SelfMatchModal';
import { Button } from 'react-bootstrap';

type PropsType = {
  commitID: (commitID: string) => void;
  commitHistoryDetails: CodeRevision[] | GameMapRevision[];
  BigButton: string;
};

export default function CommitHistory(props: PropsType): JSX.Element {
  const CircleIcon = {
    background: '#DFFF00',
    color: '#fff',
  };

  const dispatch = useAppDispatch();
  const [commitNumber, setCommitNumber] = useState('0');

  function handleCommitSelect(e: React.MouseEvent<HTMLDivElement>) {
    // Since the button has an icon, event
    // target doesnt give the button element
    // when clicked on the icon. Hence we get the
    // parent if clicked on icon
    const target = e.target as HTMLDivElement;
    if (target.getAttribute('data-uuid') === null) {
      if (
        (target.parentNode as HTMLButtonElement)?.getAttribute('data-uuid') !==
        null
      ) {
        if (props.BigButton === 'Code') {
          dispatch(
            codeCommitNameChanged(
              (target.parentNode as HTMLButtonElement)?.getAttribute(
                'data-name',
              ) || '',
            ),
          );
          dispatch(
            codeCommitIDChanged(
              (target.parentNode as HTMLButtonElement)?.getAttribute(
                'data-uuid',
              ) || '',
            ),
          );
        } else {
          dispatch(
            mapCommitNameChanged(
              (target.parentNode as HTMLButtonElement)?.getAttribute(
                'data-name',
              ) || '',
            ),
          );
          dispatch(
            mapCommitIDChanged(
              (target.parentNode as HTMLButtonElement)?.getAttribute(
                'data-uuid',
              ) || '',
            ),
          );
        }
      } else {
        if (props.BigButton === 'Code') {
          dispatch(
            codeCommitNameChanged(
              (
                target.parentNode?.parentNode as HTMLButtonElement
              )?.getAttribute('data-name') || '',
            ),
          );
          dispatch(
            codeCommitIDChanged(
              (
                target.parentNode?.parentNode as HTMLButtonElement
              )?.getAttribute('data-uuid') || '',
            ),
          );
        } else {
          dispatch(
            mapCommitNameChanged(
              (
                target.parentNode?.parentNode as HTMLButtonElement
              )?.getAttribute('data-name') || '',
            ),
          );
          dispatch(
            mapCommitIDChanged(
              (
                target.parentNode?.parentNode as HTMLButtonElement
              )?.getAttribute('data-uuid') || '',
            ),
          );
        }
      }
    } else {
      if (props.BigButton === 'Code') {
        dispatch(codeCommitNameChanged(target.getAttribute('data-name') || ''));
        dispatch(codeCommitIDChanged(target.getAttribute('data-uuid') || ''));
      } else {
        dispatch(mapCommitNameChanged(target.getAttribute('data-name') || ''));
        dispatch(mapCommitIDChanged(target.getAttribute('data-uuid') || ''));
      }
    }

    dispatch(isSelfMatchModalOpened(true));
  }
  const parseTimeFormat = (machineTime: string) => {
    const commitTimestamp = new Date(machineTime);
    const datePart = commitTimestamp.toDateString().substring(4, 10);
    const timePart = commitTimestamp.toLocaleTimeString();
    return `${datePart} at ${timePart}`;
  };

  return (
    <div>
      {props.commitHistoryDetails && props.commitHistoryDetails.length > 0 ? (
        props.commitHistoryDetails.map(eachCommit => {
          return (
            <VerticalTimelineElement
              key={eachCommit.id.toString()}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#242a3c', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              date={parseTimeFormat(eachCommit.createdAt.toString())}
              iconStyle={
                commitNumber == eachCommit.id
                  ? CircleIcon
                  : { background: 'rgb(33, 150, 243)', color: '#fff' }
              }
              onTimelineElementClick={() => {
                setCommitNumber(eachCommit.id);
                props.commitID(eachCommit.id);
              }}
            >
              <h6 className="vertical-timeline-element-title">
                {eachCommit.message}
              </h6>
              <div
                className="flex d-flex justify-content-start"
                onClick={e => handleCommitSelect(e)}
              >
                <Button
                  className={styles.selectBtn}
                  data-name={eachCommit.message}
                  data-uuid={eachCommit.id}
                >
                  {' '}
                  <FontAwesomeIcon icon={faPlay as IconProp} /> <b>Simulate</b>{' '}
                </Button>
              </div>
            </VerticalTimelineElement>
          );
        })
      ) : (
        <h1 className="noCommitStyle">No Commits available</h1>
      )}
    </div>
  );
}
