import { CodeRevision, GameMapRevision } from '@codecharacter-2022/client';
import { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './CommitHistory.css';

type PropsType = {
  commitID: (commitID: string) => void;
  commitHistoryDetails: CodeRevision[] | GameMapRevision[];
};

export default function CommitHistory(props: PropsType): JSX.Element {
  const CircleIcon = {
    background: '#DFFF00',
    color: '#fff',
  };

  const [commitNumber, setCommitNumber] = useState('0');

  return (
    <div>
      {props.commitHistoryDetails && props.commitHistoryDetails.length > 0 ? (
        <VerticalTimeline layout={'1-column'} animate={true}>
          {props.commitHistoryDetails.map((eachCommit, index) => {
            return (
              <VerticalTimelineElement
                key={eachCommit.id.toString()}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#242a3c', color: '#fff' }}
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                date={eachCommit.createdAt.toString()}
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
                <h3 className="vertical-timeline-element-title">
                  {`Commit - ${index + 1}`}
                </h3>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      ) : (
        <h1 className="noCommitStyle">No Commits available</h1>
      )}
    </div>
  );
}
