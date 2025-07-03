import React from 'react';
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
       <SignedOut>
              <SignInButton />
              <SignUpButton>
                
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>
  );
};

export default Header;