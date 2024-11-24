import React from 'react'
import LoginForm from '../Components/Login/LoginForm'
import WelcomeSection from '../Components/Login/WelcomeSection'
function Login() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
        <LoginForm/>
        <WelcomeSection/>
      </div>
    </div>
  )
}

export default Login