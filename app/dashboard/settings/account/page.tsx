import { Separator } from "@/components/ui/separator"
import { AccountForm } from "./account-form"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
        </CardHeader>
        <CardContent>
        <Separator />
        <AccountForm />
        </CardContent>
      </Card>
    </div>
  )
}
