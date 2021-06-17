import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SystemUserService from "../services/systemUserService";
import { Card, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
export default function JobAdvertisementConfirm() {
  let { id } = useParams();

  const [passiveAdvertisements, setPassiveAdvertisements] = useState([]);

  useEffect(() => {
    let jobadvertisementService = new JobAdvertisementService();
    jobadvertisementService
      .getById(id)
      .then((result) => setPassiveAdvertisements(result.data.data));
  }, []);
  console.log(passiveAdvertisements);
  let systemUserService = new SystemUserService();
  return (
    <div>
      {" "}
      <Card.Group>
        <Card fluid="strong">
          <Card.Content>
            <Card.Header>
              {" "}
              {passiveAdvertisements.employer?.companyName}
            </Card.Header>
            <Card.Meta> </Card.Meta>
            <Card.Description></Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                onClick={systemUserService.getAdvertisementConfirm(true, id)}
              >
                Onayla
              </Button>
              <Button basic color="red">
                Reddet
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
