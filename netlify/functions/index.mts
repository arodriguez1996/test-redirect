import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  // return Response.redirect('https://devbetterflyapp.page.link/?link=https://navigation.betterfly.com/?to%3Dsuccess-process-activation-card&apn=com.betterfly.app.dev&isi=6450281350&ibi=com.betterfly.app.dev&efr=1', 301);
  // com.betterfly.app://flexible-remuneration/activation/success
  // com.betterfly.app://flexible-remuneration/activation/error
  return Response.redirect('com.betterfly.app://browser/flexible-remuneration/activation/success', 301);
}