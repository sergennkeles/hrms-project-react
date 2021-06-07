import axios from "axios";

export default class EmployeeEducationService {
  getEducations() {
    return axios.get("http://localhost:8080/api/employeeeducations/getAll");
  }

  getFindByEmployeeIdOrderByEndDate(id) {
    return axios.get(
      "http://localhost:8080/api/employeeeducations/findByEmployeeIdOrderByEndDate?employeeId=" +
        id
    );
  }
}
