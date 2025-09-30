const fs = require("fs")
const path = "./tsender-deployed.json" // your original JSON
const outPath = "./tsender-deployed-fixed.json" // output file

function hexToDecimal(value) {
  if (typeof value === "string" && value.startsWith("0x")) {
    return parseInt(value, 16)
  }
  return value
}

const data = JSON.parse(fs.readFileSync(path, "utf8"))

// Fix block fields
const block = data.block
for (const key in block) {
  if (typeof block[key] === "string" && block[key].startsWith("0x")) {
    block[key] = hexToDecimal(block[key])
  }
}

// Fix accounts
for (const account in data.accounts) {
  const acc = data.accounts[account]

  // Convert balance and nonce
  if (
    acc.balance &&
    typeof acc.balance === "string" &&
    acc.balance.startsWith("0x")
  ) {
    acc.balance = hexToDecimal(acc.balance)
  }
  if (
    acc.nonce &&
    typeof acc.nonce === "string" &&
    acc.nonce.startsWith("0x")
  ) {
    acc.nonce = hexToDecimal(acc.nonce)
  }

  // Add beneficiary if missing
  if (!acc.beneficiary) {
    acc.beneficiary = "0x0000000000000000000000000000000000000000"
  }
}

// Write fixed file
fs.writeFileSync(outPath, JSON.stringify(data, null, 2))
console.log(`✅ Fixed Anvil state written to ${outPath}`)
