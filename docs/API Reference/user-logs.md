---
sidebar_position: 6
---

# User Logs

## `getAllUserLogs`

```typescript
const getAllUserLogs = async () => {
  try {
    const logs = await authService.getAllUserLogs({ page: 1, itemLimit: 10 });
    console.log(logs);
  } catch (error) {
    console.error(error);
  }
};
```

## `getUserLogsByEventCode`

```typescript
const getUserLogsByEventCode = async (eventCode: string) => {
  try {
    const logs = await authService.getUserLogsByEventCode({
      eventCode,
      page: 1,
      itemLimit: 10,
    });
    console.log(logs);
  } catch (error) {
    console.error(error);
  }
};
```
