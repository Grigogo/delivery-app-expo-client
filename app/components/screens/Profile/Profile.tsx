import React from 'react';
import { View, Text, Image } from 'react-native';

import Layout from '@/components/layout/Layout';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/button/Button';

import { useAuth } from '@/hooks/useAuth';

import { AuthService } from '@/services/auth/auth.service';

import { useProfile } from './useProfile';

const Profile = () => {
  const { setUser } = useAuth();

  const { profile } = useProfile();

  return (
    <Layout>
      <Heading isCenter>Профиль</Heading>

      <View className='my-6 items-center justify-center'>
        <Image
          source={{ uri: profile?.avatarPath }}
          className='w-40 h-40 rounded-full'
        />
      </View>

      <Button
        onPress={() => AuthService.logout().then(() => setUser(null))}
        className='mt-5'
      >
        Выйти
      </Button>
    </Layout>
  );
};

export default Profile;
