import { z } from "zod";

import { router, publicProcedure } from "../trpc";

import * as geografis from "geografis";
export const admRouter = router({
  getProv: publicProcedure
    .input(
      z
        .object({
          code: z.number(),
        })
        .required()
    )
    .query(({ input }) => {
      const village = geografis.getVillageByPostalCode(input?.code);
      return village;
    }),
});
