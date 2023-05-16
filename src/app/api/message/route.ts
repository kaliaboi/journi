import { openai } from "../../lib/openai";

export async function GET(request: Request) {
  console.log(openai);
}
