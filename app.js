const url = "./data/csvjson.json";

const getData = async () => {
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

const app = async () => {
  let data = await getData();
  let feb = data.filter((item) => item.Date.includes("2022-02"));
  let cashFeb = feb.filter((item) => item.Type.includes("CashGame"));
  let cashFebTotal = cashFeb.reduce((sum, item) => sum + item.Amount, 0);
  let febTourney = feb.filter((item) => item.Type.includes("Tournament"));
  let febTourneyTotal = febTourney.reduce((sum, item) => sum + item.Amount, 0);
  let febPlayerTransfers = feb.filter((item) =>
    item.Type.includes("PlayerTransferToPlayer")
  );
  let febPlayerTransfersAmounts = febPlayerTransfers.reduce(
    (sum, item) => sum + item.Amount,
    0
  );
  let febPlayerTransferFrom = new Set();
  febPlayerTransfers.forEach((item) => {
    febPlayerTransferFrom.add(item.Description);
  });

  console.log("all feb items ");
  console.log(feb);
  console.log("all feb cash totals ");
  console.log(cashFebTotal);
  console.log("feb tourneys totals");
  console.log(febTourneyTotal);
  console.log("feb transfers ");
  console.log(febPlayerTransfersAmounts);
  console.log("from");
  console.log([...febPlayerTransferFrom]);
};

app();

// Tournament
// PlayerTransferToPlayer and to who and stuff
