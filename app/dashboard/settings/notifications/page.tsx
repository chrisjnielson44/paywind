import { Separator } from "@/components/ui/separator"
import { NotificationsForm } from "./notifications-form"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </CardHeader>
        <CardContent>
          <Separator />
          <NotificationsForm />
        </CardContent>
      </Card>
    </div >
  )
}
