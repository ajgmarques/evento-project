import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalize } from '@/app/lib/utils/utils';
import { z } from 'zod';

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props) {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  // const page = searchParams.page || 1;
  if (!parsedPage.success) {
    throw new Error('Invalid page number');
  }

  return (
    <>
      <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
        <H1 className='mb-28'>
          {city === 'all' && 'All events'}
          {city !== 'all' && `Events in ${capitalize(city)}`}
        </H1>

        <Suspense key={city + parsedPage.data} fallback={<Loading />}>
          <EventsList city={city} page={parsedPage.data} />
        </Suspense>
      </main>
    </>
  );
}
