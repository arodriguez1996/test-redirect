import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  return Response.redirect('https://devbetterflyapp.page.link/?link=https://navigation.betterfly.com/?to%3Dsuccess-process-activation-card&apn=com.betterfly.app.dev&isi=6450281350&ibi=com.betterfly.app.dev&efr=1', 301);
  // return Response.redirect('com.awesome.app://browser/close', 301);
}