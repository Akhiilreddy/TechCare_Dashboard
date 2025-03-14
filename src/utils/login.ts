import "dotenv/config"

const username = `${process.env.USERNAME || ""}`;
const password = `${process.env.PASSWORD || ""}`;

export const credentials = btoa(`${username}:${password}`);