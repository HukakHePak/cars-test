import express, { Request, Response } from "express"
import programs from "../../../client/constants/programs";

const router = express.Router()

router.use(express.static("./public/"))
router.use('/help', (req: Request, res: Response) => {
  res.send(programs);
});

const publicRoute = router

export default publicRoute
