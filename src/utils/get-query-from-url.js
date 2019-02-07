import qs from "qs";

export default function getQueryFromUrl(url) {
  const regex = /\?(.*)/;
  const match = url.match(regex);

  if (match) {
    const queryString = match[0].substring(1);
    return qs.parse(queryString);
  }

  return null;
}
