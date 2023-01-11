export function makeSingular(collectionStr) {
  collectionStr = collectionStr.charAt(0).toUpperCase() + collectionStr.slice(1)
  if (collectionStr.at(-2) == "e" && collectionStr.at(-1) == "s") {
    return collectionStr.slice(0,-2)
  }
  else if (collectionStr.at(-1) == "s") {
    return collectionStr.slice(0,-1)
  }
  else {
    return collectionStr
  }
}