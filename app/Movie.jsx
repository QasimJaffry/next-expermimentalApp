import Image from "next/image";
import Link from "next/link";

const Movie = ({ title, id, release_date, poster_path }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div id={id}>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Movie;
