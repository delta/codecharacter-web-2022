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
  codeHistory: CodeRevision[];
  mapHistory: GameMapRevision[];
};

export default function CommitHistory(props: PropsType): JSX.Element {
  const CircleIcon = {
    background: '#DFFF00',
    color: '#fff',
  };

  const [commitNumber, setCommitNumber] = useState('0');

  return (
    <VerticalTimeline layout={'1-column'} animate={false}>
      {props.codeHistory && props.codeHistory.length > 0 ? (
        props.codeHistory.map((eachCommit, index) => {
          return (
            <VerticalTimelineElement
              key={eachCommit.createdAt.toString()}
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
        })
      ) : (
        <h1>No Commit data</h1>
      )}
    </VerticalTimeline>
  );
}
