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
const cryptoPositions = [
    {
        icon: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg', // Path to the icon image
        symbol: "BTC",
        amount: 2,
        purchasePrice: "$30,000.00",
        currentPrice: "$35,000.00",
        totalValue: "$70,000.00",
    },
    {
        icon: 'https://cdn.coinranking.com/rk4RKHOuW/eth.svg',
        symbol: "ETH",
        amount: 5,
        purchasePrice: "$2,000.00",
        currentPrice: "$2,500.00",
        totalValue: "$12,500.00",
    },
    {
        icon: 'https://cdn.coinranking.com/B1oPuTyfX/xrp.svg',
        symbol: "XRP",
        amount: 1000,
        purchasePrice: "$0.50",
        currentPrice: "$0.75",
        totalValue: "$750.00",
      },
      {
        icon: 'https://cdn.coinranking.com/ryY28nXhW/ada.svg',
        symbol: "ADA",
        amount: 500,
        purchasePrice: "$1.20",
        currentPrice: "$1.50",
        totalValue: "$750.00",
      },
      {
        icon: 'https://cdn.coinranking.com/BUvPxmc9o/ltcnew.svg',
        symbol: "LTC",
        amount: 50,
        purchasePrice: "$100.00",
        currentPrice: "$110.00",
        totalValue: "$5,500.00",
      },
      {
        icon: 'https://cdn.coinranking.com/9NOP9tOem/chainlink.svg',
        symbol: "LINK",
        amount: 80,
        purchasePrice: "$20.00",
        currentPrice: "$25.00",
        totalValue: "$2,000.00",
      },
      {
        icon: 'https://cdn.coinranking.com/V3NSSybv-/polkadot-dot.svg',
        symbol: "DOT",
        amount: 70,
        purchasePrice: "$30.00",
        currentPrice: "$35.00",
        totalValue: "$2,450.00",
      }
    // Add more cryptocurrency positions as needed
];

export function TopCryptoPositions() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Icon</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Purchase Price</TableHead>
                    <TableHead>Current Price</TableHead>
                    <TableHead>Total Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {cryptoPositions.map((position, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <img
                                src={position.icon}
                                alt={`${position.symbol} icon`}
                                style={{ width: '30px', height: '30px' }} // Set your desired size here
                            />
                        </TableCell>              <TableCell>{position.symbol}</TableCell>
                        <TableCell>{position.amount}</TableCell>
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
