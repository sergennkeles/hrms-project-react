import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import SystemUserService from "../services/systemUserService";
import { Card, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { toast } from "react-toastify";
export default function JobAdvertisementConfirm() {
  let { id } = useParams();

  const [passiveAdvertisements, setPassiveAdvertisements] = useState([]);

  useEffect(() => {
    let jobadvertisementService = new JobAdvertisementService();
    jobadvertisementService
      .getById(id)
      .then((result) => setPassiveAdvertisements(result.data.data));
  }, [id]);
  console.log(passiveAdvertisements);
  let systemUserService = new SystemUserService();
  const history = useHistory();
  function ConfirmAds() {
    systemUserService.getAdvertisementConfirm(true, id);
    toast.success("İlan onaylandı.");
    history.push("/");
  }
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
            <Card.Meta>{passiveAdvertisements.employer?.webSite} </Card.Meta>
            <Card.Description>
              {passiveAdvertisements.job?.jobsName}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={ConfirmAds()}>Onayla</Button>
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
