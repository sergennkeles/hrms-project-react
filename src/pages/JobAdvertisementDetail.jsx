import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, Segment } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobAdvertisementDetailCard from "../components/JobAdvertisementDetailCard";
export default function JobAdvertisementDetail() {
  let { id } = useParams();
  const [adsDetails, setAdsDetails] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getById(id).then((result) => {
      setAdsDetails(result.data.data);
    });
  }, [id]);
  return (
    <div>
      <Segment.Group horizontal>
        <Segment>
          <List as="ol" key={adsDetails.id}>
            <List.Item>{adsDetails.job?.jobsName}</List.Item>
            <List.Item>{adsDetails.description}</List.Item>
          </List>
        </Segment>
        <JobAdvertisementDetailCard />
      </Segment.Group>
    </div>
  );
}
