import { Link } from 'react-router-dom'

export default function ErrorElement() {
  return (
    <div>
      <h1>this page does not exist</h1>
      <Link to='/'>Click to go back to homepage</Link>
    </div>
  )
}
