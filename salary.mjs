import ax from "axios";

const url =
  "https://apiservice.mol.gov.tw/OdService/download/A17000000J-020066-J3o";

const { data } = await ax.get(url);
const result = data.filter(
  (c) => c["教育程度別"] == "研究所" && c["特性別"] == "全體"
)[0];

console.log(Number(result["薪資平均數（千元）"]) * 1000);
