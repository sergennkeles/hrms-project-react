import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Table, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function PassiveAdvertisements() {
  const [passiveAdvertisements, setPassiveAdvertisements] = useState([]);

  useEffect(() => {
    let jobadvertisementService = new JobAdvertisementService();
    jobadvertisementService
      .getPassiveobAdvertisements()
      .then((result) => setPassiveAdvertisements(result.data.data));
  }, []);
  console.log(passiveAdvertisements);

  return (
    <div>
      <form>
        <div className="form-control">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İlan Başlığı</Table.HeaderCell>
                <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                <Table.HeaderCell>Eleman Sayısı</Table.HeaderCell>
                <Table.HeaderCell>Durum</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {passiveAdvertisements.map((passiveAdvertisements) => (
                <Table.Row key={passiveAdvertisements.id}>
                  <Table.Cell>{passiveAdvertisements.job?.jobsName}</Table.Cell>
                  <Table.Cell>
                    {passiveAdvertisements.employer?.companyName}
                  </Table.Cell>
                  <Table.Cell>
                    {passiveAdvertisements.openPositionNumber}
                  </Table.Cell>
                  <Table.Cell>Pasif</Table.Cell>
                  <Table.Row>
                    {" "}
                    <Button
                      as={NavLink}
                      to={`/jobadvertisement/confirm/${passiveAdvertisements.id}`}
                    >
                      Onayla
                    </Button>
                  </Table.Row>
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Footer></Table.Footer>
          </Table>
        </div>
      </form>
    </div>
  );
}
