import axios from "axios";

export default class EmployeeTechnologyService {
  getEmployeeTechnologies() {
    return axios.get("http://localhost:8080/api/employeetechnologies/getall");
  }
}
