// A mock function to mimic making an async request for data
export function fetchUserWithCredential(email, password) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: { userName: "abc", email, name: "Om prakash", jwt_token: "ajfksdjflfk", role: 'admin' } }), 500)
  );
}

// A mock function to mimic making an async request for data
export function fetchUserWithWallet(walletAddress, publicKey) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: { userName: "abc", email: "a@b.com", walletAddress, publicKey, jwt_token: "ajfksdjflfk", role: 'user' } }), 500)
  );
}
