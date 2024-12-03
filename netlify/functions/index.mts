import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {  
  // com.betterfly.app://flexible-remuneration/activation/success
  // com.betterfly.app://flexible-remuneration/activation/error
  // return Response.redirect('com.betterfly.app://browser/flexible-remuneration/activation/success', 301);
  return Response.redirect('com.betterfly.app://browser/flexible-remuneration/activation/error', 301);
}