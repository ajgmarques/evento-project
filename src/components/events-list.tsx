import { getEvents } from '@/app/lib/utils/server-utils';
import EventCard from '@/components/event-card';
import PaginationControls from '@/components/pagination-controls';

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCountEvents } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
  const nextPath =
    totalCountEvents > 6 * page ? `/events/${city}?page=${page + 1}` : '';

  return (
    <section
      className='max-w-[1100px] flex flex-wrap
        gap-10 justify-center px-5'
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
