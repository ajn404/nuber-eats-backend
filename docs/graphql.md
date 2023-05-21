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

### apollo server

Apollo Server 是一个开源的、符合规范的 GraphQL 服务器，它与任何 GraphQL 客户端兼容，包括 Apollo 客户端。它是构建一个生产就绪、自文档化的 GraphQL API 的最佳方式，可以使用来自任何来源的数据 1

[apollo server](https://www.apollographql.com/docs/apollo-server/)
