export const defaultGen = () => Math.random().toString(16).substring(2);

export default function Likftc<
  Source extends number | string,
  Target extends number | string = string
>(
  initialKeys: Source[] = [],
  generator: () => Target = defaultGen as () => Target
) {
  let itemKeyMap = new Map<Source, Target>(
    initialKeys.map((item) => [item, generator()])
  );
  function get(item: Source) {
    const key = itemKeyMap.get(item);
    if (key) return key;
    const newKey = generator();
    itemKeyMap.set(item, newKey);
    return newKey;
  }
  function sync(items: Source[]) {
    itemKeyMap.forEach((_key, item) => {
      if (!items.includes(item)) {
        itemKeyMap.delete(item);
      }
    });
  }
  return {
    get,
    sync,
  };
}
