import Skeleton from './skeleton';

export default function SkeletonCard() {
  return (
    <div className='space-y-4'>
      <Skeleton className='h-20 w-20 rounded-full' />
      <Skeleton className='h-4 w-[250px]' />
      <Skeleton className='h-4 w-[200px]' />
    </div>
  );
}
