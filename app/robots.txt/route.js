import ConnectDB from "@/DB_CONNECT/ConnectDB";
import projects from "@/models/projects";
import service from "@/models/services";
import teams from "@/models/teams";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const fetchAll = await fetchAllUri();
    const robotsTxt = generateRobotsTxt(fetchAll);

    return new NextResponse(robotsTxt, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "stale-while-revalidate, s-maxage=3600",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

const fetchAllUri = async () => {
  const uriList = [
    "/",
    "/services",
    "/ongoing-projects",
    "/completed-projects",
    "/teams",
    "/company-profile",
    "/contact",
  ];
  const serv = await service.find({}).select("_id");
  const products = await projects.find({ status: "completed" }).select("_id");
  const projectsList = await projects.find({ status: "ongoing" }).select("_id");
  const blogs = await teams.find({}).select("_id");

  const serviceUris = serv.map((item) => `/services/${item._id}`);
  const productUris = products.map((item) => `/completed-projects/${item._id}`);
  const prjctUrl = projectsList.map((item) => `/ongoing-projects/${item._id}`);
  const blogUris = blogs.map((item) => `/teams/${item._id}`);

  const allList = [
    ...uriList,
    ...serviceUris,
    ...prjctUrl,
    ...productUris,
    ...blogUris,
  ];
  return allList;
};

const generateRobotsTxt = (urls) => {
  let robotsTxt = `User-agent: *\n`;
  urls.forEach((url) => {
    robotsTxt += `Allow: ${url}\n`;
  });

  const disallowedPaths = ['/dashboard/'];
  disallowedPaths.forEach((path) => {
    robotsTxt += `Disallow: ${path}\n`;
  });

  robotsTxt += `Sitemap: https://ramannirmansewa.com.np/sitemap.xml\n`;
  return robotsTxt;
};
