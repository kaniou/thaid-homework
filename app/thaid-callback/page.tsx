import CallbackTable from "@/components/CallbackThaiD"

const Page = () => {

  return (
    <>
      <CallbackTable client_id={process.env.CLIENT_ID as string} client_secret={process.env.CLIENT_SECRET as string} callback_url={process.env.CALLBACK_URL as string} />
    </>
  )
}

export default Page