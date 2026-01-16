'use client'

import { useActionState } from 'react';
import { submitRsvp } from '@/app/actions';
import { Mail } from 'lucide-react';

interface RsvpFormProps {
  className?: string;
  placeholderText?: string; 
}

export default function RsvpForm({ className = "", placeholderText }: RsvpFormProps) {
  const [state, formAction, isPending] = useActionState(submitRsvp, {
    success: false,
    message: '',
  });

  if (state.success) {
    return (
      <div className={`p-4 bg-green-50 border border-green-200 text-green-800 rounded-md ${className}`}>
        <p className="font-bold">Success!</p>
        <p className="text-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className={`flex flex-col md:flex-row gap-4 md:gap-5 ${className}`}>
      <div className="relative flex-grow">
        {/* Icon */}
        <div className="absolute inset-y-0 left-0 pl-6 md:pl-10 flex items-center pointer-events-none">
          <Mail className="h-12 w-8 md:h-20 md:w-10 text-gray-500 stroke-1" />
        </div>
        {/* Input */}
        <input
          type="email"
          name="email"
          placeholder={placeholderText || "Enter your work email"}
          required
          className="block w-full pl-20 md:pl-26 pr-4 py-4 md:py-6 border border-gray-300 rounded-[8px] leading-6 md:leading-8 bg-white placeholder:text-lg md:placeholder:text-xl placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F5A623] focus:border-[#F5A623] transition-colors"
        />
        {state.errors?.email && (
          <p className="absolute -bottom-6 left-0 text-red-500 text-sm md:text-md font-medium">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center px-10 md:px-14 py-4 border border-transparent text-xl md:text-3xl font-bold rounded-[8px] text-white bg-[#F5A623] hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5A623] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors whitespace-nowrap w-full md:w-auto min-w-[200px]"
      >
        {isPending ? 'Sending...' : 'RSVP Now'}
      </button>
    </form>
  );
}