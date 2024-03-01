import { Button, Title } from "@mantine/core";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";

export default async function Home() {
  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <Title order={1}>ThaiD Homework</Title>
        <p>เว็บไซต์นี้เป็นการทดสอบเข้าสู่ระบบด้วย <Link href='https://www.bora.dopa.go.th/app-thaid/' target="_blank">ThaiD</Link> โดยใช้ <Link href='https://idhub.kku.ac.th/' target="_blank">KKU iD HUB</Link> เป็น provider เป็นการบ้านของหลักสูตรฝึกอบรม ThaiD Connect และ KKU iD Hub สำหรับนักพัฒนาซอฟต์แวร์ เมื่อวันที่ 27 กุมภาพันธ์ 2567</p>
        <Title order={3}>ข้อมูลระบบ</Title>
        <p style={{ marginTop: '-1px' }}>ใช้ JavaScript webapp framwork เป็น <Link href={'https://nextjs.org/'} target="_blank">Next.js</Link> และจัดการ Session ด้วย <Link href={'https://github.com/vvo/iron-session'} target="_blank">iron-session</Link> และใช้ css framework เป็น <Link href={'https://mantine.dev/'} target="_blank">Mantine</Link></p>
        <Title order={3}>ผู้พัฒนา</Title>
        <p style={{ marginTop: '-1px' }}>คณินท์ อุชชิน นักเทคโนโลยีสารสนเทศ กองทรัพยากรบุคคล มหาวิทยาลัยขอนแก่น</p>
        <Button component={Link} href={`https://idhub.kku.ac.th/api/v1/oauth2/auth?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.CALLBACK_URL}&state=login`} variant="filled" color="indigo" size="lg" leftSection={<BiLogIn />}>เข้าสู่ระบบด้วย ThaiD</Button>
      </div>
    </>
  );
}
