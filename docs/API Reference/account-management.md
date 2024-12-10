---
sidebar_position: 1
---

# Account Management

## `createAccount`

```typescript
const createAccount = async () => {
  try {
    const response = await authService.createAccount(
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

## `deleteAccount`

```typescript
const deleteAccount = async () => {
  try {
    const response = await authService.deleteAccount();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

## `getCurrentUser`

```typescript
const getCurrentUser = async () => {
  try {
    const user = await authService.getCurrentUser();
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};
```

## `updateAccount`

```typescript
const updateAccount = async () => {
  try {
    const response = await authService.updateAccount(
      "username",
      "email@example.com"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```
