import axios from "axios";

export default class SystemUserService {
  getAdvertisementConfirm(isActive, advertisementId) {
    return axios.put(
      "http://localhost:8080/api/jobadvertisements/setValueActive?active=" +
        isActive +
        "&id=" +
        advertisementId
    );
  }
}
