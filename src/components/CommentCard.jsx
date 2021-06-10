import React from "react";
import { Card } from "semantic-ui-react";

const CardExampleHeaderCard = () => (
  <Card.Group centered>
    <Card>
      <Card.Content>
        <Card.Header>Steve Jobs</Card.Header>
        <Card.Meta>Apple, Ceo</Card.Meta>
        <Card.Description>
          İlk defa kullandığımız bu platformda olumlu sonuçlar aldık.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header content="Bill Gates" />
        <Card.Meta content="Microsoft, Ceo" />
        <Card.Description content="İhtiyaçlarımız doğrultusunda doğru elemanlara ulaştığımız faydalı bir platform" />
      </Card.Content>
    </Card>

    <Card>
      <Card.Content
        header="Sergen Keleş"
        meta="Öğretmen"
        description="Bu platform bir harika dostum. Sende derhal bize katıl ve binlerce iş fırsatını değerlendir."
      />
    </Card>
  </Card.Group>
);

export default CardExampleHeaderCard;
