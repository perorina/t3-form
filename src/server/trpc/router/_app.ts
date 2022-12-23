import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { admRouter } from "./adm";
export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  adm: admRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
