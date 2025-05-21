type AnyObject = any;
type ModifiedValues = {
  value: AnyObject,
  initialValue: AnyObject,
};
type Modified<Key extends string> = Partial<Record<Key, ModifiedValues>>;

export const getValue = <T>(value?: T) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (typeof value === 'string') {
    if (value.trim() === '') {
      return undefined;
    }
    return value.trim();
  }

  return value;
};

const areValuesModified = (value: AnyObject, initialValue: AnyObject) => getValue(value) !== getValue(initialValue);

export const getModifiedValues = <Key extends string>(
  state: Partial<Record<Key, AnyObject>> = {},
  initialValues: Partial<Record<Key, AnyObject>> = {},
) => {
  const keys = getKeys(state, initialValues);
  const modified: Modified<Key> = {};
  keys.forEach((key) => {
    const isModified = areValuesModified(state[key], initialValues[key]);
    if (isModified) {
      modified[key] = {
        initialValue: initialValues[key],
        value: state[key],
      };
    }
  });
  return modified;
};

const getKeys = <Key extends string>(
  state: Partial<Record<Key, AnyObject>>,
  initialValues: Partial<Record<Key, AnyObject>>,
): Key[] => {
  return [...new Set([...Object.keys(state), ...Object.keys(initialValues)])] as Key[];
}