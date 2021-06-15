import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import CardExampleHeaderCard from "../components/CommentCard";
import SearchBox from "../components/SearchBox";
import SelectBox from "../components/SelectBox";
import SearchButton from "../components/SearchButton";
import Employee from "../pages/Employee";
import Employer from "../pages/Employer";
import JobAdvertisement from "../pages/JobAdvertisement";
import { Route } from "react-router-dom";
import JobAdvertisementAddForm from "../forms/JobAdvertisementAddForm";

const SegmentExampleHorizontalSegments = () => (
  <div>
    <Segment.Group horizontal>
      <Segment style={{ backgroundColor: "lightblue" }}>
        <Route exact path="/" component={SearchBox} />
        <Route exact path="/" component={SelectBox} />
        <Route exact path="/" component={SearchButton} />
      </Segment>
    </Segment.Group>
    <Segment.Group horizontal>
      <Segment>
        <Route exact path="/" component={JobAdvertisement} />
        <Route exact path="/advertisement" component={JobAdvertisement} />{" "}
        <Route
          exact
          path="/jobadvertisement/add"
          component={JobAdvertisementAddForm}
        />
      </Segment>
      <Segment></Segment>
    </Segment.Group>
    <Segment.Group>
      <Segment>
        <CardExampleHeaderCard />
      </Segment>
    </Segment.Group>
  </div>
);

export default SegmentExampleHorizontalSegments;
