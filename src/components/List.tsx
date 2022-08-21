import React, { FC } from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// Для корректной работы с дженериками,
// лучше использовать объявление через function, без стрелочных функций

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}

// export const List: FC<ListProps> = () => {
//   return <div>List</div>;
// };

// export default List;
