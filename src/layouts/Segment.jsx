import React, { useState } from "react";
import { Segment, Grid } from "semantic-ui-react";
import CardExampleHeaderCard from "../components/CommentCard";
import SearchBox from "../components/SearchBox";
import SelectBox from "../components/SelectBox";
import SearchButton from "../components/SearchButton";
import JobAdvertisement from "../pages/JobAdvertisement";
import { Route } from "react-router-dom";
import JobAdvertisementAddForm from "../forms/JobAdvertisementAddForm";
import PassiveAdvertisements from "../forms/PassiveJobAdvertisements";
import JobAdvertisementConfirm from "../forms/JobAdvertisementConfirm";
import SuggestionAds from "../components/SuggestionAds";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import JobAdvertisementDetailCard from "../components/JobAdvertisementDetailCard";

export default function SegmentExampleHorizontalSegments() {
  return (
    <div>
      <Segment.Group horizontal>
        <Segment style={{ backgroundColor: "lightblue" }}>
          <Route exact path="/" component={SearchBox} />
          <Route exact path="/" component={SelectBox} />
          <Route exact path="/" component={SearchButton} />
        </Segment>
      </Segment.Group>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment.Group horizontal>
              <Segment>
                <Route exact path="/" component={JobAdvertisement} />
                <Route
                  exact
                  path="/jobadvertisement"
                  component={JobAdvertisement}
                />{" "}
                <Route
                  exact
                  path="/jobadvertisement/add"
                  component={JobAdvertisementAddForm}
                />
                <Route
                  exact
                  path="/jobadvertisement/passive"
                  component={PassiveAdvertisements}
                />
                <Route
                  path="/jobadvertisement/confirm/:id"
                  component={JobAdvertisementConfirm}
                />
                <Route
                  path="/jobadvertisement/detail/:id"
                  component={JobAdvertisementDetail}
                />
              </Segment>
              <Grid.Row>
                <Segment style={{ margin: "1em" }}>
                  <SuggestionAds />
                </Segment>
              </Grid.Row>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Segment.Group>
        <Segment>
          <CardExampleHeaderCard />
        </Segment>
      </Segment.Group>
    </div>
  );
}
