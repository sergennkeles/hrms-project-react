import axios from "axios";

export default class EmployeeSocialMediaService {
  getEmployeeSocialMedias() {
    return axios.get("http://localhost:8080/api/employeesocialmedias/getall");
  }
}
