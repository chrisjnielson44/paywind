import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "./profile-form"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"
import { Input } from "postcss"
import { Label } from "recharts"

export default function SettingsProfilePage() {
  return (

    <div className="space-y-6">
      {/* <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </CardHeader>
        <CardContent>
          <Separator />
          <div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Name</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Framework</Label>

            </div>
          </div>
          </div>
           <ProfileForm />
        </CardContent>
      </Card> */}
    </div >
  )
}
