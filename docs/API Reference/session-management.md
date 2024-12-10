---
sidebar_position: 5
---

# Session Management

## `refreshAccessToken`

```typescript
const refreshAccessToken = async () => {
  try {
    const response = await authService.refreshAccessToken();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

## `getAllSessions`

```typescript
const getAllSessions = async () => {
  try {
    const sessions = await authService.getAllSessions();
    console.log(sessions);
  } catch (error) {
    console.error(error);
  }
};
```

## `deleteSessionById`

```typescript
const deleteSessionById = async (sessionId: string) => {
  try {
    const response = await authService.deleteSessionById(sessionId);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

## `deleteAllSessions`

```typescript
const deleteAllSessions = async () => {
  try {
    const response = await authService.deleteAllSessions();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```
