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

interface Invoice {
  invoice: string;
  paymentStatus: string;
  totalAmount: number;
  paymentMethod: string;
  transactionType: "purchase" | "receive";
}

// Sample function to generate random amounts
const getRandomAmount = () => Math.floor(Math.random() * 1000) / 10;

const invoices: Invoice[] = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: getRandomAmount(),
    paymentMethod: "Credit Card",
    transactionType: "purchase",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: getRandomAmount(),
    paymentMethod: "PayPal",
    transactionType: "receive",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: getRandomAmount(),
    paymentMethod: "Bank Transfer",
    transactionType: "purchase",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: getRandomAmount(),
    paymentMethod: "Credit Card",
    transactionType: "receive",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: getRandomAmount(),
    paymentMethod: "PayPal",
    transactionType: "purchase",
  },
 
  // Add more as needed...
];

export function PlaidTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className={`text-right ${invoice.transactionType === 'purchase' ? 'text-red-500' : 'text-green-500'}`}>
              {invoice.transactionType === 'purchase' ? `- $${invoice.totalAmount.toFixed(2)}` : `+ $${invoice.totalAmount.toFixed(2)}`}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
