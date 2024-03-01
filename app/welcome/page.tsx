import { SessionData, sessionOptions } from '@/lib'
import { Button, Title } from '@mantine/core'
import axios from 'axios'
import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import { BiLogOut } from 'react-icons/bi'

const Page = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    return (
      <>
        <div style={{ marginTop: '50px' }}>
          <Title order={1} c={'red'}>OOP!</Title>
          <Title order={2}>ไม่สามารถเข้าถึงข้อมูลได้ กรุณาเข้าสู่ระบบก่อน</Title>
        </div>
      </>
    )
  }

  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <Title order={1}>ข้อมูลจาก ThaiD</Title>
        <div>
          <p>เลขประจำตัวประชาชน: {session.pid}</p>
          <p>ชื่อ-สกุล: {session.name}</p>
          <p>ชื่อ-สกุล อังกฤษ: {session.name_en}</p>
          <p>วันเกิด: {session.birthdate}</p>
          <p>ที่อยู่: {session.address}</p>
        </div>

        <Button component={Link} href={'/api/session?action=logout'} variant="filled" color="cyan" size="lg" leftSection={<BiLogOut />}>ออกจากระบบ</Button>
      </div>
    </>
  )
}

export default Page