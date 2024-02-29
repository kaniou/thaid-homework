import { Button, Title } from "@mantine/core";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <Title order={1}>ThaiD Homework</Title>
        <p>เว็บไซต์นี้เป็นการทดสอบเข้าสู่ระบบด้วย <Link href='https://www.bora.dopa.go.th/app-thaid/' target="_blank">ThaiD</Link> โดยใช้ <Link href='https://idhub.kku.ac.th/' target="_blank">KKU iD HUB</Link> เป็น provider เป็นส่วนหนึ่งของการบ้านของหลักสูตรฝึกอบรม ThaiD Connect และ KKU iD Hub สำหรับนักพัฒนาซอฟต์แวร์ เมื่อวันที่ 27 กุมภาพันธ์ 2567</p>
        <p></p>
        <Button component={Link} href="" variant="filled" color="indigo" size="lg" leftSection={<BiLogIn />}>เข้าสู่ระบบด้วย ThaiD</Button>
      </div>
    </>
  );
}
