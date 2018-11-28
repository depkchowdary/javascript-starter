export function getBaseUrl(){
    const isDevelopmentEnv = window.location.host === "localhost"
    return isDevelopmentEnv ? "http://localhost:3001" : "/";
}