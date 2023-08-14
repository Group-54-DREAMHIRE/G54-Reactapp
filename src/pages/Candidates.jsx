import CandidateCard from '../Components/cards/candidate/CandidateCard';
const items = {
  profileImageUrl: 'https://img.freepik.com/premium-photo/young-girl-designer-working-office-with-her-colleagues-generative-ai_145713-4028.jpg?w=996', 
  name: 'Dulanjana Weerasinghe', 
  jobTitle: 'software engineer', 
  skills:["Pathon","Java","React"], 
  location: 'Matara', 
  salary: "$1000"
}

export default function Candidates() {
  return (
    <>
        <CandidateCard items={items}/>
    </>
  )
}
