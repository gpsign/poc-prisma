import prisma from "../src/database/database.connection";

function userUpsert(name: string) {
	return prisma.user.upsert({
		create: {
			username: name,
		},
		update: {},
		where: { username: name },
	});
}

function movieUpsert(title: string, launchDate: Date) {
	return prisma.movie.upsert({
		create: {
			title: title,
			launchDate: launchDate,
		},
		update: {},
		where: { title: title },
	});
}

async function ratingUpsert(
	username: string,
	movieTitle: string,
	stars: number
) {
	const user = await prisma.user.findUnique({
		where: { username: username },
		select: { id: true },
	});

	const movie = await prisma.movie.findUnique({
		where: { title: movieTitle },
		select: { id: true },
	});

	return prisma.rating.upsert({
		create: {
			userId: user.id,
			movieId: movie.id,
			stars: stars,
		},
		update: {},
		where: { combId: { userId: user.id, movieId: movie.id } },
	});
}

async function rentUpsert(name: string, title: string) {
	const user = await prisma.user.findUnique({
		where: { username: name },
		select: { id: true },
	});

	const movie = await prisma.movie.findUnique({
		where: { title: title },
		select: { id: true },
	});

	return prisma.user.update({
		data: { movieRented: movie.id },
		where: { id: user.id },
	});
}

async function main() {
	await userUpsert("Gabriel");
	await userUpsert("Eduardo");
	await userUpsert("Luiz");

	await movieUpsert("The Return Of The Living Dead", new Date(86, 2, 6));
	await movieUpsert("Drive", new Date(2011, 8, 16));
	await movieUpsert("American Psycho", new Date(2000, 0, 21));
	await movieUpsert("Evil Dead", new Date(81, 9, 15));
	await movieUpsert(
		"Dungeons & Dragons: Honor Among Thieves",
		new Date(2023, 2, 31)
	);
	await movieUpsert("Worst Movie Ever", new Date());

	await ratingUpsert("Gabriel", "The Return Of The Living Dead", 5);

	await ratingUpsert("Gabriel", "Drive", 3);
	await ratingUpsert("Eduardo", "Drive", 5);
	await ratingUpsert("Luiz", "Drive", 4);

	await ratingUpsert("Eduardo", "American Psycho", 4);
	await ratingUpsert("Luiz", "American Psycho", 5);

	await ratingUpsert("Gabriel", "Evil Dead", 4);
	await ratingUpsert("Eduardo", "Evil Dead", 3);
	await ratingUpsert("Luiz", "Evil Dead", 1);

	await ratingUpsert("Gabriel", "Dungeons & Dragons: Honor Among Thieves", 5);
	await ratingUpsert("Eduardo", "Dungeons & Dragons: Honor Among Thieves", 4);

	await rentUpsert("Gabriel", "The Return Of The Living Dead");
	await rentUpsert("Eduardo", "Drive");
	await rentUpsert("Luiz", "American Psycho");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
