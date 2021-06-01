function maxBoxesInWarehouse(boxes: number[], warehouse: number[]): number {
  /*
    - Every spot (warehouse[i]) has a maxHeight based on its height and the previous heights
    - Sort the boxes by height (largest to smallest)
    - Go through the allowedHeights least restrictive (front) to most restrictive(back)
    - Try to put the largest box in the least restrictive spot
    - If it won't fit, keep trying boxes until you find a box that will fit
    - Once you skip a box, you will never be able to use it
    - Count the boxes you add
    */

  const allowedHeights: number[] = new Array(warehouse.length);
  let minHeight = Infinity;
  for (let i = 0; i < warehouse.length; i++) {
    minHeight = Math.min(minHeight, warehouse[i]);
    allowedHeights[i] = minHeight;
  }

  //sort largest to smallest
  boxes.sort((a, b) => b - a);

  //point to largest box
  let boxP = 0;

  let ct = 0;

  // Go through the allowedHeights least restrictive (front) to most restrictive(back)
  for (const height of allowedHeights) {
    while (boxP < boxes.length && boxes[boxP] > height) {
      boxP++;
    }
    // we ran out of boxes
    if (boxP === boxes.length) {
      return ct;
    }

    //we found a box that fit
    ct++;
    boxP++;
  }

  return ct;
}
