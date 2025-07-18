import { Link } from 'react-router-dom';
import authImg from '../assets/images/friendo.webp';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deepDark to-gray-900">
      <main className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
        <div className="flex w-full max-w-6xl flex-1 rounded-2xl bg-gray-800 shadow-2xl overflow-hidden">
          {/* Illustration Section */}
          <div className="hidden w-1/2 flex-col justify-between bg-gray-900 p-12 lg:flex">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-white">Friendo</h1>
              <p className="text-2xl font-medium text-lwsGreen">Welcome Back!</p>
            </div>
            
            <img
              className="mx-auto h-64 object-contain"
              src={authImg}
              alt="Social connection illustration"
            />
            
            <div className="space-y-2">
              <p className="text-lg text-gray-300">
                Connect with friends and the world around you.
              </p>
              <p className="text-gray-400">
                Build meaningful relationships through shared experiences.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full p-8 sm:p-12 lg:w-1/2">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white">Sign In</h2>
              <p className="text-gray-400">Access your social world...</p>
            </div>

            <LoginForm />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-semibold text-lwsGreen hover:text-green-400 transition-colors duration-200"
                >
                  Create New
                </Link>
              </p>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6 text-center">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;