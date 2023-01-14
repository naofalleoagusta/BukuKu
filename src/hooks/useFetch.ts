import useSWR from "swr";

import fetcher, { FetcherType } from "@/helpers/fetcher";

type DataResponse<T> = {
  data: T | undefined;
  loading: boolean;
  error: unknown;
};

const useFetch = <T>({ url, searchParams }: FetcherType): DataResponse<T> => {
  const { data, error } = useSWR<T>({ url, searchParams }, fetcher);

  return {
    data,
    loading: !data && !error,
    error,
  };
};

export default useFetch;
