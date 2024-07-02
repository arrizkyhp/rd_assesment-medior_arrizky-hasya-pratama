'use client';

import { useState } from 'react';

import toast from 'react-hot-toast';

const useNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleJoin = () => {
    if (email) {
      toast.success('Thank you for joining our newsletter!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return {
    email,
    handleJoin,
    setEmail,
  };
};

export default useNewsletter;
