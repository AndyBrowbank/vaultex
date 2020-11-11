module.exports = { validate };

function validate(order) {
  let orderLength = order.length - 1;

  let count = 0;
  let cassette = [];
  let retVal = [];
  const error1 = ["error", "order contains no cassettes"];

  if (!order.length) {
    return error1;
  }

  if (orderLength !== order[0][1]) {
    return [
      "error",
      "order requires 4 cassettes but was expecting 3 cassettes",
    ];
  }

  const error2 = [];
  order.forEach((item) => {
    if (typeof item[1] === "string") {
      error2.push("error", "invalid entry, integer required");
    }
  });
  if (error2.length) {
    return error2;
  }

  order.forEach((item, index) => {
    if (item.length) {
      count++;
      //   console.log("PASS - at least one order", " at array position ", index);
      cassette["cassette" + [index]] = true;
    }
    // console.log(count - 1, "cassettes ordered", cassette);
  });

  function check5(position) {
    if (order[position][1] < 10000) {
      return ["error", "cash value too low"];
    }
    if (order[position][1] > 10000) {
      //   console.log("error - cash amount too high");
    }
  }
  function check10(position) {
    if (order[position][1] < 20000) {
      let retVal = [];
      retVal.push("error", "cash value too low");
    }
    if (order[position][1] > 20000) {
      console.log("error - cash amount too high");
    }
  }
  function check20(position) {
    if (order[position][1] < 40000) {
      console.log("error - cash amount too low");
    }
    if (order[position][1] > 40000) {
      console.log("error - cash amount too high");
    }
  }
  function check50(position) {
    if (order[position][1] < 100000) {
      console.log("error - cash amount too low");
    }
    if (order[position][1] > 100000) {
      console.log("error - cash amount too high");
    }
  }

  // check for correct cash value dependent on £5, £10, £20 or £50
  const order_1_0 = order[1][0];
  const order_2_0 = order[2][0];
  const order_3_0 = order[3][0];
  const order_4_0 = order[4][0];

  switch ((order[1][0], order_1_0)) {
    case order_1_0:
      if (
        order_1_0 !== "5" &&
        order_1_0 !== "10" &&
        order_1_0 !== "20" &&
        order_1_0 !== "50"
      ) {
        return ["error", "a " + `£${order_1_0}` + " note does not exist"];
      }
    case "5":
      check5(1);
      break;
    case "10":
      check10(1);

      break;

    case "20":
      check20(1);
      break;
    case "50":
      check50(1);
      break;
  }

  switch ((order[2][0], order_2_0)) {
    case order_2_0:
      if (
        order_2_0 !== "5" &&
        order_2_0 !== "20" &&
        order_2_0 !== "20" &&
        order_2_0 !== "50"
      ) {
        return ["error", "a " + `£${order_1_0}` + " note does not exist"];
      }

    case "5":
      check5(2);
      break;
    case "10":
      check10(2);

      break;
    case "20":
      check20(2);
      break;
    case "50":
      check50(2);
      break;
  }
  switch ((order[3][0], order_3_0)) {
    case order_3_0:
      if (
        order_3_0 !== "5" &&
        order_3_0 !== "10" &&
        order_3_0 !== "20" &&
        order_3_0 !== "50"
      ) {
        return ["error", "a " + `£${order_1_0}` + " note does not exist"];
      }
    case "5":
      check5(3);
      break;
    case "10":
      check10(3);
      break;
    case "20":
      check20(3);
      break;
    case "50":
      check50(3);
      break;
  }
  switch ((order[4][0], order_4_0)) {
    case order_4_0:
      if (
        order_4_0 !== "5" &&
        order_4_0 !== "10" &&
        order_4_0 !== "20" &&
        order_4_0 !== "50"
      ) {
        return ["error", "a " + `£${order_1_0}` + " note does not exist"];
      }
    case "5":
      check5(4);
      break;
    case "10":
      check10(4);
      break;
    case "20":
      check20(4);
      break;
    case "50":
      check50(4);
      break;
  }

  if (orderLength === order[0][1]) {
    return ["valid", "Order valid, sent for packing"];
  }

  if (count === 1) {
    return error1;
  } else {
    console.log("at least one order is present ");
  }
  return retVal;
}
// validate();
