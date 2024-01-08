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

const BankAccountInfo = [
    {
        logo: "https://img.icons8.com/color/48/chase-bank.png", 
        bank: "Chase",
        accountType: "Checking",
        endingIn: "1234",
        purchasePower: "$10,000",
        accountTotal: "$15,000"
    },
    {
        logo: "https://logos-world.net/wp-content/uploads/2021/02/US-Bank-Symbol.png", // Replace with the actual path or URL
        bank: "US Bank",
        accountType: "Savings",
        endingIn: "5678",
        purchasePower: "$5,000",
        accountTotal: "$8,000"
    },
];


export function TopAccounts() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {/* <TableHead></TableHead> */}
                    <TableHead>Bank</TableHead>
                    <TableHead>Account Type</TableHead>
                    <TableHead>Ending In</TableHead>
                    <TableHead>Purchase Power</TableHead>
                    <TableHead>Account Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {BankAccountInfo.map((account, index) => (
                    <TableRow key={index}>
                        <TableCell key={index}><img src={account.logo} alt={`${account.bank} logo`} className="h-4 " /></TableCell>
                        {/* <TableCell>{account.bank}</TableCell> */}
                        <TableCell>{account.accountType}</TableCell>
                        <TableCell>{account.endingIn}</TableCell>
                        <TableCell>{account.purchasePower}</TableCell>
                        <TableCell>{account.accountTotal}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* Footer can be used to display total value or other summary data */}
        </Table>
    )
}
