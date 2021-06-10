import React, { useEffect, useState } from "react";
import { Select } from "semantic-ui-react";
import CityService from "../services/cityService";

export default function SelectBox() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data), []);
  });

  const countryOptions = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
    { key: "al", value: "al", text: "Albania" },
    { key: "dz", value: "dz", text: "Algeria" },
    { key: "as", value: "as", text: "American Samoa" },
    { key: "ad", value: "ad", text: "Andorra" },
    { key: "ao", value: "ao", text: "Angola" },
    { key: "ai", value: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", text: "Antigua" },
    { key: "ar", value: "ar", text: "Argentina" },
    { key: "am", value: "am", text: "Armenia" },
    { key: "aw", value: "aw", text: "Aruba" },
    { key: "au", value: "au", text: "Australia" },
    { key: "at", value: "at", text: "Austria" },
    { key: "az", value: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", text: "Barbados" },
    { key: "by", value: "by", text: "Belarus" },
    { key: "be", value: "be", text: "Belgium" },
    { key: "bz", value: "bz", text: "Belize" },
    { key: "bj", value: "bj", text: "Benin" },
  ];

  return (
    <div>
      <Select
        style={{ marginTop: "3em" }}
        placeholder="Bir şehir seçiniz"
        options={countryOptions}
      />
    </div>
  );
}
