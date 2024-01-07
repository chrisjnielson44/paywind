import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const userSubscriptions = [
    {
        serviceName: "Netflix",
        subscriptionDate: "Feb 1, 2024",
        renewalDate: "Mar 1, 2024",
        monthlyCost: "$12.99",
      },
      {
        serviceName: "Spotify",
        subscriptionDate: "Jan 15, 2024",
        renewalDate: "Feb 15, 2024",
        monthlyCost: "$9.99",
      },
      {
        serviceName: "Amazon Prime",
        subscriptionDate: "Jan 25, 2024",
        renewalDate: "Feb 25, 2024",
        monthlyCost: "$14.99",
      },
      {
        serviceName: "HBO Max",
        subscriptionDate: "Feb 5, 2024",
        renewalDate: "Mar 5, 2024",
        monthlyCost: "$15.99",
      },
    // ... add more subscriptions
  ];
  


export function UpcomingSubscriptions() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Subscription Date</TableHead>
            <TableHead>Renewal Date</TableHead>
            <TableHead>Monthly Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userSubscriptions.map((subscription, index) => (
            <TableRow key={index}>
              <TableCell>{subscription.serviceName}</TableCell>
              <TableCell>{subscription.subscriptionDate}</TableCell>
              <TableCell>{subscription.renewalDate}</TableCell>
              <TableCell>{subscription.monthlyCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Footer can be used to display total cost or other summary data */}
      </Table>
    );
  }
  