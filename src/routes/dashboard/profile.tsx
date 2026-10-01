import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  return (
    <section aria-labelledby="profile-heading">
      <h2 id="profile-heading">Profile</h2>
      <p>Placeholder for investor profile details.</p>
    </section>
  )
}
