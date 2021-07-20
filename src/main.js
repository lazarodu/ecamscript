import axios from "axios";
import * as funcoes from "./funcoes";
console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(2, 1));

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (error) {
      console.warn(error);
    }
  }
}
Api.getUserInfo("lazarodu");
