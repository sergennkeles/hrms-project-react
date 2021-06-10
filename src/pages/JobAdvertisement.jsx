import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import JobAdversimentService from "../services/jobAdvertisementService";
export default function JobAdvertisement() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdversimentService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setjobAdvertisements(result.data.data), []);
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İlan Başlığı</Table.HeaderCell>
            <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Eleman Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Meslek</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.description}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openPositionNumber}</Table.Cell>
              <Table.Cell>{jobAdvertisement.job.jobsName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
}
