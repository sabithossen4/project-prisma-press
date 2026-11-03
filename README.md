# Prisma Press

Express, TypeScript ও Prisma দিয়ে তৈরি PostgreSQL backend API।

## Module Summary

1. **Project Planning to Completion** — Backend foundation তৈরি; পুরো application এখনো সম্পূর্ণ নয়।
2. **Brainstorm, Requirement Analysis, ERD Design** — User–Profile relation আছে; আলাদা requirement/ERD document নেই।
3. **Project Setup + Prisma and DB Connection** — Express, TypeScript ও Prisma PostgreSQL connection configuration।
4. **Prisma Schema & Model** — User, Profile, Role ও ActiveStatus।
5. **Multi-file Prisma Schema Technique** — Schema আলাদা ফাইলে সাজানো।
6. **Prisma Migration & Client Generation** — Initial migration SQL ও client generation configuration আছে; database-এ migration apply হয়েছে কিনা যাচাই করা হয়নি।
7. **Server & App Setup, Demo API Check & DB Check** — Server, app ও `GET /` demo route আছে; startup DB check commented out।
8. **User Register Route** — `POST /api/users/register`।
9. **Route, Controller, Service Breakdown** — আলাদা route, controller ও service files।
10. **Controller Handles Request & Response** — Request নিয়ে service call ও response পাঠায়।
11. **Service Handles Business Logic & Database Queries/CRUD** — Duplicate email check, user/profile create ও fetch আছে; full CRUD নেই।
12. **Try-catch Block Inside Controller** — Registration controller-এ ব্যবহার করা হয়েছে।
13. **Controller Catches Errors with Try-catch** — Error হলে JSON response দেয়; বর্তমানে HTTP 500।
14. **Password Hashing** — bcryptjs দিয়ে password hash করা হয়।

## Packages

- **Backend:** Express, TypeScript, tsx
- **Database:** Prisma, @prisma/client, @prisma/adapter-pg, pg
- **Utilities:** bcryptjs, cors, cookie-parser, dotenv, http-status
- **Types:** @types/node, express, pg, cors, cookie-parser, jsonwebtoken
- **JWT:** jsonwebtoken installed; authentication flow এখনো করা হয়নি।

Tailwind বা frontend নেই।

## চালানোর নিয়ম

```bash
npm install
npm run dev
```

## GitHub branch

`module-20`
