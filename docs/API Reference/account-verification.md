---
sidebar_position: 2
---

# Account Verification

## `initiateVerification`

```typescript
const initiateVerification = async (baseLink: string) => {
  try {
    const response = await authService.accountVerification.init(baseLink);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

## `completeVerification`

```typescript
const completeVerification = async (verificationToken: string) => {
  try {
    const response = await authService.accountVerification.complete(
      verificationToken
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```
