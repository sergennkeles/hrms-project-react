import React, { useEffect, useState } from "react";
import { Card, Feed, Divider } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementDetailCard() {
  let { id } = useParams();
  const [ads, setAds] = useState([]);
  useEffect(() => {
    let jobAds = new JobAdvertisementService();
    jobAds.getById(12).then((result) => {
      setAds(result.data.data);
    });
  }, []);

  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>İlan Detayları</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Label content="Son Başvuru Tarihi" />
                <Feed.Summary>{ads.deadLineDate}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Content>
                <Feed.Label content="Pozisyon" />
                <Feed.Summary>{ads.job?.jobsName}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Content>
                <Feed.Label content="Lokasyon" />
                <Feed.Summary>{ads.city?.cityName}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Content>
                <Feed.Label content="Web Site" />
                <Feed.Summary>{ads.employer?.webSite}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Content>
                <Feed.Label content="Çalışma Şekli" />
                <Feed.Summary>{ads.workingType?.workingType}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Content>
                <Feed.Label content="Çalışma Zamanı" />
                <Feed.Summary>{ads.workingTime?.workingTime}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Divider />
          </Feed>
        </Card.Content>
      </Card>
    </div>
  );
}
