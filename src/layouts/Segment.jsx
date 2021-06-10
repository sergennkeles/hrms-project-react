import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import CardExampleHeaderCard from "../components/CommentCard";
import SearchBox from "../components/SearchBox";
import SelectBox from "../components/SelectBox";
import SearchButton from "../components/SearchButton";
import Employee from "../pages/Employee";
import Employer from "../pages/Employer";
import JobAdvertisement from "../pages/JobAdvertisement";

const SegmentExampleHorizontalSegments = () => (
  <div>
    <Segment.Group horizontal>
      <Segment style={({ padding: "100em" }, { backgroundColor: "lightblue" })}>
        <SearchBox />
        <SelectBox />
        <SearchButton />
      </Segment>
    </Segment.Group>
    <Segment.Group horizontal>
      <Segment>
        <Employer />
      </Segment>
      <Segment>
        <Employee />
      </Segment>
      <Segment>
        <JobAdvertisement />
      </Segment>
    </Segment.Group>
    <Segment.Group>
      <Segment>
        <CardExampleHeaderCard />
      </Segment>
    </Segment.Group>
  </div>
);

export default SegmentExampleHorizontalSegments;
