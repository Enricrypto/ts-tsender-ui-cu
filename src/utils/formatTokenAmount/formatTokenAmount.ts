export function formatTokenAmount(
  weiAmount: number | string | bigint,
  decimals: number | string
): string {
  const amount =
    typeof weiAmount === "bigint"
      ? Number(weiAmount)
      : parseFloat(weiAmount as string)
  const decs = typeof decimals === "string" ? parseInt(decimals) : decimals

  if (isNaN(amount) || isNaN(decs)) return "0.00"

  const tokenAmount = amount / Math.pow(10, decs)
  return tokenAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
