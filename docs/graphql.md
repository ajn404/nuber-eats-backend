## createAccount

```txt
mutation{
  createAccount(input:{
    email:"huiyuening00@gmail.com",
    password:"123456",
    role:Owner,
  }){
    ok,
    error
  }
}
```

### IntrospectionQuery

IntrospectionQuery 是 GraphQL 的一个内省系统，它可以查询 GraphQL 模式支持的查询信息。通过内省，我们可以查看 API 支持的查询、类型、字段和指令
