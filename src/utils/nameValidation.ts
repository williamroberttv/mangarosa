export function getValidName(name: string) {
  if (name.includes("_")) {
    const arr = name.split("_");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const formatedStr = arr.join(" ");
    return formatedStr;
  }
  return name;
}
