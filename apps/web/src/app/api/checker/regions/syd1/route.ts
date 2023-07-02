import { checker } from "../_checker";

export const runtime = "edge";
export const preferredRegion = ["syd1"];
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  await checker(request, preferredRegion[0]);
}
