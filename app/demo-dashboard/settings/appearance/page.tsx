import { Separator } from "@/components/ui/separator"
import { AppearanceForm } from "./appearance-form"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Appearance</h3>
          <p className="text-sm text-muted-foreground">
            Customize the appearance of the app. Automatically switch between day
            and night themes.
          </p>
        </CardHeader>
        <CardContent>
          <Separator />
        <AppearanceForm />
      </CardContent>
    </Card>
    </div >
  )
}
