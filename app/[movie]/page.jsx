import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  return res.results.map((movie) => {
    movie: toString(movie.id);
  });
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <div>
      <div>
        <h1>{res.title}</h1>
        <h2 className="text-lg">{res.release_date}</h2>

        <h2 className="text-lg">Runtime: {res.runtime} minutes</h2>

        <h2 className="text-sm bg-green-600 my-2 py-2 px-4 inline-block">
          Status: {res.status}
        </h2>

        <Image
          src={imagePath + res.backdrop_path}
          width={800}
          height={800}
          alt={res.title}
        />

        <p>{res.overview}</p>
      </div>
    </div>
  );
}
