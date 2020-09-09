export interface User {
  name: string;
  balance: number;
}

export function performPurchase(
  user: User,
  purchaseValue: number
): User | undefined {
  if (user.balance >= purchaseValue) {
    return {
      ...user,
      balance: user.balance - purchaseValue,
    };
  }
  return undefined;
}
