import { Col, Row } from "antd";
import CompanyCard from "../Components/cards/company/CompanyCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies, setCompanies } from "../store/company/companySlice";
import { useEffect, useState } from "react";
import { getData } from "../api/authenticationService";

const list = [
  {
    name: "Creative Software",
    description:
      "Creative Software builds and manages high-performing software development teams to bring big ideas to life.Whether you want to extend your in-house team or need assistance with developing, quality assuring, or supporting your application, we can help.",
    cover:
      "https://images.pexels.com/photos/3797402/pexels-photo-3797402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Creative Software",
    description:
      "Creative Software builds and manages high-performing software development teams to bring big ideas to life.Whether you want to extend your in-house team or need assistance with developing, quality assuring, or supporting your application, we can help.",
    cover:
      "https://images.pexels.com/photos/3810762/pexels-photo-3810762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Creative Software",
    description:
      "Creative Software builds and manages high-performing software development teams to bring big ideas to life.Whether you want to extend your in-house team or need assistance with developing, quality assuring, or supporting your application, we can help.",
    cover:
      "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Creative Software",
    description:
      "Creative Software builds and manages high-performing software development teams to bring big ideas to life.Whether you want to extend your in-house team or need assistance with developing, quality assuring, or supporting your application, we can help.",
    cover:
      "https://images.pexels.com/photos/7433825/pexels-photo-7433825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Creative Software",
    description:
      "Creative Software builds and manages high-performing software development teams to bring big ideas to life.Whether you want to extend your in-house team or need assistance with developing, quality assuring, or supporting your application, we can help.",
    cover:
      "https://images.pexels.com/photos/5686105/pexels-photo-5686105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Creative Software",
    description:
      "Creative Software builds and manages high-performing software development teams to bring big ideas to life.Whether you want to extend your in-house team or need assistance with developing, quality assuring, or supporting your application, we can help.",
    cover:
      "https://images.pexels.com/photos/3182835/pexels-photo-3182835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
];
export default function Companies() {
  const dispatch = useDispatch();
  const [companyData, setCompanyData] = useState([]);
  const companies = useSelector(getAllCompanies);
  // useEffect(() => {
  //   console.log(companies, "Dula");
  //   if (companies === null) {
  //     getData("/api/v1/company/getAllCompanies")
  //       .then((response) => {
  //         console.log(response.data);
  //         setCompanyData(response.data);
  //         console.log(companies);
  //         dispatch(setCompanies(response.data));
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user profile:", error);
  //       });
  //     console.log(companies);
  //   } else {
  //     setCompanyData(companies);
  //   }
  // }, []);
  return (
    <>
      <Row>
        {list.map((company) => {
          return (
            <Col span={16}>
              <CompanyCard company={company} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
