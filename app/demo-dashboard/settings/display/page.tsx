import { Separator } from "@/components/ui/separator"
import { DisplayForm } from "./display-form"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SettingsDisplayPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Display</h3>
          <p className="text-sm text-muted-foreground">
            Turn items on or off to control what&apos;s displayed in the app.
          </p>
        </CardHeader>
        <CardContent>
          <Separator />
          <DisplayForm />
        </CardContent>

      </Card>
    </div>
  )
}
