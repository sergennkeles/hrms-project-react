import axios from "axios";

export default class EmployeeLanguageService {
  getEmployeeLanguages() {
    return axios.get("http://localhost:8080/api/employeelanguages/getall");
  }
}
