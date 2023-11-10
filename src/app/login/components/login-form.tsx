'use client'

import {
  AiOutlineKey,
  AiOutlineExclamationCircle,
  AiOutlineArrowRight
} from 'react-icons/ai'
import { FaAt, FaGoogle } from 'react-icons/fa'
import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '@/lib/actions'

export default function LoginForm (): JSX.Element {
  const [code, action] = useFormState(authenticate, undefined)

  return (
    <form action={action} className='space-y-3'>
      <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
        <h1 className=' mb-3 text-2xl'>
          Please log in to continue.
        </h1>
        <div className='w-full'>
          <div>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='email'
            >
              Email
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='email'
                type='email'
                name='email'
                placeholder='Enter your email address'
                required
              />
              <FaAt className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
          <div className='mt-4'>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='password'
            >
              Password
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='password'
                type='password'
                name='password'
                placeholder='Enter password'
                required
                minLength={6}
              />
              <AiOutlineKey className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
        </div>
        <GoogleButton />
        <LoginButton />
        <div className='flex h-8 items-end space-x-1'>
          {code === 'CredentialSignin' && (
            <>
              <AiOutlineExclamationCircle className='h-5 w-5 text-red-500' />
              <p aria-live='polite' className='text-sm text-red-500'>
                Invalid credentials
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  )
}

function LoginButton (): JSX.Element {
  const { pending } = useFormStatus()

  return (
    <button className='mt-4 p-4 rounded-2xl bg-green-900 flex justify-center items-center gap-2' aria-disabled={pending}>
      <p>Log in</p>
      <AiOutlineArrowRight className='ml-auto h-5 w-5 text-gray-50' />
    </button>
  )
}

function GoogleButton (): JSX.Element {
  'use client'
  return (
    <button type='button' className='my-4 flex items-center justify-center px-4 py-2 rounded-xl gap-4 bg-blue-700'>
      <FaGoogle />
      <p>Sign in with <span className='font-bold'>Google</span></p>
    </button>
  )
}
