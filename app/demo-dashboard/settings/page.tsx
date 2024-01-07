import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "./profile-form"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SettingsProfilePage() {
  return (

    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </CardHeader>

        <CardContent>
          <Separator />
          <ProfileForm />
        </CardContent>
      </Card>
    </div >
  )
}
