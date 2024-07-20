export interface NavListProps {
  label: string;
  scrollTo: string;
  children?: {
    label: string;
    scrollTo: string;
  }[];
}

export const NAV_ITEMS: NavListProps[] = [
  {
    label: 'Item 1',
    scrollTo: 'item-1',
  },
  {
    label: 'Item 2',
    scrollTo: 'item-2',
    children: [
      {
        label: 'Item 2 - Child 1',
        scrollTo: 'item-2-child-1',
      },
      {
        label: 'Item 2 - Child 2',
        scrollTo: 'item-3-child-2',
      },
      {
        label: 'Item 2 - Child 3',
        scrollTo: 'item-2-child-3',
      },
    ],
  },
  {
    label: 'Item 3',
    scrollTo: 'item-3',
    children: [
      {
        label: 'Item 3 - Child 1',
        scrollTo: 'item-3-child-1',
      },
      {
        label: 'Item 3 - Child 2',
        scrollTo: 'item-3-child-2',
      },
      {
        label: 'Item 3 - Child 3',
        scrollTo: 'item-3-child-3',
      },
    ],
  },
  {
    label: 'Item 4',
    scrollTo: 'item-4',
    children: [
      {
        label: 'Item 4 - Child 1',
        scrollTo: 'item-4-child-1',
      },
      {
        label: 'Item 4 - Child 2',
        scrollTo: 'item-4-child-2',
      },
      {
        label: 'Item 4 - Child 3',
        scrollTo: 'item-4-child-3',
      },
    ],
  },
  {
    label: 'Item 5',
    scrollTo: 'item-5',
    children: [
      {
        label: 'Item 5 - Child 1',
        scrollTo: 'item-5-child-1',
      },
      {
        label: 'Item 5 - Child 2',
        scrollTo: 'item-5-child-2',
      },
      {
        label: 'Item 5 - Child 3',
        scrollTo: 'item-5-child-3',
      },
    ],
  },
  {
    label: 'Item 6',
    scrollTo: 'item-6',
    children: [
      {
        label: 'Item 6 - Child 1',
        scrollTo: 'item-6-child-1',
      },
      {
        label: 'Item 6 - Child 2',
        scrollTo: 'item-6-child-2',
      },
      {
        label: 'Item 6 - Child 3',
        scrollTo: 'item-6-child-3',
      },
    ],
  },
  {
    label: 'Item 7',
    scrollTo: 'item-7',
    children: [
      {
        label: 'Item 7 - Child 1',
        scrollTo: 'item-7-child-1',
      },
      {
        label: 'Item 7 - Child 2',
        scrollTo: 'item-7-child-2',
      },
      {
        label: 'Item 7 - Child 3',
        scrollTo: 'item-7-child-3',
      },
    ],
  },
  {
    label: 'Item 8',
    scrollTo: 'item-8',
    children: [
      {
        label: 'Item 8 - Child 1',
        scrollTo: 'item-8-child-1',
      },
      {
        label: 'Item 8 - Child 2',
        scrollTo: 'item-8-child-2',
      },
      {
        label: 'Item 8 - Child 3',
        scrollTo: 'item-8-child-3',
      },
    ],
  },
  {
    label: 'Item 9',
    scrollTo: 'item-9',
    children: [
      {
        label: 'Item 9 - Child 1',
        scrollTo: 'item-9-child-1',
      },
      {
        label: 'Item 9 - Child 2',
        scrollTo: 'item-9-child-2',
      },
      {
        label: 'Item 9 - Child 3',
        scrollTo: 'item-9-child-3',
      },
    ],
  },
  {
    label: 'Item 10',
    scrollTo: 'item-10',
    children: [
      {
        label: 'Item 10 - Child 1',
        scrollTo: 'item-10-child-1',
      },
      {
        label: 'Item 10 - Child 2',
        scrollTo: 'item-10-child-2',
      },
      {
        label: 'Item 10 - Child 3',
        scrollTo: 'item-10-child-3',
      },
    ],
  },
];
