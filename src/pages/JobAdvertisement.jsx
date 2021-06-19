import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "semantic-ui-react";
import JobAdversimentService from "../services/jobAdvertisementService";
export default function JobAdvertisement({ show }) {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdversimentService();
    jobAdvertisementService
      .getJobAdvertisementWithDetails()
      .then((result) => setjobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      {jobAdvertisements.map((jobAdvertisement) => (
        <Card
          as={NavLink}
          key={jobAdvertisement.id}
          to={"/jobadvertisement/detail/" + jobAdvertisement.advertisementId}
          color="blue"
          fluid
          header={jobAdvertisement.jobsName}
          meta={jobAdvertisement.companyName}
          description={jobAdvertisement.workingType}
          onClick={show}
        ></Card>
      ))}{" "}
    </div>
  );
}
