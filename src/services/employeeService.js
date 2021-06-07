import axios from "axios";

export default class EmployeeService {
  getEmployees() {
    return axios.get("http://localhost:8080/api/employees/getall");
  }

  getEmployeesById(id) {
    return axios.get(
      "http://localhost:8080/api/employees/findByEmployeeId?employeeId=" + id
    );
  }
}
