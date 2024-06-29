export interface QueryOptions<T> {
  onError?: (error: Error) => void;
  onSuccess?: (data: T) => void;
  retry?: boolean | number;
}

export interface QueryExtras<T> {
  normalizer?: (data: T) => T;
}

export interface FetchOptions<T> extends QueryOptions<T> {
  enabled?: boolean;
  initialData?: T | undefined;
}

export type FetchQueryExtras<T> = {
  params?: Record<string, unknown>;
  options?: FetchOptions<T>;
} & QueryExtras<T>;
