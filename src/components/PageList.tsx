import React, { ComponentType } from 'react';
import Pagination from '@/components/Pagination';
import { WithId } from '@/db';

export interface PageResult<T> {
  data: T[];
  totalPages: number;
}

export type PageItemComponent<T> = ComponentType<{ item: T }>;

interface Props<T> {
  result: PageResult<T>;
  ItemComponent: PageItemComponent<T>;
}

export default function PageList<T extends WithId>({
  result,
  ItemComponent,
}: Props<T>) {
  return result.data.length ? (
    <>
      {result.data.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={result.totalPages} />
      </div>
    </>
  ) : (
    <div className="mt-5 flex w-full justify-center">
      <p>Nothing here, yet.</p>
    </div>
  );
}
