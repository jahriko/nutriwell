import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function PatientRecord() {
  const patientInfo = {
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    height: '180 cm',
    weight: '75 kg',
    bmi: '23.1',
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Patient Information Column */}
        <Card className="w-full md:w-64 flex-shrink-0">
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              {Object.entries(patientInfo).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <dt className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        {/* Main Column with Tabs */}
        <Card className="flex-grow">
          <Tabs defaultValue="assessment">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
              <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
              <TabsTrigger value="intervention">Intervention</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>
            <TabsContent value="assessment">
              <CardHeader>
                <CardTitle>Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="chief-complaint">Chief Complaint</Label>
                    <Textarea
                      id="chief-complaint"
                      placeholder="Enter the patient's chief complaint"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="history">History</Label>
                    <Textarea id="history" placeholder="Enter the patient's medical history" />
                  </div>
                  <Button type="submit">Save Assessment</Button>
                </form>
              </CardContent>
            </TabsContent>
            <TabsContent value="diagnosis">
              <CardHeader>
                <CardTitle>Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-diagnosis">Primary Diagnosis</Label>
                    <Input id="primary-diagnosis" placeholder="Enter primary diagnosis" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondary-diagnosis">Secondary Diagnosis</Label>
                    <Input id="secondary-diagnosis" placeholder="Enter secondary diagnosis" />
                  </div>
                  <Button type="submit">Save Diagnosis</Button>
                </form>
              </CardContent>
            </TabsContent>
            <TabsContent value="intervention">
              <CardHeader>
                <CardTitle>Intervention</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="treatment-plan">Treatment Plan</Label>
                    <Textarea id="treatment-plan" placeholder="Describe the treatment plan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medications">Medications</Label>
                    <Textarea id="medications" placeholder="List prescribed medications" />
                  </div>
                  <Button type="submit">Save Intervention</Button>
                </form>
              </CardContent>
            </TabsContent>
            <TabsContent value="monitoring">
              <CardHeader>
                <CardTitle>Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="follow-up-date">Follow-up Date</Label>
                    <Input id="follow-up-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monitoring-plan">Monitoring Plan</Label>
                    <Textarea id="monitoring-plan" placeholder="Describe the monitoring plan" />
                  </div>
                  <Button type="submit">Save Monitoring Plan</Button>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
