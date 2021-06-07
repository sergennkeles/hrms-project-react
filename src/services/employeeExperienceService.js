import axios from "axios";

export default class EmployeeExperienceService {
  getEmployeeExperinces() {
    return axios.get("http://localhost:8080/api/employeeexperiences/getAll");
  }

  getFindByEmployeeIdOrderByEndDateDesc(id) {
    return axios.get(
      "http://localhost:8080/api/employeeeducations/findByEmployeeIdOrderByEndDateDesc?employeeId=" +
        id
    );
  }
}
