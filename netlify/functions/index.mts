import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  return Response.redirect('com.awesome.app://browser/close', 301);
}