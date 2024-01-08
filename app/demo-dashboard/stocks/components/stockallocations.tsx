import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const stockPositions = [
    {
      symbol: "AAPL",
      shares: 10,
      purchasePrice: "$150.00",
      currentPrice: "$175.00",
      totalValue: "$1750.00",
    },
    {
      symbol: "MSFT",
      shares: 15,
      purchasePrice: "$200.00",
      currentPrice: "$210.00",
      totalValue: "$3150.00",
    },
    {
        symbol: "TSLA",
        shares: 8,
        purchasePrice: "$300.00",
        currentPrice: "$320.00",
        totalValue: "$2560.00",
      },
      {
        symbol: "AMZN",
        shares: 5,
        purchasePrice: "$3100.00",
        currentPrice: "$3150.00",
        totalValue: "$15750.00",
      },
      {
        symbol: "GOOGL",
        shares: 4,
        purchasePrice: "$1800.00",
        currentPrice: "$1850.00",
        totalValue: "$7400.00",
      },
      {
        symbol: "NFLX",
        shares: 20,
        purchasePrice: "$500.00",
        currentPrice: "$480.00",
        totalValue: "$9600.00",
      },
      {
        symbol: "FB",
        shares: 12,
        purchasePrice: "$250.00",
        currentPrice: "$230.00",
        totalValue: "$2760.00",
      }
    // Add more stock positions as needed
  ]
  
  export function TopPositions() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Shares</TableHead>
            <TableHead>Purchase Price</TableHead>
            <TableHead>Current Price</TableHead>
            <TableHead>Total Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stockPositions.map((position, index) => (
            <TableRow key={index}>
              <TableCell>{position.symbol}</TableCell>
              <TableCell>{position.shares}</TableCell>
              <TableCell>{position.purchasePrice}</TableCell>
              <TableCell>{position.currentPrice}</TableCell>
              <TableCell>{position.totalValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Footer can be used to display total value or other summary data */}
      </Table>
    )
  }
  