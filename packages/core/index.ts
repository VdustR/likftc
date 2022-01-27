const getNewKey = () => Math.random().toString(16).substring(2);

export default function Likftc<Key extends number | string>(
  initialKeys: Key[] = [],
  generator: () => string = getNewKey
) {
  let itemKeyMap = new Map<Key, string>(
    initialKeys.map((item) => [item, generator()])
  );
  function get(item: Key) {
    const key = itemKeyMap.get(item);
    if (key) return key;
    const newKey = generator();
    itemKeyMap.set(item, newKey);
    return newKey;
  }
  function sync(items: Key[]) {
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
