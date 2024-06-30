import type { SWRConfiguration, SWRResponse } from 'swr';
import useSWR from 'swr';

import defaultFetcherFn from '@/helpers';
import type { FetchQueryExtras } from '@/types/queries';
import { noop } from '@/utils';

const useGetData = <T>(
  key: string | null,
  url: string,
  extras?: FetchQueryExtras<T>,
): SWRResponse<T, Error> => {
  const { options, params, normalizer } = extras || {};
  const { onSuccess = noop, onError = noop } = options || {};

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

  const config: SWRConfiguration<T, Error> = {
    onSuccess,
    onError,
  };

  const { data, error, isValidating, mutate } = useSWR<T, Error>(
    key,
    fetcher,
    config,
  );

  return {
    data,
    error,
    isValidating,
    isLoading: isValidating && !data,
    mutate,
  };
};

export default useGetData;
