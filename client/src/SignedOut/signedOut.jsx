import { SignedOut, ClerkProvider } from "@clerk/clerk-react";
 
export function signedOut() {
  return (
    <ClerkProvider publishableKey={`pk_test_c3dlZXQtZHJha2UtOC5jbGVyay5hY2NvdW50cy5kZXYk`}>
      <section>
        <div>
          This content is always visible.
        </div>
        <SignedOut>
          <div>
            This content is visible only to signed out users.
          </div>
        </SignedOut>
      </section>
    </ClerkProvider>
  );
}