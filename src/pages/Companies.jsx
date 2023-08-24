import { Col, Row } from "antd";
import CompanyCard from "../Components/cards/company/CompanyCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies, setCompanies } from "../store/company/companySlice";
import { useEffect, useState } from "react";
import { getData } from "../api/authenticationService";

export default function Companies() {
  const dispatch = useDispatch();
  const [companyData, setCompanyData] = useState([]);
  const companies = useSelector(getAllCompanies);
  useEffect(() => {
    console.log(companies, "Dula");
    if (companies === null) {
      console.log(companies, "weera");
      getData("/api/v1/company/getAllCompanies")
        .then((response) => {
          console.log(response);
          console.log(response.data);
          setCompanyData(response.data);
          console.log(companies);
          dispatch(setCompanies(response.data));
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
      console.log(companies);
    } else {
      setCompanyData(companies);
    }
  }, []);
  return (
    <>
      <Row>
        {companyData.map((company) => {
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
