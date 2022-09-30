const calculateSalesTax = function(salesData, taxRates) {
  const totals = {};
  
  for (const item of salesData) {
    let totalSalesByProv = 0;

    // Accumulate sum of salesData[item].sales
    for (const num of item.sales) {
      totalSalesByProv += num;
    }

    // Multiply sales sum by value of this.province as key in salesTaxRates
    const totalTaxByProv = totalSalesByProv * taxRates[item.province];

    // Construct totals object
    if (item.name in totals) {
      // if key exists add value to exisiting value
      totals[item.name]['totalSales'] += totalSalesByProv;
      totals[item.name]['totalTaxes'] += totalTaxByProv;
    } else {
      // Build new object
      totals[item.name] = {};
      totals[item.name]['totalSales'] = totalSalesByProv;
      totals[item.name]['totalTaxes'] = totalTaxByProv;
    }
  }
  return totals;
};

// Test Code
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

console.log(calculateSalesTax(companySalesData, salesTaxRates));