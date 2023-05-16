import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()

// user.user_metadata has these children:  {avatar_url, email, email_verified, full_name, iss, name, picture, provider_id, sub}
  return (
    <div className='h-full flex justify-center items-center'>
        <h1 className='text-5xl'>Congratulation {user.user_metadata.full_name} 🎉</h1>
    </div>
    // <div className="form-widget">
    //   <div>
    //     <label htmlFor="email">Email</label>
    //     <input id="email" type="text" value={session.user.email} disabled />
    //   </div>
    //   <div>
    //     <label htmlFor="name">Name</label>
    //     <input id="name" type="text" value={user.user_metadata.full_name} disabled />
    //   </div>
    //   <div>
    //     <label htmlFor="avatar">Avatar</label>
    //     <img id="avatar" src={user.user_metadata.avatar_url} alt="User Avatar" />
    //   </div>
     
    //   <div>
    //     <button className="button block" onClick={() => supabase.auth.signOut()}>
    //       Sign Out
    //     </button>
    //   </div>
    // </div>
  )
}
