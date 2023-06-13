import { NextResponse } from "next/server";
import { getMovies } from "../../../lib/mongo/movies.js";

export async function GET() {
  try {
    const { movies, error } = await getMovies();
    if (error) throw new Error(error);

    return NextResponse.json(movies);
  } catch (error) {
    return new Error(JSON.stringify({ error: error }));
  }
}
