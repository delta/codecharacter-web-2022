import { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './CommitHistory.css';

export default function CommitHistory(): JSX.Element {
  type CommitHistoryDetails = {
    commitName: string;
    commitDate: string;
    commitCode: string;
  };

  const CircleIcon = {
    background: '#DFFF00',
    color: '#fff',
  };

  const [commitNumber, setCommitNumber] = useState('0');

  const commitData: CommitHistoryDetails[] = [
    {
      commitName: 'First Commit',
      commitDate: '26-01-2022',
      commitCode: 'Commit 1',
    },
    {
      commitName: 'Second Commit',
      commitDate: '27-01-2022',
      commitCode: 'Commit 2',
    },
    {
      commitName: 'Third Commit',
      commitDate: '28-01-2022',
      commitCode: 'Commit 2',
    },
    {
      commitName: 'Fourth Commit',
      commitDate: '29-01-2022',
      commitCode: 'Commit 2',
    },
    {
      commitName: 'Fifth Commit',
      commitDate: '30-01-2022',
      commitCode: 'Commit 2',
    },
    {
      commitName: 'Sixth Commit',
      commitDate: '31-01-2022',
      commitCode: 'Commit 2',
    },
    {
      commitName: 'Seventh Commit',
      commitDate: '01-02-2022',
      commitCode: 'Commit 2',
    },
  ];

  return (
    <VerticalTimeline layout={'1-column'} animate={false}>
      {commitData && commitData.length > 0 ? (
        commitData.map(eachData => {
          return (
            <VerticalTimelineElement
              key={eachData.commitDate}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#242a3c', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              date={eachData.commitDate}
              iconStyle={
                commitNumber == eachData.commitName
                  ? CircleIcon
                  : { background: 'rgb(33, 150, 243)', color: '#fff' }
              }
              onTimelineElementClick={() => {
                setCommitNumber(eachData.commitName);
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {eachData.commitName}
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
