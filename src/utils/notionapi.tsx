import axios from "axios";

const target =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://chilly-gerbil-personal-project-mina.koyeb.app/";

export async function getProjectData() {
  try {
    const result = await axios.get(`${target}api`);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

export async function createPage(data: any) {
  try {
    const response = await axios.post(`${target}createPage`, data);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}