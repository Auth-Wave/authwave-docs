---
sidebar_position: 4
---

# Password Reset

## `initiatePasswordReset`

```typescript
const initiatePasswordReset = async (baseLink: string) => {
  try {
    const response = await authService.resetPassword.init(baseLink);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

## `completePasswordReset`

```typescript
const completePasswordReset = async (
  resetToken: string,
  newPassword: string
) => {
  try {
    const response = await authService.resetPassword.complete(
      resetToken,
      newPassword
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```
