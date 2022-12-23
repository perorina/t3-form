import type { NextApiRequest, NextApiResponse } from "next";
import * as geografis from "geografis";

type vilageListType = vilageType[];

type vilageType = {
  code: string;
  postal: number;
  slug: string;
  province: string;
  city: string;
  district: string;
  village: string;
  latitude: number;
  longitude: number;
  elevation: number;
  geometry: boolean;
};
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database

  const postalCode = parseInt(_req.query.code as string);
  const villagesQuery: vilageListType =
    geografis.getVillageByPostalCode(postalCode);

  const villageResponse = villagesQuery.map((value: vilageType) => {
    return {
      code: value.code,
      village: value.village,
    };
  });

  res.send({
    city: villagesQuery[0]?.city || null,
    postal: villagesQuery[0]?.postal || null,
    province: villagesQuery[0]?.province || null,
    district: villagesQuery[0]?.district || null,
    villages: villageResponse,
  });
}
