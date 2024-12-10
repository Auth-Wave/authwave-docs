---
sidebar_position: 4
---

# API Reference

This section provides detailed reference for the various methods offered by the Auth Wave SDK. Each method is explained with its purpose, parameters, and usage examples.

## Table of Contents

1. [Account Management](account-management)
   - [createAccount](account-management/#createaccount)
   - [deleteAccount](account-management/#deleteaccount)
   - [getCurrentUser](account-management/#getcurrentuser)
   - [updateAccount](account-management/#updateaccount)
2. [Account Verification](account-verification)
   - [initiateVerification](account-verification/#initiateverification)
   - [completeVerification](account-verification/#completeverification)
3. [Authentication](authentication)
   - [passwordLogin](authentication/#passwordlogin)
   - [otpLogin.init](authentication/#otplogininit)
   - [otpLogin.complete](authentication/#otplogincomplete)
   - [magicURLLogin.init](authentication/#magicurllogininit)
   - [magicURLLogin.complete](authentication/#magicurllogincomplete)
   - [logout](authentication/#logout)
4. [Password Reset](password-reset)
   - [initiatePasswordReset](password-reset/#initiatepasswordreset)
   - [completePasswordReset](password-reset/#completepasswordreset)
5. [Session Management](session-management)
   - [refreshAccessToken](session-management/#refreshaccesstoken)
   - [getAllSessions](session-management/#getallsessions)
   - [deleteSessionById](session-management/#deletesessionbyid)
   - [deleteAllSessions](session-management/#deleteallsessions)
6. [User Logs](security-logs)
   - [getAllUserLogs](security-logs/#getalluserlogs)
   - [getUserLogsByEventCode](security-logs/#getuserlogsbyeventcode)
