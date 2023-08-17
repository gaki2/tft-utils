const removePrefixFromKeys = (obj, prefix) => {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && key.startsWith(prefix)) {
      const newKey = key.slice(prefix.length); // 접두어를 제거합니다.
      result[newKey] = obj[key];
    }
  }
  return result;
};

module.exports = { removePrefixFromKeys };
