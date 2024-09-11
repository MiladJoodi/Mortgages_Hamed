"use client"


// components/UserAvatar.tsx
import { UserButton } from '@clerk/nextjs';
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import { useUser } from '@clerk/nextjs';

const UserAvatar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <UserButton
      afterSignOutUrl="/"
      appearance={{
        elements: {
          avatarBox: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
      }}
    >
      <Avatar>
        <AvatarImage src={user.profileImageUrl} alt={user.fullName || 'User Avatar'} />
        <AvatarFallback>{user.firstName?.charAt(0) || 'U'}</AvatarFallback>
      </Avatar>
    </UserButton>
  );
};

export default UserAvatar;
