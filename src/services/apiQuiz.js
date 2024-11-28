const API_URL = `https://www.otriviata.com/api.php?amount=10&type=multiple&category=`;

export default async function getQuestions(topic, level) {
  const res = await fetch(
    `${API_URL}${topic.split(":")[0]}&difficulty=${level.toLowerCase()}`
  );

  if (!res.ok) throw Error("Failed getting questions");

  const data = await res.json();

  if (data.results.length === 0) {
    throw new Error(
      "Questions are not available for this topic. Try another one!"
    );
  }

  return data.results;
}
