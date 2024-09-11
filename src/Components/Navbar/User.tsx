// ⚠️ Developing
import { currentUser } from '@clerk/nextjs/server'

export default async function User() {
    
    const user = await currentUser()


  return <div>Hello {user?.firstName}!</div>
}