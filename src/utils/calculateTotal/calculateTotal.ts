export function calculateTotal(amounts: string): number {
  const amountArray = amounts
    .split(/[\n,]+/) // split lines
    .map((amt) => amt.trim()) // remove spaces
    .filter((amt) => amt !== "") // skip empty lines
    .map((amt) => parseFloat(amt)) // convert to numbers

  return amountArray
    .filter((amt) => !isNaN(amt)) // filter out NaNs
    .reduce((sum, n) => sum + n, 0) // sum up
}
