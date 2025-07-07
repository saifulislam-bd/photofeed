import { loadDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await loadDictionary(lang);
  return (
    <div>
      <h1>{dictionary.followers}</h1>
    </div>
  );
}
