import { Row, Col } from "antd";
import { useEffect,useState } from 'react';
import PendingInterviewCard from '../../../Components/cards/candidate/PendingInterviewCard';
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchUserData } from "../../../api/authenticationService";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setHrList, setTechList, setTimeList } from "../../../store/company/applyJobSlice";

const items = [
    {
      company: "Creative Software",
      type: "HR interview",
      role: "Business Analyst",
      
    },

    {
      company: "Cloud Solution International",
      type: "TECH interview",
      role: "Full stack developer",
      
    },  
  ];
  export default function Interviews() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("USER"));
    const userId = user.id;
    const id = useSelector((state)=>state.applyJob.activeJobId);
    const [techInterviewList, setTechInterviewList] = useState([]);
    const [hrInterviewList, setHrInterviewList] = useState([]);
    const [showHrList, setShowHrList] = useState([]);
    const [asgSlotTech, setAsgSlotTech] = useState({});
    const [asgSlotHr, setAsgSlotHr] = useState({});
    const [showTechList, setShowTechList] = useState([]);
    useEffect(() => {
      // setLoading(true);
      const sendData = {
        jobId: id,
      };
      let data = {
        url: `/api/v1/interview/getScheduledTechInterviews/${userId}`,
        data: sendData,
        method: "post",
      };
        fetchUserData(data).then((response)=>{
          console.log(response);
          setTechInterviewList(response.data);
          setAsgSlotTech(response.data[0]);
        }).catch((e)=>{
          console.log(e);
        })
    }, []);

    useEffect(() => {
      // setLoading(true);
      const sendData = {
        jobId: id,
      };
      let data = {
        url: `/api/v1/interview/getScheduledHrInterviews/${userId}`,
        data: sendData,
        method: "post",
      };
        fetchUserData(data).then((response)=>{
          console.log(response);
          setHrInterviewList(response.data);
          setAsgSlotHr(response.data[0]);
        }).catch((e)=>{
          console.log(e);
        })
    }, []);
  
    useEffect(() => {
      if(techInterviewList!==null && asgSlotTech ){
        let key = 0;
        let job = asgSlotTech.jobPost || [];
        let tempDateList = {
          id: key,
          intId: asgSlotTech.id,
          date: asgSlotTech.startTime,
          title:job.jobTitle,
          companyName:job.companyName,
          type: asgSlotTech.type ,
          withInt: asgSlotTech.withInt,
          times: [
            {
              startTime: asgSlotTech.startTime,
              duration:asgSlotTech.duration,
              intId:asgSlotTech.id
            },
          ],
        };
        const initialShowList = [tempDateList];
        for (let i = 0; i < techInterviewList.length; i++) {
          if (i < techInterviewList.length - 1) {
            const nextInterview = techInterviewList[i + 1];
    
            // Compare the dates (you may need to adjust the date comparison logic)
            if (
              moment(tempDateList.date).isSame(
                moment(nextInterview.startTime),
                "day"
              )
            ) {
              const tempData = {
                startTime: nextInterview.startTime,
                duration: nextInterview.duration,
                intId:nextInterview.id
              };
              tempDateList.times.push(tempData);
            } else {
              key = key + 1;
              const newDateList = {
                id: key,
                intId: nextInterview.id,
                date: nextInterview.startTime,
                title:nextInterview.jobPost.jobTitle,
                companyName:nextInterview.jobPost.companyName,
                type: nextInterview.type,
                withInt: nextInterview.withInt,
                times: [
                  {
                    startTime: nextInterview.startTime,
                    duration: nextInterview.duration,
                    intId: nextInterview.id
                  },
                ],
              };
              initialShowList.push(newDateList);
              tempDateList = newDateList;
            }
            
          }
        }
        dispatch(setTechList(initialShowList));
        setShowTechList(initialShowList);
      }
    }, [techInterviewList]);
    useEffect(() => {
      if(hrInterviewList!==null && asgSlotHr){
        let key = 0;
        let job = asgSlotHr.jobPost || [];
        let tempDateList = {
          id: key,
          intId: asgSlotHr.id,
          date: asgSlotHr.startTime,
          title:job.jobTitle,
          companyName:job.companyName,
          type: asgSlotHr.type,
          withInt: asgSlotHr.withInt,
          times: [
            {
              startTime: asgSlotHr.startTime,
              duration: asgSlotHr.duration,
              intId: asgSlotHr.id,
            },
          ],
        };
        const initialShowList = [tempDateList];
        for (let i = 0; i < hrInterviewList.length; i++) {
          if (i < hrInterviewList.length - 1) {
            const nextInterview = hrInterviewList[i + 1];
    
            // Compare the dates (you may need to adjust the date comparison logic)
            if (
              moment(tempDateList.date).isSame(
                moment(nextInterview.startTime),
                "day"
              )
            ) {
              const tempData = {
                startTime: nextInterview.startTime,
                duration: nextInterview.duration,
                intId: nextInterview.id
              };
              tempDateList.times.push(tempData);
            } else {
              key = key + 1;
              const newDateList = {
                id: key,
                intId: nextInterview.id,
                date: nextInterview.startTime,
                title:nextInterview.jobPost.jobTitle,
                companyName:nextInterview.jobPost.companyName,
                type: nextInterview.type,
                withInt: nextInterview.withInt,
                times: [
                  {
                    startTime: nextInterview.startTime,
                    duration: nextInterview.duration,
                    intId: nextInterview.id
                  },
                ],
              };
              initialShowList.push(newDateList);
              tempDateList = newDateList;
            }
          }
        }
        dispatch(setHrList(initialShowList));
        setShowHrList(initialShowList);
      }
    }, [hrInterviewList]);
    return (
      <>
        <Row gutter={[20,20]} style={{padding:'5% 0'}}>
              { techInterviewList.length === 0? null: 
                 ( <Col span={9}
                    onClick={()=>{navigate(`/interviewdetails`);
                                  dispatch(setTimeList(1))}}>
                   <PendingInterviewCard
                   item={showTechList[0] || {}} type="tech" />
                  </Col>)
              }
              { hrInterviewList.length === 0? null: 
                 ( <Col span={9}
                    onClick={()=>{navigate(`/interviewdetails`);
                                  dispatch(setTimeList(2))}}>
                   <PendingInterviewCard
                   type="hr" 
                   item={showHrList[0] || {}} />
                  </Col>)
              }
        </Row>
      </>
    )
  }
  