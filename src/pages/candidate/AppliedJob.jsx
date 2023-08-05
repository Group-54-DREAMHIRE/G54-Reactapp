import { Steps } from 'antd';
const description = 'This is a description';

export default function AppliedJob() {
  return (
    <>
         <Steps
    current={2}
    status="finish"
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Process',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
    </>
  )
}
