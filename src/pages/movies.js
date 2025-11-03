// Example: Next.js API route (pages/api/movies.js)
export default async function handler(req, res) {
  const { term, year } = req.query;
  const url = `http://www.omdbapi.com/?s=${term}&y=${year}&type=movie&apikey=705f847b`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}