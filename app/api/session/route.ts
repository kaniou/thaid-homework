import { SessionData, defaultSession, sessionOptions } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const formData = await request.formData();

  session.isLoggedIn = true;
  session.pid = formData.get("pid") as string;
  session.name = formData.get("name") as string;
  session.name_en = formData.get("name_en") as string;
  session.birthdate = formData.get("birthdate") as string;
  session.address = formData.get("address") as string;

  await session.save();

  return Response.redirect(`${request.nextUrl.origin}/welcome`, 303);
}

export async function GET(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const action = new URL(request.url).searchParams.get("action");
  if (action === "logout") {
    session.destroy();
    return redirect(
      "/",
    );
  }

  if (session.isLoggedIn !== true) {
    return Response.json(defaultSession);
  }

  return Response.json(session);
}