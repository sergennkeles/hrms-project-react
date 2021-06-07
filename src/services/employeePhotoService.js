import axios from "axios";

export default class EmployeePhotoService {
  getEmployeePhotos() {
    return axios.get("http://localhost:8080/api/photos/getall");
  }
}
