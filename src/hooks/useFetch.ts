import useSWR from "swr";

import fetcher, { FetcherType } from "@/helpers/fetcher";

type DataResponse<T> = {
  data: T | undefined;
  error: unknown;
};

const useFetch = <T>({ url, searchParams }: FetcherType): DataResponse<T> => {
  const { data, error } = useSWR<T>({ url, searchParams }, fetcher, {
    shouldRetryOnError: false,
  });

  return {
    data,
    error,
  };
};

export default useFetch;
