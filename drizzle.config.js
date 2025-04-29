/** @type { import ("drizzle-kit").Config }*/
export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_6ZfnhdQ7JAVO@ep-frosty-cell-a5lzne6u-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
}