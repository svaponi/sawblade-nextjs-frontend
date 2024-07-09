import Link from 'next/link';
import { SignupForm } from '@/app/(public)/signup/form';
import DividerWithText from '@/components/DividerWithText';
import SignInGoogle from '@/components/SignInGoogle';
import SignInGithub from '@/components/SignInGithub';

export default function Page() {
  return (
    <div className="flex flex-col p-4 lg:w-1/3">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
      </div>
      <div className="mt-6">
        <SignupForm />
      </div>
      <div className="mt-6 text-center text-sm">
        Already have an account?{' '}
        <Link className="underline" href="/login">
          Login
        </Link>
      </div>
      <DividerWithText className="mt-4">or</DividerWithText>
      <div className="mt-4">
        <SignInGoogle text={'Sign up with Google'} />
      </div>
      <div className="mt-4">
        <SignInGithub text={'Sign up with GitHub'} />
      </div>
    </div>
  );
}
