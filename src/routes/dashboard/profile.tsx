import { createFileRoute } from '@tanstack/react-router'
import { ProfileCard } from '../../components/dashboard/ProfileCard'

export const Route = createFileRoute('/dashboard/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  return (
    <section aria-labelledby="profile-heading">
      <h2 id="profile-heading">Profile</h2>
      <p>Your member details for this shell (read-only).</p>
      <ProfileCard />
    </section>
  )
}
