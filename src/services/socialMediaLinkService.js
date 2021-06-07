import axios from "axios";

export default class SocialMediaLinkService {
  getSocialMediaLinks() {
    return axios.get("http://localhost:8080/api/socialmedialinks/getall");
  }
}
