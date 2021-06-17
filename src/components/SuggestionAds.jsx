import React, { useEffect, useState } from "react";
import { Card, Feed, Divider } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function SuggestionAds() {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    let jobAds = new JobAdvertisementService();
    jobAds.getById(12).then((result) => {
      setAds(result.data.data);
    });
  }, []);

  const [adss, setAdss] = useState([]);
  useEffect(() => {
    let jobAds = new JobAdvertisementService();
    jobAds.getById(3).then((result) => {
      setAdss(result.data.data);
    });
  }, []);
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>Öne Çıkan İlanlar</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Date content={ads.deadLineDate} />
                <Feed.Summary>{ads.employer?.companyName}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Content>
                <Feed.Date content={adss.deadLineDate} />
                <Feed.Summary>{adss.employer?.companyName}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </div>
  );
}
