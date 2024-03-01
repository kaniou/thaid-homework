import CallbackTable from "@/components/CallbackThaiD"
import { Suspense } from "react"

const Page = () => {

  return (
    <>
      <Suspense>
        <CallbackTable client_id={process.env.CLIENT_ID as string} client_secret={process.env.CLIENT_SECRET as string} callback_url={process.env.CALLBACK_URL as string} />
      </Suspense>
    </>
  )
}

export default Page