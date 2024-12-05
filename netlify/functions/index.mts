import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {  
  // return Response.redirect('com.betterfly.app://browser/flexible-remuneration/activation/success', 301);
  return Response.redirect('com.betterfly.app://browser/flexible-remuneration/activation/error', 301);
}