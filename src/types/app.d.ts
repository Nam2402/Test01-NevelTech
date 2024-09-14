declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Any = any;

  interface Dictionary<T> {
    [key: number | string]: T;
  }

  type MenuItem = {
    label?: string;
    link?: string;
  };

  type Information = {
    title?: string;
    contents?: string[];
  };
}
