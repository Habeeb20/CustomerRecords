import { SignedIn, ClerkProvider } from "@clerk/clerk-react";
 
export function signedIn() {
  return (
    <ClerkProvider publishableKey={`pk_test_c3dlZXQtZHJha2UtOC5jbGVyay5hY2NvdW50cy5kZXYk`}>
      <section>
        <div>
          This content is always visible.
        </div>
        <SignedIn>
          <div>
            This content is visible only to
            signed in users.
          </div>
        </SignedIn>
      </section>
    </ClerkProvider>
  );
}