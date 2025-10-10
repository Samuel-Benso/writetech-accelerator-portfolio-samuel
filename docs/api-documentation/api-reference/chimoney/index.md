---
title: Chimoney API Reference
sidebar_label: Overview
---

# Chimoney API Documentation

Welcome to the Chimoney API documentation. This API allows you to integrate Chimoney's payment and wallet functionality into your applications.

## Getting Started

### Authentication
All API requests require an API key for authentication. Include your API key in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

### Base URL
```
https://api.chimoney.io/v1
```

## API Endpoints

### Wallet
- [Check Wallet Balance](./check-wallet-balance) - Get the current balance of a wallet
- [Send Money](./send-money) - Send money to another user or wallet
- [Get Transaction Status](./get-transaction-status) - Check the status of a transaction

### Rate Limits
- 100 requests per minute per API key
- Additional rate limits may apply to specific endpoints

## Error Handling

### Error Response Format
```json
{
  "status": "error",
  "message": "Error description",
  "code": "ERROR_CODE"
}
```

### Common Error Codes
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error

## Support
For additional help, please contact support@chimoney.io
