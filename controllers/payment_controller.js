import braintree from "braintree"
import "dotenv/config"

const Payment = async (_req, res) => {
  const { clientToken } = await gateway().clientToken.generate()
  res.render("payment/payment.ejs", { token: clientToken, orderNumber: 123 })
}

const PaymentDone = (_req, res) => {
  res.render("payment/done.ejs")
}

const GetMoney = async (req, res) => {
  const { order_number, payment_nonce } = req.body

  // 根據訂單編號，取得訂單金額 (查資料庫)
  const fakeAmount = 10
  if (order_number && payment_nonce) {
    // 請款
    const result = await gateway().transaction.sale({
      amount: fakeAmount,
      paymentMethodNonce: payment_nonce,
    })

    if (result.success) {
      // 更新訂單狀態（寫入資料庫）
      // res.redirect("/v1/payment/done")
      res.json({ message: "刷卡成功" })
    } else {
      // res.send("<h1>刷卡失敗</h1>")
      res.json({ message: "刷卡失敗" })
    }
  }
}

const TokenGeneerator = async (req, res) => {
  const { clientToken } = await gateway().clientToken.generate()
  res.json({ token: clientToken })
}

function gateway() {
  return new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.merchantId,
    publicKey: process.env.publicKey,
    privateKey: process.env.privateKey,
  })
}

export { Payment, GetMoney, PaymentDone, TokenGeneerator }
