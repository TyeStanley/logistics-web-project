import clientPromise from "./connection.js";

let client: any;
let db: any;
let movies: any;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("sample_mflix");
    movies = await db.collection("movies");
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await init();
})();

// Movies
export async function getMovies() {
  try {
    if (!movies) await init();
    const result = await movies;
    result
      .find({})
      .limit(5)
      .map((user: any) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { movies: result };
  } catch (error) {
    return { error: "Failed to fetch movies!" };
  }
}
