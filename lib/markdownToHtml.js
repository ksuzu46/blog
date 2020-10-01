import { gfmUrl } from "./constants"
import axios from "axios";

export default async function markdownToHtml(text) {
  try {
    const res = await axios.post(
        gfmUrl,
        { text, mode: 'markdown' },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${process.env.GH_TOKEN}`,
          },
        }
    );
    const { data } = res;
    return data.toString() ;
  } catch (error) {
    console.log(error);
    return error;
  }
}
