---
sidebar_position: 3
---

# Authentication

## `passwordLogin`

```typescript
const passwordLogin = async () => {
  try {
    const response = await authService.passwordLogin(
      "username",
      "email@example.com",
      "password"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

## `otpLogin`

### (a) `otpLogin.init`

```typescript
const initiateOtpLogin = async () => {
  try {
    const response = await authService.otpLogin.init("email@example.com");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

### (b) `otpLogin.complete`

```typescript
const completeOtpLogin = async () => {
  try {
    const response = await authService.otpLogin.complete(
      "email@example.com",
      "otp-token"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

## `magicURLLogin`

### (a) `magicURLLogin.init`

```typescript
const initiateMagicUrlLogin = async () => {
  try {
    const response = await authService.magicURLLogin.init(
      "email@example.com",
      "base-link"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

### (b) `magicURLLogin.complete`

```typescript
const completeMagicUrlLogin = async () => {
  try {
    const response = await authService.magicURLLogin.complete(
      "email@example.com",
      "magic-url-token"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

## `logout`

```typescript
const logout = async () => {
  try {
    const response = await authService.logout();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```
