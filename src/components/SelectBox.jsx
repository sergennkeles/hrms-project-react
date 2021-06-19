import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import CityService from "../services/cityService";

export default function SelectBox() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const abc = cities.map((city) => ({
    key: city.id,
    value: city.cityName,
    flag: "tr",
    text: city.cityName,
  }));

  return (
    <div>
      <Dropdown
        style={{ marginTop: "1em" }}
        search
        selection
        placeholder="Şehir seçiniz"
        options={abc}
      />
    </div>
  );
}
