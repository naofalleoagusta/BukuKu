export type FetcherType = {
  url: string;
  searchParams?: {
    key: string;
    value: string;
  }[];
};

const fetcher = async ({ url, searchParams }: FetcherType) => {
  const tempUrl = new URL(url);
  if (searchParams) {
    searchParams.forEach((searchParam) => {
      tempUrl.searchParams.append(searchParam.key, searchParam.value);
    });
  }
  const res = await fetch(tempUrl);
  return res.json();
};

export default fetcher;
