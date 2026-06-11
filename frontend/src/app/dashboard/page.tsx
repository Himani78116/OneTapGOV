'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Dashboard() {
  const [name, setName] = useState('')
  useEffect(() => {
    const getProfile = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser()

      if (!user) return

      const { data } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .single()

      if (data) {
        setName(data.full_name)
      }
    }

    getProfile()
  }, [])
  
  return(
    <div>
      <h1> Hi, {name} </h1>
    </div>
  )
}