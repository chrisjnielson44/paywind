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
// Rest of your code...

const connectedCryptoWallets = [
    {
      walletName: "Wallet A",
      walletAddress: "0xABC123...",
      cryptoHeld: "BTC",
      balance: "0.5 BTC"
    },
    {
      walletName: "Wallet B",
      walletAddress: "0xDEF456...",
      cryptoHeld: "ETH",
      balance: "3 ETH"
    },
    {
        walletName: "Wallet C",
        walletAddress: "0xGHI789...",
        cryptoHeld: "ADA",
        balance: "1000 ADA"
      },
    // ... add more wallets as needed
  ];
  


export function ConnectedWallets() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Wallet Name</TableHead>
            <TableHead>Wallet Address</TableHead>
            <TableHead>Cryptocurrency</TableHead>
            <TableHead>Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {connectedCryptoWallets.map((wallet, index) => (
            <TableRow key={index}>
              <TableCell>{wallet.walletName}</TableCell>
              <TableCell>{wallet.walletAddress}</TableCell>
              <TableCell>{wallet.cryptoHeld}</TableCell>
              <TableCell>{wallet.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Footer can be used for additional information if needed */}
      </Table>
    )
  }

