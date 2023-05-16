import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
// import Account from '../components/Account'

const Login = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="flex justify-center items-center mx-auto py-20">
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" />
      ) : (
        <h3 className='text-3xl justify-center items-center flex font-poppins font-semibold'>Thanks for Login</h3>
      )}
    </div>
  )
}

export default Login 
