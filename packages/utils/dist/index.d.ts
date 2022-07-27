import * as react from 'react';

declare type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

interface UseApiConfig<T> {
    initialData?: T;
}
declare type ApiFunction<T = unknown> = (...args: unknown[]) => T | Promise<T>;
declare function useApi<TData = unknown, TError = unknown>(fn: ApiFunction<TData>, config?: UseApiConfig<TData>): {
    isIdle: boolean;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: TData | undefined;
    setData: react.Dispatch<react.SetStateAction<TData | undefined>>;
    status: ApiStatus;
    setStatus: react.Dispatch<react.SetStateAction<ApiStatus>>;
    error: unknown;
    exec: <A>(...args: A[]) => Promise<{
        data: Awaited<TData>;
        error: null;
    } | {
        error: unknown;
        data: null;
    }>;
};

export { useApi };
