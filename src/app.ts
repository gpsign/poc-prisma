import Express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import appRouter from "./routes/app.routes";
import prisma from "./database/database.connection";

const app = Express();

app.use(json());
app.use(cors());
app.use(appRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});

// (async () => {
// 	const result = await prisma.movie.findMany({ include: { ratings: true } });
// 	console.log(result);
// })();
