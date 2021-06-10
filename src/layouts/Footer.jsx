import React from "react";
import { Segment, Grid, List } from "semantic-ui-react";
import Employee from "../pages/Employee";
import Employer from "../pages/Employer";
import JobAdvertisement from "../pages/JobAdvertisement";

const Footer = () => (
  <Segment.Group horizontal>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column width={6}>
          {" "}
          <Segment.Group style={{ margin: "5px" }}>
            <Segment>Hakkımızda</Segment>
            <Segment>
              HRMS Project ilan yayınlama sitesidir. Başvurular ilgili firmaya
              direkt olarak yapılmakta olup HRMS Project üzerinden hiçbir veri
              gönderilmemektedir. Sitemizde yayınlanan ilanlar tamamen
              ücretsizdir ve ilan sahipleri ile sitemizin hiçbir ilişkisi
              yoktur. Paylaşılan ilanlarda değişiklik yapma ve yayından kaldırma
              hakları HRMS Project'e aittir. Görüş ve önerileriniz için
              info@hrmsproject.com adresine e-posta gönderebilirsiniz..
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={10}>
          {" "}
          <Segment.Group horizontal style={{ margin: "5px" }}>
            {" "}
            <Segment>
              <Segment> Pozisyona Göre ilanlar</Segment>

              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Software Developer</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Software Architect</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Designer</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">DevOps</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Team Leader</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
            <Segment>
              <Segment> Şehirlere Göre ilanlar </Segment>
              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">İstanbul İş ilanları</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">İzmir İş ilanları</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Ankara İş ilanları</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Antalya İş ilanları</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Bursa İş ilanları</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
            <Segment>
              {" "}
              <Segment> İlan Tipine Göre ilanlar </Segment>
              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Tam zamanlı</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Yarı zamanlı</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Uzaktan</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Dönemsel</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Proje bazlı</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        {" "}
        <Grid.Column width={16}>
          <Segment>
            {" "}
            Bu site Engin Demiroğ'un Java & React Nitelikli Yazılım Geliştirici
            Kampı Kapsamında Sergen Keleş tarafından kodlanmıştır.
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment.Group>
);

export default Footer;
