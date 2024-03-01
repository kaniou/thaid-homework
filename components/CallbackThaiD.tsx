'use client'

import { Stack, Title } from '@mantine/core'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

function fetchData(code: string, clientId: string, clientSecret: string, redirectUri: string) {
  try {
    let data = {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      response_type: 'code',
      redirect_uri: redirectUri,
      code: code,
    }

    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
      }
    }

    return axios
      .post('https://idhub.kku.ac.th/api/v1/oauth2/token', data, config)
  } catch (error) {
    console.error(error)
  }
}

type CallbackTableProps = {
  client_id: string,
  client_secret: string,
  callback_url: string,
}

const CallbackTable = ({ client_id, client_secret, callback_url }: CallbackTableProps) => {
  const router = useRouter();

  const searchParams = useSearchParams()
  let code = searchParams.get('code')
  let state = searchParams.get('state')

  useEffect(() => {
    async function mangeSession() {
      let result = await fetchData(code!, client_id, client_secret, callback_url)
      const formData = new FormData();
      formData.append('pid', result?.data.pid);
      formData.append('name', result?.data.name);
      formData.append('name_en', result?.data.name_en);
      formData.append('birthdate', result?.data.birthdate);
      formData.append('address', result?.data.address.formatted);

      await fetch("api/session", {
        method: 'POST',
        body: formData,
      })
        .then((res) => router.push('/welcome'))
    }

    mangeSession()
  });

  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <Title order={1}>Callback Page</Title>
        <Stack align="flex-start" gap={'xs'}>
          <div>
            <Title order={3} c={'red'}>กรุณารอสักครู่</Title>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>Code:</p>
            <p style={{ marginTop: '-15px' }}>{code}</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>State:</p>
            <p style={{ marginTop: '-15px' }}>{state}</p>
          </div>
        </Stack>
      </div>
    </>
  )
}

export default CallbackTable