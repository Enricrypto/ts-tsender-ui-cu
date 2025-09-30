import { describe, it, expect } from "vitest"
import { calculateTotal } from "./calculateTotal"

describe("calculateTotal", () => {
  it("sums numbers from a comma-separated string", () => {
    const input = "1,2,3.5"
    expect(calculateTotal(input)).toBe(6.5)
  })

  it("sums numbers from a newline-separated string", () => {
    const input = "1\n2\n3"
    expect(calculateTotal(input)).toBe(6)
  })

  it("ignores empty lines and spaces", () => {
    const input = " 1 , \n 2\n\n3 "
    expect(calculateTotal(input)).toBe(6)
  })

  it("ignores invalid numbers", () => {
    const input = "1, abc, 2"
    expect(calculateTotal(input)).toBe(3)
  })
})
