'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import useGetData from '@/hooks/useGetData';

const Page = () => {
  // const { data, error } = useSWR('https://api.github.com/repos/vercel/swr', fetcher);
  const { data, error, isLoading } = useGetData<{
    name: string;
    images: Array<{ url: string }>;
  }>('new-releases', 'artists/4Ui2kfOqGujY81UcPrb5KE');

  // const { data, error, isLoading } = useGetData<{ name: string }>(
  //   'test',
  //   '/swr', // URL endpoint
  //   {
  //     options: {
  //       onSuccess: () => console.log('User data fetched successfully!'),
  //       onError: () => console.log('Failed to fetch user data!'),
  //     },
  //     params: {
  //       // Additional query parameters if needed
  //     },
  //   },
  // );

  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';

  return (
    <div>
      <h1>{data?.name}</h1>
      <Image
        src={data?.images[0].url || ''}
        alt="test"
        width={500}
        height={500}
      />
      <Button variant="destructive">Click me</Button>
    </div>
  );
};

export default Page;
