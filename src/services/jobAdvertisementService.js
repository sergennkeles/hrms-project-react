import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisements() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getall");
  }

  getFindByIsActiveTrueAndEmployerId(id) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/findByIsActiveTrueAndEmployerId?id=" +
        id
    );
  }

  getJobAdvertisementWithDetails() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getJobAdvertisementWithDetails"
    );
  }

  getActiveJobAdvertisements() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getActiveAdvertisement"
    );
  }
  getById(id) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getById?id=" + id
    );
  }
  getPassiveobAdvertisements() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getPassiveAdvertisement"
    );
  }
  add(values) {
    return axios.post(
      "http://localhost:8080/api/jobadvertisements/add",
      values
    );
  }
}
