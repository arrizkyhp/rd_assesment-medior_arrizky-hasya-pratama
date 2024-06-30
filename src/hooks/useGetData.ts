import useSWR from 'swr';

import defaultFetcherFn from '@/helpers';
import type { FetchQueryExtras } from '@/types/queries';
import noop from '@/utils';

const useGetData = <T>(
  key: string,
  url: string,
  extras?: FetchQueryExtras<T>,
) => {
  const { options, params, normalizer } = extras || {};
  const {
    initialData = undefined,
    onSuccess = noop,
    onError = noop,
  } = options || {};

  const fetcher = () =>
    defaultFetcherFn<T>({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'get',
      normalizer,
      url,
      params,
    });

  const { data, error, isValidating, mutate } = useSWR<T, Error>(key, fetcher, {
    initialData,
    onSuccess,
    onError,
  });

  return {
    data,
    error,
    isValidating,
    isLoading: isValidating && !data,
    mutate,
  };
};

export default useGetData;
