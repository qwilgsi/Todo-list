export function replaceItem(prevState, indexItem, todoItem) {
  prevState.splice(indexItem, 1, todoItem);

  return [...prevState];
}

export function deleteItem(prevState, indexItem) {
    prevState.splice(indexItem, 1)

    return [...prevState]
}